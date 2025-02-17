import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react'
import React from 'react'

const Footer = () => {

    const socialIcons = [<Facebook />, <Instagram />, <Youtube />, <Twitter />]

    return (
        <div className="w-screen bg-[#1c130e]">
            <div className="flex flex-col justify-center items-center text-white pt-20">
                <h1 className="text-5xl font-serif font-semibold pb-8">The Pirate's Log</h1>
                <nav className="w-[800px]">
                    <ul className="flex justify-center gap-8 p-20 pb-24 font-roboto font-normal text-2xl border-b-2">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Personagens</a></li>
                        <li><a href="#">Frutas</a></li>
                        <li><a href="#">Newsletter</a></li>
                        <li><a href="#">Contato</a></li>
                    </ul>
                </nav>
            </div>
            <div className="flex flex-col justify-center items-center text-white pb-2">
                <h2 className="text-2xl p-8">Siga-nos</h2>
                <ul className="flex gap-8 p-8">
                    {socialIcons.map((icon, index) => (
                        <li className="border-2 p-2 rounded-full">{icon}</li>
                    ))}
                </ul>
                <p className="font-roboto font-semibold">The Pirate's Log &copy; 2024 — Todos os direitos reservados</p>
            </div>
        </div>
    )
}

export default Footer