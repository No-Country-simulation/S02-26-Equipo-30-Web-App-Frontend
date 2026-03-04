import React from "react";
import "./CTASection.css";

const CTASection = () => {
    return (
        <section className="cta">
            <div className="cta-content">
                <h2>¿Eres vendedor y quieres listar en Premium?</h2>
                <p>
                    Obtén mayor visibilidad y conecta con compradores de alto nivel
                    dentro de nuestra colección exclusiva.
                </p>

                <button>Solicitar Acceso Premium</button>
            </div>
        </section>
    );
};

export default CTASection;