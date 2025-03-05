import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react'
import logo from "/images/logo.webp"

const Contact = () => {

    const socialIcons = [
        <Facebook aria-label="Ir para perfil no Facebook" />, 
        <Instagram aria-label="Ir para perfil no Instagram" />, 
        <Youtube aria-label="Ir para perfil no Youtube" />,
        <Twitter aria-label="Ir para perfil no Twitter" />
    ]

    const links = [
        { href: "#home", title: "Home" },
        { href: "#characters", title: "Personagens" },
        { href: "#fruits", title: "Frutas" },
        { href: "#newsletter", title: "Newsletter" },
        { href: "#contact", title: "Contato" },
    ]

    return (
        <div id="contact" className="w-screen h-[650px] max-sm:h-[800px] bg-[#1c130e]">
            <div className="flex flex-col justify-center items-center text-white pt-20 max-sm:pt-28">
                <h1 className="text-5xl max-sm:text-4xl font-serif font-semibold pb-8 text-center max-sm:pb-10">The Pirate's Log</h1>
                <img className="hidden max-sm:block w-40 " src={logo} alt="" />
                <nav className="w-[800px] max-sm:hidden">
                    <ul className="flex justify-center gap-8 p-20 pb-24  border-b-2">
                        {links.map((link, index) => (
                            <li
                                key={index}
                                className="font-roboto font-light text-2xl hover:border-b-2 hover:text-[#C4B394] hover:font-bold hover:border-[#C4B394]"
                            >
                                <a href={link.href}>{link.title}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            <div className="flex flex-col justify-center items-center text-white pb-2">
                <h2 className="text-2xl p-12 max-sm:p-28 max-sm:border-t-2">Siga-nos</h2>
                <ul className="flex gap-8 pt-6 max-sm:pt-0 pb-12 max-sm:pb-28">
                    {socialIcons.map((icon, index) => (
                        <li key={index} className="border-2 p-2 rounded-full hover:bg-[#C4B394]">
                            <a href="#contact">{icon}</a>
                        </li>
                    ))}
                </ul>
                <p className="font-roboto font-semibold text-center max-sm:text-xs">The Pirate's Log &copy; 2024 — Todos os direitos reservados</p>
            </div>
        </div>
    )
}

export default Contact