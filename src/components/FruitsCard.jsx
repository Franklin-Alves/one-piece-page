import { motion } from 'motion/react'
import { useEffect, useState } from 'react'

const FruitsCard = ({ image, alt, title, description }) => {
    const [isClick, setIsClick] = useState(false)
    const [showContent, setShowContent] = useState(false)

    useEffect(() => {
        if (isClick) {
            setTimeout(() => { setShowContent(true) }, 800)
        }
        else {
            setShowContent(false)
        }

    }, [isClick])

    return (
        <motion.div
            className="flex justify-center items-center cursor-pointer"
            initial={{ width: "120px" }}
            animate={isClick ? { width: "256px", height: "293px" } : { width: "120px", height: "200px" }}
            transition={{
                delay: 0.3,
                duration: 0.5,
            }}
            onClick={() => setIsClick(!isClick)}

        >
            <div className={`flex flex-col  justify-center items-center bg-white w-64 rounded-2xl p-4`}>
                <img className=" w-auto h-[60px]"  width={60} height={60} src={image} alt={alt} />

                <motion.div
                    className="p-2 border-t w-[208px] h-[189px] border-black  text-ellipsis"
                    initial={{ display: "none", scale: 0 }}
                    animate={showContent ? { display: "block", scale: 1 } : {}}
                    transition={{
                        duration: 0.5,
                        display: isClick ? { type: "spring", visualDuration: 0.4, bounce: 0.8 } : {}
                    }}

                >
                    <h1 className="font-sans font-bold text-xl text-center">{title}</h1>
                    <p className="text-xs text-wrap break-words text-[#30251e] text-justify font-serif">{description}</p>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default FruitsCard