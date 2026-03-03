import React, { useMemo, useState } from "react";
import "./HorseDetails.css";
import Btn from "@/shared/common/button/Btn";
import HorseProfile from "./components/horseProfile/HorseProfile";
import { useNavigate, useParams, Link } from "react-router-dom";
import { Heart, Message } from "@shared/branding/icons";
import HorseActionsMenu from "@shared/common/HorseActionsMenu/HorseActionsMenu";


const FALLBACK_HORSE = {
  id: "1",
  name: "Golden Promise",
  breed: "Selle Français",
  price: 60249,
  image: "https://picsum.photos/1400/1000?random=horse",
  verified: true,
  vetValidated: true,
  sellerScore: 94,
  age: "8 years",
  gender: "Gelding",
  height: "18.1 hh",
  color: "Grey",
  discipline: "Barrel Racing",
  location: "Wellington, FL",
  description: "Amateur-friendly gelding perfect for dedicated rider.",
  temperament: "Forward, sensitive, talented",
  trainingLevel: "First Level",
  // extras como el make:
  competition: "Regional competitions (2022–2024)",
  sellerName: "Blue Meadow Stables",
  // data bloqueada (simulación)
  vetRecords: [
    {
      type: "Pre-purchase Exam",
      status: "Excellent",
      date: "2025-01-14",
      veterinarian: "Dr. Samantha Lee",
      findings: "No issues detected. Clean flexion tests.",
    },
    {
      type: "Dental Check",
      status: "Good",
      date: "2024-10-02",
      veterinarian: "Dr. Samantha Lee",
      findings: "Routine floating completed. Mild hooks corrected.",
    },
  ],
  performanceVideos: ["video-1", "video-2"],
  fullHistory:
    "Golden Promise has been in consistent training with a single program for 3 years. No gaps in care. Regular farrier schedule and preventive maintenance.",
};

export default function HorseDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isSaved, setIsSaved] = useState(false);


  const isAuthenticated = false;
  const isOwner = true; // luego: user?.id === horse.ownerId

  //  sustituir por fetch / mockHorses.find(...)
  const horse = useMemo(() => {
    return { ...FALLBACK_HORSE, id: id || FALLBACK_HORSE.id };
  }, [id]);

  if (!horse) {
    return (
      <main className="hd">
        <div className="hd__center">
          <div className="hd__notFound">
            <h2 className="hd__notFoundTitle">Horse not found</h2>
            <Link to="/" className="hd__notFoundLink">
              Return to listings
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const handlePurchaseIntent = () => {
    if (!isAuthenticated) navigate("/auth");
    else navigate(`/purchase/${horse.id}/step-1`);
  };

  return (
    <main className="hd">
      <div className="hd__container">
        {/* TOP: Gallery + Main Info */}
        <section className="hd__topGrid">
          {/* Image Gallery */}
            <div className="hd__media">
            <HorseActionsMenu
                canEdit={isOwner}
                canDelete={isOwner}
                onView={() => console.log("Ver")}
                onEdit={() => navigate(`/horses/${horse.id}/edit`)}
                onDelete={() => {
                const ok = window.confirm("¿Seguro que quieres eliminar este caballo?");
                if (ok) console.log("Eliminar confirmado");
                }}
            />

            <div className="hd__mediaInner">
                <img className="hd__img" src={horse.image} alt={horse.name} />

                <button
                type="button"
                className={`hd__fav ${isSaved ? "is-saved" : ""}`}
                onClick={() => setIsSaved((s) => !s)}
                aria-label="Save horse"
                >
                <Heart size={20} />
                </button>
            </div>
            </div>

          {/* Main Info */}
          <div className="hd__info">
            <div className="hd__titleBlock">
              <h1 className="hd__title">{horse.name}</h1>
              <p className="hd__subtitle">{horse.breed}</p>
            </div>

            <div className="hd__price">${Number(horse.price).toLocaleString()}</div>

            <div className="hd__detailsGrid">
              <div className="hd__kv">
                <p className="hd__label">Age</p>
                <p className="hd__value">{horse.age}</p>
              </div>
              <div className="hd__kv">
                <p className="hd__label">Gender</p>
                <p className="hd__value">{horse.gender}</p>
              </div>
              <div className="hd__kv">
                <p className="hd__label">Height</p>
                <p className="hd__value">{horse.height}</p>
              </div>
              <div className="hd__kv">
                <p className="hd__label">Color</p>
                <p className="hd__value">{horse.color}</p>
              </div>
              <div className="hd__kv">
                <p className="hd__label">Discipline</p>
                <p className="hd__value">{horse.discipline}</p>
              </div>
              <div className="hd__kv">
                <p className="hd__label">Location</p>
                <p className="hd__value">{horse.location}</p>
              </div>
            </div>

            <div className="hd__divider" />

            <section className="hd__desc">
              <h3 className="hd__h3">Description</h3>
              <p className="hd__p">{horse.description}</p>
            </section>

            <div className="hd__extraGrid">
              <div className="hd__kv">
                <p className="hd__label">Temperament</p>
                <p className="hd__value">{horse.temperament}</p>
              </div>
              <div className="hd__kv">
                <p className="hd__label">Training Level</p>
                <p className="hd__value">{horse.trainingLevel}</p>
              </div>
            </div>

            {horse.competition && (
              <div className="hd__competition">
                <p className="hd__label">Competition Experience</p>
                <p className="hd__value">{horse.competition}</p>
              </div>
            )}

            <div className="hd__actions">
                <Btn className="hd-btn hd-btn--outline" onClick={() => navigate("/chat")}>
                    <span className="hd-btn__inner">
                    <span className="hd-btn__icon">
                        <Message size={18} />
                    </span>
                    <span className="hd-btn__text">Chatear con el vendedor</span>
                    </span>
                </Btn>

                <Btn className="hd-btn hd-btn--gold" onClick={handlePurchaseIntent}>
                    <span className="hd-btn__inner">
                    <span className="hd-btn__text">Express Purchase Interest</span>
                    </span>
                </Btn>
                </div>
          </div>
        </section>

        {/* Tu contenido existente abajo */}
        <section className="hd__bottom">
          <HorseProfile />
        </section>
      </div>
    </main>
  );
}