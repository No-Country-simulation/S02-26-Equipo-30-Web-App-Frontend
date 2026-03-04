/* HorseForm.jsx */
import React, { useState, useEffect } from 'react';
import './HorseForm.css';
import {
    ArrowRight,
    Search,
    ChevronDown,
    Info,
    Plus,
    Upload,
    FileText,
    Shield,
    ShoppingCart
} from '@shared/branding/icons';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import Btn from '@/shared/common/button/Btn';
import horseService from './horseService';

const HorseForm = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const location = useLocation();
    const isEdit = location.pathname.includes('editar');

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const [mediaFiles, setMediaFiles] = useState([]);
    const [documentFiles, setDocumentFiles] = useState([]);

    const [formData, setFormData] = useState({
        name: '',
        birthDate: '2020-01-01', // Default or calculated from age
        sex: 'STALLION',
        breed: '',
        heightM: 1.6,
        weightKg: 500,
        lengthM: 2.4,
        maxSpeedKmh: 60,
        temperament: 'CALM',
        mainUse: 'RACING',
        lineage: '',
        careerRaces: 0,
        daysSinceLastRace: 0,
        birthCountry: '',
        location: {
            country: '',
            region: '',
            city: ''
        },
        sellerVerified: true,
        sellerDisputes: 0,
        sellerFlaggedFraud: false,
        vetTotalExams: 0,
        vetMajorIssues: 0,
        price: ''
    });

    useEffect(() => {
        if (isEdit && id) {
            const fetchHorse = async () => {
                setLoading(true);
                try {
                    const res = await horseService.getHorseById(id);
                    const data = res.data || res;
                    setFormData({
                        name: data.name || '',
                        birthDate: data.birthDate || '2020-01-01',
                        sex: data.sex || 'STALLION',
                        breed: data.breed || '',
                        heightM: data.heightM || 1.6,
                        weightKg: data.weightKg || 500,
                        lengthM: data.lengthM || 2.4,
                        maxSpeedKmh: data.maxSpeedKmh || 60,
                        temperament: data.temperament || 'CALM',
                        mainUse: data.mainUse || 'RACING',
                        lineage: data.lineage || '',
                        careerRaces: data.careerRaces || 0,
                        daysSinceLastRace: data.daysSinceLastRace || 0,
                        birthCountry: data.birthCountry || '',
                        location: {
                            country: data.location?.country || '',
                            region: data.location?.region || '',
                            city: data.location?.city || ''
                        },
                        sellerVerified: data.sellerVerified ?? true,
                        sellerDisputes: data.sellerDisputes || 0,
                        sellerFlaggedFraud: data.sellerFlaggedFraud ?? false,
                        vetTotalExams: data.vetTotalExams || 0,
                        vetMajorIssues: data.vetMajorIssues || 0,
                        price: data.price || ''
                    });
                } catch (err) {
                    console.error('Error fetching horse for edit:', err);
                    setError('No se pudo cargar la información del caballo.');
                } finally {
                    setLoading(false);
                }
            };
            fetchHorse();
        }
    }, [isEdit, id]);

    const handleChange = (e) => {
        const { name, value, type } = e.target;

        if (name.includes('.')) {
            const [parent, child] = name.split('.');
            setFormData(prev => ({
                ...prev,
                [parent]: {
                    ...prev[parent],
                    [child]: value
                }
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: type === 'number' ? parseFloat(value) : value
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            if (isEdit) {
                // For PATCH, we send the fields that changed or just the whole formData as JSON
                // The user specifically asked for PATCH /api/v1/horses/{id}
                await horseService.patchHorse(id, formData);
            } else {
                const horseDataPayload = { ...formData };
                const price = horseDataPayload.price;
                delete horseDataPayload.price;

                const data = new FormData();

                // metadata as blob
                data.append(
                    "horse",
                    new Blob([JSON.stringify(horseDataPayload)], { type: "application/json" })
                );

                data.append("price", price);

                // Imagen/video
                for (const file of mediaFiles) {
                    data.append("mediaFiles", file);
                }

                // PDFs/documentos
                for (const file of documentFiles) {
                    data.append("documentFiles", file);
                }

                await horseService.createHorse(data);
            }
            setSuccess(true);
            setTimeout(() => navigate('/dashboard'), 2000);
        } catch (err) {
            setError(err.message || 'Error al procesar la solicitud');
        } finally {
            setLoading(false);
        }
    };

    // Dashboard-like Stats (Mocked for parity with screenshot)
    const stats = [
        { label: 'Ingresos', value: '$185k', trend: '+23.5% este mes', icon: <ArrowRight size={14} style={{ transform: 'rotate(-45deg)', opacity: 0.5 }} /> },
        { label: 'Activos', value: '3', meta: 'de 12 totales', icon: <ShoppingCart size={14} style={{ opacity: 0.5 }} /> },
        { label: 'Vistas', value: '1247', trend: '+12% semana', icon: '👁️' },
        { label: 'Consultas', value: '38', trend: '+15% semana', icon: '💬' }
    ];

    if (success) {
        return (
            <div className="hf-success-message" style={{ textAlign: 'center', padding: '100px' }}>
                <h2>¡Caballo creado con éxito!</h2>
                <p>Redirigiendo al dashboard...</p>
            </div>
        );
    }

    return (
        <main className="hf">
            <div className="hf-container">
                {/* HERO PANEL (Stats Area) */}
                <header className="hf-hero">
                    <div className="hf-hero-top">
                        <div className="hf-seller-info">
                            <div className="hf-avatar-box">
                                <ShoppingCart size={32} />
                            </div>
                            <div className="hf-seller-details">
                                <h1>Heritage Equestrian</h1>
                                <div className="hf-trust-score">
                                    <span className="hf-trust-badge">🛡️ Trust Score: 98%</span>
                                    <span className="hf-trust-val">Excelente</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="hf-stats-grid">
                        {stats.map((stat, i) => (
                            <div key={i} className="hf-stat-card">
                                <div className="hf-stat-header">
                                    <span>{stat.label}</span>
                                    {typeof stat.icon === 'string' ? <span>{stat.icon}</span> : stat.icon}
                                </div>
                                <div className="hf-stat-value">{stat.value}</div>
                                <div className="hf-stat-meta">
                                    {stat.trend && <span className="hf-trend">↗ {stat.trend}</span>}
                                    {stat.meta && <span>{stat.meta}</span>}
                                </div>
                            </div>
                        ))}
                    </div>
                </header>

                {/* FORM CONTENT */}
                <div className="hf-content">
                    <header className="hf-form-header">
                        <div className="hf-title-box">
                            <div className="hf-plus-circle">
                                <Plus size={20} />
                            </div>
                            <div>
                                <h2>{isEdit ? 'Editar Caballo' : 'Agregar Nuevo Caballo'}</h2>
                                <p>{isEdit ? 'Actualiza la información de tu caballo' : 'Completa toda la información para crear un listado verificado'}</p>
                            </div>
                        </div>
                        <button className="hf-back-link" onClick={() => navigate('/dashboard')}>
                            ← Volver al Dashboard
                        </button>
                    </header>

                    <form className="hf-form-body" onSubmit={handleSubmit}>
                        {error && <div className="hf-error-alert">{error}</div>}

                        {/* ALERT BOX */}
                        <div className="hf-alert">
                            <Info size={18} />
                            <div>
                                <h4>Documentación Requerida</h4>
                                <p>Los registros veterinarios completos son obligatorios para mantener los estándares de calidad de HorseTrust.</p>
                            </div>
                        </div>

                        {/* SECTION 1: INFORMACION BASICA */}
                        <section className="hf-section">
                            <div className="hf-section-num">1</div>
                            <h3>Información Básica</h3>
                            <div className="hf-grid">
                                <div className="hf-input-group">
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
                                <div className="hf-input-group">
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
                                <div className="hf-input-group">
                                    <label>Fecha de Nacimiento *</label>
                                    <input
                                        type="date"
                                        name="birthDate"
                                        value={formData.birthDate}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="hf-input-group">
                                    <label>Sexo *</label>
                                    <div className="hf-select-wrap">
                                        <select name="sex" value={formData.sex} onChange={handleChange}>
                                            <option value="STALLION">Semental</option>
                                            <option value="MARE">Yegua</option>
                                            <option value="GELDING">Capón</option>
                                        </select>
                                        <ChevronDown size={16} />
                                    </div>
                                </div>
                                <div className="hf-input-group">
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
                                <div className="hf-input-group">
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
                                <div className="hf-input-group">
                                    <label>Uso Principal *</label>
                                    <div className="hf-select-wrap">
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
                                <div className="hf-input-group">
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
                        </section>

                        {/* SECTION 2: DETALLES TECNICOS */}
                        <section className="hf-section">
                            <div className="hf-section-num">2</div>
                            <h3>Detalles Técnicos</h3>
                            <div className="hf-grid">
                                <div className="hf-input-group">
                                    <label>Longitud (m) *</label>
                                    <input
                                        type="number"
                                        name="lengthM"
                                        step="0.01"
                                        placeholder="2.4"
                                        value={formData.lengthM}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="hf-input-group">
                                    <label>Velocidad Máx (Kmh) *</label>
                                    <input
                                        type="number"
                                        name="maxSpeedKmh"
                                        step="0.1"
                                        placeholder="60"
                                        value={formData.maxSpeedKmh}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="hf-input-group">
                                    <label>Temperamento *</label>
                                    <div className="hf-select-wrap">
                                        <select name="temperament" value={formData.temperament} onChange={handleChange} required>
                                            <option value="CALM">Calmado</option>
                                            <option value="NEUTRAL">Neutral</option>
                                            <option value="ENERGETIC">Energético</option>
                                            <option value="FIERY">Feroz</option>
                                        </select>
                                        <ChevronDown size={16} />
                                    </div>
                                </div>
                                <div className="hf-input-group">
                                    <label>Linaje *</label>
                                    <input
                                        type="text"
                                        name="lineage"
                                        placeholder="Nombre del padre/madre"
                                        value={formData.lineage}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                        </section>

                        {/* SECTION 3: UBICACION ACTUAL */}
                        <section className="hf-section">
                            <div className="hf-section-num">3</div>
                            <h3>Ubicación Actual</h3>
                            <div className="hf-grid">
                                <div className="hf-input-group">
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
                                <div className="hf-input-group">
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
                                <div className="hf-input-group">
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

                        {/* SECTION 4: HISTORIAL Y VETERINARIA */}
                        <section className="hf-section">
                            <div className="hf-section-num">4</div>
                            <h3>Historial y Veterinaria</h3>
                            <div className="hf-grid">
                                <div className="hf-input-group">
                                    <label>Carreras Realizadas *</label>
                                    <input
                                        type="number"
                                        name="careerRaces"
                                        value={formData.careerRaces}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="hf-input-group">
                                    <label>Días desde última carrera *</label>
                                    <input
                                        type="number"
                                        name="daysSinceLastRace"
                                        value={formData.daysSinceLastRace}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="hf-input-group">
                                    <label>Total Exámenes Vet</label>
                                    <input
                                        type="number"
                                        name="vetTotalExams"
                                        value={formData.vetTotalExams}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="hf-input-group">
                                    <label>Problemas Mayores Vet</label>
                                    <input
                                        type="number"
                                        name="vetMajorIssues"
                                        value={formData.vetMajorIssues}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </section>

                        {/* SECTION 5: PRECIO Y MULTIMEDIA */}
                        <section className="hf-section">
                            <div className="hf-section-num">5</div>
                            <h3>Precio y Multimedia</h3>
                            <div className="hf-grid">
                                <div className="hf-input-group">
                                    <label>Precio (USD)</label>
                                    <input
                                        type="number"
                                        name="price"
                                        placeholder="Ej: 45000"
                                        value={formData.price}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="hf-input-group">
                                    <label>Imágenes y Videos</label>
                                    <div className="hf-file-dropzone">
                                        <Upload size={20} />
                                        <span>Seleccionar archivos multimedia</span>
                                        <input
                                            type="file"
                                            multiple
                                            accept="image/*,video/*"
                                            onChange={(e) => setMediaFiles(Array.from(e.target.files))}
                                            className="hf-file-input"
                                        />
                                    </div>
                                    {mediaFiles.length > 0 && (
                                        <div className="hf-file-list">
                                            {mediaFiles.length} archivos seleccionados
                                        </div>
                                    )}
                                </div>
                                <div className="hf-input-group">
                                    <label>Documentos PDF</label>
                                    <div className="hf-file-dropzone">
                                        <FileText size={20} />
                                        <span>Seleccionar documentos</span>
                                        <input
                                            type="file"
                                            multiple
                                            accept=".pdf"
                                            onChange={(e) => setDocumentFiles(Array.from(e.target.files))}
                                            className="hf-file-input"
                                        />
                                    </div>
                                    {documentFiles.length > 0 && (
                                        <div className="hf-file-list">
                                            {documentFiles.length} documentos seleccionados
                                        </div>
                                    )}
                                </div>
                            </div>
                        </section>

                        <footer className="hf-actions">
                            <button type="button" className="hf-btn-cancel" onClick={() => navigate('/dashboard')}>Cancelar</button>
                            <Btn type="submit" className="hf-btn-submit" disabled={loading}>
                                {loading ? 'Enviando...' : (isEdit ? 'Guardar Cambios' : 'Crear Listado')} →
                            </Btn>
                        </footer>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default HorseForm;

