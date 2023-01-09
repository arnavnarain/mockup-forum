import React, { useState}  from "react";
import { useStytch } from '@stytch/react';
import { env } from "process";

export const Login = () => { 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const stytchClient = useStytch();

    const resetPassword = () => { 
        stytchClient.passwords.resetByEmailStart({
            email: env.APP_DEFAULT_EMAIL,
        });
    }

    const login = () => { 
        stytchClient.passwords.authenticate({ 
            email,
            password,
            session_duration_minutes: 60,
        });
    };
    return (
    <>
        <input placeholder="Email" 
            onChange={(e) => {
                setEmail(e.target.value)}}
        />
            <input placeholder="Password" 
            onChange={(e) => {
                setPassword(e.target.value)}}
        />
        
        <button onClick={login}> Login</button>

        <div>
            <p> Forgot your password? </p>
            <button onClick={resetPassword}> Reset Password</button>
        </div>
    </>
    )
}