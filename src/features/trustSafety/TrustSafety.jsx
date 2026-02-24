import "./TrustSafety.css";

import Badge from "@components/badge/Badge";
import Btn from "@components/button/Btn";
import { Link } from "react-router-dom";

import {
  Shield,
  Award,
  Dollar,
  Phone,
  Info,
  User,
  Crown,
  Sparkles,
  ArrowRight,
  Heart,
  Support,
  Star
} from "@shared/branding/icons";


export default function TrustSafety() {
  const pillars = [
    {
      tone: "teal",
      icon: <Shield size={22} />,
      title: "Verificación Veterinaria",
      desc: "Cada caballo pasa por un examen completo realizado por veterinarios certificados antes de aparecer en la plataforma.",
      items: [
        "Examen físico completo de 47 puntos",
        "Rayos X y análisis de sangre actualizados",
        "Historial médico verificado y certificado",
      ],
    },
    {
      tone: "gold",
      icon: <Info size={22} />,
      title: "Verificación de Vendedores",
      desc: "Sistema de puntuación de credibilidad de 100 puntos basado en historial, reseñas verificadas y documentación.",
      items: [
        "Verificación de identidad obligatoria",
        "Historial de ventas auditado",
        "Reseñas verificadas de compradores reales",
      ],
    },
    {
      tone: "teal",
      icon: <Dollar size={22} />,
      title: "Pagos Protegidos",
      desc: "Sistema de pago seguro con retención de fondos hasta confirmación de entrega satisfactoria.",
      items: [
        "Encriptación bancaria de nivel militar",
        "Retención de fondos en escrow",
        "Protección contra fraude automatizada",
      ],
    },
    {
      tone: "gold",
      icon: <Award size={22} />,
      title: "Garantía 30 Días",
      desc: "Si no estás 100% satisfecho con tu compra, devolución completa sin preguntas durante 30 días.",
      items: [
        "Reembolso completo garantizado",
        "Sin preguntas ni justificaciones",
        "Proceso de devolución en 48h",
      ],
    },
    {
      tone: "teal",
      icon: <Phone size={22} />,
      title: "Soporte 24/7",
      desc: "Equipo especializado de expertos ecuestres disponible en cualquier momento para resolver tus dudas.",
      items: [
        "Chat en vivo 24/7 con especialistas",
        "Línea telefónica directa prioritaria",
        "Respuesta en menos de 15 minutos",
      ],
    },
    {
      tone: "gold",
      icon: <Sparkles size={22} />,
      title: "Documentación Legal",
      desc: "Todos los contratos, certificados y papeles en orden. Asesoría legal incluida en cada transacción.",
      items: [
        "Contratos digitales certificados",
        "Transferencia de propiedad asistida",
        "Asesoría legal gratuita incluida",
      ],
    },
  ];

  const steps = [
    {
      n: "1",
      title: "Exploración Segura",
      desc: "Solo caballos verificados. Historial completo visible.",
    },
    {
      n: "2",
      title: "Contacto Directo",
      desc: "Chat encriptado. Visitas coordinadas por nosotros.",
    },
    {
      n: "3",
      title: "Pago Protegido",
      desc: "Fondos retenidos hasta confirmación de entrega.",
    },
    {
      n: "4",
      title: "Garantía Activa",
      desc: "30 días de protección total. Soporte continuo.",
    },
  ];

  const panel = [
    {
      title: "Mediación Profesional",
      desc: "En caso de cualquier desacuerdo, nuestro equipo de mediación profesional interviene en menos de 24 horas para encontrar una solución justa para ambas partes.",
      tone: "teal",
      icon: <Info size={18} />,
    },
    {
      title: "Respuesta Rápida",
      desc: "El 94% de los casos se resuelven en menos de 72 horas. Nuestro compromiso es encontrar la mejor solución sin demoras innecesarias.",
      tone: "gold",
      icon: <Award size={18} />,
    },
    {
      title: "Protección del Comprador",
      desc: "Si el caballo no coincide con la descripción o tiene problemas ocultos, garantizamos reembolso completo más compensación por tiempo y gastos de evaluación.",
      tone: "teal",
      icon: <Shield size={18} />,
    },
  ];

  return (
    <main className="trust">
      {/* HERO */}
      <section className="trust-hero">
        <div className="trust-hero__inner">
          <div className="trust-hero__badgeWrap">
            <Badge className="trust-hero__badge" icon={Shield}>
              Tu Seguridad es Nuestra Prioridad
            </Badge>
          </div>

          <h1 className="trust-hero__title">
            Confianza y Seguridad <span>en Cada Transacción</span>
          </h1>

          <p className="trust-hero__subtitle">
            Sistemas de verificación multicapa, garantías reales y soporte 24/7
            para proteger cada compra y venta
          </p>

          <div className="trust-hero__actions">
            <Link to="/explorar">
              <Btn className="trust-btn trust-btn--primary">
                Comprar con Confianza <ArrowRight size={18} />
              </Btn>
            </Link>

            <Link to="/contacto">
              <Btn className="trust-btn trust-btn--ghost">
                Contactar Soporte <Phone size={18} />
              </Btn>
            </Link>
          </div>
        </div>

        <div className="trust-hero__fade" />
      </section>

      {/* PILARES */}
      <section className="trust-section trust-pillars">
        <div className="trust-container">
          <p className="trust-pillars__kicker">NUESTROS PILARES</p>
          <h2 className="trust-pillars__title">
            Cómo Protegemos <span>Tu Inversión</span>
          </h2>

          <div className="trust-pillars__grid">
            {pillars.map((p) => (
              <article
                key={p.title}
                className={`trust-pillarCard trust-pillarCard--${p.tone}`}
              >
                <div
                  className={`trust-pillarCard__icon trust-pillarCard__icon--${p.tone}`}
                >
                  {p.icon}
                </div>

                <h3 className="trust-pillarCard__title">{p.title}</h3>
                <p className="trust-pillarCard__desc">{p.desc}</p>

                <ul className="trust-pillarCard__list">
                  {p.items.map((it) => (
                    <li key={it} className="trust-pillarCard__li">
                      <span className="trust-pillarCard__check" aria-hidden="true">
                        ✓
                      </span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section className="trust-steps">
        <div className="trust-container">
          <p className="trust-kicker">PROCESO DE COMPRA</p>
          <h2 className="trust-h2">Protección en Cada Paso</h2>
          <p className="trust-sub">
            Desde el primer contacto hasta la entrega final, estamos contigo
          </p>

          <div className="trust-steps__row">
            {steps.map((s) => (
              <article key={s.n} className="trust-step">
                <div className="trust-step__n">{s.n}</div>
                <h4 className="trust-step__title">{s.title}</h4>
                <p className="trust-step__desc">{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PANEL (Siempre de tu lado) */}
      <section className="trust-section">
        <div className="trust-container">
          <p className="trust-kicker">RESOLUCIÓN DE CONFLICTOS</p>
          <h2 className="trust-h2">Siempre de Tu Lado</h2>

          <div className="trust-panel">
            {panel.map((item) => (
              <div key={item.title} className="trust-panel__row">
                <div
                  className={`trust-panel__icon trust-panel__icon--${item.tone}`}
                >
                  {item.icon}
                </div>

                <div className="trust-panel__content">
                  <h4 className="trust-panel__title">{item.title}</h4>
                  <p className="trust-panel__desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="trust-stats">
        <div className="trust-container">
          <div className="trust-stats__head">
            <h2 className="trust-stats__title">Números que Hablan</h2>
            <p className="trust-stats__sub">
              Resultados verificables de nuestro compromiso
            </p>
          </div>

          <div className="trust-stats__grid">
            <div className="trust-stat">
              <div className="trust-stat__value">98.5%</div>
              <div className="trust-stat__label">Satisfacción del Cliente</div>
            </div>
            <div className="trust-stat">
              <div className="trust-stat__value">2,400+</div>
              <div className="trust-stat__label">Caballos Verificados</div>
            </div>
            <div className="trust-stat">
              <div className="trust-stat__value">$0</div>
              <div className="trust-stat__label">Fraudes Reportados</div>
            </div>
            <div className="trust-stat">
              <div className="trust-stat__value">15min</div>
              <div className="trust-stat__label">Tiempo de Respuesta</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="trust-cta">
        <div className="trust-container">
          <div className="trust-cta__box">
            <div className="trust-cta__icon">
              <Shield size={20} />
            </div>

            <h2 className="trust-cta__title">¿Tienes Preguntas?</h2>
            <p className="trust-cta__text">
              Nuestro equipo está disponible 24/7 para resolver cualquier duda
              sobre seguridad y confianza
            </p>

            <div className="trust-cta__actions">
              <Link to="/contacto">
                <Btn className="trust-btn trust-btn--primary">
                  Contactar Soporte <Phone size={18} />
                </Btn>
              </Link>

              <Link to="/como-funciona">
                <Btn className="trust-btn trust-btn--outlineDark">
                  Cómo Funciona <ArrowRight size={18} />
                </Btn>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}