'use client';
import { useState } from "react";

export default function Page() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleRegister() {
        fetch('https://closeai-supertags.onrender.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                email,
                password
            })
        }).then((response) => {
            console.log(response)
        })
    }

    return (
        <div className="flex justify-center items-center h-dvh bg-gray-900">
            <div className="w-[300px]">
                <div className="flex flex-col justify-center items-center p-2 font-black">
                    <div className="text-white">Cadastre-se</div>
                    <div className="text-white">na plataforma</div>
                </div>
                <div className="flex flex-col pt-2">
                    <span className="text-white">Nome</span>
                    <input
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                        className="rounded-sm border-2 border-gray-400 bg-gray-800 text-white"
                    />
                </div>
                <div className="flex flex-col pt-2">
                    <span className="text-white">Email</span>
                    <input
                        type="text"
                        onChange={(e) => setEmail(e.target.value)}
                        className="ounded-sm border-2 border-gray-400 bg-gray-800 text-white"
                    />
                </div>
                <div className="flex flex-col pt-2">
                    <span className="text-white">Senha</span>
                    <input
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        className="ounded-sm border-2 border-gray-400 bg-gray-800 text-white"
                    />
                </div>
                <div>
                    <button
                        onClick={handleRegister}
                        className="bg-gray-300 text-black rounded-md p-2 mt-2 w-full">
                        Registrar
                    </button>
                </div>
                <div>
                    <button className="bg-zinc-900 text-white border-2 border-gray-100 rounded-md p-2 mt-2 w-full">
                        Já possui conta?
                    </button>
                </div>
            </div>
        </div>
    )
}