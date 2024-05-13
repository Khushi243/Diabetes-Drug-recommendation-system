import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"

import ImageInput from "./ImageInput"
import user_icon from './images/user.jpg';
import email_icon from './images/email.jpg';
import password_icon from './images/padlock.jpg';
import './SignIn.css';


function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const data = {
        name,
        email,
        password,
      };

    async function submit(e) {
        e.preventDefault();

        try {
            const response = await axios.post("http://127.0.0.1:5000/signup", data, {
                headers: {
                  'Content-Type': 'multipart/form-data'
                }});

        if (response.data.message === "exist") {
            alert("User already exists");
        } else if (response.data.message === "success") {
            // User created successfully, redirect to login with their email (ID)
            navigate("/login", { state: { id: email } });
        } else {
            // Handle unexpected responses gracefully
            console.error("Unexpected response from backend:", response.data);
            alert("An error occurred. Please try again later.");
        }
    } catch (error) {
        console.error("Error during signup:", error);
        alert("An error occurred. Please try again later.");
    }
  }
    return (
        <div className="login_container">
                <div className="login">

                <h1>Signup</h1>

                <form action="POST">
                    <ImageInput type="name" placeholder="Name" value= {name} icon={user_icon} onChange={(e) => { setName(e.target.value) }} />
                    <ImageInput type="email" placeholder="Email" value={email} icon={email_icon} onChange={(e) => { setEmail(e.target.value) }} />
                    <ImageInput type="password" placeholder="Password" value={password} icon={password_icon} onChange={(e) => { setPassword(e.target.value) }} /> 
                    <input type="submit" onClick={submit} />
                </form>

                <br />
                <p>OR</p>
                <br />

                <Link to="/login">Login Page</Link>

                </div>
        </div>
    )
}

export default Login 