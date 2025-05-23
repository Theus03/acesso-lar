'use client'

import { signInEmail } from "@/app/api/auth"
import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Login() {

    useEffect(() => {
        sessionStorage.clear();
    }, []);

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    
    async function login() {
        const user: User = {
            email: email,
            password: password
        }
        const userAuth = await signInEmail(user);

        if (userAuth != undefined && userAuth.name != null) {
            sessionStorage.setItem('name', userAuth.name);
            redirect('/home');
        } else {
            alert("Email ou senha inválidos");
        }

    }

    return (
        <div className="bg-primary h-100">
            <main className="p-16">
                <img src="logo.png" alt="Logo da AcessoLar" />
                <div className="mt-12 flex flex-col gap-10 pl-6">
                    <h1 className="font-bold text-4xl">Login</h1>
                    <button onClick={() => signIn("google", { callbackUrl: "/home" })} className="border rounded-2xl border-gray-600 p-5 w-2xl text-gray-600 flex gap-4 items-center justify-center text-2xl cursor-pointer ease-in-out duration-75 hover:border-gray-400"> <img src="logo-google.png" alt="Logo da Google" /> Continue com o Google</button>
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
                    <span className="absolute bg-primary left-32 top-6/12 mt-20 text-2xl pl-2 pr-2">Senha</span>
                        <input className="border w-2xl p-5 rounded-2xl border-gray-800 text-2xl" type="password" title="Senha" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button className="p-5 w-2xl bg text-white bg-teal-700 rounded-2xl text-2xl text-bold cursor-pointer ease-in-out duration-75 hover:bg-teal-800" type="button" onClick={login}>Entrar</button>
                    <div className="flex items-center justify-center gap-2 w-2xl">
                        <hr className="bg-black w-16" />
                        <span className="text-2xl text-gray-600">Ou <a href="/register" className="underline">Registre-se agora</a></span>
                        <hr className="bg-black w-16" />
                    </div>
                </div>
            </main>
            <img className="absolute right-0 top-0 bottom-0 w-3xl" src="background-login.png" alt="Imagem de uma sala"/>
        </div>
    )
}