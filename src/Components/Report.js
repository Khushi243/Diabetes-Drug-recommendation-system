import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import image1 from './images/image8.jpg'
import './Report.css'
const Report = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const recommendations = location.state?.recommendations || [];
  return (
    <div className="report-page">
        <div className= "report-container">
            <div className="image-container">
                <img src={image1} alt="" />
            </div>
            <div className="recommendations-box">
                <h2>Recommendation Results</h2>
                <h3>Recommended medicines are as follows:</h3>
                {recommendations.length > 0 ? (
                <ul>
                    {recommendations.map((recommendation, index) => (
                    <li key={index}>{recommendation}</li>
                    ))}
                </ul>
                ) : (
                <p>No recommendations available</p>
                )}
            </div>
        </div>
        <footer className='down'>
            <p>&copy; All Rights Reserved</p>
        </footer>
    </div>
);
};

export default Report;
