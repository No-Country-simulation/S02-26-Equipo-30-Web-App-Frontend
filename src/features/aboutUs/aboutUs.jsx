import "./AboutUs.css";

import Badge from "@components/badge/Badge";
import Btn from "@components/button/Btn";
import IconBtn from "@components/button/IconBtn";

import {
  Award,
  Heart,
  Sparkles,
  Shield,
  ArrowRight,
  Star,
  User,
  MapPin,
  Dollar,
  Support,
} from "@shared/branding/icons";

import { useNavigate } from "react-router-dom";

export default function AboutUs() {
  const navigate = useNavigate();

  const stats = [
    { value: "2021", label: "Año de Fundación" },
    { value: "15k+", label: "Usuarios Activos" },
    { value: "98.5%", label: "Satisfacción" },
  ];

  const team = [
    {
      name: "Laura Martínez",
      role: "CEO & Fundadora",
      desc: "Jinete profesional con 15 años de experiencia en salto. Campeona nacional 2019.",
      tags: ["Salto", "Liderazgo"],
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    },
    {
      name: "Dr. Carlos Ruiz",
      role: "Director Veterinario",
      desc: "Veterinario equino certificado con 20 años de experiencia. Especialista en medicina deportiva.",
      tags: ["Veterinaria", "Certificación"],
      img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    },
    {
      name: "Miguel Ángel Torres",
      role: "CTO & Co-fundador",
      desc: "Ingeniero de software con experiencia en fintech. Apasionado por la seguridad digital.",
      tags: ["Tecnología", "Seguridad"],
      img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    },
  ];

  const achievements = [
    { title: "Premio Innovación 2024", subtitle: "Mejor Startup Ecuestre", icon: <Star size={40} /> },
    { title: "Certificación ISO", subtitle: "Seguridad de Datos", icon: <Shield size={40} /> },
    { title: "Expansión Global", subtitle: "12 Países en 2025", icon: <MapPin size={40} /> },
    { title: "Comunidad", subtitle: "+15,000 Usuarios", icon: <User size={40} /> },
  ];

  const why = [
    {
      title: "Verificación Real, No Promesas",
      desc: "Cada caballo es examinado por veterinarios certificados independientes. No confiamos en la palabra del vendedor, verificamos todo personalmente.",
      icon: <Shield size={28} />,
    },
    {
      title: "Garantía de 30 Días",
      desc: "La única plataforma que ofrece devolución sin preguntas. Si no estás satisfecho, recuperas el 100% de tu inversión.",
      icon: <Heart size={28} />,
    },
    {
      title: "Soporte Especializado 24/7",
      desc: "No solo respondemos preguntas, te asesoramos. Nuestro equipo de expertos ecuestres está disponible en todo momento.",
      icon: <Support size={28} />,
    },
    {
      title: "Transparencia Total",
      desc: "Historial médico completo, videos sin editar, y puntuación de credibilidad del vendedor visible para todos.",
      icon: <Sparkles size={28} />,
    },
  ];

  return (
    <main className="about">
      {/* HERO */}
      <section className="about-hero">
        <div className="about-hero__inner">
          <div className="about-hero__badgeWrap">
            <Badge className="about-hero__badge">Nuestra Historia</Badge>
          </div>

          <h1 className="about-hero__title">
            Revolucionando el <span>Mercado Ecuestre</span>
          </h1>

          <p className="about-hero__subtitle">
            Fundada por jinetes, para jinetes. Nuestra misión es eliminar el riesgo y la incertidumbre
            en la compra y venta de caballos.
          </p>
        </div>
      </section>

      {/* MISSION / VISION / VALUES */}
      <section className="about-section">
        <div className="about-container">
          <div className="about-mvv">
            <article className="about-card">
              <div className="about-card__icon about-card__icon--gold">
                <Dollar size={28} />
              </div>
              <h3 className="about-card__title">Nuestra Misión</h3>
              <p className="about-card__text">
                Crear el marketplace de caballos más confiable del mundo, donde cada transacción esté
                respaldada por verificación profesional, transparencia total y garantías reales.
              </p>
            </article>

            <article className="about-card">
              <div className="about-card__icon about-card__icon--teal">
                <Sparkles size={28} />
              </div>
              <h3 className="about-card__title">Nuestra Visión</h3>
              <p className="about-card__text">
                Ser la plataforma #1 global para conectar a jinetes con sus compañeros perfectos,
                estableciendo nuevos estándares de confianza en la industria ecuestre.
              </p>
            </article>

            <article className="about-card">
              <div className="about-card__icon about-card__icon--gold">
                <Heart size={28} />
              </div>
              <h3 className="about-card__title">Nuestros Valores</h3>
              <p className="about-card__text">
                Integridad, transparencia y pasión ecuestre en cada decisión. El bienestar de los
                caballos y la satisfacción de nuestra comunidad son nuestra prioridad absoluta.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="about-section about-section--alt">
        <div className="about-container">
          <div className="about-story">
            <div className="about-story__copy">
              <p className="about-kicker">NUESTRA HISTORIA</p>
              <h2 className="about-h2">
                De un Problema Personal <span>a una Solución Global</span>
              </h2>

              <div className="about-story__text">
                <p>
                  En 2021, nuestra fundadora Laura Martínez perdió $45,000 en la compra de un caballo
                  de salto que resultó tener lesiones ocultas no reveladas por el vendedor. Esta
                  experiencia devastadora la impulsó a crear una solución.
                </p>
                <p>
                  Junto con un equipo de veterinarios, jinetes profesionales y expertos en tecnología,
                  desarrollamos HorseTrust: la primera plataforma que combina verificación veterinaria
                  certificada, evaluación de vendedores y garantías reales.
                </p>
                <p>
                  Hoy, más de 2,400 caballos verificados y 15,000 usuarios confían en nosotros para
                  las transacciones más importantes de sus vidas ecuestres.
                </p>
              </div>

              <div className="about-stats">
                {stats.map((s) => (
                  <div key={s.label} className="about-stat">
                    <div className="about-stat__value">{s.value}</div>
                    <div className="about-stat__label">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="about-story__media">
              <div className="about-photo">
                <img
                  src="https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
                  alt="HorseTrust Team"
                  loading="lazy"
                />
              </div>

              <div className="about-floating">
                <div className="about-floating__icon">
                  <Award size={20} />
                </div>
                <div>
                  <div className="about-floating__title">Premio 2024</div>
                  <div className="about-floating__sub">Mejor Innovación</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="about-section">
        <div className="about-container">
          <div className="about-head">
            <p className="about-kicker about-kicker--gold">NUESTRO EQUIPO</p>
            <h2 className="about-h2">
              Liderados por Expertos <span>en Equitación</span>
            </h2>
            <p className="about-sub">
              Un equipo multidisciplinario apasionado por la excelencia ecuestre
            </p>
          </div>

          <div className="about-team">
            {team.map((m) => (
              <article key={m.name} className="about-teamCard">
                <div className="about-teamCard__img">
                  <img src={m.img} alt={m.name} loading="lazy" />
                </div>
                <div className="about-teamCard__body">
                  <h3 className="about-teamCard__name">{m.name}</h3>
                  <div className="about-teamCard__role">{m.role}</div>
                  <p className="about-teamCard__desc">{m.desc}</p>
                  <div className="about-tags">
                    {m.tags.map((t) => (
                      <span key={t} className="about-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="about-achievements">
        <div className="about-container">
          <div className="about-achHead">
            <h2 className="about-achTitle">Nuestros Logros</h2>
            <p className="about-achSub">Reconocimientos que avalan nuestra excelencia</p>
          </div>

          <div className="about-achGrid">
            {achievements.map((a) => (
              <article key={a.title} className="about-achCard">
                <div className="about-achIcon">{a.icon}</div>
                <h4 className="about-achCard__title">{a.title}</h4>
                <p className="about-achCard__sub">{a.subtitle}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="about-section about-section--alt">
        <div className="about-container">
          <div className="about-head">
            <p className="about-kicker about-kicker--gold">POR QUÉ ELEGIRNOS</p>
            <h2 className="about-h2">Lo que nos Hace Diferentes</h2>
          </div>

          <div className="about-why">
            {why.map((w) => (
              <article key={w.title} className="about-whyCard">
                <div className="about-whyCard__icon">{w.icon}</div>
                <div>
                  <h3 className="about-whyCard__title">{w.title}</h3>
                  <p className="about-whyCard__desc">{w.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-section">
        <div className="about-container">
          <div className="about-cta">
            <h2 className="about-cta__title">Únete a Nuestra Comunidad</h2>
            <p className="about-cta__text">
              Miles de jinetes ya confían en HorseTrust para sus decisiones más importantes
            </p>

            <div className="about-cta__actions">
              <Btn
                className="about-btn about-btn--primary"
                onClick={() => navigate("/explorar")}
              >
                Explorar Caballos <ArrowRight size={18} />
              </Btn>

              <IconBtn
                className="about-btn about-btn--outline"
                icon={<User size={18} />}
                onClick={() => navigate("/contacto")}
              >
                Contáctanos
              </IconBtn>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}