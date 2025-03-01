import jolly from "../assets/jolly-roger.svg";
import posters from "/images/posters.webp";
import { motion } from "motion/react";

const Home = () => {
  return (
    <div id="home" className="w-screen bg-[#1c130e]">
      <div className="flex max-sm:flex-col justify-between items-center">

        <div className="flex max-sm:justify-center max-sm:items-center flex-col pl-12 max-sm:pl-0">
          <div>
            <motion.img
              src={jolly}
              alt="Jolly Roger"
              className="w-24 max-sm:w-20 max-sm:relative absolute top-10"
              initial={{ opacity: 0, translateY: -100 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{
                type: "spring",
                visualDuration: 0.8,
                bounce: 0.6
              }}
            />
          </div>


          <motion.div
            className="text-white max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center font-roboto max-sm:mt-20 mt-52 max-sm:pl-0 pl-4"
            initial={{ opacity: 0, translateY: -100 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{
              type: "spring",
              visualDuration: 0.8,
              bounce: 0.6
            }}
          >
            <h1 className="text-7xl max-sm:text-4xl underline leading-tight max-sm:leading-snug max-sm:text-center">Seja <br />Bem-vindo!</h1>
            <p className="pt-8 text-[#c4b394] text-lg max-sm:text-center">Vamos embarcar nessa aventura e <br />explorar esse mundo fantástico!</p>
          </motion.div>
          <span className="border-2 border-[#c4b599] w-[50px] ml-4 mt-12 max-sm:mt-4 max-sm:ml-0 max-sm:mb-8"></span>
        </div>
        <img src={posters} alt="" className="w-[700px] h-[600px] max-sm:object-cover max-sm:max-w-auto max-sm:max-h-auto rounded-tl-md rounded-bl-md" />
      </div>

    </div>
  )
}

export default Home