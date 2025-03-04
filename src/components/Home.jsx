import jolly from "../assets/jolly-roger.svg";
import MobileMenu from "./MobileMenu";
import posters from "/images/posters.webp";
import { motion } from "motion/react";

const Home = () => {
  return (
    <div id="home" className="w-screen bg-[#1c130e]">
      <div className="flex max-lg:flex-col justify-between items-center">

        <div className="flex max-lg:justify-center max-lg:items-center flex-col pl-12 max-lg:pl-0">
          <div>
            <motion.img
              src={jolly}
              alt="Jolly Roger"
              className="w-24 max-sm:w-20 max-lg:relative absolute top-10"
              initial={{ opacity: 0, translateY: -100 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{
                type: "spring",
                visualDuration: 0.8,
                bounce: 0.6
              }}
            />

            <MobileMenu />
          </div>


          <motion.div
            className="text-white max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:items-center font-roboto max-lg:mt-20 mt-52 max-lg:pl-0 pl-4"
            initial={{ opacity: 0, translateY: -100 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{
              type: "spring",
              visualDuration: 0.8,
              bounce: 0.6
            }}
          >
            <h1 className="text-7xl max-[1025px]:text-5xl max-sm:text-4xl underline leading-tight max-lg:leading-snug max-lg:text-center">Seja <br />Bem-vindo!</h1>
            <p className="pt-8 text-[#c4b394] text-lg max-lg:text-center">Vamos embarcar nessa aventura e <br />explorar esse mundo fantástico!</p>
          </motion.div>
          <span className="border-2 border-[#c4b599] w-[50px] ml-4 mt-12 max-lg:mt-4 max-lg:ml-0 max-lg:mb-8"></span>
        </div>
        <img src={posters} alt="" className="w-[700px] h-[600px] max-[1025px]:w-[600px] max-lg:w-screen max-lg:h-auto max-lg:object-cover rounded-tl-md rounded-bl-md" />
      </div>

    </div>
  )
}

export default Home