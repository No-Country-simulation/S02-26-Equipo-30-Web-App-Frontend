import { useEffect, useState } from "react";
import {
    getCart,
    removeFromCart,
    clearCart
} from "./cartStorage";

export default function PaymentPage() {

    const [cart, setCart] = useState([]);

    useEffect(() => {
        setCart(getCart());
    }, []);

    const handleRemove = (id) => {
        removeFromCart(id);
        setCart(getCart());
    };

    const total = cart.reduce(
        (sum, horse) => sum + horse.askingPriceUsd,
        0
    );

    return (
        <div style={{ padding: 40 }}>

            <h1>Your Cart</h1>

            {cart.length === 0 && <p>No horses selected.</p>}

            {cart.map(horse => (
                <div
                    key={horse.id}
                    style={{
                        border: "1px solid gray",
                        padding: 15,
                        marginBottom: 10
                    }}
                >
                    <h3>{horse.name}</h3>
                    <p>Price: ${horse.askingPriceUsd}</p>

                    <button onClick={() => handleRemove(horse.id)}>
                        Remove
                    </button>
                </div>
            ))}

            <hr />

            <h2>Total: ${total}</h2>

            {cart.length > 0 && (
                <button>
                    Proceed to Payment
                </button>
            )}

        </div>
    );
}