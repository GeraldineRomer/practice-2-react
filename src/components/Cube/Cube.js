import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Cube.scss';

export const Cube = () => {
    const [animationPaused, setAnimationPaused] = useState(false);
    const handleCubeClick = () => {
        console.log('Di clic en el cubo');
        if (!animationPaused) {
            console.log('Animación pausada');
            const cube = document.getElementById('animatedCube');
            const optionsContainer = document.getElementById('options');
            if (cube && optionsContainer) {
            cube.style.animationPlayState = 'paused';
            optionsContainer.style.display = 'flex';
            optionsContainer.style.flexDirection = 'column';
            setAnimationPaused(true);
            setTimeout(() => {
                cube.style.animationPlayState = 'running';
                setAnimationPaused(false);
                optionsContainer.style.display = 'none';
            }, 5000);
            }
        }
    };
    const products = () => {
        console.log('Di clic en la opción 1');
        window.open('../Products', '_self'); // Abre una nueva ventana o pestaña
    };
    const contact = () => {
        console.log('Di clic en la opción 2');
        window.open('../Contact', '_self'); // Abre una nueva ventana o pestaña
    };
    const flexbox = () => {
        console.log('Di clic en la opción 3');
        window.open('../Flexbox', '_self'); // Abre una nueva ventana o pestaña
    };
    return (
        <div class="loader">
            <div class="cube" id="animatedCube" onClick={handleCubeClick}>
                <div class="front"></div>
                <div class="back"></div>
                <div class="top"></div>
                <div class="bottom"></div>
                <div class="left"></div>
                <div class="right"></div>
            </div>
            <div class="options" id="options">
                <div class="cube1" id="option1" onClick={products}>
                    <div class="front">
                        <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg%22%3E" class="instagram">
                            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                            <Link to="/flex"></Link>
                        </svg>
                    </div>
                    <div class="back"></div>
                    <div class="top"></div>
                    <div class="bottom"></div>
                    <div class="left"></div>
                    <div class="right"></div>
                </div>
                <div class="cube2" id="option2" onClick={contact}>
                    <div class="front">
                        <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg%22%3E" class="linkendin">
                            <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                        </svg>
                    </div>
                    <div class="back"></div>
                    <div class="top"></div>
                    <div class="bottom"></div>
                    <div class="left"></div>
                    <div class="right"></div>
                </div>
                <div class="cube3" id="option3" onClick={flexbox}>
                    <div class="front">
                        <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg%22%3E" class="facebook">
                            <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
                        </svg>
                    </div>
                    <div class="back"></div>
                    <div class="top"></div>
                    <div class="bottom"></div>
                    <div class="left"></div>
                    <div class="right"></div>
                </div>
            </div>
        </div>
    )
}

