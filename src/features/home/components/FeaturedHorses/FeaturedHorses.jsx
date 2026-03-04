import { useState, useEffect } from 'react';
import HorseCard from '@shared/common/cards/HorseCard';
import { ArrowRight, Sparkles } from '@shared/branding/icons';
import Badge from '@components/badge/Badge';
import './FeaturedHorses.css';
import { Link } from 'react-router-dom';
import { exploreService } from '@features/explore/exploreService';

const FeaturedHorses = () => {
    const [horses, setHorses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchHorses = async () => {
            try {
                setLoading(true);
                // Fetch first 6 listings as featured horses
                const response = await exploreService.getListings(0, 6);
                setHorses(response.content || []);
            } catch (err) {
                console.error("Error fetching featured horses:", err);
                setError("No se pudieron cargar los caballos destacados.");
            } finally {
                setLoading(false);
            }
        };

        fetchHorses();
    }, []);

    if (loading) {
        return (
            <div className="featured-horses-loading">
                <Sparkles className="animate-spin" size={32} />
                <p>Cargando caballos destacados...</p>
            </div>
        );
    }

    return (
        <section className="featured-horses-section">
            <div className="section-container">
                <header className="featured-header">
                    <div className="header-left">
                        <Badge className="featured-badge">
                            DESTACADOS
                        </Badge>
                        <h2 className="featured-title">
                            Caballos que <br /> Marcan la Diferencia
                        </h2>
                    </div>
                    <div className="header-right">
                        <Link to="/explorar" className="view-all-btn">
                            Ver Todos <ArrowRight size={18} />
                        </Link>
                    </div>
                </header>

                <div className="featured-grid">
                    {horses.length > 0 ? (
                        horses.map(horse => (
                            <HorseCard key={horse.listingId || horse.id || Math.random()} {...horse} />
                        ))
                    ) : (
                        <p className="no-horses-msg">No hay caballos destacados disponibles en este momento.</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default FeaturedHorses;
