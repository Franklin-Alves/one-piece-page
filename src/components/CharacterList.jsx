import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'
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
    <div className="flex justify-center items-center h-[550px] max-lg:h-[500px]">
      <div key={characterDetails.id}
        className="flex">
        <AnimatePresence mode='await'>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.4 }
            }}
            className="flex max-sm:flex-col justify-center max-sm:items-center gap-28 max-lg:gap-10 max-sm:gap-6"
          >
            <img src={characterDetails.image} alt="" className="w-[300px] max-lg:w-[230px] max-sm:max-w-[150px] rounded-xl" />

            <div className="w-1/2 text-[#062439] flex flex-col justify-center items-center">
              <h1 className="text-8xl max-lg:text-6xl max-sm:text-3xl font-title font-bold">{characterDetails.name}</h1>
              <span className="space-x-6 border-2 border-[#c4b599] w-[50px] mt-4"></span>
              <h3 className="underline max-w-[300px] max-sm:w-[200px] font-serif text-2xl max-lg:text-lg max-sm:text-sm text-center font-bold p-4">"{characterDetails.title}"</h3>
              <p className="max-w-[300px] max-lg:max-w-[270px] font-serif text-justify max-sm:text-xs text-sm">{characterDetails.description}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center items-center">
          <motion.button name="voltar" onClick={() => prevCharacter(characterDetails.id)} className="absolute left-20 max-lg:left-4 max-sm:left-8">
            <ChevronLeft color="#30251e" size={74} strokeWidth={1} />
          </motion.button >
          <motion.button name="avançar" onClick={() => nextCharacter(characterDetails.id)} className="absolute right-16 max-lg:right-4 max-sm:right-7">
            <ChevronRight color="#30251e" size={74} strokeWidth={1} />
          </motion.button>
        </div>

      </div>
    </div>
  )
}

export default CharacterList