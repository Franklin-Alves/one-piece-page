import { ChevronLeft, ChevronRight } from 'lucide-react'
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'

const CharacterList = ({ charactersData }) => {

  function nextCharacter(id) {
    const newCharacter = charactersData.find(character => character.id > id) ? charactersData[id] : charactersData.find(character => character.id == 1)
    setCharacterDetails(newCharacter)
  }

  function prevCharacter(id) {
    const newCharacter = charactersData.find(character => character.id < id) ? charactersData[id - 2] : charactersData.find(character => character.id == charactersData.length)
    setCharacterDetails(newCharacter)
  }

  const [characterDetails, setCharacterDetails] = useState(charactersData[0])

  return (
    <div className="flex justify-center items-center h-[550px]">
      <div key={characterDetails.id}
        className="flex">
        <AnimatePresence mode='await'>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            // animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.4 }
            }}
            className="flex justify-center gap-28"
          >
            <img src={characterDetails.image} alt="" className="w-[300px] rounded-xl" />

            <div className="w-1/2 text-[#062439] flex flex-col justify-center items-center">
              <h1 className="text-8xl font-title font-bold">{characterDetails.name}</h1>
              <span className="space-x-6 border-2 border-[#c4b599] w-[50px] mt-4"></span>
              <h3 className="underline max-w-[300px] font-serif text-2xl text-center font-bold p-4">"{characterDetails.title}"</h3>
              <p className="max-w-[300px] font-serif text-justify">{characterDetails.description}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center items-center">
          <motion.button onClick={() => prevCharacter(characterDetails.id)} className="absolute left-20">
            <ChevronLeft color="#30251e" size={74} strokeWidth={1} />
          </motion.button >
          <motion.button onClick={() => nextCharacter(characterDetails.id)} className="absolute right-16">
            <ChevronRight color="#30251e" size={74} strokeWidth={1} />
          </motion.button>
        </div>

      </div>
    </div>
  )
}

export default CharacterList