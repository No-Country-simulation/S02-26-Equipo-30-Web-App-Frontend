/* HorseForm.jsx */
import React, { useRef, useState } from "react";
import "./HorseForm.css";
import { ChevronDown, Info, Plus, Upload, FileText, ShoppingCart } from "@shared/branding/icons";
import { useNavigate, useLocation } from "react-router-dom";
import Btn from "@/shared/common/button/Btn";
import horseService from "./horseService";

const HorseForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isEdit = location.pathname.includes("editar");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // refs para abrir selector desde el dropzone
  const mediaInputRef = useRef(null);
  const vetDocsInputRef = useRef(null);

  // estado solo para UI (no se envía aún al backend)
  const [mediaFiles, setMediaFiles] = useState([]);
  const [vetDocs, setVetDocs] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    birthDate: "2020-01-01",
    sex: "STALLION",
    breed: "",
    heightM: 1.6,
    weightKg: 500,
    lengthM: 2.4,
    maxSpeedKmh: 60,
    temperament: "CALM",
    mainUse: "RACING",
    lineage: "",
    careerRaces: 0,
    daysSinceLastRace: 0,
    birthCountry: "",
    location: {
      country: "",
      region: "",
      city: "",
    },
    sellerVerified: true,
    sellerDisputes: 0,
    sellerFlaggedFraud: false,
    vetTotalExams: 0,
    vetMajorIssues: 0,
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setFormData((prev) => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value,
        },
      }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: type === "number" ? parseFloat(value) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (isEdit) {
        // await horseService.updateHorse(id, formData);
      } else {
        await horseService.createHorse(formData);
      }
      setSuccess(true);
      setTimeout(() => navigate("/dashboard"), 1500);
    } catch (err) {
      setError(err?.message || "Error al procesar la solicitud");
    } finally {
      setLoading(false);
    }
  };

  const onPickMedia = (files) => {
    if (!files?.length) return;
    const arr = Array.from(files);
    setMediaFiles((prev) => [...prev, ...arr]);
  };

  const onPickVetDocs = (files) => {
    if (!files?.length) return;
    const arr = Array.from(files);
    setVetDocs((prev) => [...prev, ...arr]);
  };

  const removeMedia = (idx) => setMediaFiles((prev) => prev.filter((_, i) => i !== idx));
  const removeVetDoc = (idx) => setVetDocs((prev) => prev.filter((_, i) => i !== idx));

  // stats “mock” para que se vea como el panel del dashboard
  const stats = [
    { label: "Ingresos", value: "$185k", meta: "+23.5% este mes" },
    { label: "Activos", value: "3", meta: "de 12 totales" },
    { label: "Vistas", value: "1247", meta: "+12% semana" },
    { label: "Consultas", value: "38", meta: "+15% semana" },
  ];

  if (success) {
    return (
      <div className="hf-success">
        <h2>{isEdit ? "Cambios guardados" : "Caballo creado con éxito"}</h2>
        <p>Redirigiendo al dashboard...</p>
      </div>
    );
  }

  return (
    <main className="hf">
      <div className="hf-container">
        {/* HERO PANEL (igual estilo dashboard) */}
        <header className="hf-hero">
          <div className="hf-hero-top">
            <div className="hf-hero-left">
              <div className="hf-hero-icon">
                <ShoppingCart size={26} />
              </div>
              <div className="hf-hero-text">
                <h1 className="hf-hero-title">Heritage Equestrian</h1>
                <div className="hf-hero-badges">
                  <span className="hf-trust-badge">Trust Score: 98%</span>
                  <span className="hf-trust-status">Excelente</span>
                </div>
              </div>
            </div>

            <div className="hf-hero-actions">
              <button
                type="button"
                className="hf-hero-btn hf-hero-btn--ghost"
                onClick={() => navigate("/mensajes")}
              >
                Mis Mensajes
              </button>

              <button
                type="button"
                className="hf-hero-btn hf-hero-btn--primary"
                onClick={() => navigate("/caballo/nuevo")}
              >
                Agregar Caballo
              </button>
            </div>
          </div>

          <div className="hf-stats">
            {stats.map((s) => (
              <div key={s.label} className="hf-stat">
                <div className="hf-stat-top">
                  <span className="hf-stat-label">{s.label}</span>
                </div>
                <div className="hf-stat-value">{s.value}</div>
                <div className="hf-stat-meta">{s.meta}</div>
              </div>
            ))}
          </div>
        </header>

        {/* FORM CARD */}
        <section className="hf-card">
          <header className="hf-card-header">
            <div className="hf-card-titlewrap">
              <div className="hf-plus">
                <Plus size={18} />
              </div>
              <div>
                <h2 className="hf-card-title">{isEdit ? "Editar Caballo" : "Agregar Nuevo Caballo"}</h2>
                <p className="hf-card-sub">
                  {isEdit
                    ? "Actualiza la información de tu caballo"
                    : "Completa toda la información para crear un listado verificado"}
                </p>
              </div>
            </div>

            <button type="button" className="hf-back" onClick={() => navigate("/dashboard")}>
              ← Volver al Dashboard
            </button>
          </header>

          <form className="hf-form" onSubmit={handleSubmit}>
            {error && <div className="hf-error">{error}</div>}

            {/* ALERT BOX */}
            <div className="hf-alert">
              <Info size={18} />
              <div>
                <h4>Documentación Requerida</h4>
                <p>
                  Los registros veterinarios completos son obligatorios para mantener los estándares de calidad de HorseTrust.
                </p>
              </div>
            </div>

            {/* SECTION 1 */}
            <section className="hf-section">
              <div className="hf-section-head">
                <span className="hf-section-num">1</span>
                <h3>Información Básica</h3>
              </div>

              <div className="hf-grid">
                <div className="hf-input">
                  <label>Nombre del Caballo *</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Ej: Thunder Strike"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="hf-input">
                  <label>Raza *</label>
                  <input
                    type="text"
                    name="breed"
                    placeholder="Ej: Dutch Warmblood"
                    value={formData.breed}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="hf-input">
                  <label>Fecha de Nacimiento *</label>
                  <input type="date" name="birthDate" value={formData.birthDate} onChange={handleChange} required />
                </div>

                <div className="hf-input">
                  <label>Sexo *</label>
                  <div className="hf-select">
                    <select name="sex" value={formData.sex} onChange={handleChange}>
                      <option value="STALLION">Semental</option>
                      <option value="MARE">Yegua</option>
                      <option value="GELDING">Capón</option>
                    </select>
                    <ChevronDown size={16} />
                  </div>
                </div>

                <div className="hf-input">
                  <label>Altura (m) *</label>
                  <input
                    type="number"
                    name="heightM"
                    step="0.01"
                    placeholder="1.65"
                    value={formData.heightM}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="hf-input">
                  <label>Peso (Kg) *</label>
                  <input
                    type="number"
                    name="weightKg"
                    step="0.1"
                    placeholder="500"
                    value={formData.weightKg}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="hf-input">
                  <label>Uso Principal *</label>
                  <div className="hf-select">
                    <select name="mainUse" value={formData.mainUse} onChange={handleChange}>
                      <option value="RACING">Carreras</option>
                      <option value="SHOW_JUMPING">Salto</option>
                      <option value="DRESSAGE">Doma</option>
                      <option value="PLEASURE">Placer</option>
                      <option value="BREEDING">Crianza</option>
                    </select>
                    <ChevronDown size={16} />
                  </div>
                </div>

                <div className="hf-input">
                  <label>País de Origen *</label>
                  <input
                    type="text"
                    name="birthCountry"
                    placeholder="Ej: Argentina"
                    value={formData.birthCountry}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Upload media (imagenes/videos) */}
              <div className="hf-uploadBlock">
                <div className="hf-uploadLabel">Imágenes y Videos</div>

                <input
                  ref={mediaInputRef}
                  type="file"
                  multiple
                  accept="image/*,video/*"
                  className="hf-hiddenInput"
                  onChange={(e) => onPickMedia(e.target.files)}
                />

                <button
                  type="button"
                  className="hf-dropzone"
                  onClick={() => mediaInputRef.current?.click()}
                >
                  <div className="hf-dropzoneIcon">
                    <Upload size={28} />
                  </div>
                  <div className="hf-dropzoneText">
                    <p className="hf-dropzoneTitle">Arrastra imágenes aquí o haz clic para seleccionar</p>
                    <p className="hf-dropzoneSub">PNG, JPG hasta 10MB. Mínimo 5 imágenes requeridas.</p>
                  </div>
                </button>

                {mediaFiles.length > 0 && (
                  <div className="hf-fileList">
                    {mediaFiles.map((f, idx) => (
                      <div className="hf-fileItem" key={`${f.name}-${idx}`}>
                        <span className="hf-fileName">{f.name}</span>
                        <button type="button" className="hf-fileRemove" onClick={() => removeMedia(idx)}>
                          Quitar
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </section>

            {/* SECTION 2 */}
            <section className="hf-section">
              <div className="hf-section-head">
                <span className="hf-section-num">2</span>
                <h3>Detalles Técnicos</h3>
              </div>

              <div className="hf-grid">
                <div className="hf-input">
                  <label>Longitud (m)</label>
                  <input
                    type="number"
                    name="lengthM"
                    step="0.01"
                    placeholder="2.4"
                    value={formData.lengthM}
                    onChange={handleChange}
                  />
                </div>

                <div className="hf-input">
                  <label>Velocidad Máx (Kmh)</label>
                  <input
                    type="number"
                    name="maxSpeedKmh"
                    step="0.1"
                    placeholder="60"
                    value={formData.maxSpeedKmh}
                    onChange={handleChange}
                  />
                </div>

                <div className="hf-input">
                  <label>Temperamento</label>
                  <div className="hf-select">
                    <select name="temperament" value={formData.temperament} onChange={handleChange}>
                      <option value="CALM">Calmado</option>
                      <option value="NEUTRAL">Neutral</option>
                      <option value="ENERGETIC">Energético</option>
                      <option value="FIERY">Feroz</option>
                    </select>
                    <ChevronDown size={16} />
                  </div>
                </div>

                <div className="hf-input">
                  <label>Linaje</label>
                  <input
                    type="text"
                    name="lineage"
                    placeholder="Nombre del padre/madre"
                    value={formData.lineage}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </section>

            {/* SECTION 3 */}
            <section className="hf-section">
              <div className="hf-section-head">
                <span className="hf-section-num">3</span>
                <h3>Ubicación Actual</h3>
              </div>

              <div className="hf-grid">
                <div className="hf-input">
                  <label>País *</label>
                  <input
                    type="text"
                    name="location.country"
                    placeholder="País"
                    value={formData.location.country}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="hf-input">
                  <label>Región/Estado *</label>
                  <input
                    type="text"
                    name="location.region"
                    placeholder="Región"
                    value={formData.location.region}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="hf-input">
                  <label>Ciudad *</label>
                  <input
                    type="text"
                    name="location.city"
                    placeholder="Ciudad"
                    value={formData.location.city}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </section>

            {/* SECTION 4 */}
            <section className="hf-section">
              <div className="hf-section-head">
                <span className="hf-section-num">4</span>
                <h3>Registros Veterinarios</h3>
              </div>

              <div className="hf-grid">
                <div className="hf-input">
                  <label>Carreras Realizadas</label>
                  <input type="number" name="careerRaces" value={formData.careerRaces} onChange={handleChange} />
                </div>

                <div className="hf-input">
                  <label>Días desde última carrera</label>
                  <input
                    type="number"
                    name="daysSinceLastRace"
                    value={formData.daysSinceLastRace}
                    onChange={handleChange}
                  />
                </div>

                <div className="hf-input">
                  <label>Total Exámenes Vet</label>
                  <input type="number" name="vetTotalExams" value={formData.vetTotalExams} onChange={handleChange} />
                </div>

                <div className="hf-input">
                  <label>Problemas Mayores Vet</label>
                  <input type="number" name="vetMajorIssues" value={formData.vetMajorIssues} onChange={handleChange} />
                </div>
              </div>

              {/* Upload docs veterinarios */}
              <div className="hf-uploadBlock">
                <div className="hf-uploadLabel">Subir Documentos Veterinarios</div>

                <input
                  ref={vetDocsInputRef}
                  type="file"
                  multiple
                  accept="application/pdf,image/*"
                  className="hf-hiddenInput"
                  onChange={(e) => onPickVetDocs(e.target.files)}
                />

                <button
                  type="button"
                  className="hf-dropzone hf-dropzone--docs"
                  onClick={() => vetDocsInputRef.current?.click()}
                >
                  <div className="hf-dropzoneIcon">
                    <FileText size={28} />
                  </div>
                  <div className="hf-dropzoneText">
                    <p className="hf-dropzoneTitle">Subir Documentos Veterinarios</p>
                    <p className="hf-dropzoneSub">PDF hasta 5MB. Incluye certificados de salud, vacunación, etc.</p>
                  </div>
                </button>

                {vetDocs.length > 0 && (
                  <div className="hf-fileList">
                    {vetDocs.map((f, idx) => (
                      <div className="hf-fileItem" key={`${f.name}-${idx}`}>
                        <span className="hf-fileName">{f.name}</span>
                        <button type="button" className="hf-fileRemove" onClick={() => removeVetDoc(idx)}>
                          Quitar
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </section>

            <footer className="hf-actions">
              <button type="button" className="hf-btn hf-btn--cancel" onClick={() => navigate("/dashboard")}>
                Cancelar
              </button>

              <Btn type="submit" className="hf-btn hf-btn--submit" disabled={loading}>
                {loading ? "Enviando..." : isEdit ? "Guardar Cambios" : "Crear Listado"} →
              </Btn>
            </footer>
          </form>
        </section>
      </div>
    </main>
  );
};

export default HorseForm;