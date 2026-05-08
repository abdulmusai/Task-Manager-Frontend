import React, { useState } from 'react';
import {login} from '../services/api';

const Login = ({ setToken }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const {data} = await login({email, password});
            localStorage.setItem('token', data.token); //Store the key to the backend
            setToken(data.token);
        } catch(err){
            alert('Login failed! Check your email or password.');
        }
    };

    return(
        <form onSubmit={handleSubmit}>
            <input type='emil' placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
            <input types='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
            <button type='submit'>Login</button> 
        </form>
    );
};

export default Login;