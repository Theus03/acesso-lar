'use client'

import { signInEmail } from "@/app/api/auth"
import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import { User } from "../types/User";
import { Alert } from "@/components/Alert";

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
           Alert("Email ou senha inválidos. Tente novamente.", "error");
        }

    }

    return (
        <div className="bg-primary h-100">
            <main className="p-16">
                <Image src="/logo.png" width={200} height={200} alt="Logo da AcessoLar" />
                <div className="mt-12 flex flex-col gap-10 pl-6 max-[1530px]:items-center">
                    <h1 className="font-bold text-4xl">Login</h1>
                    <button onClick={() => signIn("google", { callbackUrl: "/home" })} className="border rounded-2xl border-gray-600 p-5 w-2xl text-gray-600 flex gap-4 items-center justify-center text-2xl cursor-pointer ease-in-out hover:border-gray-400 transition-transform duration-300 hover:translate-x-2 max-[650px]:w-136"> <Image width={32} height={100} src="/logo-google.png" alt="Logo da Google" /> Continue com o Google</button>
                    <div className="flex items-center justify-center gap-2 w-2xl">
                        <hr className="bg-black w-16" />
                        <span className="text-2xl text-gray-600">Ou cadastre-se com seu email</span>
                        <hr className="bg-black w-16" />
                    </div>
                    <div>
                        <span className="absolute bg-primary left-32 -mt-4 text-2xl pl-2 pr-2 max-[1530px]:left-1/3 max-[650px]:left-20">Email</span>
                        <input className="border w-2xl p-5 rounded-2xl border-gray-800 text-2xl max-[650px]:w-136" type="email" title="Email" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                    <span className="absolute bg-primary left-32 -mt-4 text-2xl pl-2 pr-2 max-[1530px]:left-1/3 max-[650px]:left-20">Senha</span>
                        <input className="border w-2xl p-5 rounded-2xl border-gray-800 text-2xl max-[650px]:w-136" type="password" title="Senha" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button className="p-5 w-2xl bg text-white bg-teal-700 rounded-2xl text-2xl text-bold cursor-pointer ease-in-out hover:bg-teal-800 transition-transform duration-300 hover:translate-x-2 max-[650px]:w-136" type="button" onClick={login}>Entrar</button>
                    <div className="flex items-center justify-center gap-2 w-2xl">
                        <hr className="bg-black w-16" />
                        <span className="text-2xl text-gray-600">Ou <a href="/register" className="underline">Registre-se agora</a></span>
                        <hr className="bg-black w-16" />
                    </div>
                </div>
            </main>
            <Image width={600} height={100} className="absolute right-0 top-0 bottom-0 w-3xl max-[1530px]:hidden" src="/background-login.png" alt="Imagem de uma sala"/>
        </div>
    )
}