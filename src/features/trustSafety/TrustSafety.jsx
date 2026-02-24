import React from "react";
import Badge from "@components/badge/Badge";
import Btn from "@components/button/Btn";
import { Shield, ArrowRight, Award, Support } from "@shared/branding/icons";
import "./TrustSafety.css";

const TrustSafety = () => {
  const pillars = [
    {
      icon: Shield,
      title: "Verificación Veterinaria",
      desc: "Cada caballo pasa por un examen completo realizado por veterinarios certificados antes de aparecer en la plataforma.",
      items: ["Examen físico completo", "Rayos X y análisis", "Historial médico verificado"],
    },
    {
      icon: Award,
      title: "Verificación de Vendedores",
      desc: "Sistema de puntuación de credibilidad basado en historial, reseñas verificadas y documentación.",
      items: ["Identidad verificada", "Historial auditado", "Reseñas reales"],
    },
    {
      icon: Shield,
      title: "Pagos Protegidos",
      desc: "Sistema de pago seguro con retención de fondos hasta confirmación de entrega satisfactoria.",
      items: ["Encriptación", "Escrow/retención", "Antifraude"],
    },
    {
      icon: Award,
      title: "Garantía 30 Días",
      desc: "Si no estás 100% satisfecho, devolución completa sin preguntas.",
      items: ["Reembolso garantizado", "Sin justificaciones", "Proceso rápido"],
    },
    {
      icon: Support,
      title: "Soporte 24/7",
      desc: "Equipo especializado disponible para resolver dudas en cualquier momento.",
      items: ["Chat 24/7", "Línea prioritaria", "Respuesta rápida"],
    },
    {
      icon: Award,
      title: "Documentación Legal",
      desc: "Contratos, certificados y papeles en orden. Asesoría legal incluida.",
      items: ["Contratos certificados", "Transferencia asistida", "Asesoría incluida"],
    },
  ];

  const steps = [
    { n: "1", title: "Exploración Segura", desc: "Solo caballos verificados. Historial completo visible." },
    { n: "2", title: "Contacto Directo", desc: "Chat encriptado. Visitas coordinadas por nosotros." },
    { n: "3", title: "Pago Protegido", desc: "Fondos retenidos hasta confirmación de entrega." },
    { n: "4", title: "Garantía Activa", desc: "30 días de protección total. Soporte continuo." },
  ];

  const resolution = [
    {
      title: "Mediación Profesional",
      desc: "En caso de desacuerdo, intervenimos rápido para encontrar una solución justa.",
    },
    {
      title: "Respuesta Rápida",
      desc: "Nuestro objetivo es resolver incidencias en el menor tiempo posible.",
    },
    {
      title: "Protección del Comprador",
      desc: "Si el caballo no coincide con la descripción, buscamos reembolso/solución.",
    },
  ];

  const stats = [
    { value: "98.5%", label: "Satisfacción del Cliente" },
    { value: "2,400+", label: "Caballos Verificados" },
    { value: "$0", label: "Fraudes Reportados" },
    { value: "15min", label: "Tiempo de Respuesta" },
  ];

  return (
    <main className="trust">
      {/* HERO */}
      <section className="trust-hero">
        <div className="trust-container">
          <Badge icon={Shield}>Tu Seguridad es Nuestra Prioridad</Badge>

          <h1 className="trust-hero__title">
            Confianza y Seguridad <span>en Cada Transacción</span>
          </h1>

          <p className="trust-hero__subtitle">
            Sistemas de verificación multicapa, garantías reales y soporte 24/7 para proteger cada compra y venta
          </p>

          <div className="trust-hero__actions">
            <Btn className="trust-btn trust-btn--primary">
              Comprar con Confianza <ArrowRight size={18} />
            </Btn>

            <Btn className="trust-btn trust-btn--ghost">
              Contactar Soporte <Support size={18} />
            </Btn>
          </div>
        </div>
      </section>

      {/* PILARS */}
      <section className="trust-section">
        <div className="trust-container">
          <p className="trust-kicker">NUESTROS PILARES</p>
          <h2 className="trust-h2">
            Cómo Protegemos <span>Tu Inversión</span>
          </h2>

          <div className="trust-grid">
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <article key={p.title} className="trust-card">
                  <div className="trust-card__icon">
                    <Icon size={18} />
                  </div>
                  <h3 className="trust-card__title">{p.title}</h3>
                  <p className="trust-card__desc">{p.desc}</p>

                  <ul className="trust-card__list">
                    {p.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section className="trust-steps">
        <div className="trust-container">
          <p className="trust-kicker">PROCESO DE COMPRA</p>
          <h2 className="trust-h2">Protección en Cada Paso</h2>
          <p className="trust-sub">Desde el primer contacto hasta la entrega final, estamos contigo</p>

          <div className="trust-steps__row">
            {steps.map((s) => (
              <div key={s.n} className="trust-step">
                <div className="trust-step__n">{s.n}</div>
                <h4 className="trust-step__title">{s.title}</h4>
                <p className="trust-step__desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESOLUTION */}
      <section className="trust-section">
        <div className="trust-container">
          <p className="trust-kicker">RESOLUCIÓN DE CONFLICTOS</p>
          <h2 className="trust-h2">Siempre de Tu Lado</h2>

          <div className="trust-panel">
            {resolution.map((r) => (
              <div key={r.title} className="trust-panel__item">
                <div className="trust-panel__dot" />
                <div>
                  <h4 className="trust-panel__title">{r.title}</h4>
                  <p className="trust-panel__desc">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS + CTA */}
      <section className="trust-stats">
        <div className="trust-container trust-stats__grid">
          {stats.map((st) => (
            <div key={st.label} className="trust-stat">
              <div className="trust-stat__value">{st.value}</div>
              <div className="trust-stat__label">{st.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="trust-cta">
        <div className="trust-container trust-cta__box">
          <div className="trust-cta__icon">
            <Shield size={18} />
          </div>
          <h3 className="trust-cta__title">¿Tienes Preguntas?</h3>
          <p className="trust-cta__text">
            Nuestro equipo está disponible 24/7 para resolver cualquier duda sobre seguridad y confianza
          </p>

          <div className="trust-cta__actions">
            <Btn className="trust-btn trust-btn--primary">Contactar Soporte</Btn>
            <Btn className="trust-btn trust-btn--ghost">
              Cómo Funciona <ArrowRight size={18} />
            </Btn>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TrustSafety;