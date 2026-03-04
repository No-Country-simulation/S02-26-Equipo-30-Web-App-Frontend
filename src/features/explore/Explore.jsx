import React, { useState, useMemo, useEffect } from 'react';
import ExploreHeader from './components/ExploreHeader/ExploreHeader';
import DisciplineTabs from './components/DisciplineTabs/DisciplineTabs';
import FilterSidebar from './components/FilterSidebar/FilterSidebar';
import HorseGrid from './components/HorseGrid/HorseGrid';
import { exploreService } from './exploreService';
import './Explore.css';

const Explore = () => {
    const [horses, setHorses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState('');
    const [activeTab, setActiveTab] = useState('Todos');
    const [verified, setVerified] = useState(false);
    const [premium, setPremium] = useState(false);
    const [filters, setFilters] = useState({
        discipline: '',
        breed: '',
        location: '',
        priceMin: '',
        priceMax: '',
    });

    useEffect(() => {
        const loadListings = async () => {
            try {
                setLoading(true);
                const data = await exploreService.getListings();
                // La API devuelve un objeto con 'content' que es el array de caballos
                setHorses(data?.content || []);
                setLoading(false);
            } catch (err) {
                console.error("Error loading listings:", err);
                setError("No se pudieron cargar los caballos. Inténtalo de nuevo más tarde.");
                setLoading(false);
            }
        };

        loadListings();
    }, []);

    const filtered = useMemo(() => {
        return horses.filter((h) => {
            // Manejo robusto de campos que podrían no venir de la API
            const name = h.name || h.ownerName || 'Caballo Sin Nombre';
            const breed = h.breed || '';
            const discipline = h.discipline || '';
            const location = h.location || '';
            const price = Number(h.price) || 0;
            const trustScore = Number(h.trustScore) || 0;

            if (search && !name.toLowerCase().includes(search.toLowerCase()) &&
                !breed.toLowerCase().includes(search.toLowerCase()) &&
                !discipline.toLowerCase().includes(search.toLowerCase())) return false;

            if (activeTab !== 'Todos' && discipline !== activeTab) return false;
            if (verified && trustScore < 90) return false;
            if (premium && !h.isVip) return false;

            if (filters.discipline && discipline !== filters.discipline) return false;
            if (filters.breed && breed !== filters.breed) return false;
            if (filters.location && !location.toLowerCase().includes(filters.location.toLowerCase())) return false;
            if (filters.priceMin && price < Number(filters.priceMin)) return false;
            if (filters.priceMax && price > Number(filters.priceMax)) return false;

            return true;
        });
    }, [horses, search, activeTab, verified, premium, filters]);

    return (
        <div className="explore-page">
            <ExploreHeader searchValue={search} onSearchChange={setSearch} />
            <div className="explore-body">
                <FilterSidebar filters={filters} onFilterChange={setFilters} />
                <main className="explore-main">
                    <DisciplineTabs
                        activeTab={activeTab}
                        onTabChange={setActiveTab}
                        verified={verified}
                        onVerifiedChange={setVerified}
                        premium={premium}
                        onPremiumChange={setPremium}
                    />

                    {loading ? (
                        <div className="explore-loading">Cargando caballos...</div>
                    ) : error ? (
                        <div className="explore-error">{error}</div>
                    ) : (
                        <HorseGrid horses={filtered} totalCount={filtered.length} />
                    )}
                </main>
            </div>
        </div>
    );
};

export default Explore;
