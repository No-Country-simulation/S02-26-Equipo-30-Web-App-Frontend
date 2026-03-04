import React from "react";
import "./StatsBar.css";

const StatsBar = () => {
    return (
        <section className="stats">
            <div className="stat">
                <h3>40</h3>
                <p>Caballos</p>
            </div>
            <div className="stat">
                <h3>100%</h3>
                <p>Verificados</p>
            </div>
            <div className="stat">
                <h3>93+</h3>
                <p>Ventas</p>
            </div>
            <div className="stat">
                <h3>90</h3>
                <p>Clientes felices</p>
            </div>
        </section>
    );
};

export default StatsBar;