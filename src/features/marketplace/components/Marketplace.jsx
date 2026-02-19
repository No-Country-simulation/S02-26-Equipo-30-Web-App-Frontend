import HorseCard from "@shared/common/cards/HorseCard";
import "./Marketplace.css";

export default function Marketplace() {
  const horses = [
    {
      id: 317,
      name: "Midnight Star",
      image:
        "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=1200&q=60",
      breed: "Quarter Horse",
      age: "9 years",
      height: "15.1 hh",
      discipline: "Hunter",
      location: "Parker, CO",
      price: "66,022",
      trustScore: 95,
      isVip: true,
      isFeatured: true,
    },
    {
      id: 451,
      name: "Royal Symphony",
      image:
        "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=1200&q=60",
      breed: "Thoroughbred",
      age: "8 years",
      height: "16.1 hh",
      discipline: "Western",
      location: "Greenville, SC",
      price: "72,000",
      trustScore: 93,
      isVip: true,
      isFeatured: true,
    },
  ];

  return (
    <div className="marketplace">
      <div className="marketplace__grid">
        {horses.map((horse) => (
          <HorseCard key={horse.id} horse={horse} />
        ))}
      </div>
    </div>
  );
}

