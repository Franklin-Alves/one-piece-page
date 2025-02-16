import { Search } from 'lucide-react'
import FruitsCard from './FruitsCard'
import { useState } from 'react'

const Fruits = () => {

    const fruitsData = [
        {
            image: "/images/fruits/gomu-gomu-no-mi.png",
            alt: "Gomu Gomu No Mi, fruta do Luffy",
            title: "Gomu Gomu No Mi",
            description: 'Uma Akuma no Mi do tipo Paramecia que transforma o usuário em um homem-borracha, concedendo-lhe um corpo altamente elástico. Essa habilidade permite esticar seus membros, resistir a impactos físicos e executar ataques poderosos. Originalmente atribuída a Monkey D. Luffy.',
        },
        {
            image: "/images/fruits/ito-ito-no-mi.png",
            alt: "Ito Ito No Mi, fruta do Doflamingo",
            title: "Ito Ito No Mi",
            description: 'Uma Akuma no Mi do tipo Paramecia que permite ao usuário criar e manipular fios extremamente resistentes e afiados. Esses fios podem ser usados para cortar, controlar pessoas como marionetes ou até suspender objetos no ar. Seu usuário mais famoso foi Donquixote Doflamingo.',
        },
        {
            image: "/images/fruits/mera-mera-no-mi.png",
            alt: "Mera Mera No Mi, fruta do Doflamingo",
            title: "Mera Mera No Mi",
            description: 'Uma Akuma no Mi do tipo Logia que permite ao usuário controlar, criar e se transformar em fogo. Essa habilidade concede ataques destrutivos, resistência a altas temperaturas e grande mobilidade aérea. Foi originalmente comida por Portgas D. Ace e, após sua morte, foi adquirida por Sabo.',
        },
        {
            image: "/images/fruits/moku-moku-no-mi.png",
            alt: "Moku Moku No Mi, fruta do Doflamingo",
            title: "Moku Moku No Mi",
            description: 'Uma Akuma no Mi do tipo Logia que dá ao usuário a capacidade de gerar, controlar e se transformar em fumaça. Seu portador pode envolver adversários em névoa e até tornar seu corpo intangível. O primeiro usuário conhecido foi Smoker, um Vice-Almirante da Marinha.',
        },
        {
            image: "/images/fruits/gura-gura-no-mi.png",
            alt: "Gura Gura No Mi, fruta do Barba Negra",
            title: "Gura Gura No Mi",
            description: 'Uma Akuma no Mi do tipo Paramecia considerada uma das mais poderosas, capaz de criar terremotos devastadores. Seu usuário pode gerar ondas sísmicas no solo, no ar e até no mar, causando destruição em larga escala. Era a fruta do Barba Branca e, posteriormente, Barba Negra.',
        },
        {
            image: "/images/fruits/hana-hana-no-mi.png",
            alt: "Hana Hana No Mi, fruta da Nico Robin",
            title: "Hana Hana No Mi",
            description: 'Uma Akuma no Mi do tipo Paramecia que permite ao usuário criar réplicas de partes do seu corpo em qualquer superfície, incluindo outras pessoas. Essa habilidade pode ser usada tanto para combate quanto para espionagem. Nico Robin é a portadora dessa fruta e a utiliza em seu estilo de luta único.',
        },
        {
            image: "/images/fruits/hito-hito-no-mi.png",
            alt: "Hito Hito No Mi, fruta da Nico Robin",
            title: "Hito Hito No Mi",
            description: 'Uma Akuma no Mi do tipo Zoan que concede ao usuário características humanas, incluindo inteligência avançada e a capacidade de falar. Foi comida por Tony Tony Chopper, permitindo que ele adquirisse formas híbridas entre rena e humano. Há variações dessa fruta que conferem poderes divinos ou mitológicos.',
        },
        {
            image: "/images/fruits/inu-inu-no-mi.png",
            alt: "Inu Inu No Mi, fruta do Jabra",
            title: "Inu Inu No Mi",
            description: 'Uma categoria de Akuma no Mi do tipo Zoan que transforma o usuário em um cão ou em uma forma híbrida. Existem diferentes modelos dessa fruta, como o Inu Inu no Mi: Modelo Lobo, usada por Jabra, e o Modelo Okuchi no Makami, usada por Yamato. Essas formas conferem força física e habilidades animais.',
        },
        {
            image: "/images/fruits/sube-sube-no-mi.png",
            alt: "Sube Sube No Mi, fruta do Jabra",
            title: "Sube Sube No Mi",
            description: 'Uma Akuma no Mi do tipo Paramecia que torna a pele do usuário extremamente lisa e escorregadia. Isso faz com que ataques físicos sejam desviados automaticamente e pode resultar em uma aparência mais jovem e atraente. A usuária mais conhecida foi Alvida.',
        }

    ]

    const [search, setSearch] = useState("")

    const fruitsFiltered = fruitsData.filter((fruta) => fruta.title.includes(search))

    return (
        <div className="w-screen bg-[#c4b394] p-20">
            <div className='flex flex-col items-center'>
                <div className='flex w-80 rounded-lg border-2 border-[#1c130e] gap-2'>
                    <Search className='ml-2' size={20} color='#1c130e' />
                    <input
                        className="bg-transparent w-72 text-white border-l-2 border-[#1c130e]"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <div className="w-max grid grid-cols-4 gap-x-10 gap-y-4 mt-8 self-center">
                    {fruitsFiltered.slice(0, 8).map((fruta, index) => (
                        <FruitsCard
                            key={index}
                            image={fruta.image}
                            alt={fruta.alt}
                            title={fruta.title}
                            description={fruta.description}
                        />
                    ))}


                </div>
            </div>

        </div>
    )
}

export default Fruits