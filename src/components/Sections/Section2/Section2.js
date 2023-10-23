import React from 'react'
import './Section2.scss';
import { useLocation } from 'react-router-dom';
import { Add, Star } from '@mui/icons-material';
import { useFavorites } from '../../FavoriteList/FavoriteList';

export const Section2 = () => {
    const location = useLocation();
    const shouldHide = location.pathname === '/contact';
    const { favorites } = useFavorites();
    console.log(favorites);
    return (
        <div className={shouldHide ? 'hidden' : ''}>
            {/* Contenido de Section1 */}
            <div class="Section2">
                <div className='card-favorites'>
                    <div className='icon-star'>
                        <Star/>
                    </div>
                    <div>
                        {favorites.map((favorite, index) => (
                            <div key={index}>
                                <img src={favorite.image} alt={favorite.title} />
                                <h2>{favorite.title}</h2>
                                <p>{favorite.description}</p>
                            </div>
                        ))}
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
