import "./Pricing.css";

import Badge from "@components/badge/Badge";
import Btn from "@components/button/Btn";
import { Link } from "react-router-dom";

import {
  Star,
  Crown,
  Sparkles,
  ArrowRight,
  Check,
} from "@shared/branding/icons";

export default function Pricing() {
  const plans = [
    {
      tone: "base",
      title: "Básico",
      subtitle: "Perfecto para empezar a vender",
      price: "Gratis",
      priceNote: "3% comisión por venta exitosa",
      cta: "Comenzar Gratis",
      ctaTo: "/registro",
      icon: <Star size={26} />,
      featuresTitle: "INCLUYE:",
      features: [
        "Hasta 3 anuncios activos",
        "Hasta 10 fotos por anuncio",
        "Verificación veterinaria básica",
        "Estadísticas básicas",
        "Soporte por email",
        "Aparición en búsqueda estándar",
      ],
    },
    {
      tone: "gold",
      badge: "Más Popular",
      title: "Premium",
      subtitle: "Para vendedores serios",
      price: "€49",
      priceSuffix: "/mes",
      priceNote: "+ 1.5% comisión por venta",
      highlight: "Primer mes GRATIS",
      cta: "Empezar Prueba Gratis",
      ctaTo: "/registro",
      icon: <Star size={26} />,
      featuresTitle: "TODO EN BÁSICO, MÁS:",
      features: [
        "Anuncios ilimitados",
        "Hasta 20 fotos HD por anuncio",
        "Videos de rendimiento (hasta 5)",
        "Verificación veterinaria completa",
        "Destacado en resultados",
        "Estadísticas avanzadas en tiempo real",
        'Badge "Vendedor Premium"',
        "Soporte prioritario 24/7",
        "Promoción en redes sociales",
      ],
      emphasize: [0, 4],
    },
    {
      tone: "vip",
      title: "VIP Elite",
      subtitle: "Máxima exposición y ventas",
      price: "€149",
      priceSuffix: "/mes",
      priceNote: "+ 0.5% comisión por venta",
      highlight: "Primer mes GRATIS",
      cta: "Empezar VIP Gratis",
      ctaTo: "/registro",
      icon: <Crown size={26} />,
      featuresTitle: "TODO EN PREMIUM, MÁS:",
      features: [
        "Posicionamiento TOP garantizado",
        "Sesión fotográfica profesional incluida",
        "Videos profesionales ilimitados",
        "Campaña de marketing dedicada",
        "Featured en página principal",
        "Newsletter semanal a 15k+ suscriptores",
        "Account manager personal dedicado",
        "Soporte VIP con línea directa",
        "Garantía de venta en 30 días",
      ],
      emphasize: [0, 4],
    },
  ];

  const comparison = [
    ["Anuncios activos", "3", "Ilimitados", "Ilimitados"],
    ["Fotos por anuncio", "10", "20 HD", "20 HD Profesional"],
    ["Videos", "—", "Hasta 5", "Ilimitados Pro"],
    ["Verificación veterinaria", "check", "check", "check"],
    ["Destacado en resultados", "—", "checkGold", "checkGold"],
    ["Featured página principal", "—", "—", "checkGold"],
    ["Soporte", "Email", "24/7 Prioritario", "VIP + Manager"],
    ["Comisión por venta", "3%", "1.5%", "0.5%"],
  ];

  const stats = [
    { value: "3x", label: "Más Rápido con VIP" },
    { value: "15k+", label: "Visitantes/Mes" },
    { value: "94%", label: "Tasa de Conversión" },
    { value: "€45k", label: "Precio Promedio" },
  ];

  const faqs = [
    {
      q: "¿Puedo cambiar de plan en cualquier momento?",
      a: "Sí, puedes actualizar o degradar tu plan cuando quieras. Los cambios se aplican inmediatamente y ajustamos el prorrateo.",
    },
    {
      q: "¿Hay contratos a largo plazo?",
      a: "No. Todos nuestros planes son mes a mes. Puedes cancelar en cualquier momento sin penalización.",
    },
    {
      q: "¿Qué incluye el primer mes gratis?",
      a: "Los planes Premium y VIP incluyen el primer mes completamente gratis. Sin tarjeta de crédito necesaria para empezar.",
    },
  ];

  return (
    <main className="pricing">
      {/* HERO */}
      <section className="pricing-hero">
        <div className="pricing-hero__glow" aria-hidden="true" />
        <div className="pricing-hero__inner">
          <div className="pricing-hero__badgeWrap">
            <Badge className="pricing-hero__badge">Planes para Vendedores</Badge>
          </div>

          <h1 className="pricing-hero__title">
            Vende Más Rápido
            <span>Paga Menos</span>
          </h1>

          <p className="pricing-hero__subtitle">
            Elige el plan perfecto para tus objetivos. Primer mes gratis en todos los planes Premium
            y VIP.
          </p>

          <div className="pricing-hero__pill">
            <span className="pricing-hero__pillIcon">
              <Sparkles size={18} />
            </span>
            <span>0% comisión el primer mes • Sin contratos a largo plazo</span>
          </div>
        </div>

        <div className="pricing-hero__fade" />
      </section>

      {/* PLANS */}
      <section className="pricing-section pricing-section--alt">
        <div className="pricing-container">
          <div className="pricing-grid">
            {plans.map((p) => (
              <article key={p.title} className={`pricing-card pricing-card--${p.tone}`}>
                {p.badge && <div className="pricing-popular">{p.badge}</div>}

                <div className="pricing-card__top">
                  <div className={`pricing-card__icon pricing-card__icon--${p.tone}`}>
                    {p.icon}
                  </div>

                  <h3 className="pricing-card__title">{p.title}</h3>
                  <p className={`pricing-card__sub pricing-card__sub--${p.tone}`}>
                    {p.subtitle}
                  </p>

                  <div className="pricing-price">
                    <div className="pricing-price__row">
                      <span className="pricing-price__value">{p.price}</span>
                      {p.priceSuffix && <span className="pricing-price__suffix">{p.priceSuffix}</span>}
                    </div>
                    <div className="pricing-price__note">{p.priceNote}</div>

                    {p.highlight && (
                      <div className={`pricing-highlight pricing-highlight--${p.tone}`}>
                        {p.highlight}
                      </div>
                    )}
                  </div>

                  <Link to={p.ctaTo} className="pricing-card__ctaWrap">
                    <Btn
                      className={`pricing-btn ${
                        p.tone === "base"
                          ? "pricing-btn--dark"
                          : "pricing-btn--gold"
                      }`}
                    >
                      {p.cta}
                      {p.tone !== "base" && <ArrowRight size={18} />}
                    </Btn>
                  </Link>
                </div>

                <div className="pricing-card__body">
                  <div className={`pricing-includes pricing-includes--${p.tone}`}>
                    {p.featuresTitle}
                  </div>

                  <ul className="pricing-list">
                    {p.features.map((f, idx) => {
                      const strong = p.emphasize?.includes(idx);
                      return (
                        <li key={f} className="pricing-li">
                          <span
                            className={`pricing-check pricing-check--${p.tone}`}
                            aria-hidden="true"
                          >
                            <Check size={16} />
                          </span>
                          <span className={strong ? "pricing-strong" : undefined}>{f}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="pricing-section">
        <div className="pricing-container">
          <div className="pricing-head">
            <h2 className="pricing-h2">Comparación Detallada</h2>
            <p className="pricing-sub">Todas las características en un solo vistazo</p>
          </div>

          <div className="pricing-tableWrap">
            <table className="pricing-table">
              <thead>
                <tr>
                  <th>Características</th>
                  <th>Básico</th>
                  <th className="is-gold">Premium</th>
                  <th className="is-gold">VIP Elite</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row[0]}>
                    <td className="pricing-td pricing-td--feature">{row[0]}</td>
                    {row.slice(1).map((cell, i) => (
                      <td key={i} className="pricing-td pricing-td--center">
                        {cell === "check" ? (
                          <span className="pricing-tick pricing-tick--teal" aria-label="Incluido">
                            <Check size={16} />
                          </span>
                        ) : cell === "checkGold" ? (
                          <span className="pricing-tick pricing-tick--gold" aria-label="Incluido">
                            <Check size={16} />
                          </span>
                        ) : (
                          cell
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="pricing-stats">
        <div className="pricing-container">
          <div className="pricing-stats__head">
            <h2 className="pricing-stats__title">Por Qué Funciona</h2>
            <p className="pricing-stats__sub">Resultados reales de nuestros vendedores</p>
          </div>

          <div className="pricing-stats__grid">
            {stats.map((s) => (
              <div key={s.label} className="pricing-stat">
                <div className="pricing-stat__value">{s.value}</div>
                <div className="pricing-stat__label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pricing-section pricing-section--alt">
        <div className="pricing-container">
          <div className="pricing-head">
            <h2 className="pricing-h2">Preguntas Frecuentes</h2>
          </div>

          <div className="pricing-faq">
            {faqs.map((f) => (
              <article key={f.q} className="pricing-faqCard">
                <h4 className="pricing-faqCard__q">{f.q}</h4>
                <p className="pricing-faqCard__a">{f.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pricing-section">
        <div className="pricing-container">
          <div className="pricing-cta">
            <h2 className="pricing-cta__title">¿Listo para Vender Más?</h2>
            <p className="pricing-cta__text">
              Únete a cientos de vendedores exitosos y vende 3x más rápido
            </p>

            <div className="pricing-cta__actions">
              <Link to="/registro">
                <Btn className="pricing-btn pricing-btn--gold">
                  Empezar Gratis Ahora <ArrowRight size={18} />
                </Btn>
              </Link>

              <Link to="/contacto">
                <Btn className="pricing-btn pricing-btn--outlineDark">
                  Hablar con Ventas
                </Btn>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}