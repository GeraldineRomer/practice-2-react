import React, { useState } from 'react'
import './Section1.scss';
import { useLocation } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { images_notice } from '../../../assets';
import SliderComponent from '../../Slider/Slider';

export const Section1 = () => {
    const location = useLocation();
    const shouldHide = location.pathname === '/flexbox';
    
    /* const images = Array.isArray(images_notice) ? images_notice : []; */
    const noticias = [
        {
            _id : '1',
            title : 'Conflicto Israel',
            subtitle: 'Se mueren',
            description: 'Israel en conflicto con Palestina',
            image: images_notice.notice1
        },
        {
            _id : '2',
            title : 'Petro',
            subtitle: 'Payaso',
            description: 'Petro es un payaso',
            image: images_notice.notice2
        },
        {
            _id : '3',
            title : 'Derrumbes Manizales',
            subtitle: 'Se caen las casas',
            description: 'Los manizaleños están tumbando la casa',
            image: images_notice.notice3
        },
        {
            _id : '4',
            title : 'Libano',
            subtitle: 'Explosión',
            description: 'Volando',
            image: images_notice.notice4
        },
    ]
    return (
        <div className={shouldHide ? 'hidden' : ''}>
            {/* Contenido de Section1 */}
            <div class="Section1">
                <SliderComponent noticias={noticias}/>
            </div>
        </div>
        
    )
}
