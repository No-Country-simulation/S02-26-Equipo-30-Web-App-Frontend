/* favoritesService.js */
import apiClient from '@shared/api/apiClient';

const API_BASE = '/api/v1/user/favorites';

export const favoritesService = {
    /**
     * Get all favorites for the currently authenticated user
     * @returns {Promise<Array>} List of favorite horses
     */
    getFavorites: async () => {
        const response = await apiClient.get(`${API_BASE}`);
        return response.data || response;
    },

    /**
     * Toggle a horse as favorite (Add/Remove)
     * @param {string} horseId - Horse UUID
     * @returns {Promise<Object>} API response
     */
    toggleFavorite: async (horseId) => {
        const response = await apiClient.post(`${API_BASE}/${horseId}`);
        return response.data || response;
    }
};

export default favoritesService;
