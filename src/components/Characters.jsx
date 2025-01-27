import { ChevronLeft, ChevronRight } from 'lucide-react'
import React from 'react'

const Characters = () => {
  return (
    <div className="w-screen bg-[#1c130e] flex justify-center pb-4 pt-8">
      <div className="w-[90%] h-[570px] bg-white rounded-3xl">
        <div className="flex justify-center items-center h-[550px]">
          <div className="flex justify-center gap-28">

            <img src="../src/assets/images/characters/luffy.png" alt="" className="w-72 rounded-xl"/>

            <div className="w-1/2 text-[#062439] flex flex-col justify-center items-center">
              <h1 className="text-8xl font-title font-bold">Luffy</h1>
              <span className="space-x-6 border-2 border-[#c4b599] w-[50px] mt-4"></span>
              <h3 className="underline max-w-[300px] font-serif text-2xl text-center font-bold p-4">"Eu me tornarei o rei dos Piratas."</h3>
              <p className="max-w-[300px] font-serif text-justify">Ao completar 17 anos, Luffy parte em uma jornada do mar do East Blue para encontrar um tesouro lendário, o One Piece.
              </p>
            </div>
            
          </div>
          <div className="flex justify-center items-center">
            <button className="absolute left-20">
                <ChevronLeft color="#30251e" size={74} strokeWidth={1} />
            </button >
            <button className="absolute right-16">
                <ChevronRight color="#30251e" size={74} strokeWidth={1} />
            </button>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Characters