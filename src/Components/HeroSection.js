import React from 'react';
import '../App.css';
import { Button } from './Button';
import img1 from './images/image4.jpg';
import './HeroSection.css';


function HeroSection() {
  return (
    <div className='hero-container'>
      <img src={img1} alt=" "/>
      <h1>Empowering doctors with data-driven insights for smarter diabetes care.</h1>
    </div>
  );
}

export default HeroSection;