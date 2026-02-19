import "./HorseCard.css";

export default function HorseCard(props) {
  // Soporta 2 formas:
  // 1) <HorseCard horse={horse} />
  // 2) <HorseCard {...horse} />
  const horse = props.horse ?? props;

  const {
    id = "",
    name = "Sin nombre",
    image = "https://via.placeholder.com/800x500",
    breed = "",
    age = "",
    height = "",
    discipline = "",
    location = "",
    price = "",
    trustScore = 0,
    isVip = false,
    isFeatured = false,
  } = horse;

  const safeTrust = Math.max(0, Math.min(100, Number(trustScore) || 0));

  return (
    <article className="horse-card">
      <div className="horse-card__media">
        <img className="horse-card__img" src={image} alt={name} />

        {(isVip || isFeatured) && (
          <div className="horse-card__badges">
            {isVip && <span className="badge badge--vip">VIP</span>}
            {isFeatured && <span className="badge badge--featured">Destacado</span>}
          </div>
        )}

        <button className="horse-card__play" type="button" aria-label="Play video">
          ▶
        </button>
      </div>

      <div className="horse-card__body">
        <div className="horse-card__top">
          <div>
            <h3 className="horse-card__title">{name}</h3>
            {breed && <p className="horse-card__breed">{breed}</p>}
          </div>

          <div className="horse-card__priceWrap">
            <span className="horse-card__price">${price}</span>
            {id !== "" && <span className="horse-card__id">{id}</span>}
          </div>
        </div>

        {(age || height || discipline) && (
          <div className="horse-card__meta">
            {age && <span className="horse-card__pill">{age}</span>}
            {height && <span className="horse-card__pill">{height}</span>}
            {discipline && <span className="horse-card__pill">{discipline}</span>}
          </div>
        )}

        {location && <p className="horse-card__location">{location}</p>}

        <div className="horse-card__trustRow">
          <span className="horse-card__trustLabel">Trust Score</span>
          <span className="horse-card__trustValue">{safeTrust}/100</span>
        </div>

        <div className="horse-card__progress">
          <div className="horse-card__progressFill" style={{ width: `${safeTrust}%` }} />
        </div>

        <p className="horse-card__quality">
          {safeTrust >= 90 ? "Excelente" : safeTrust >= 75 ? "Muy bueno" : "Bueno"}
        </p>
      </div>
    </article>
  );
}
