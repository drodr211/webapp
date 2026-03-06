import React from "react";
import supabase  from "../helper/supabaseClient"
import { Link, useNavigate} from "react-router-dom";

function Dashboard() {
    const navigate = useNavigate();

    const signOut = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) throw error;
        navigate("/login");
    }
    return (
        <div>
            <h2>Welcome in.</h2>
            <button onClick={signOut}>Sign Out</button>

        </div>
    );
}

export default Dashboard;