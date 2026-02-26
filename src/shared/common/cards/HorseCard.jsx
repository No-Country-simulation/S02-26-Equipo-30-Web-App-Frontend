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
        tags = [],
        location = "",
        price = "",
        trustScore = 0,
        isVip = false,
        isFeatured = false,
    } = horse;

    // 1) Si viene tags, úsalo. Si no, construye tags desde age/height/discipline
    const pills =
        Array.isArray(tags) && tags.length > 0
            ? tags
            : [age, height, discipline].filter(Boolean);



    const safeTrust = Math.max(0, Math.min(100, Number(trustScore) || 0));

    const getTrustMeta = (score) => {
        if (score >= 90) return { level: "excellent", label: "Excelente" };
        if (score >= 75) return { level: "good", label: "Muy bueno" };
        if (score >= 55) return { level: "fair", label: "Bueno" };
        return { level: "poor", label: "Mejorable" };
    };

    const trust = getTrustMeta(safeTrust);

    return (
        <article className="horse-card">
            <div className="horse-card__media">
                <img
                    className="horse-card__img"
                    src={image || "https://via.placeholder.com/800x500"}
                    alt={name}
                />

                {(isVip || isFeatured) && (
                    <div className="horse-card__badges">
                        {isVip && <span className="badge badge--vip">VIP</span>}
                        {isFeatured && (
                            <span className="badge badge--featured">Destacado</span>
                        )}
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
                        {price && (
                            <span className="horse-card__price">${price}</span>
                        )}
                        {id !== "" && <span className="horse-card__id">{id}</span>}
                    </div>
                </div>

                {pills.length > 0 && (
                    <div className="horse-card__meta">
                        {pills.map((t, i) => (
                            <span key={`${id}-${i}`} className="horse-card__pill">
                                {t}
                            </span>
                        ))}
                    </div>
                )}

                {location && <p className="horse-card__location">{location}</p>}

                <hr className="horse-card__divider" />

                <div className="horse-card__trustRow">
                    <span className="horse-card__trustLabel">Trust Score</span>
                    <span className="horse-card__trustValue">{safeTrust}/100</span>
                </div>

                <div className="horse-card__progress">
                    <div
                        className={`horse-card__progressFill horse-card__progressFill--${trust.level}`}
                        style={{ width: `${safeTrust}%` }}
                    />
                </div>

                <p className={`horse-card__quality horse-card__quality--${trust.level}`}>
                    {trust.label}
                </p>
            </div>
        </article>
    );
}