import React, { useState } from "react";
import supabase  from "../helper/supabaseClient"
import { Link, useNavigate} from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        setMessage("");

        const { data, error } = await supabase.auth.signInWithPassword ({
            email: email, 
            password: password,
        });

        if (error) { 
            setMessage(error.message); 
            setPassword("");
            return; 
        }
        if (data) { 
            navigate("/dashboard");
            return null;
        }
    };
    return (
        <div className="maxSize centercenter">
            <h2 >Login</h2>
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
                <button type="submit">Login</button>
            </form> 
            <br></br>
            <span>Not signed up?</span>
            <Link to="/register"> Register </Link>
        </div>
    );
}

export default Login;