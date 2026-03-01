/* chatService.js */

const API_BASE = '/api/v1/chat';

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

export const chatService = {
    /**
     * Get all conversations for the authenticated user
     */
    getUserConversations: async () => {
        const response = await fetch(`${API_BASE}/conversations`, {
            method: 'GET',
            headers: getAuthHeaders(),
        });
        return handleResponse(response);
    },

    /**
     * Start a conversation for a listing
     * @param {string} listingId - UUID of the listing
     */
    createConversation: async (listingId) => {
        const response = await fetch(`${API_BASE}/conversations?listingId=${listingId}`, {
            method: 'POST',
            headers: getAuthHeaders(),
        });
        return handleResponse(response);
    },

    /**
     * Get messages of a conversation
     * @param {string} conversationId - UUID of the conversation
     */
    getMessages: async (conversationId) => {
        const response = await fetch(`${API_BASE}/conversations/${conversationId}/messages`, {
            method: 'GET',
            headers: getAuthHeaders(),
        });
        return handleResponse(response);
    },

    /**
     * Send a message in a conversation
     * @param {string} conversationId - UUID of the conversation
     * @param {string} text - Message content
     */
    sendMessage: async (conversationId, text) => {
        const payload = { text };
        const response = await fetch(`${API_BASE}/conversations/${conversationId}/messages`, {
            method: 'POST',
            headers: getAuthHeaders(),
            body: JSON.stringify(payload),
        });
        return handleResponse(response);
    }
};

export default chatService;
