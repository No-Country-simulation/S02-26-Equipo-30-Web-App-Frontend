import React, { useState, useMemo } from 'react';
import ExploreHeader from './components/ExploreHeader/ExploreHeader';
import DisciplineTabs from './components/DisciplineTabs/DisciplineTabs';
import FilterSidebar from './components/FilterSidebar/FilterSidebar';
import HorseGrid from './components/HorseGrid/HorseGrid';
import './Explore.css';

const ALL_HORSES = [
    { id: 1, name: 'Bright Future', price: 25513, breed: 'Morgan', tags: ['11 years', '12.1 hh', 'Endurance'], location: 'San Diego, CA', trustScore: 83, isVip: false, discipline: 'Endurance', image: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?q=80&w=800&auto=format&fit=crop' },
    { id: 2, name: 'Copper Sunset', price: 67552, breed: 'Trakehner', tags: ['11 years', '16.3 hh', 'Dressage'], location: 'Middleburg, VA', trustScore: 94, isVip: false, discipline: 'Dressage', image: 'https://images.unsplash.com/photo-1518467166778-b8c6b252b19a?q=80&w=800&auto=format&fit=crop' },
    { id: 3, name: 'Jade Dragon', price: 37538, breed: 'Dutch Warmblood', tags: ['14 years', '16.0 hh', 'Cutting'], location: 'Middleburg, VA', trustScore: 73, isVip: false, discipline: 'Cutting', image: 'https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?q=80&w=800&auto=format&fit=crop' },
    { id: 4, name: 'Fresh Start', price: 47336, breed: 'Morgan', tags: ['12 years', '16.0 hh', 'Barrel Racing'], location: 'Lexington, KY', trustScore: 85, isVip: false, discipline: 'Barrel Racing', image: 'https://images.unsplash.com/photo-1534070348795-40a2322a303a?q=80&w=800&auto=format&fit=crop' },
    { id: 5, name: 'Fantastic Voyage', price: 38345, breed: 'Palomino', tags: ['8 years', '15.1 hh', 'Barrel Racing'], location: 'Nashville, TN', trustScore: 96, isVip: false, discipline: 'Barrel Racing', image: 'https://images.unsplash.com/photo-1598974357801-cbca100e65d3?q=80&w=800&auto=format&fit=crop' },
    { id: 6, name: 'Breath Heaving', price: 31334, breed: 'Morgan', tags: ['14 years', '16.1 hh', 'Show Jumping'], location: 'Middleburg, VA', trustScore: 71, isVip: false, discipline: 'Endurance', image: 'https://images.unsplash.com/photo-1520108930432-8cf3bb519280?q=80&w=800&auto=format&fit=crop' },
    { id: 7, name: 'Midnight Star', price: 53778, breed: 'Andalusian', tags: ['11 years', '18.0 hh', 'Hunter'], location: 'Aiken, SC', trustScore: 94, isVip: true, discipline: 'Endurance', image: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?q=80&w=800&auto=format&fit=crop' },
    { id: 8, name: 'Royal Symphony', price: 79286, breed: 'Trakehner', tags: ['8 years', '16.2 hh', 'Show Jumping'], location: 'Charleston, SC', trustScore: 94, isVip: true, discipline: 'Dressage', image: 'https://images.unsplash.com/photo-1598974357801-cbca100e65d3?q=80&w=800&auto=format&fit=crop' },
    { id: 9, name: 'Silver Cloud', price: 67369, breed: 'Dutch Warmblood', tags: ['4 years', '17.0 hh', 'Cutting'], location: 'Saratoga Springs, NY', trustScore: 95, isVip: true, discipline: 'Cutting', image: 'https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?q=80&w=800&auto=format&fit=crop' },
    { id: 10, name: 'Golden Promise', price: 81501, breed: 'Arabian', tags: ['7 years', '15.1 hh', 'Dressage'], location: 'Lexington, KY', trustScore: 93, isVip: true, discipline: 'Dressage', image: 'https://images.unsplash.com/photo-1534070348795-40a2322a303a?q=80&w=800&auto=format&fit=crop' },
    { id: 11, name: 'Eclipse', price: 53027, breed: 'Westphalian', tags: ['6 years', '17.2 hh', 'Endurance'], location: 'Charleston, SC', trustScore: 96, isVip: true, discipline: 'Endurance', image: 'https://images.unsplash.com/photo-1520108930432-8cf3bb519280?q=80&w=800&auto=format&fit=crop' },
    { id: 12, name: 'Desert Wind', price: 44200, breed: 'Arabian', tags: ['9 years', '15.3 hh', 'Barrel Racing'], location: 'Scottsdale, AZ', trustScore: 88, isVip: false, discipline: 'Barrel Racing', image: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?q=80&w=800&auto=format&fit=crop' },
];

const Explore = () => {
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

    const filtered = useMemo(() => {
        return ALL_HORSES.filter((h) => {
            if (search && !h.name.toLowerCase().includes(search.toLowerCase()) &&
                !h.breed.toLowerCase().includes(search.toLowerCase()) &&
                !h.discipline.toLowerCase().includes(search.toLowerCase())) return false;
            if (activeTab !== 'Todos' && h.discipline !== activeTab) return false;
            if (verified && h.trustScore < 90) return false;
            if (premium && !h.isVip) return false;
            if (filters.discipline && h.discipline !== filters.discipline) return false;
            if (filters.breed && h.breed !== filters.breed) return false;
            if (filters.location && !h.location.toLowerCase().includes(filters.location.toLowerCase())) return false;
            if (filters.priceMin && h.price < Number(filters.priceMin)) return false;
            if (filters.priceMax && h.price > Number(filters.priceMax)) return false;
            return true;
        });
    }, [search, activeTab, verified, premium, filters]);

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
                    <HorseGrid horses={filtered} totalCount={filtered.length} />
                </main>
            </div>
        </div>
    );
};

export default Explore;
