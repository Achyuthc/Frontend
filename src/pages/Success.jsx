import { createClient } from '@supabase/supabase-js';
import { Auth, ThemeSupa} from '@supabase/auth-ui-react';
import {useNavigate } from 'react-router-dom';
//import { darkThemes } from '@supabase/auth-ui-react'; 
import React, {useEffect, useState} from 'react';
//import { enhanceManualRouteObjects } from 'react-router/dist/lib/components';
import { supabase } from '../client';

function Success() {
    const [user, setUser] = useState({});
    const navigate =  useNavigate();
    useEffect (() => {

        async function getUserData() {
            await supabase.auth.getUser().then((value) => {
            // value.data.user
            if(value.data?.user) {
            console.log(value.data.user);
            setUser(value.data.user);
            }
            })
        }

        getUserData();

        }, []);

        async function signOutUser() {
            const { error } = await supabase.auth.signOut();
            navigate("/");
        }

    return ( 
        <div className="App">
        <header className="App-header">
        { Object.keys (user).length !== 0 ?
                <>
                    <h1>Success</h1>
                    <button onClick={() => signOutUser()}>Sign Out</button>
                </>
            :
                <>
            <h1>Mate, you are not logged in yet</h1>
            <button onClick={() => { navigate("/") }}>Go back home!</button>
            </>
        }
        </header>
        </div>
    );
    }
    export default Success;