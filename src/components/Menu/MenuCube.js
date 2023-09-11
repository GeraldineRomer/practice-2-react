import React from 'react';
import './MenuCube.scss';
import UamLogo  from '../../assets/img/logo-removebg-preview.png';
import  Avatar  from '../../assets/img/avatar.png';
import { Link, animateScroll as scroll } from "react-scroll";

export const MenuCube = () => {
    /* scrollToTop = () => {
        scroll.scrollToTop();
    }; */
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
                    <li>
                        <Link
                            activeClass="active"
                            to="Flexbox"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            Flexbox
                        </Link>
                    </li>
                    <li>
                        <Link
                            activeClass="active"
                            to="Contact"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link
                            activeClass="active"
                            to="Products"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            Products
                        </Link>
                    </li>
                </ul>
                <div class="avatar-container">
                    <img src={Avatar} alt="Foto de perfil" class="avatar"/>
                </div>
            </div>
        </div>
    )
}

