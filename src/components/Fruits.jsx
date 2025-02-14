import { Search } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { motion } from 'motion/react'



const Fruits = () => {

    const [isClick, setIsClick] = useState(false)
    const [showContent, setShowContent] = useState(false)

    useEffect(() => {
        if (isClick) {
            setTimeout(() => {setShowContent(true)}, 800)
        }
        else {
           setShowContent(false)
        }
        
    }, [isClick]) 

    return (
        <div className="w-screen bg-[#c4b394]">
            <div className='flex flex-col items-center p-16 gap-10'>
                <div className='flex w-80 rounded-lg border-2 gap-2'>
                    <button>
                        <Search className='ml-2' size={20} color='#fff' />
                    </button>
                    <input className="bg-transparent w-72 border-l-2" />
                </div>
                <div className="flex flex-wrap gap-10">
                    <motion.div
                        className="flex justify-center items-center cursor-pointer"
                        initial={{width: "120px"}}
                        animate={isClick ? {width: "256px", height: "293px"} : {width: "120px"}}
                        transition={{
                            delay: 0.3,
                            duration: 0.5,                           
                        }}
                        onClick={() => setIsClick(!isClick)}

                    >
                        <div className={`flex flex-col justify-center items-center bg-white w-64 rounded-2xl p-4`}>
                            <img className="w-32" src="/images/fruits/gomu-gomu-no-mi.png" alt="" />
                            
                            <motion.div
                                className="p-2 border-t border-black"
                                initial={{ display: "none", scale: 0 }}
                                animate={ showContent ? { display: "block", scale: 1 } : {  }}
                                transition={{
                                    duration: 0.5,
                                    display: isClick ? { type: "spring", visualDuration: 0.4, bounce: 0.8 } : {}
                                }}

                            >
                                <h1 className="font-title font-bold text-xl">Gomu Gomu No Mi</h1>
                                <p className="text-xs text-[#30251e] text-justify font-roboto">A Gomu Gomu no Mi, conhecida originalmente como Hito Hito no Mi, Modelo: Nika, é uma Akuma no Mi do tipo Zoan Mítica que permite ao usuário se transformar no lendário "Deus do Sol" Nika e ganhar seus atributos, notavelmente um corpo com 100% depropriedades da borracha</p>
                            </motion.div>
                        </div>
                    </motion.div>
                    
                    
                </div>
            </div>

        </div>
    )
}

export default Fruits