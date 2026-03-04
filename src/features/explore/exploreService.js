import apiClient from '@shared/api/apiClient';

const API_BASE = '/api/v1/listings/explore';

export const exploreService = {
    getListings: async (page = 0, size = 100, keyword = '') => {
        let url = `${API_BASE}?page=${page}&size=${size}`;
        if (keyword) {
            const encoded = encodeURIComponent(keyword);
            url += `&keyword=${encoded}&search=${encoded}&q=${encoded}`;
        }
        return apiClient.get(url);
    },

    getListingById: async (id) => {
        return apiClient.get(`${API_BASE}/${id}`);
    },

    getListingByHorseId: async (horseId) => {
        // Asumiendo que el backend soporta horseId como query param en /explore
        // o que podemos usar el search genérico
        return apiClient.get(`${API_BASE}?horseId=${horseId}`);
    }
};

export default exploreService;
