import HorseCard from "./components/HorseCard";

export default function Marketplace() {
  return (
    <div style={{ padding: 16, maxWidth: 360 }}>
      <HorseCard
        name="Thunder Strike"
        image="https://via.placeholder.com/600x400"
        location="Sevilla"
        price={6700}
      />
    </div>
  );
}
