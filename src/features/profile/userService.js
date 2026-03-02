/* userService.js */

const API_BASE = '/api/v1/user';

const getAuthHeaders = () => {
    const token = localStorage.getItem('token');
    return {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
    };
};

const handleResponse = async (response) => {
    const contentType = response.headers.get('content-type');
    let data = null;

    if (contentType && contentType.includes('application/json')) {
        data = await response.json();
    } else {
        const text = await response.text();
        console.warn('Non-JSON response:', text);
    }

    if (!response.ok) {
        throw new Error(data?.message || `Error ${response.status}: ${response.statusText}`);
    }

    return data;
};

export const userService = {
    /**
     * Get the currently authenticated user's profile
     */
    getCurrentUser: async () => {
        const response = await fetch(`${API_BASE}/me`, {
            method: 'GET',
            headers: getAuthHeaders(),
        });
        return handleResponse(response);
    },

    /**
     * Update the currently authenticated user's profile
     * @param {Object} userData - User data to update (fullName, email)
     */
    updateCurrentUser: async (userData) => {
        const response = await fetch(`${API_BASE}/me`, {
            method: 'PUT',
            headers: getAuthHeaders(),
            body: JSON.stringify(userData),
        });
        return handleResponse(response);
    }
};

export default userService;
