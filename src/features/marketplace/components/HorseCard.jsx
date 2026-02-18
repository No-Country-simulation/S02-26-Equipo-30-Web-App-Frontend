import "./HorseCard.css";

export default function HorseCard({ horse }) {
  const {
    id,
    name,
    image,
    breed,
    age,
    height,
    discipline,
    location,
    price,
    trustScore,
    isVip,
    isFeatured,
  } = horse;

  return (
    <article className="horse-card">
      <div className="horse-card__media">
        <img className="horse-card__img" src={image} alt={name} />

        <div className="horse-card__badges">
          {isVip && <span className="badge badge--vip">VIP</span>}
          {isFeatured && <span className="badge badge--featured">Destacado</span>}
        </div>

        <button className="horse-card__play" type="button" aria-label="Play video">
          ▶
        </button>
      </div>

      <div className="horse-card__body">
        <div className="horse-card__top">
          <div>
            <h3 className="horse-card__title">{name}</h3>
            <p className="horse-card__breed">{breed}</p>
          </div>

          <div className="horse-card__priceWrap">
            <span className="horse-card__price">${price}</span>
            <span className="horse-card__id">{id}</span>
          </div>
        </div>

        <div className="horse-card__meta">
          <span className="horse-card__pill">{age}</span>
          <span className="horse-card__pill">{height}</span>
          <span className="horse-card__pill">{discipline}</span>
        </div>

        <p className="horse-card__location">{location}</p>

        <div className="horse-card__trustRow">
          <span className="horse-card__trustLabel">Trust Score</span>
          <span className="horse-card__trustValue">{trustScore}/100</span>
        </div>

        <div className="horse-card__progress">
          <div
            className="horse-card__progressFill"
            style={{ width: `${trustScore}%` }}
          />
        </div>

        <p className="horse-card__quality">Excelente</p>
      </div>
    </article>
  );
}
