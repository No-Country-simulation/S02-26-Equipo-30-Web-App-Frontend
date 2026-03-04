/* horseService.js */
import apiClient from '@shared/api/apiClient';

const API_BASE = '/api/v1/horses';

export const horseService = {
    /**
     * Create a new horse listing
     * @param {Object} horseData - Horse data following the API schema
     */
    createHorse: async (horseData) => {
        return apiClient.post(`${API_BASE}`, horseData);
    },

    /**
     * Get all horses
     */
    getHorses: async () => {
        return apiClient.get(`${API_BASE}`);
    },

    /**
     * Update an existing horse listing
     * @param {string} id - Horse UUID
     * @param {Object} horseData - Updated horse data
     */
    updateHorse: async (id, horseData) => {
        return apiClient.put(`${API_BASE}/${id}`, horseData);
    },

    /**
     * Get horses listed by the currently authenticated user
     */
    getUserHorses: async () => {
        return apiClient.get(`${API_BASE}/me`);
    }
};

export default horseService;

