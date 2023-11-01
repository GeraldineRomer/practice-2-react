import './Footer.scss'
import React from 'react'
import {Link} from 'react-router-dom'
import Location from '../../assets/svg/direction-gps-maps-4-svgrepo-com.svg'
import Twitter from '../../assets/svg/twitter-round-svgrepo-com.svg'
import Facebook from '../../assets/svg/facebook-svgrepo-com.svg'
import Instagram from '../../assets/svg/instagram-round-svgrepo-com.svg'
import Linkedin from '../../assets/svg/linkedin-round-svgrepo-com.svg'
import UamLogo from '../../assets/img/logo-removebg-preview.png'

export const Footer = () => {
    return (
        <div className='Footer'>
            <div className = 'Location'>
                ubicacion:
                <img src={Location} alt="Location" className='Svg'/>
            </div>
            <div className='SocialMedia'>
                Redes sociales:
                <img src={Instagram} alt='Instagram' className='Svg'/>
                <img src={Facebook} alt='Facebook' className='Facebook'/>
                <img src={Linkedin} alt='Linkedin' className='Svg'/>
                <img src={Twitter} alt='Twitter' className='Svg'/>
            </div>
            <div className='Privacy'>
                <Link to="/" className='Link'>Politica y privacidad de datos</Link>
                <img src = {UamLogo} alt="UamLogo" className='Logo'/>
            </div>    
        </div>
    )
}

