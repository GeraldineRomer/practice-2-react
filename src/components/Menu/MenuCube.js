import React from 'react';
import './MenuCube.scss';
import { Link } from 'react-router-dom';
import UamLogo  from '../../assets/img/logo-removebg-preview.png';
import  Avatar  from '../../assets/img/avatar.png';

export const MenuCube = () => {
    const burguer = () => {
        const toggle = document.getElementById('toggle');
        const items = document.getElementById('items');
        items.classList.toggle('open');
        toggle.classList.toggle('close');
    }
    return (
        <div class="container">
            <div class="menu" id="menu">
                <img src={UamLogo} alt="Logo UAM" class="uam"/>
                <div class="toggle" id="toggle" onClick={burguer}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul id="items">
                    <li><Link to="/flex">Flexbox</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/products">Products</Link></li>
                </ul>
                <div class="avatar-container">
                    <img src={Avatar} alt="Foto de perfil" class="avatar"/>
                </div>
            </div>
        </div>
    )
}

