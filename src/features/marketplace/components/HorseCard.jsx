import "./HorseCard.css";

export default function HorseCard({ name, image, location, price }) {
  return (
    <article className="horse-card">
      <img className="horse-card__img" src={image} alt={name} />

      <div className="horse-card__body">
        <div className="horse-card__top">
          <h3 className="horse-card__title">{name}</h3>
          <div className="horse-card__priceWrap">
            <span className="horse-card__price">${price}</span>
            <span className="horse-card__id">317</span>
          </div>
        </div>

        <p className="horse-card__location">{location}</p>
      </div>
    </article>
  );
}

