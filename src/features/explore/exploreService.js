const API_BASE = '/api/v1/listings';

const handleResponse = async (response) => {
    const contentType = response.headers.get('content-type');
    let data = null;

    if (contentType && contentType.includes('application/json')) {
        data = await response.json();
    }

    if (!response.ok) {
        throw new Error(data?.message || `Error ${response.status}: ${response.statusText}`);
    }

    return data;
};

const getAuthHeaders = () => {
    const token = localStorage.getItem('token');
    const headers = {
        'Accept': 'application/json',
    };
    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }
    return headers;
};

export const exploreService = {
    getListings: async (page = 0, size = 10) => {
        const response = await fetch(`${API_BASE}?page=${page}&size=${size}`, {
            method: 'GET',
            headers: getAuthHeaders(),
        });
        return handleResponse(response);
    }
};

export default exploreService;
