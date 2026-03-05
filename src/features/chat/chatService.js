/* chatService.js */
import apiClient from '@shared/api/apiClient';

const API_BASE = '/api/v1/chat';

export const chatService = {
    /**
     * Get all conversations for the authenticated user
     */
    getUserConversations: async () => {
        return apiClient.get(`${API_BASE}/conversations`);
    },

    /**
     * Start a conversation for a listing
     * @param {string} listingId - UUID of the listing
     */
    createConversation: async (listingId) => {
        return apiClient.post(`${API_BASE}/conversations?listingId=${listingId}`);
    },

    /**
     * Get messages of a conversation
     * @param {string} conversationId - UUID of the conversation
     */
    getMessages: async (conversationId) => {
        return apiClient.get(`${API_BASE}/conversations/${conversationId}/messages`);
    },

    /**
     * Send a message in a conversation
     * @param {string} conversationId - UUID of the conversation
     * @param {string} text - Message content
     */
    sendMessage: async (conversationId, text) => {
        const payload = { text };
        return apiClient.post(`${API_BASE}/conversations/${conversationId}/messages`, payload);
    },

    /**
     * Mark a message as read
     * @param {string} messageId - UUID of the message
     */
    markAsRead: async (messageId) => {
        return apiClient.patch(`${API_BASE}/messages/${messageId}/read`);
    }
};

export default chatService;
