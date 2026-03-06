import React, { useState } from "react";
import supabase from "../helper/supabaseClient"
import "../helper/register.css"

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        setMessage("");

        const {data, error} = await supabase.auth.signup({
            email: email, password: password,
        });

        if (error) { setMessage(error.setMessage); return; }

        if (data) { setMessage("User Account Created"); }

    };

    return (
        <div className="maxSize centercenter">
            <h2 >Register</h2>
            {message && <span>{message}</span>}
            <form className="centercenter" onSubmit={handleSubmit}>
                <p>Username:</p>
                <input type="text" placeholder="Email" required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                ></input>
                <p>Password:</p>
                <input type="password" placeholder="Password" required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                ></input>
                <br></br>
                <button type="Submit">Create Account</button>
            </form> 
        </div>
    );
}

export default Register;