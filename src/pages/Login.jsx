import { createClient } from '@supabase/supabase-js';
import { Auth, ThemeSupa} from '@supabase/auth-ui-react';
import {useNavigate } from 'react-router-dom';
//import { darkThemes } from '@supabase/auth-ui-react'; 
import { supabase } from '../client';
function Login() {
    const navigate = useNavigate();
    supabase.auth.onAuthStateChange (async (event) => {
        if (event !== "SIGNED_OUT") {
        // forward to success URL
        navigate("/success")
        } else {
        // forward to localhost: 3000
        navigate("/")
        }
    });

    return ( 
    <div className="App">
    <header className="App-header">
        <div className='log'>
        <Auth supabaseClient = {supabase} appearance ={{theme : ThemeSupa}} theme = "white" providers={["google"]}/>
        </div>
        
    
    </header>
    </div>
    );
    }
    export default Login;