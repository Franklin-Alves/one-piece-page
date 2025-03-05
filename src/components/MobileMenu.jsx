import { useState } from 'react'
import { motion } from "motion/react"
import { Menu, X } from 'lucide-react'

const MobileMenu = () => {

    const MenuVariants = {
        open: { x: 0, opacity: 1, visibility: "visible", transition: { type: "spring", duration: 1, bounce: 0.5 } },
        closed: { x: "-100%", opacity: 0, visibility: "hidden" },
    }

    const links = [
        { href: "#home", title: "Home" },
        { href: "#characters", title: "Personagens" },
        { href: "#fruits", title: "Frutas" },
        { href: "#newsletter", title: "Newsletter" },
        { href: "#contact", title: "Contato" },
    ]

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="absolute right-2 top-2 hidden max-lg:block">
            <button onClick={() => setIsOpen(!isOpen)}>
                {!isOpen ? <Menu color="white" aria-label="Menu mobile" size={40} /> : ""}
            </button>

            <motion.div
                className="fixed w-[70%] right-0 top-0 h-full bg-[#F8F8FF] z-50"
                initial="closed"
                animate={isOpen ? "open" : "closed"}
                variants={MenuVariants}
            >
                <div className="flex flex-col">
                    <button className="" onClick={() => setIsOpen(!isOpen)}>
                        <X color="#1c130e" aria-label="Fechar menu" size={40} />
                    </button>

                    <nav className="flex flex-col text-end justify-end">
                        {links.map((link, i) => (
                            <a
                                key={i}
                                onClick={() => setIsOpen(false)}
                                className="p-4 bg-transparent font-bold font-sans max-sm:text-lg max-[1025px]:text-xl text-[#1c130e] hover:bg-[#D2691E] hover:text-white"
                                href={link.href}
                            >
                                {link.title}
                            </a>
                        ))}

                    </nav>

                </div>

            </motion.div>

        </div>
    )
}

export default MobileMenu