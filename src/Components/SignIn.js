import React, { useEffect, useState } from "react"
import axios from "axios"
import {useNavigate, Link} from "react-router-dom"
import './SignIn.css'

import ImageInput from "./ImageInput"
import user_icon from './images/user.jpg';
import email_icon from './images/email.jpg';
import password_icon from './images/padlock.jpg';

function SignIn() {
    const navigate = useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const json= JSON.stringify({email, password});

    async function submit(e){
        e.preventDefault();

        try{

             const res= await axios.post("http://127.0.0.1:5000/login",json ,{
                headers: {
                  'Content-Type': 'application/json'
                }
              })
            .then(res=>{
                console.log(res)
                if(res.data.message==="Login successful!"){
                    navigate("/dash", { state: { id: email } });
                }
                else if(res.data.message==="Invalid credentials"){
                    alert("User have not sign up. Please Sign UP")
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }
    
    }


    return (
        <div className="login_container">
                <div className="login">
                    <h1>Login</h1>
                    <form action="POST">
                        <ImageInput type="email" placeholder="Email" value= {email} icon={email_icon} onChange={(e) => { setEmail(e.target.value) }} />
                        <ImageInput type="password" placeholder="Password" value={password} icon={password_icon} onChange={(e) => { setPassword(e.target.value) }} /> 
                        <input type="submit" onClick={submit} />
                    </form>
                    <br />
                    <p>OR</p>
                    <br />

                    <Link to="/Sign-Up">Signup Page</Link>

            </div>
        </div>
        
    )
}

export default SignIn; 
