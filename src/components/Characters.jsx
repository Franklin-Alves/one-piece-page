import CharacterList from './CharacterList';

const Characters = () => {

  const charactersData = [
    {
      id: 1,
      image: "../src/assets/images/characters/luffy.png",
      name: "Luffy",
      title: "Eu me tornarei o rei dos Piratas.",
      description: "Ao completar 17 anos, Luffy parte em uma jornada do mar do East Blue para encontrar um tesouro lendário, o One Piece.",
    },
    {
      id: 2,
      image: "../src/assets/images/characters/zoro.jpg",
      name: "Zoro",
      title: "Eu nunca vou perder de novo!!",
      description: "Roronoa Zoro é o espadachim dos Chapéus de Palha em One Piece, conhecido por sua habilidade com três espadas e sua determinação inabalável.",
    },
    {
      id: 3,
      image: "../src/assets/images/characters/sanji.jpg",
      name: "Sanji",
      title: "Pessoas são o que são no coração!",
      description: " O cozinheiro da tripulação, Sanji é um lutador que usa apenas as pernas para atacar, seguindo um código de cavalaria. sonha em encontrar o All Blue.",
    },
    {
      id: 4,
      image: "../src/assets/images/characters/nami.jpg",
      name: "Nami",
      title: "⁠Todo mundo é fraco quando hesita.",
      description: "A navegadora dos Chapéus de Palha, é uma estrategista brilhante e especialista em meteorologia e cartografia. Embora tenha começado como uma ladra",
    },
    {
      id: 5,
      image: "../src/assets/images/characters/usopp.jpg",
      name: "Usopp",
      title: "Eu sou o capitão Usopp!",
      description: "Cozinheiro e lutador de pernas afiadas, segue o código da cavalaria e busca o All Blue, um mar lendário.",
    },
    {
      id: 6,
      image: "../src/assets/images/characters/robin.jpg",
      name: "Robin",
      title: "Eu quero viver!",
      description: "A arqueóloga do bando e única sobrevivente de Ohara, Robin é especialista em história antiga e busca descobrir a verdade sobre o Século Perdido.",
    },
    {
      id: 7,
      image: "../src/assets/images/characters/chopper.jpg",
      name: "Chopper",
      title: "Obrigado por me amarem!",
      description: "Uma rena que comeu a Hito Hito no Mi, adquirindo inteligência e a habilidade de se transformar em diversas formas.",
    },
    {
      id: 8,
      image: "../src/assets/images/characters/brook.jpg",
      name: "Brook",
      title: "Eu morri, sabia?",
      description: "O músico da tripulação, Brook é um esqueleto vivo que voltou da morte graças à Yomi Yomi no Mi.",
    },
    {
      id: 9,
      image: "../src/assets/images/characters/franky.jpg",
      name: "Franky",
      title: "Quer ser homem, então seja homem!",
      description: "O excêntrico carpinteiro ciborgue, Franky é responsável por construir o Thousand Sunny, o navio dos Chapéus de Palha.",
    },
    {
      id: 10,
      image: "../src/assets/images/characters/jinbei.jpg",
      name: "Jinbei",
      title: "Deixe-me ser seu escudo, Luffy!",
      description: "Um homem-peixe mestre do Karatê Homem-Peixe e ex-Shichibukai, Jinbe é o timoneiro dos Chapéus de Palha.",
    }
  ]

  return (
    <div className="w-screen bg-[#1c130e] flex justify-center pb-4 pt-8">
      <div className="w-[90%] h-[570px] bg-white rounded-3xl">
        <CharacterList charactersData={charactersData} />

      </div>
    </div>
  )
}

export default Characters