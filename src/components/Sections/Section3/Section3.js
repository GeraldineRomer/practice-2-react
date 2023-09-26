import React, { useState } from 'react';
import './Section3.scss';
import { useLocation } from 'react-router-dom';
import Mantenimiento from '../../../assets/img/descarga.jpeg';
import Refrigeracion from '../../../assets/img/refrigeracion.jpg';
import Mantenimiento1 from '../../../assets/img/mantenimiento1.webp';
import Mantenimiento2 from '../../../assets/img/mantenimiento2.png';
import Mantenimiento3 from '../../../assets/img/mantenimiento3.jpeg';
import Refrigeracion1 from '../../../assets/img/refrigeracion1.jpg';
import Refrigeracion2 from '../../../assets/img/refrigeracion2.jpg';
import Refrigeracion3 from '../../../assets/img/refrigeracion3.jpg';

export const Section3 = () => {
    const location = useLocation();
    const shouldHide = location.pathname === '/products';
    const [cardVisible, setCardVisible] = useState(false);
    const toggleCard = () => {
        setCardVisible((prevState) => !prevState);
    }
    const [cardVisible2, setCardVisible2] = useState(false);
    const toggleCard2 = () => {
        setCardVisible2((prevState) => !prevState);
    }
    return (
        <div className={shouldHide ? 'hidden' : ''}>
            <div class="Section3">
                <div className='cards'>
                    <div className={`card ${cardVisible ? 'active' : ''}`} onClick={toggleCard}>
                        <div className='content-card'>
                            <img src={Mantenimiento} alt='Mantenimiento' className='mantenimiento'></img>
                            <label className='title'>Mantenimiento</label>
                            <label className='descripcion'>Descripcion de la categoría</label>
                        </div>
                    </div>
                    <div className={`card ${cardVisible2 ? 'active' : ''}`} onClick={toggleCard2}>
                        <div className='content-card'>
                            <img src={Refrigeracion} alt='Mantenimiento' className='mantenimiento'></img>
                            <label className='title'>Refrigeración</label>
                            <label className='descripcion'>Descripcion de la categoría</label>
                        </div>
                    </div>
                </div>
                <div className='cards-additionals'>
                    {cardVisible && (
                        <div className="card-additional">
                            <div className="content-card-additional">
                                <img src={Mantenimiento1} alt='Mantenimiento1' className='img-prin'></img>
                                <img src={Mantenimiento2} alt='Mantenimiento2' className='img'></img>
                                <img src={Mantenimiento3} alt='Mantenimiento3' className='img'></img>
                                <label className='title'>Mantenimiento 1.1</label>
                                <label className='descripcion'>Mantenimiento 1.1</label>
                            </div>
                        </div>
                    )}
                    {cardVisible2 && (
                        <div className="card-additional">
                            <div className="content-card-additional">
                                <img src={Refrigeracion1} alt='Refrigeracion1' className='img-prin'></img>
                                <img src={Refrigeracion2} alt='Refrigeracion2' className='img'></img>
                                <img src={Refrigeracion3} alt='Refrigeracion3' className='img'></img>
                                <label className='title'>Refrigeracion 1.1</label>
                                <label className='descripcion'>Refrigeracion 1.1</label>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
        
    )
}
