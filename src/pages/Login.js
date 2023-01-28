import React, { useState}  from "react";
import { useStytch } from '@stytch/react';
import { MainContainer, Button } from '../components/MainContainer';


export const Login = () => { 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const stytchClient = useStytch();

    const resetPassword = () => { 
        stytchClient.passwords.resetByEmailStart({
            email:  process.env.REACT_APP_TOKEN
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
        <div
        style={{
            position: 'absolute', left: '50%', top: '30%',
            transform: 'translate(-50%, -50%)'
        }}
        >
            <br/>
            <MainContainer> 
            <h1 style={{color: "black"}}>Login</h1>
                <input placeholder="Email" 
                    onChange={(e) => {
                        setEmail(e.target.value)}}
                />
                <br></br>
                <input placeholder="Password" 
                    onChange={(e) => {
                        setPassword(e.target.value)}}
                />
                
                <br />
                <Button onClick={login}> Login</Button>
                <div>
                    <p style={{color: "black"}}> Forgot your password? </p>
                    <Button onClick={resetPassword}> Reset Password</Button>
                </div>
            </MainContainer>
        </div>
    )
}