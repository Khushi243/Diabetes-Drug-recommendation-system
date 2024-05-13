import React from 'react'
import img1 from './images/image9.jpg'
import './About.css'
function About() {
  return (
    <div className='about'>
        
        <div className='about-left'>
            <img src={img1} alt="" className='about_image'/>

        </div>
        <div className='about-right'>
            <h2>About SugarWise Diabetes Center</h2>
            <p>SugarWise is a project focused on developing a website for a project recommendation system for diabetic patients and medical professionals. It aims to offer valuable and helpful features tailored to the diabetic community, including patient details and medicine recommendations based on several factors. Our goal is to help medical professionals quickly diagnose diabetic patients and recommend personalized medicine. Additionally, we have potential future goals such as expanding to offer personalized diet plans for diabetic patients.</p>
        </div>
        <footer className='down'>
            <p>&copy; All Rights Reserved</p>
        </footer>
    </div>
  )
}

export default About