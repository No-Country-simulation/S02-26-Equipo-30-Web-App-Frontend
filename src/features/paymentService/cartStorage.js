export const getCart = () => {
    const cart = localStorage.getItem("horseCart");
    return cart ? JSON.parse(cart) : [];
};

export const addToCart = (horse) => {
    const cart = getCart();
    cart.push(horse);
    localStorage.setItem("horseCart", JSON.stringify(cart));
};

export const removeFromCart = (id) => {
    const cart = getCart().filter(h => h.id !== id);
    localStorage.setItem("horseCart", JSON.stringify(cart));
};

export const clearCart = () => {
    localStorage.removeItem("horseCart");
};