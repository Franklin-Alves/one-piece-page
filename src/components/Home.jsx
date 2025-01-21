import logo from "../assets/icons/jolly-roger.svg";

const Home = () => {
  return (
    <div className="w-screen bg-[#1c130e]">
        <div className="flex justify-between items-center">
            <div className="flex flex-col pl-14">
                <img src={logo} alt="" className="w-24 absolute top-10"/>
                <div className="text-white mt-52 pl-4">
                    <h1 className="text-7xl font-serif underline leading-tight">Seja <br />Bem-vindo!</h1>
                    <p className="pt-8 text-[#c4b394] text-lg">Vamos embarcar nessa aventura e <br />explorar esse mundo fantástico!</p>
                </div>
                <span className="border-2 border-[#c4b399] w-[50px] ml-4 mt-12"></span>
            </div>
            <img src="../src/assets/images/image.png" alt="" className="w-[700px] h-[600px] object-cover"/>
        </div>
    </div>
  )
}

export default Home