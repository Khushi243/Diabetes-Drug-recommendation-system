import React, { useState } from 'react';
import './Dashboard.css';
import axios from 'axios';
import {useNavigate, Link} from "react-router-dom"

const Dashboard = () => {
    const navigate = useNavigate();

    // State variables to store user input
    const [userInfo, setUserInfo] = useState({
        patientName: '',
        patientNbr: '',
        race: '',
        gender: '',
        age: '',
        weight: ''
    });

    const [medicationInfo, setMedicationInfo] = useState({
        insulin: 0,
        metformin: 0,
        glipizide: 0,
        glyburide: 0,
        pioglitazone: 0,
        rosiglitazone: 0,
        glimepiride: 0,
        repaglinide: 0,
        glyburideMetformin: 0,
        nateglinide: 0
    });

    // Handle input change for user information
    const handleUserInfoChange = (e) => {
        const { name, value } = e.target;
        setUserInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Handle input change for medication information
    const handleMedicationRadioChange = (e) => {
        const { name, value } = e.target;
        const modifiedValue = value === 'Yes' ? 'Yes' : 'No'; // Ensure the value is a string "Yes" or "No"
        setMedicationInfo(prevState => ({
            ...prevState,
            [name]: modifiedValue
        }));
    };
    

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Prepare data to send in the request
        const requestData = {
            patientName: userInfo.patientName,
            patientNbr: userInfo.patientNbr,
            race: userInfo.race,
            gender: userInfo.gender,
            age: userInfo.age,
            weight: userInfo.weight,
            ...medicationInfo
        };

        try {
            const response = await axios.post('http://localhost:5000/recommendations', requestData);
            if (response.data.status === 'success') {
              navigate("/report", { state: { recommendations: response.data.recommendations } });
            } 
        } catch (error) {
            // Handle errors
            console.error('Error:', error);
            alert("Wrong Details")
        }

        // Reset the form
        setUserInfo({
            patientName: '',
            ncounterId: '',
            patientNbr: '',
            race: '',
            gender: '',
            age: '',
            weight: ''
        });

        setMedicationInfo({
            insulin: 0,
            metformin: 0,
            glipizide: 0,
            glyburide: 0,
            pioglitazone: 0,
            rosiglitazone: 0,
            glimepiride: 0,
            repaglinide: 0,
            glyburideMetformin: 0,
            nateglinide: 0
        });
};

    return (
        <div className='main'>
            <h2 className='heading'>Welcome to SugarWise!</h2>
            <h3 className='heading2'>Enter the details</h3>
            <form onSubmit={handleSubmit}>
                {/* User Information Inputs */}
                <div className='med'>
                <div className='element'> 
                    <label>Patient Name:</label>
                    <input type="text" name="patientName" value={userInfo.patientName} onChange={handleUserInfoChange} />
                </div>

                <div className='element'>
                    <label>Patient ID:</label>
                    <input type="text" name="patientNbr" value={userInfo.patientNbr} onChange={handleUserInfoChange} />
                </div>
                
                <div className='element'>
                    <label>Race:</label>
                    <input type="text" name="race" value={userInfo.race} onChange={handleUserInfoChange} />
                </div>

                <div className='element'>
                    <label>Gender:</label>
                    <input type="text" name="gender" value={userInfo.gender} onChange={handleUserInfoChange} />
                </div>

                <div className='element'>
                    <label>Age:</label>
                    <input type="text" name="age" value={userInfo.age} onChange={handleUserInfoChange} />
                </div>
            
                <div className='element'>
                    <label>Weight:</label>
                    <input type="text" name="weight" value={userInfo.weight} onChange={handleUserInfoChange} />
                </div>

                <div className='element'>
                <label>Insulin:</label>
                        <input type="radio" id="insulinYes" name="insulin" value="Yes" onChange={handleMedicationRadioChange} />
                        <label htmlFor="insulinYes">Yes</label>
                        <input type="radio" id="insulinNo" name="insulin" value="No" onChange={handleMedicationRadioChange} />
                        <label htmlFor="insulinNo">No</label>
                </div>

                <div className='element'>
                <label>Metformin:</label>
                    <input type="radio" id="metforminYes" name="metformin" value="Yes" onChange={handleMedicationRadioChange} />
                        <label htmlFor="MetforminYes">Yes</label>
                        <input type="radio" id="MetforminNo" name="metformin" value="No" onChange={handleMedicationRadioChange} />
                        <label htmlFor="MetforminNo">No</label>
                </div>

                    
                    <div className='element'>
                    <label>Glipizide:</label>
                    <input type="radio" id="GlipizideYes" name="glipizide" value="Yes" onChange={handleMedicationRadioChange} />
                    <label htmlFor="GlipizideYes">Yes</label>
                    <input type="radio" id="GlipizideNo" name="glipizide" value="No" onChange={handleMedicationRadioChange} />
                    <label htmlFor="GlipizideNo">No</label>
                </div>
                    
                    <div className='element'>
                    <label>Glyburide:</label>
                        <input type="radio" id="GlyburideYes" name="glyburide" value="Yes" onChange={handleMedicationRadioChange} />
                        <label htmlFor="GlyburideYes">Yes</label>
                        <input type="radio" id="GlyburideNo" name="glyburide" value="No" onChange={handleMedicationRadioChange} />
                        <label htmlFor="GlyburideNo">No</label>
                    </div>

            
                    
                    <div className='element'>
                    <label>Pioglitazone:</label>
                        <input type="radio" id="PioglitazoneYes" name="pioglitazone" value="Yes" onChange={handleMedicationRadioChange} />
                        <label htmlFor="PioglitazoneYes">Yes</label>
                        <input type="radio" id="PioglitazoneNo" name="pioglitazone" value="No" onChange={handleMedicationRadioChange} />
                        <label htmlFor="PioglitazoneNo">No</label>
                    </div>
            
               
                    
                    <div className='element'>
                    <label>Rosiglitazone:</label>
                        <input type="radio" id="RosiglitazoneYes" name="rosiglitazone" value="Yes" onChange={handleMedicationRadioChange} />
                        <label htmlFor="RosiglitazoneYes">Yes</label>
                        <input type="radio" id="RosiglitazoneNo" name="rosiglitazone" value="No" onChange={handleMedicationRadioChange} />
                        <label htmlFor="RosiglitazoneNo">No</label>
                    </div>
              
               
                    
                    <div className='element'>
                    <label>Glimepiride:</label>
                        <input type="radio" id="GlimepirideYes" name="glimepiride" value="Yes" onChange={handleMedicationRadioChange} />
                        <label htmlFor="GlimepirideYes">Yes</label>
                        <input type="radio" id="GlimepirideNo" name="glimepiride" value="No" onChange={handleMedicationRadioChange} />
                        <label htmlFor="GlimepirideNo">No</label>
                    </div>
                
               
                    
                    <div className='element'> 
                    <label>Repaglinide:</label>
                        <input type="radio" id="RepaglinideYes" name="repaglinide" value="Yes" onChange={handleMedicationRadioChange} />
                        <label htmlFor="RepaglinideYes">Yes</label>
                        <input type="radio" id="RepaglinideNo" name="repaglinide" value="No" onChange={handleMedicationRadioChange} />
                        <label htmlFor="RepaglinideNo">No</label>
                    </div>
        
         
                    
                    <div className='element'> 
                    <label>Glyburide Metformin:</label>
                        <input type="radio" id="GlyburideMetforminYes" name="glyburideMetformin" value="Yes" onChange={handleMedicationRadioChange} />
                        <label htmlFor="GlyburideMetforminYes">Yes</label>
                        <input type="radio" id="GlyburideMetforminNo" name="glyburideMetformin" value="No" onChange={handleMedicationRadioChange} />
                        <label htmlFor="GlyburideMetforminNo">No</label>
                    </div>
                    
                    <div className='element'>
                    <label>Nateglinide:</label>
                        <input type="radio" id="NateglinideYes" name="nateglinide" value="Yes" onChange={handleMedicationRadioChange} />
                        <label htmlFor="NateglinideYes">Yes</label>
                        <input type="radio" id="NateglinideNo" name="nateglinide" value="No" onChange={handleMedicationRadioChange} />
                        <label htmlFor="NateglinideNo">No</label>
                    </div>
                </div>


                {/* Submit Button */}
                <div className="submit-btn">
                <button type="submit">Submit</button>
                </div>
            </form>
        <footer className='down'>
            <p>&copy; All Rights Reserved</p>
        </footer>
        </div>
        

    );
};

export default Dashboard;