/* PurchaseProcess.jsx */
import React, { useState } from 'react';
import './PurchaseProcess.css';
import {
    Shield,
    Check,
    CreditCard,
    Phone,
    ArrowRight,
    Info,
    Calendar,
    Dollar,
    Mail
} from '@shared/branding/icons';
import { useNavigate } from 'react-router-dom';

const PurchaseProcess = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [agreements, setAgreements] = useState({
        records: false,
        ppe: false
    });

    const [paymentData, setPaymentData] = useState({
        holder: '',
        cardNumber: '',
        expiry: '',
        cvc: '',
        zip: ''
    });

    const handleNext = () => {
        if (step === 1) {
            if (agreements.records && agreements.ppe) {
                setStep(2);
                window.scrollTo(0, 0);
            } else {
                alert('Por favor, acepta todos los términos para continuar.');
            }
        } else if (step === 2) {
            setStep(3);
            window.scrollTo(0, 0);
        } else if (step === 3) {
            setStep(4); // Success screen
            window.scrollTo(0, 0);
        }
    };

    const handleBack = () => {
        if (step > 1 && step < 4) {
            setStep(step - 1);
            window.scrollTo(0, 0);
        } else {
            navigate(-1);
        }
    };

    if (step === 4) {
        return (
            <main className="pp">
                <div className="pp-container" style={{ bgcolor: 'white', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                    <div className="pp-success">
                        <div className="pp-success-icon"><Check size={32} /></div>
                        <h2>Purchase Intent Submitted!</h2>
                        <p>Your secure transaction has been initiated</p>

                        <div className="pp-verification-box" style={{ textAlign: 'left', background: '#f0fdfa', border: '1px solid #e2e8f0' }}>
                            <div className="pp-v-header" style={{ color: '#0d9488' }}>
                                <strong>What happens next?</strong>
                            </div>
                            <p style={{ fontSize: '0.85rem', color: '#64748b' }}>
                                Your payment of <strong>$64,237.56</strong> is securely held in escrow. The seller has been notified and will contact you within 24 hours to coordinate the pre-purchase veterinary examination.
                            </p>
                        </div>

                        <div className="pp-success-card">
                            <div className="pp-success-card-icon"><Mail size={20} /></div>
                            <div className="pp-success-card-info">
                                <h4>Confirmation Email Sent</h4>
                                <p>Check your inbox for detailed transaction information and next steps</p>
                            </div>
                        </div>

                        <div className="pp-success-card">
                            <div className="pp-success-card-icon"><Calendar size={20} /></div>
                            <div className="pp-success-card-info">
                                <h4>Schedule Veterinary Exam</h4>
                                <p>You have 7 days to complete the pre-purchase examination with a licensed veterinarian</p>
                            </div>
                        </div>

                        <div className="pp-success-card">
                            <div className="pp-success-card-icon"><Info size={20} /></div>
                            <div className="pp-success-card-info">
                                <h4>Review Documentation</h4>
                                <p>All veterinary records and agreements are available in your buyer dashboard</p>
                            </div>
                        </div>

                        <div className="pp-protection">
                            <h4>HorseTrust Protection</h4>
                            <div className="pp-protection-list">
                                <div className="pp-protection-item"><Check size={16} /> Funds held in secure escrow until exam approval</div>
                                <div className="pp-protection-item"><Check size={16} /> Full refund if exam reveals undisclosed issues</div>
                                <div className="pp-protection-item"><Check size={16} /> Legal documentation and transfer assistance included</div>
                                <div className="pp-protection-item"><Check size={16} /> 24/7 support from HorseTrust transaction specialists</div>
                            </div>
                        </div>

                        <div className="pp-success-actions">
                            <button className="pp-btn-secondary" onClick={() => navigate('/dashboard')}>Go to Dashboard</button>
                            <button className="pp-btn-primary" onClick={() => navigate('/explorar')}>Browse More Horses</button>
                        </div>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="pp">
            <div className="pp-container">
                {/* HEADER */}
                <header className="pp-header">
                    <h1 className="pp-header__title">Proceso de Compra</h1>
                    <span className="pp-header__step-text">Paso {step} de 3</span>
                </header>

                {/* STEPPER */}
                <nav className="pp-stepper">
                    <div className={`pp-step ${step >= 1 ? 'completed' : ''} ${step === 1 ? 'active' : ''}`}>
                        <div className="pp-step__icon">
                            {step > 1 ? <Check size={16} /> : <span>1</span>}
                        </div>
                        <span className="pp-step__label">Verificación Final</span>
                    </div>
                    <div className={`pp-step ${step >= 2 ? 'completed' : ''} ${step === 2 ? 'active' : ''}`}>
                        <div className="pp-step__icon">
                            {step > 2 ? <Check size={16} /> : <CreditCard size={16} />}
                        </div>
                        <span className="pp-step__label">Pago</span>
                    </div>
                    <div className={`pp-step ${step >= 3 ? 'completed' : ''} ${step === 3 ? 'active' : ''}`}>
                        <div className="pp-step__icon">
                            {step > 3 ? <Check size={16} /> : <Shield size={16} />}
                        </div>
                        <span className="pp-step__label">Revisión</span>
                    </div>
                </nav>

                {/* PRODUCT CARD */}
                <section className="pp-product-card">
                    <img
                        src="https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?q=80&w=2071&auto=format&fit=crop"
                        alt="Storm Chaser"
                        className="pp-product-img"
                    />
                    <div className="pp-product-info">
                        <h2>Storm Chaser</h2>
                        <p className="pp-product-details">Oldenburg • 6 años • Saratoga Springs, NY</p>
                        <p className="pp-product-price">$62,978 <span>USD</span></p>
                    </div>
                </section>

                {/* MAIN CONTENT CARD */}
                <div className="pp-content-card">
                    <header className="pp-content-header">
                        {step === 1 && <Info size={18} />}
                        {step === 2 && <CreditCard size={18} />}
                        {step === 3 && <Shield size={18} />}
                        <span>
                            Paso {step}: {
                                step === 1 ? 'Verificación Final y Acuerdos' :
                                    step === 2 ? 'Información de Pago' :
                                        'Revisión y Confirmación'
                            }
                        </span>
                    </header>

                    <div className="pp-content-body">
                        {step === 1 && (
                            <>
                                {/* VERIFICATION BOX */}
                                <div className="pp-verification-box">
                                    <div className="pp-v-header">
                                        <Shield size={16} />
                                        <span>Verificación HorseTrust Completada ✓</span>
                                    </div>
                                    <ul className="pp-v-list">
                                        <li className="pp-v-item">Registros veterinarios verificados</li>
                                        <li className="pp-v-item">Credenciales del vendedor confirmadas</li>
                                        <li className="pp-v-item">Historial de rendimiento autenticado</li>
                                        <li className="pp-v-item">Documentación legal revisada</li>
                                    </ul>
                                </div>

                                {/* AGREEMENTS */}
                                <form className="pp-agreements">
                                    <label className="pp-agreement">
                                        <input
                                            type="checkbox"
                                            checked={agreements.records}
                                            onChange={(e) => setAgreements({ ...agreements, records: e.target.checked })}
                                        />
                                        <p>
                                            He revisado todos los registros veterinarios, vídeos de rendimiento e historial completo de Storm Chaser. Entiendo que esta compra está sujeta a los términos y condiciones de HorseTrust.
                                        </p>
                                    </label>

                                    <label className="pp-agreement">
                                        <input
                                            type="checkbox"
                                            checked={agreements.ppe}
                                            onChange={(e) => setAgreements({ ...agreements, ppe: e.target.checked })}
                                        />
                                        <p>
                                            Acepto programar un examen veterinario previo a la compra (PPE) dentro de 7 días. La venta está sujeta a resultados satisfactorios del PPE.
                                        </p>
                                    </label>
                                </form>

                                {/* NEXT STEPS INFO */}
                                <div className="pp-next-steps">
                                    <h4>¿Qué sigue?</h4>
                                    <p>
                                        Después de completar el pago, coordinarás directamente con el vendedor para organizar la inspección veterinaria y el transporte. HorseTrust proporciona servicios de depósito en garantía para proteger tanto al comprador como al vendedor.
                                    </p>
                                </div>
                            </>
                        )}

                        {step === 2 && (
                            <>
                                {/* DEPOSIT INFO BOX */}
                                <div className="pp-deposit-box">
                                    <div className="pp-deposit-icon"><Shield size={24} /></div>
                                    <div className="pp-deposit-text">
                                        <strong>Servicio de Depósito Seguro</strong>
                                        Tu pago se mantendrá en depósito hasta que se complete el examen previo a la compra y apruebes la transacción final. Esto protege tanto a ti como al vendedor.
                                    </div>
                                </div>

                                {/* PAYMENT FORM */}
                                <div className="pp-form-grid">
                                    <div className="ep-input-group pp-input-full">
                                        <label>Nombre del Titular</label>
                                        <input
                                            type="text"
                                            className="ep-input"
                                            placeholder="Juan Pérez"
                                            value={paymentData.holder}
                                            onChange={(e) => setPaymentData({ ...paymentData, holder: e.target.value })}
                                        />
                                    </div>
                                    <div className="ep-input-group pp-input-full">
                                        <label>Número de Tarjeta</label>
                                        <input
                                            type="text"
                                            className="ep-input"
                                            placeholder="4242 4242 4242 4242"
                                            value={paymentData.cardNumber}
                                            onChange={(e) => setPaymentData({ ...paymentData, cardNumber: e.target.value })}
                                        />
                                    </div>
                                    <div className="ep-input-group">
                                        <label>Fecha de Vencimiento</label>
                                        <input
                                            type="text"
                                            className="ep-input"
                                            placeholder="MM/AA"
                                            value={paymentData.expiry}
                                            onChange={(e) => setPaymentData({ ...paymentData, expiry: e.target.value })}
                                        />
                                    </div>
                                    <div className="ep-input-group">
                                        <label>CVC</label>
                                        <input
                                            type="text"
                                            className="ep-input"
                                            placeholder="123"
                                            value={paymentData.cvc}
                                            onChange={(e) => setPaymentData({ ...paymentData, cvc: e.target.value })}
                                        />
                                    </div>
                                    <div className="ep-input-group pp-input-full">
                                        <label>Código Postal de Facturación</label>
                                        <input
                                            type="text"
                                            className="ep-input"
                                            placeholder="12345"
                                            value={paymentData.zip}
                                            onChange={(e) => setPaymentData({ ...paymentData, zip: e.target.value })}
                                        />
                                    </div>
                                </div>

                                {/* PAYMENT SUMMARY */}
                                <div className="pp-summary-box">
                                    <h3 className="pp-summary-title">Resumen de Pago</h3>
                                    <div className="pp-summary-row">
                                        <span>Precio del Caballo</span>
                                        <span>$62,978</span>
                                    </div>
                                    <div className="pp-summary-row">
                                        <span>Comisión de Depósito (2%)</span>
                                        <span>$1,259.56</span>
                                    </div>
                                    <div className="pp-summary-row total">
                                        <span>Total a Pagar Hoy</span>
                                        <div style={{ textAlign: 'right' }}>
                                            <span className="pp-price">$64,237.56</span>
                                            <span className="pp-currency">USD</span>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}

                        {step === 3 && (
                            <>
                                <div className="pp-verification-box" style={{ background: '#f0fdfa', border: '1px solid #ccfbf1', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                    <Check size={20} style={{ color: '#14b8a6' }} />
                                    <div style={{ fontSize: '0.85rem' }}>
                                        <strong style={{ display: 'block', color: '#0d9488' }}>Listo para Completar la Compra</strong>
                                        Revisa todos los detalles a continuación antes de finalizar tu compra de Storm Chaser.
                                    </div>
                                </div>

                                <div className="pp-review-box pp-review-box--horse">
                                    <span className="pp-review-label">Resumen de Compra</span>
                                    <div className="pp-review-value">Storm Chaser</div>
                                    <div className="pp-review-subtext">Oldenburg • 6 años • Saratoga Springs, NY</div>
                                </div>

                                <div className="pp-review-box pp-review-box--payment">
                                    <span className="pp-review-label">Monto del Pago</span>
                                    <div className="pp-review-value">$64,237.56</div>
                                    <div className="pp-review-subtext">Retenido en depósito seguro</div>
                                </div>

                                <div className="pp-steps-list">
                                    <h4 className="pp-steps-title">Próximos Pasos</h4>
                                    <div className="pp-step-item">
                                        <div className="pp-step-number">1</div>
                                        El vendedor te contactará dentro de 24 horas
                                    </div>
                                    <div className="pp-step-item">
                                        <div className="pp-step-number">2</div>
                                        Programar examen veterinario previo a la compra
                                    </div>
                                    <div className="pp-step-item">
                                        <div className="pp-step-number">3</div>
                                        Una vez aprobado, organizar transporte
                                    </div>
                                    <div className="pp-step-item">
                                        <div className="pp-step-number">4</div>
                                        Fondos liberados al vendedor después de la entrega
                                    </div>
                                </div>

                                <div className="pp-auth-box">
                                    Al hacer clic en "Completar Compra", autorizas a HorseTrust a mantener tu pago en depósito y aceptas completar el proceso de examen previo a la compra. Puedes cancelar durante el periodo de depósito si el examen revela problemas no divulgados previamente.
                                </div>
                            </>
                        )}

                        {/* FINAL ACTIONS */}
                        <div className="pp-actions">
                            <button className="pp-btn-back" onClick={handleBack}>
                                <span>←</span> Atrás
                            </button>
                            <button
                                className={step === 3 ? 'pp-btn-complete' : 'pp-btn-next'}
                                onClick={handleNext}
                            >
                                {step === 1 ? 'Continuar al Pago' : step === 2 ? 'Confirmar Pago' : 'Completar Compra'}
                                {step !== 3 && <ArrowRight size={18} />}
                                {step === 3 && <Check size={18} />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default PurchaseProcess;
