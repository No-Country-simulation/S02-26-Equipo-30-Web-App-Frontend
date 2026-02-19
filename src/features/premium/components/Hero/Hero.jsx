import { Crown, Shield, Star, Support } from '@/shared/branding/icons'
import Badge from '@/shared/common/badge/Badge'
import React from 'react'
import './Hero.css'

function Hero() {
    return (
        <div className='header'>
            <Badge icon={Crown}>
                Colección VIP Exclusiva
            </Badge>
            <h2>Colección Premium HorseTrust</h2>
            <p>Los mejores caballos del mercado con certificación completa, garantía extendida y acceso prioritario a veterinarios especializados</p>
            <div className='icons-container'>
                <div className='icon-item'>
                    <Shield color='#C9A24D' /> <span>Garantía Extendida</span>
                </div>
                <div className='icon-item'>
                    <Support color='#C9A24D' /> <span>100% Verificados</span>
                </div>
                <div className='icon-item'>
                    <Star color='#C9A24D' /> <span>Sellers Score 93+</span>
                </div>
            </div>
        </div>
    )
}

export default Hero