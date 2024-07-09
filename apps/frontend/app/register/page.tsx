'use client';
import { useState } from "react";
import useApi from "../../data/hooks/useApi";

export default function Page() {

    const [name, setName] = useState('');
    const [nameError, setNameError] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const { httpPost } = useApi();

    async function handleRegister() {
        setNameError('')
        setEmailError('')
        setPasswordError('')
        const data = { name, email, password }
        const resp = await httpPost("/users", data)
        if (resp.success) {
            console.log('Sucesso!')
        } else {
            const errors = resp.errors
            console.log(errors)
            const indexErrorName = errors?.findIndex((err) => err.path.length > 1 && err.path[1] === 'name') ?? -1
            if (errors && errors?.length > 0 && indexErrorName !== -1) {
                const value = errors[indexErrorName]?.message ?? "Unexpected error"
                setNameError(value)
            }
            const indexErrorEmail = errors?.findIndex((err) => err.path.length > 1 && err.path[1] === 'email') ?? -1
            if (errors && errors?.length > 0 && indexErrorEmail !== -1) {
                const value = errors[indexErrorEmail]?.message ?? "Unexpected error"
                setEmailError(value)
            }
            const indexErrorPassword = errors?.findIndex((err) => err.path.length > 1 && err.path[1] === 'password') ?? -1
            if (errors && errors?.length > 0 && indexErrorPassword !== -1) {
                const value = errors[indexErrorPassword]?.message ?? "Unexpected error"
                setPasswordError(value)
            }
        }
    }

    return (
        <div className="relative h-screen bg-cover bg-center backdrop-brightness-50" style={{ backgroundImage: "url('/img/Rectangle.png')" }}>
            <div className="absolute inset-0 bg-black bg-opacity-90"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full">
                <div className="
                    flex flex-col justify-center items-center 
                    font-black text-[36px] text-white
                    ">
                    <div>Cadastre-se</div>
                    <div>na plataforma</div>
                </div>
                <div className="w-[450px] h-[422px] bg-[#18181B] p-8 border-2 border-gray-600 rounded-md">
                    <div className="flex flex-col pt-2">
                        <span className="text-white pb-1">
                            Nome
                            {nameError && <span className="text-red-500 text-xs pl-4">{nameError}</span>}
                        </span>
                        <input
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            className="rounded-md border-2 border-black bg-black text-white h-[43px]"
                        />
                    </div>
                    <div className="flex flex-col pt-2">
                        <span className="text-white pb-1">
                            Email
                            {emailError && <span className="text-red-500 text-xs pl-4">{emailError}</span>}
                        </span>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            type="text"
                            className="rounded-md border-2 border-black bg-black text-white h-[43px]"
                        />
                    </div>
                    <div className="flex flex-col pt-2">
                        <span className="text-white pb-1">
                            Senha
                            {passwordError && <span className="text-red-500 text-xs pl-4">{passwordError}</span>}
                        </span>
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            className="rounded-md border-2 border-black bg-black text-white h-[43px]"
                        />
                    </div>
                    <button
                        onClick={handleRegister}
                        className="bg-[#6D28D9] text-white rounded-md p-2 mt-6 w-full">
                        Registrar
                    </button>
                    <button className="bg-zinc-900 text-white border-[1px] border-gray-600 rounded-md p-2 mt-2 w-full">
                        Já possui conta?
                    </button>
                </div>
            </div>
        </div>
    )
}