import HorseCard from "./HorseCard";

export default function Marketplace() {
  return (
    <div style={{ padding: 16, maxWidth: 360 }}>
      <h2>Marketplace</h2>

      <HorseCard
        name="Crimson Glory"
        image="https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=1200&q=60"
        location="Saratoga Springs, NY"
        price={78}
      />
    </div>
  );
}
