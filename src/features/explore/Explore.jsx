import React, { useState, useMemo, useEffect } from 'react';
import ExploreHeader from './components/ExploreHeader/ExploreHeader';
import DisciplineTabs from './components/DisciplineTabs/DisciplineTabs';
import FilterSidebar from './components/FilterSidebar/FilterSidebar';
import HorseGrid from './components/HorseGrid/HorseGrid';
import { exploreService } from './exploreService';
import { horseService } from '@features/horse-management/horseService';
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

    const [page, setPage] = useState(0);
    const [hasMore, setHasMore] = useState(true);

    const loadListings = async (pageNum, isInitial = false) => {
        try {
            if (isInitial) setLoading(true);
            // Pasamos el término de búsqueda como 'keyword' a la API, con tamaño 100
            const data = await exploreService.getListings(pageNum, 100, search);
            console.log(`Explore RAW data (page ${pageNum}):`, data);

            const content = data?.content || [];
            console.log(`Explore CONTENT (listings, page ${pageNum}):`, content);

            if (isInitial) {
                setHorses(content);
            } else {
                setHorses(prev => [...prev, ...content]);
            }

            // Si recibimos menos de 100 elementos, asumimos que no hay más
            if (content.length < 2000) {
                setHasMore(false);
            } else {
                setHasMore(true);
            }

            setLoading(false);
        } catch (err) {
            console.error("Error loading listings:", err);
            setError("No se pudieron cargar los caballos. Inténtalo de nuevo más tarde.");
            setLoading(false);
        }
    };

    useEffect(() => {
        loadListings(0, true);
        setPage(0);
    }, [activeTab, filters, search]); // Reiniciar cuando cambien los filtros o la búsqueda

    const handleLoadMore = () => {
        const nextPage = page + 1;
        setPage(nextPage);
        loadListings(nextPage);
    };



    const filtered = useMemo(() => {
        return horses.filter((listing) => {
            const h = listing.horse ?? listing;

            const breed = h.breed || '';
            const discipline = h.mainUse || h.discipline || '';

            const locText = typeof h.location === 'object'
                ? `${h.location?.city || ''} ${h.location?.region || ''} ${h.location?.country || ''}`.toLowerCase()
                : String(h.location || '').toLowerCase();

            const price = Number(listing.price) || 0;
            const trustScore = Number(h.trustScore) > 1 ? Number(h.trustScore) : (Number(h.trustScore) * 100);

            // Si la API no filtra por keyword, filtramos localmente como respaldo
            const searchLower = search.toLowerCase();
            const matchesSearch = !search ||
                h.name?.toLowerCase().includes(searchLower) ||
                h.horseName?.toLowerCase().includes(searchLower) ||
                breed.toLowerCase().includes(searchLower) ||
                discipline.toLowerCase().includes(searchLower);

            if (!matchesSearch) return false;

            if (activeTab !== 'Todos' && discipline !== activeTab) return false;
            if (verified && trustScore < 90) return false;
            if (premium && !listing.isVip) return false;

            if (filters.discipline && discipline !== filters.discipline) return false;
            if (filters.breed && breed !== filters.breed) return false;
            if (filters.location && !locText.includes(filters.location.toLowerCase())) return false;
            if (filters.priceMin && price < Number(filters.priceMin)) return false;
            if (filters.priceMax && price > Number(filters.priceMax)) return false;

            return true;
        });
    }, [horses, activeTab, verified, premium, filters]);

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

                    {loading && horses.length === 0 ? (
                        <div className="explore-loading">Cargando caballos...</div>
                    ) : error ? (
                        <div className="explore-error">{error}</div>
                    ) : (
                        <>
                            <HorseGrid horses={filtered} totalCount={filtered.length} />

                            {hasMore && (
                                <div className="explore-load-more">
                                    <button
                                        className="btn-load-more"
                                        onClick={handleLoadMore}
                                        disabled={loading}
                                    >
                                        {loading ? 'Cargando...' : 'Cargar más caballos'}
                                    </button>
                                </div>
                            )}
                        </>
                    )}
                </main>
            </div>
        </div>
    );
};

export default Explore;
