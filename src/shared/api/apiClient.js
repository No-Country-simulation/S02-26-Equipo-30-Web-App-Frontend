/**
 * apiClient.js
 * Centralized API client for handling authentication headers,
 * JSON parsing, and global error handling (including 403 retries).
 */

const getAuthHeaders = (isFormData = false) => {
    const token = localStorage.getItem('token');
    const headers = {
        'Accept': 'application/json',
    };

    if (!isFormData) {
        headers['Content-Type'] = 'application/json';
    }

    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }

    return headers;
};

const handleResponse = async (response) => {
    const contentType = response.headers.get('content-type');
    let data = null;

    if (contentType && contentType.includes('application/json')) {
        data = await response.json();
    }

    if (!response.ok) {
        const error = new Error(data?.message || `Error ${response.status}: ${response.statusText}`);
        error.status = response.status;
        error.data = data;
        throw error;
    }

    return data;
};

/**
 * Core fetch wrapper with auth and retry logic
 */
const request = async (url, options = {}) => {
    const isFormData = options.body instanceof FormData;
    const headers = {
        ...getAuthHeaders(isFormData),
        ...(options.headers || {}),
    };

    const config = {
        ...options,
        headers,
    };

    try {
        let response = await fetch(url, config);

        // Global 403/401 Retry Logic:
        // If it fails with auth, retry once WITHOUT auth for public access
        if ((response.status === 403 || response.status === 401) && headers['Authorization']) {
            console.warn(`API: ${response.status} detected. Retrying without Authorization...`);

            const publicHeaders = { ...headers };
            delete publicHeaders['Authorization'];

            const publicResponse = await fetch(url, {
                ...config,
                headers: publicHeaders,
            });

            return await handleResponse(publicResponse);
        }

        return await handleResponse(response);
    } catch (error) {
        console.error('API Request Error:', error);
        throw error;
    }
};

export const apiClient = {
    get: (url, options) => request(url, { ...options, method: 'GET' }),
    post: (url, body, options) => request(url, { ...options, method: 'POST', body }),
    put: (url, body, options) => request(url, { ...options, method: 'PUT', body }),
    delete: (url, options) => request(url, { ...options, method: 'DELETE' }),
};

export default apiClient;
