import React from 'react'
import './Section2.scss';
import { useLocation } from 'react-router-dom';

export const Section2 = () => {
    const location = useLocation();
    const shouldHide = location.pathname === '/contact';
    return (
        <div className={shouldHide ? 'hidden' : ''}>
            {/* Contenido de Section1 */}
            <div class="Section2">
                Contact
            </div>
        </div>
        
    )
}
