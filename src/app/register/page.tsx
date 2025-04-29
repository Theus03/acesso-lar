'use client'

import { signUp } from "@/app/api/auth"
import { useState } from "react";

export default function Register() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    
    function register() {
        const user: User = {
            email: email,
            password: password
        }
        signUp(user);
    }

    return (
        <div className="bg-primary h-100">
            <main className="p-16">
                <img src="logo.png" alt="Logo da AcessoLar" />
                <div className="mt-12 flex flex-col gap-10 pl-6">
                    <h1 className="font-bold text-4xl">Crie sua conta</h1>
                    <button className="border rounded-2xl border-gray-600 p-5 w-2xl text-gray-600 flex gap-4 items-center justify-center text-2xl cursor-pointer ease-in-out duration-75 hover:border-gray-400"> <img src="logo-google.png" alt="Logo da Google" /> Continue com o Google</button>
                    <div className="flex items-center justify-center gap-2 w-2xl">
                        <hr className="bg-black w-16" />
                        <span className="text-2xl text-gray-600">Ou cadastre-se com seu email</span>
                        <hr className="bg-black w-16" />
                    </div>
                    <div>
                        <span className="absolute bg-primary left-32 top-5/12 mt-12 text-2xl pl-2 pr-2">Email</span>
                        <input className="border w-2xl p-5 rounded-2xl border-gray-800 text-2xl" type="email" title="Email" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                    <span className="absolute bg-primary left-32 top-6/12 mt-20  text-2xl pl-2 pr-2">Senha</span>
                        <input className="border w-2xl p-5 rounded-2xl border-gray-800 text-2xl" type="password" title="Senha" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button className="p-5 w-2xl bg text-white bg-teal-700 rounded-2xl text-2xl text-bold cursor-pointer ease-in-out duration-75 hover:bg-teal-800" type="button" onClick={register}>Registrar Agora</button>
                    <div className="flex items-center justify-center gap-2 w-2xl">
                        <hr className="bg-black w-16" />
                        <span className="text-2xl text-gray-600">Ou <a href="/login" className="underline">Entre na conta agora</a></span>
                        <hr className="bg-black w-16" />
                    </div>
                </div>
            </main>
            <img className="absolute right-0 top-0 bottom-0 w-3xl" src="background-register.png" alt="Imagem de uma sala"/>
        </div>
    )
}