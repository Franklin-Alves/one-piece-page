import { useEffect, useState } from 'react'
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
    <div
      id='newsletter'
      className="w-screen flex max-lg:justify-center items-center h-[680px] max-sm:h-[800px] object-cover bg-cover bg-[url(/images/background.webp)] max-sm:bg-[url(/images/background-mobile.webp)]"
    >
      <motion.div
        className="flex flex-col justify-center items-center w-[650px] max-sm:w-[300px] h-[450px] ml-12 max-lg:ml-0  bg-black bg-opacity-70"
        initial={{ opacity: 0, scale: 0 }}
        animate={!isAnimitionEnd ? { opacity: 1, scale: 1, rotate: 360 } : { opacity: 0, scale: 0 }}
        transition={{ duration: 1 }}
        viewport={{ amount: 0.5, once: true }}
      >

        <div className="mb-5 text-white max-sm:flex max-sm:flex-col max-sm:items-center">
          <h1 className="text-center text-5xl max-sm:text-4xl font-bold p-5">Newsletter</h1>
          <p className="text-center w-[400px] max-sm:w-[250px] text-xl max-sm:text-xs">Em breve: Cadastre-se para receber nossas novidades! Estamos trabalhando para oferecer a melhor experiência.</p>
        </div>

        <div className="flex flex-col justify-center items-center mb-10 gap-5">
          <input type="text" className="p-2 max-sm:p-1 rounded-full w-60 max-sm:w-40 text-xs" placeholder="Nome completo" />
          <input type="email" className="p-2 max-sm:p-1 rounded-full w-60 max-sm:w-40 text-xs" placeholder="E-mail" />
          <button className="w-40 max-sm:w-32 text-white max-sm:text-sm bg-green-500 p-2 max-sm:p-1 rounded-full  font-bold">Inscreva-se</button>
        </div>

      </motion.div>
    </div>
  )
}

export default NewsletterSection