/* horseService.js */

const API_BASE = '/api/v1/horses';

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

export const horseService = {
    /**
     * Create a new horse listing
     * @param {Object} horseData - Horse data following the API schema
     */
    createHorse: async (horseData) => {
        const response = await fetch(`${API_BASE}`, {
            method: 'POST',
            headers: getAuthHeaders(),
            body: JSON.stringify(horseData),
        });
        return handleResponse(response);
    },

    /**
     * Get all horses
     */
    getHorses: async () => {
        const response = await fetch(`${API_BASE}`, {
            method: 'GET',
            headers: getAuthHeaders(),
        });
        return handleResponse(response);
    },

    /**
     * Update an existing horse listing
     * @param {string} id - Horse UUID
     * @param {Object} horseData - Updated horse data
     */
    updateHorse: async (id, horseData) => {
        const response = await fetch(`${API_BASE}/${id}`, {
            method: 'PUT', // Assuming PUT for updates
            headers: getAuthHeaders(),
            body: JSON.stringify(horseData),
        });
        return handleResponse(response);
    },

    /**
     * Get horses listed by the currently authenticated user
     */
    getUserHorses: async () => {
        const response = await fetch(`${API_BASE}/me`, {
            method: 'GET',
            headers: getAuthHeaders(),
        });
        return handleResponse(response);
    }
};

export default horseService;
