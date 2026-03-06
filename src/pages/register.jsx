import React, { useState } from "react";
import supabase  from "../helper/supabaseClient"
import "../helper/register.css"

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        setMessage("");

        const { data, error } = await supabase.auth.signUp({
            email: email, 
            password: password,
        });

        if (error) { setMessage(error.message); return; }
        if (data) { setMessage("User Account Created"); }

        setEmail(""); setPassword("");

    };

    return (
        <div className="maxSize centercenter">
            <h2 >Register</h2>
            <br></br>
            {message && <span>{message}</span>}
            <form className="centercenter" onSubmit={handleSubmit}>
                <p>Email:</p>
                <input type="email" placeholder="Email" required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                ></input>
                
                <p>Password:</p>
                <input type="password" placeholder="Password" required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                ></input>
                
                <br></br>
                <button type="submit">Create Account</button>
            </form> 
        </div>
    );
}

export default Register;