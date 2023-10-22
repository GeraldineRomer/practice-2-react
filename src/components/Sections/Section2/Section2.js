import React from 'react'
import './Section2.scss';
import { useLocation } from 'react-router-dom';
import { Add, Star } from '@mui/icons-material';

export const Section2 = ({favorites, adds}) => {
    const location = useLocation();
    const shouldHide = location.pathname === '/contact';
    return (
        <div className={shouldHide ? 'hidden' : ''}>
            {/* Contenido de Section1 */}
            <div class="Section2">
                <div className='card-favorites'>
                    <div className='icon-star'>
                        <Star/>
                    </div>
                    <div>
                        
                    </div>
                </div>
                <div className='card-add'>
                    <div className='icon-add'>
                        <Add/>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
        
    )
}
