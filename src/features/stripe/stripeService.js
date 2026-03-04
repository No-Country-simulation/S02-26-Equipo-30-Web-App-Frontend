import apiClient from '@shared/api/apiClient';

const API_BASE = '/stripe';

export const stripeService = {
    /**
     * Create a checkout session
     * @param {string[]} listingIds - Array of listing UUIDs
     * @returns {Promise<{url: string}>} - Should return a session object containing the URL
     */
    createCheckoutSession: async (listingIds) => {
        return apiClient.post(`${API_BASE}/checkout`, JSON.stringify({ listingIds }));
    },

    /**
     * Get listings for stripe checkout (for reference/verification)
     */
    getCheckoutListings: async () => {
        return apiClient.get(`${API_BASE}/checkout/listings`);
    }
};

export default stripeService;
