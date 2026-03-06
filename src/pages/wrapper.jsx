import React, { useEffect, useState } from "react";
import supabase from "../helper/supabaseClient";
import { Navigate } from "react-router-dom";

function Wrapper({children}) {
    const [auth, setAuth] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getSession = async () => {
            const {
                data: { session },
            } = await supabase.auth.getSession();

            setAuth(!!session);
            setLoading(false);
        };

        getSession();
    }, []);

    if (loading) {
        return <div>Loading . . . </div>;
    }
    else {
        if (auth) {
            return <>{children}</>;
        }
        return <Navigate to="/login"/>;
    }
}

export default Wrapper;