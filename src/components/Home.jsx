import logo from "../assets/icons/jolly-roger.svg";

const Home = () => {
  return (
    <div className="w-screen bg-[#1c130e]">
        <div className="flex justify-between items-center">
            <div className="flex flex-col pl-8">
                <img src={logo} alt="" className="w-20 absolute top-10"/>
                <div className="text-white my-6 pl-4">
                    <h1 className="text-6xl font-serif underline">Seja <br />Bem-vindo!</h1>
                    <p className="font-sans pt-6 text-[#c4b394]">Vamos embarcar nessa aventura e <br />explorar esse mundo fantástico!</p>
                </div>
                <span className="border-2 border-[#c4b394] w-[50px] ml-4"></span>
            </div>
            <img src="../src/assets/images/image.png" alt="" className="w-[650px] h-[600px] bg-cover"/>
        </div>
    </div>
  )
}

export default Home