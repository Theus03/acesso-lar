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
        <div>
            <h1>Registre-se</h1>
            <input className="border" type="email" title="Email" onChange={(e) => setEmail(e.target.value)} />
            <input className="border" type="password" title="Senha" onChange={(e) => setPassword(e.target.value)} />
            <button className="p-6 bg-amber-600 text-white" type="button" onClick={register}>Registrar</button>
        </div>
    )
}