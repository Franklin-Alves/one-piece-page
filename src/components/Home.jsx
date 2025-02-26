import logo from "../assets/jolly-roger.svg";
import posters from "/images/posters.webp";
import { motion } from "motion/react";

const Home = () => {
  return (
    <div id="home" className="w-screen bg-[#1c130e]">
      <div className="flex justify-between items-center">

        <div className="flex flex-col pl-12">
          <motion.img
            src={logo}
            className="w-24 absolute top-10"
            initial={{ opacity: 0, translateY: -100 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{
              type: "spring",
              visualDuration: 0.8,
              bounce: 0.6
            }}
          />


          <motion.div
            className="text-white font-roboto mt-52 pl-4"
            initial={{ opacity: 0, translateY: -100 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{
              type: "spring",
              visualDuration: 0.8,
              bounce: 0.6
            }}
          >
            <h1 className="text-7xl underline leading-tight">Seja <br />Bem-vindo!</h1>
            <p className="pt-8 text-[#c4b394] text-lg">Vamos embarcar nessa aventura e <br />explorar esse mundo fantástico!</p>
          </motion.div>
          <span className="border-2 border-[#c4b599] w-[50px] ml-4 mt-12"></span>
        </div>
        <img src={posters} alt="" className="w-[700px] h-[600px] rounded-tl-md rounded-bl-md" />
      </div>

    </div>
  )
}

export default Home