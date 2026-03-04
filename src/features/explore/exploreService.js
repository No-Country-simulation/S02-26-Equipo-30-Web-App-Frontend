import apiClient from '@shared/api/apiClient';

const API_BASE = '/api/v1/listings/explore';

export const exploreService = {
    getListings: async (page = 0, size = 10) => {
        return apiClient.get(`${API_BASE}?page=${page}&size=${size}`);
    }
};

export default exploreService;
