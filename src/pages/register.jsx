import React, { useState } from "react";
import supabase  from "../helper/supabaseClient"
import { Link } from "react-router-dom";

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
            {message && <p>{message}</p>}
            <form className="centercenter" onSubmit={handleSubmit}>
                <span>Email:</span>
                <input type="email" placeholder="Email" required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                ></input>
                
                <span>Password:</span>
                <input type="password" placeholder="Password" required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                ></input>
                
                <br></br>
                <button type="submit">Create Account</button>
            </form> 
            <br></br>
            <span>Already have an account?</span>
            <Link to="/login"> Login </Link>
        </div>
    );
}

export default Register;