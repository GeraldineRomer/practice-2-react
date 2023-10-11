import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Slider.scss';

export const SliderComponent = ({ noticias }) => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="slider-container">
            <Slider {...sliderSettings}>
                {noticias.map((noticia, index) => (
                    <div key={index}>
                        <img src={noticia.image} alt={`Imagen ${index + 1}`} className='images'/>
                        <label className='title'>{noticia.title}</label>
                        <label className='subtitle'>{noticia.subtitle}</label>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default SliderComponent;
