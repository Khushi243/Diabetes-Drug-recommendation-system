import React from 'react'

import '../App.css'
import './ImageCard.css';
import image7 from './images/image7.jpg'
import image1 from './images/image1.jpeg'
import image5 from './image5.png'

function ImageCard(){
  return (
    <div className='ImageCard'>
        <div className='cards'>
            <ul>
                <li>
                    <div className='card-item'>
                        <div className='item-info'>
                            <img src={image7}  alt=""/>
                            <div>
                                <h3>Diabetes Care</h3>
                            </div>
                        </div>
                        <p>SugarWise is a comprehensive web platform designed to empower healthcare professionals in making informed decisions for their diabetic patients. We provide a suite of advanced tools and resources to streamline the diagnosis confirmation process and optimize medication recommendations.
                    </p>
                    </div>   
                </li>
                <li>
                    <div className='card-item'>
                        <div className='item-info'>
                            <img src={image1} alt=" " />
                            <div>
                                <h3>AI-Powered</h3>
                            </div>
                        </div>
                        <p>Leverage our AI-powered system to receive tailored medication suggestions based on patient's individual profile, including medical history, current medications, and lab results. Utilize our decision support tools and differential diagnosis aids to refine and confirm your diabetic patient's diagnosis with greater confidence.
                    </p>
                    </div>
                </li>
                <li>
                    <div className='card-item'>
                        <div className='item-info'>
                            <img src={image5} alt="" />
                            
                            <div>
                                <h3>Up-To-Date sources</h3>
                            </div>
                        </div>
                        <p>The website provides access to up-to-date clinical resources, ensuring medical professionals have the latest information on diabetes management and medication advancements available. The secure patient portal allows access to patient information, medication history, and lab results, saving time and simplifying record-keeping.
                    </p>
                    </div>  
                </li>
            </ul>
        </div>     
    </div>
  )
}

export default ImageCard