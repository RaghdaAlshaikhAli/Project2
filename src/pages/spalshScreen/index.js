import React from 'react';
import './style.css';
import logo from '../../assets/images/logo2.png'

function SplashScreen({ onAnimationEnd }) {
    return (
        <div className='width'>
        <div className="splash-screen" onAnimationEnd={onAnimationEnd}>
            <img src={logo} alt='' loading='lazy' />
        </div>
        </div>
    );
}

export default SplashScreen;
