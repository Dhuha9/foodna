import React from 'react'
import CtaButton from '../CtaButton/CtaButton';
import './HeroComponent.css';

export default function HeroComponent() {
    return (
        <div className="bg">
            <h1>You have Extra food ?</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <CtaButton />
            <div className="side-crop">
                <img className="hero-pic" src="img/apple.jpg" alt="" />
            </div>
            
        </div>
    )
}
