import React from 'react'

const NewsletterSection = () => {
  return (
    <div className="w-screen flex items-center h-[600px] object-cover bg-cover bg-[url(/images/background.png)]">
      <div className="flex flex-col justify-center items-center w-[650px] h-[450px] ml-12  bg-black bg-opacity-70">
        
        <div className="mb-5 text-white">
          <h1 className="text-center text-5xl font-bold p-5">Newsletter</h1>
          <p className="text-center w-[400px] text-xl">Em breve: Cadastre-se para receber nossas novidades! Estamos trabalhando para oferecer a melhor experiência.</p>
        </div>

        <div className="flex flex-col justify-center items-center mb-10 gap-5">
          <input type="text" className="p-2 rounded-full w-60 text-sm" placeholder="Nome completo" />
          <input type="email" className="p-2 rounded-full w-60 text-sm" placeholder="E-mail" />
          <button className="w-40 text-white bg-green-500 p-2 rounded-full  font-bold">Inscreva-se</button>
        </div>

      </div>
    </div>
  )
}

export default NewsletterSection