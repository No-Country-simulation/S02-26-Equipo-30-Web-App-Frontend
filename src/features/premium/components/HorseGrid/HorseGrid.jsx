import React from "react";
import horses from "../../db/horses.js";
import "./HorseGrid.css";
import HorseCard from "@/shared/common/cards/HorseCard";



const HorseGrid = () => {
    return (
        <section className="horse-grid">
            <h2>Caballos Disponibles en Colección VIP</h2>
            <div className="grid">
                {horses.map((horse) => (
                    <HorseCard key={horse.id} horse={horse} />
                ))}
            </div>
        </section>
    );
};

export default HorseGrid;