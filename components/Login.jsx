import React from 'react'
import loginImg from '../assets/login.jpg'

import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";


export default function Login() {

    const { signin } = useAuth();
    const navigate = useNavigate();
  
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");
  
    const handleLogin = () => {
      if (!email || !senha) {
        setError("Preencha todos os campos");
        return;
      }
  
      const res = signin(email, senha);
  
      if (res) {
        setError(res);
        return;
      }
  
      navigate("/home");
    };
  
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
        <div className='hidden sm:block'>
            <img className='w-full h-full object-cover' src={loginImg} alt="" />
        </div>

        <div className='bg-gray-800 flex flex-col justify-center'>
            <form className='max-w-[400px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8'>
                <h2 className='text-4xl dark:text-white font-bold text-center'>SIGN IN</h2>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Username</label>
                    <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' 
                        type="email"
                        placeholder="Digite seu E-mail"
                        value={email}
                        onChange={(e) => [setEmail(e.target.value), setError("")]}
                         />
                </div>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Password</label>
                    <input className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' 
                        type="password"
                        placeholder="Digite sua Senha"
                        value={senha}
                        onChange={(e) => [setSenha(e.target.value), setError("")]}
                        />
                </div>
                
                <div className='flex justify-between text-gray-400 py-2'>
                    <p className='flex items-center'><input className='mr-2' type="checkbox" /> Remember Me</p>
                    <Link to="/signup2">&nbsp;Registre-se</Link>
                    
                    
                </div>
                <button className='w-full my-5 py-2 bg-violet-700 shadow-lg shadow-violet-500/50 hover:shadow-violet-500/40 text-white font-semibold rounded-lg' onClick={handleLogin}    >SIGNIN</button>
                
            </form>
        </div>
    </div>
  )
}
