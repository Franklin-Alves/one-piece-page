import React, { useEffect, useState } from 'react'
import { motion } from "motion/react"

const NewsletterSection = () => {

  const [isAnimitionEnd, setAnimationEnd] = useState(false)

  useEffect(() => {
    const handleScroll = () => {

      let current = "newsletter"
      let section = document.getElementById(current)
      
      if (section) {
        let rect = section.getBoundingClientRect()
        if (rect.top <= 360 && rect.bottom >= 100) {
          setAnimationEnd(false)
        }
        else {
          setAnimationEnd(true)
        }

      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll);

  }, [])

  return (
    <div id='newsletter' className="w-screen flex items-center h-[680px] object-cover bg-cover bg-[url(/images/background.png)]">
      <motion.div

        className="flex flex-col justify-center items-center w-[650px] h-[450px] ml-12  bg-black bg-opacity-70"
        initial={{ opacity: 0, scale: 0 }}
        animate={!isAnimitionEnd ? { opacity: 1, scale: 1, rotate: 360 } : { opacity: 0, scale: 0 }}
        transition={{ duration: 1 }}
        viewport={{ amount: 0.5, once: true }}
      >

        <div className="mb-5 text-white">
          <h1 className="text-center text-5xl font-bold p-5">Newsletter</h1>
          <p className="text-center w-[400px] text-xl">Em breve: Cadastre-se para receber nossas novidades! Estamos trabalhando para oferecer a melhor experiência.</p>
        </div>

        <div className="flex flex-col justify-center items-center mb-10 gap-5">
          <input type="text" className="p-2 rounded-full w-60 text-sm" placeholder="Nome completo" />
          <input type="email" className="p-2 rounded-full w-60 text-sm" placeholder="E-mail" />
          <button className="w-40 text-white bg-green-500 p-2 rounded-full  font-bold">Inscreva-se</button>
        </div>

      </motion.div>
    </div>
  )
}

export default NewsletterSection