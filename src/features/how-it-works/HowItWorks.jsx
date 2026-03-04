import "./HowItWorks.css";
import { useNavigate } from "react-router-dom";

import Badge from "@components/badge/Badge";
import Btn from "@components/button/Btn";

import {
  Search,
  Shield,
  FileText,
  Check,
  ArrowRight,
  Upload,
  Award,
} from "@shared/branding/icons";

export default function HowItWorks() {
  const navigate = useNavigate();

  return (
    <main className="hiw">
      {/* HERO */}
      <section className="hiw-hero">
        <div className="hiw-hero__glow" aria-hidden="true">
          <span className="hiw-hero__blob hiw-hero__blob--1" />
          <span className="hiw-hero__blob hiw-hero__blob--2" />
        </div>

        <div className="hiw-container hiw-hero__inner">
          <div className="hiw-hero__content">
            <Badge className="hiw-badge">Proceso Simple y Transparente</Badge>

            <h1 className="hiw-hero__title">
              Cómo Funciona
              <span>HorseTrust</span>
            </h1>

            <p className="hiw-hero__subtitle">
              Tu camino hacia el caballo perfecto en 3 pasos simples. Confianza garantizada en cada
              transacción.
            </p>

            <div className="hiw-hero__actions">
              <Btn className="hiw-btn hiw-btn--primary" onClick={() => navigate("/explorar")}>
                Explorar Caballos <ArrowRight size={18} />
              </Btn>

              <Btn className="hiw-btn hiw-btn--outline" onClick={() => navigate("/auth")}>
                Vender mi Caballo
              </Btn>
            </div>
          </div>
        </div>

        <div className="hiw-hero__fade" aria-hidden="true" />
      </section>

      {/* PARA COMPRADORES */}
      <section className="hiw-section hiw-section--white">
        <div className="hiw-container">
          <header className="hiw-head">
            <p className="hiw-kicker hiw-kicker--gold">PARA COMPRADORES</p>
            <h2 className="hiw-h2">
              Encuentra tu Compañero
              <span>en 3 Pasos</span>
            </h2>
            <p className="hiw-sub">Proceso diseñado para máxima confianza y seguridad</p>
          </header>

          <div className="hiw-timeline">
            <div className="hiw-line" aria-hidden="true" />
            <div className="hiw-grid3">
              <article className="hiw-card">
                <div className="hiw-step">1</div>
                <div className="hiw-card__inner">
                  <div className="hiw-iconBox hiw-iconBox--gold">
                    <Search size={28} />
                  </div>
                  <h3 className="hiw-card__title">Busca y Filtra</h3>
                  <p className="hiw-card__text">
                    Explora más de 2,400 caballos verificados. Usa filtros avanzados por disciplina,
                    raza, precio y ubicación.
                  </p>

                  <ul className="hiw-list">
                    <li><Check size={18} /> Búsqueda inteligente por criterios múltiples</li>
                    <li><Check size={18} /> Filtros por verificación veterinaria</li>
                    <li><Check size={18} /> Guardados y comparación de favoritos</li>
                  </ul>
                </div>
              </article>

              <article className="hiw-card">
                <div className="hiw-step">2</div>
                <div className="hiw-card__inner">
                  <div className="hiw-iconBox hiw-iconBox--teal">
                    <FileText size={28} />
                  </div>
                  <h3 className="hiw-card__title">Verifica y Conoce</h3>
                  <p className="hiw-card__text">
                    Accede a información completa: historial médico, videos de rendimiento y
                    puntuación de credibilidad del vendedor.
                  </p>

                  <ul className="hiw-list">
                    <li><Check size={18} /> Historial veterinario completo y certificado</li>
                    <li><Check size={18} /> Videos HD de entrenamiento y desempeño</li>
                    <li><Check size={18} /> Contacto directo y visita programada</li>
                  </ul>
                </div>
              </article>

              <article className="hiw-card">
                <div className="hiw-step">3</div>
                <div className="hiw-card__inner">
                  <div className="hiw-iconBox hiw-iconBox--gold">
                    <Shield size={28} />
                  </div>
                  <h3 className="hiw-card__title">Compra Segura</h3>
                  <p className="hiw-card__text">
                    Pago protegido con garantía de 30 días. Si no estás satisfecho, devolución sin
                    preguntas.
                  </p>

                  <ul className="hiw-list">
                    <li><Check size={18} /> Pago seguro con protección del comprador</li>
                    <li><Check size={18} /> Garantía de 30 días sin preguntas</li>
                    <li><Check size={18} /> Soporte 24/7 durante toda la transacción</li>
                  </ul>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* PARA VENDEDORES */}
      <section className="hiw-section hiw-section--alt">
        <div className="hiw-container">
          <header className="hiw-head">
            <p className="hiw-kicker hiw-kicker--gold">PARA VENDEDORES</p>
            <h2 className="hiw-h2">
              Vende con Confianza
              <span>Máxima Exposición</span>
            </h2>
            <p className="hiw-sub">Alcanza a más de 15,000 compradores calificados cada mes</p>
          </header>

          <div className="hiw-grid3">
            <article className="hiw-card hiw-card--plain">
              <div className="hiw-card__inner">
                <div className="hiw-iconBox hiw-iconBox--gold">
                  <Upload size={28} />
                </div>
                <h3 className="hiw-card__title">1. Crea tu Anuncio</h3>
                <p className="hiw-card__text">
                  Formulario guiado paso a paso con validación automática de datos.
                </p>
                <ul className="hiw-bullets hiw-bullets--gold">
                  <li>Fotos profesionales (hasta 20)</li>
                  <li>Videos de rendimiento</li>
                  <li>Certificados veterinarios</li>
                </ul>
              </div>
            </article>

            <article className="hiw-card hiw-card--plain">
              <div className="hiw-card__inner">
                <div className="hiw-iconBox hiw-iconBox--teal">
                  <Award size={28} />
                </div>
                <h3 className="hiw-card__title">2. Obtén Verificación</h3>
                <p className="hiw-card__text">
                  Nuestro equipo verifica tu anuncio en menos de 24 horas.
                </p>
                <ul className="hiw-bullets hiw-bullets--teal">
                  <li>Validación veterinaria gratuita</li>
                  <li>Badge de vendedor certificado</li>
                  <li>Mayor visibilidad garantizada</li>
                </ul>
              </div>
            </article>

            <article className="hiw-card hiw-card--plain">
              <div className="hiw-card__inner">
                <div className="hiw-iconBox hiw-iconBox--gold">
                  <Award size={28} />
                </div>
                <h3 className="hiw-card__title">3. Gestiona Interesados</h3>
                <p className="hiw-card__text">
                  Dashboard completo para gestionar consultas y visitas.
                </p>
                <ul className="hiw-bullets hiw-bullets--gold">
                  <li>Chat integrado con compradores</li>
                  <li>Calendario de visitas</li>
                  <li>Estadísticas en tiempo real</li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="hiw-section hiw-section--white">
        <div className="hiw-container">
          <div className="hiw-final">
            <h2 className="hiw-final__title">¿Listo para Empezar?</h2>
            <p className="hiw-final__text">
              Únete a miles de jinetes y vendedores que confían en HorseTrust
            </p>

            <div className="hiw-final__actions">
              <Btn className="hiw-btn hiw-btn--primary" onClick={() => navigate("/explorar")}>
                Ver Caballos Disponibles
              </Btn>

              <Btn className="hiw-btn hiw-btn--outlineDark" onClick={() => navigate("/confianza-seguridad")}>
                Confianza y Seguridad
              </Btn>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}