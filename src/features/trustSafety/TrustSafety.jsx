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
  ArrowRight,
  Heart,
  Support,
  Check,
  FileText,
  Lock,
} from "@shared/branding/icons";

export default function TrustSafety() {
  const pillars = [
    {
      tone: "teal",
      iconTone: "teal",
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
      iconTone: "gold",
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
      iconTone: "teal",
      icon: <Lock size={22} />,
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
      iconTone: "gold",
      icon: <Heart size={22} />,
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
      iconTone: "teal",
      icon: <Support size={22} />,
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
      iconTone: "gold",
      icon: <FileText size={22} />,
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
    { n: "1", title: "Exploración Segura", desc: "Solo caballos verificados. Historial completo visible." },
    { n: "2", title: "Contacto Directo", desc: "Chat encriptado. Visitas coordinadas por nosotros." },
    { n: "3", title: "Pago Protegido", desc: "Fondos retenidos hasta confirmación de entrega." },
    { n: "4", title: "Garantía Activa", desc: "30 días de protección total. Soporte continuo." },
  ];

  const panel = [
    {
      tone: "teal",
      icon: <Info size={18} />,
      title: "Mediación Profesional",
      desc: "En caso de cualquier desacuerdo, nuestro equipo de mediación profesional interviene en menos de 24 horas para encontrar una solución justa para ambas partes.",
    },
    {
      tone: "gold",
      icon: <Award size={18} />,
      title: "Respuesta Rápida",
      desc: "El 94% de los casos se resuelven en menos de 72 horas. Nuestro compromiso es encontrar la mejor solución sin demoras innecesarias.",
    },
    {
      tone: "teal",
      icon: <Shield size={18} />,
      title: "Protección del Comprador",
      desc: "Si el caballo no coincide con la descripción o tiene problemas ocultos, garantizamos reembolso completo más compensación por tiempo y gastos de evaluación.",
    },
  ];

  return (
    <main className="ts">
      {/* HERO */}
      <section className="ts-hero">
        <div className="ts-hero__glow" aria-hidden="true">
          <span className="ts-hero__blob ts-hero__blob--gold" />
          <span className="ts-hero__blob ts-hero__blob--teal" />
        </div>

        <div className="ts-container ts-hero__inner">
          <div className="ts-hero__content">
            <Badge className="ts-badge">
              Tu Seguridad es Nuestra Prioridad
            </Badge>

            <h1 className="ts-hero__title">
              Confianza y Seguridad
              <span>en Cada Transacción</span>
            </h1>

            <p className="ts-hero__subtitle">
              Sistemas de verificación multicapa, garantías reales y soporte 24/7 para proteger cada compra y venta
            </p>

            <div className="ts-hero__actions">
              <Link to="/explorar">
                <Btn className="ts-btn ts-btn--primary">
                  Comprar con Confianza <Shield size={18} />
                </Btn>
              </Link>

              <Link to="/contacto">
                <Btn className="ts-btn ts-btn--outline">
                  Contactar Soporte <Phone size={18} />
                </Btn>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PILARES */}
      <section className="ts-section ts-section--white">
        <div className="ts-container">
          <header className="ts-head">
            <p className="ts-kicker ts-kicker--gold">NUESTROS PILARES</p>
            <h2 className="ts-h2">
              Cómo Protegemos
              <span>Tu Inversión</span>
            </h2>
          </header>

          <div className="ts-grid ts-grid--pillars">
            {pillars.map((p) => (
              <article key={p.title} className={`ts-card ts-card--hover ts-card--${p.tone}`}>
                <div className={`ts-iconBox ts-iconBox--${p.iconTone}`}>{p.icon}</div>

                <h3 className="ts-card__title">{p.title}</h3>
                <p className="ts-card__text">{p.desc}</p>

                <ul className="ts-list">
                  {p.items.map((it) => (
                    <li key={it}>
                      <Check size={18} />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section className="ts-section ts-section--alt">
        <div className="ts-container">
          <header className="ts-head">
            <p className="ts-kicker ts-kicker--gold">PROCESO DE COMPRA</p>
            <h2 className="ts-h2 ts-h2--single">Protección en Cada Paso</h2>
            <p className="ts-sub">Desde el primer contacto hasta la entrega final, estamos contigo</p>
          </header>

          <div className="ts-grid ts-grid--steps">
            {steps.map((s) => (
              <article key={s.n} className="ts-stepCard">
                <div className="ts-stepCard__n">{s.n}</div>
                <h4 className="ts-stepCard__title">{s.title}</h4>
                <p className="ts-stepCard__text">{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* RESOLUCIÓN */}
      <section className="ts-section ts-section--white">
        <div className="ts-container ts-container--narrow">
          <header className="ts-head ts-head--tight">
            <p className="ts-kicker ts-kicker--gold">RESOLUCIÓN DE CONFLICTOS</p>
            <h2 className="ts-h2 ts-h2--single">Siempre de Tu Lado</h2>
          </header>

          <div className="ts-panel">
            {panel.map((it) => (
              <div key={it.title} className="ts-panelRow">
                <div className={`ts-panelIcon ts-panelIcon--${it.tone}`}>{it.icon}</div>
                <div>
                  <h4 className="ts-panelRow__title">{it.title}</h4>
                  <p className="ts-panelRow__text">{it.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="ts-stats">
        <div className="ts-container">
          <header className="ts-statsHead">
            <h2 className="ts-statsHead__title">Números que Hablan</h2>
            <p className="ts-statsHead__sub">Resultados verificables de nuestro compromiso</p>
          </header>

          <div className="ts-statsGrid">
            <div className="ts-stat">
              <div className="ts-stat__value">98.5%</div>
              <div className="ts-stat__label">Satisfacción del Cliente</div>
            </div>
            <div className="ts-stat">
              <div className="ts-stat__value">2,400+</div>
              <div className="ts-stat__label">Caballos Verificados</div>
            </div>
            <div className="ts-stat">
              <div className="ts-stat__value">$0</div>
              <div className="ts-stat__label">Fraudes Reportados</div>
            </div>
            <div className="ts-stat">
              <div className="ts-stat__value">15min</div>
              <div className="ts-stat__label">Tiempo de Respuesta</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="ts-section ts-section--alt">
        <div className="ts-container ts-container--narrow">
          <div className="ts-final">
            <div className="ts-final__icon"><Shield size={26} /></div>
            <h2 className="ts-final__title">¿Tienes Preguntas?</h2>
            <p className="ts-final__text">
              Nuestro equipo está disponible 24/7 para resolver cualquier duda sobre seguridad y confianza
            </p>

            <div className="ts-final__actions">
              <Link to="/contacto">
                <Btn className="ts-btn ts-btn--primary">
                  Contactar Soporte <Phone size={18} />
                </Btn>
              </Link>

              <Link to="/como-funciona">
                <Btn className="ts-btn ts-btn--outlineDark">
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