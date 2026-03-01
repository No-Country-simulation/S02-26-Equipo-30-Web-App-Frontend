/* HorseForm.jsx */
import React, { useState } from 'react';
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
import { useNavigate, useLocation } from 'react-router-dom';
import Btn from '@/shared/common/button/Btn';

const HorseForm = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const isEdit = location.pathname.includes('editar');

    // Dashboard-like Stats (Mocked for parity with screenshot)
    const stats = [
        { label: 'Ingresos', value: '$185k', trend: '+23.5% este mes', icon: <ArrowRight size={14} style={{ transform: 'rotate(-45deg)', opacity: 0.5 }} /> },
        { label: 'Activos', value: '3', meta: 'de 12 totales', icon: <ShoppingCart size={14} style={{ opacity: 0.5 }} /> },
        { label: 'Vistas', value: '1247', trend: '+12% semana', icon: '👁️' },
        { label: 'Consultas', value: '38', trend: '+15% semana', icon: '💬' }
    ];

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

                    <div className="hf-form-body">
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
                                    <input type="text" placeholder="Ej: Thunder Strike" />
                                </div>
                                <div className="hf-input-group">
                                    <label>Raza *</label>
                                    <input type="text" placeholder="Ej: Dutch Warmblood" />
                                </div>
                                <div className="hf-input-group">
                                    <label>Edad (años) *</label>
                                    <input type="number" placeholder="8" />
                                </div>
                                <div className="hf-input-group">
                                    <label>Sexo *</label>
                                    <div className="hf-select-wrap">
                                        <select>
                                            <option>Seleccionar sexo</option>
                                        </select>
                                        <ChevronDown size={16} />
                                    </div>
                                </div>
                                <div className="hf-input-group">
                                    <label>Altura (manos) *</label>
                                    <input type="text" placeholder="16.2 hh" />
                                </div>
                                <div className="hf-input-group">
                                    <label>Disciplina *</label>
                                    <div className="hf-select-wrap">
                                        <select>
                                            <option>Seleccionar disciplina</option>
                                        </select>
                                        <ChevronDown size={16} />
                                    </div>
                                </div>
                                <div className="hf-input-group">
                                    <label>Precio (USD) *</label>
                                    <input type="text" placeholder="45000" />
                                </div>
                                <div className="hf-input-group">
                                    <label>Ubicación *</label>
                                    <input type="text" placeholder="Ej: Wellington, FL" />
                                </div>
                            </div>
                        </section>

                        {/* SECTION 2: DESCRIPCION */}
                        <section className="hf-section">
                            <div className="hf-section-num">2</div>
                            <h3>Descripción</h3>
                            <div className="hf-input-group full">
                                <label>Descripción Detallada *</label>
                                <textarea placeholder="Proporciona una descripción detallada de las características, entrenamiento y antecedentes del caballo..."></textarea>
                                <p className="hf-hint">Mínimo 100 caracteres. Sé específico sobre logros, entrenamiento y personalidad.</p>
                            </div>
                        </section>

                        {/* SECTION 3: IMAGENES Y VIDEOS */}
                        <section className="hf-section">
                            <div className="hf-section-num">3</div>
                            <h3>Imágenes y Videos</h3>
                            <div className="hf-upload-area">
                                <Upload size={32} />
                                <p>Arrastra imágenes aquí o <span>haz clic para seleccionar</span></p>
                                <p className="hf-hint">PNG, JPG hasta 10MB. Mínimo 5 imágenes requeridas.</p>
                            </div>
                        </section>

                        {/* SECTION 4: REGISTROS VETERINARIOS */}
                        <section className="hf-section">
                            <div className="hf-section-num">4</div>
                            <h3>Registros Veterinarios</h3>
                            <div className="hf-grid">
                                <div className="hf-input-group">
                                    <label>Última Revisión Veterinaria *</label>
                                    <input type="text" placeholder="4 Registros Veterinarios" />
                                </div>
                                <div className="hf-input-group">
                                    <label>Vacunas al Día *</label>
                                    <input type="text" placeholder="Rabia, Tétanos" />
                                </div>
                                <div className="hf-input-group">
                                    <label>Condiciones de Salud *</label>
                                    <input type="text" placeholder="Ninguna" />
                                </div>
                                <div className="hf-input-group">
                                    <label>Nombre del Veterinario *</label>
                                    <div className="hf-select-wrap">
                                        <select>
                                            <option>Dr. Juan Pérez</option>
                                        </select>
                                        <ChevronDown size={16} />
                                    </div>
                                </div>
                                <div className="hf-input-group full">
                                    <label>Contacto del Veterinario *</label>
                                    <input type="text" placeholder="Correo o número" />
                                </div>
                                <div className="hf-input-group full">
                                    <label>Notas Médicas Adicionales *</label>
                                    <textarea placeholder="Proporciona información adicional sobre el historial médico del caballo"></textarea>
                                </div>
                            </div>
                            <div className="hf-upload-area mini">
                                <Upload size={24} />
                                <p>Subir Documentos Veterinarios</p>
                                <p className="hf-hint">PDF hasta 5MB. Incluye certificados de salud, registros de vacunación, etc.</p>
                            </div>
                        </section>
                    </div>

                    <footer className="hf-actions">
                        <button className="hf-btn-cancel" onClick={() => navigate('/dashboard')}>Cancelar</button>
                        <Btn className="hf-btn-submit">{isEdit ? 'Guardar Cambios' : 'Crear Listado'} →</Btn>
                    </footer>
                </div>
            </div>
        </main>
    );
};

export default HorseForm;
