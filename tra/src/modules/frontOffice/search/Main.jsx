import { useState, useEffect } from "react"
import aud from "../../../assets/go.ogg"
import Nav from "../../../components/navBar"
import Footer from "../../../components/footer"

export const Search = () => {

  const [show, setShow] = useState(false)
  const [choosed, setChoosed] = useState(0)

  // useEffect(()=>{
  //   show(show=>{setShow(!show)})
  // }, [choosed])

  const data = [
    {
      id: 1,
      fr: "Le baccalauréat est un jeu qui consiste à ressortir les noms des filles, des garçons, des fruits, des animaux, etc. par ordre alphabétique",
      en: "The baccalaureat is a game that consists in giving names of girls, boys, fruits, animals etc in alphabetic order",
      lang1: "Mbakaloléǎ mbɔ́ nə́ saŋ mətsʉ pəmbaŋa, pənjwwí, ntǎchyə́... Fɔ́ mphyə ŋkwʉ́ nshòm",
      lang2: "Mbakaloléǎ mbɔ́ nə́ saŋ mətsʉ pəmbaŋa, pənjwwí, ntǎchyə́... Fɔ́ mphyə ŋkwʉ́ nshòm",
      collaps: false
    },
    {
      id: 2,
      fr: "Le baccalauréat est un jeu qui consiste à ressortir les noms des filles, des garçons, des fruits, des animaux, etc. par ordre alphabétique",
      en: "The baccalaureat is a game that consists in giving names of girls, boys, fruits, animals etc in alphabetic order",
      lang1: "Mbakaloléǎ mbɔ́ nə́ saŋ mətsʉ pəmbaŋa, pənjwwí, ntǎchyə́... Fɔ́ mphyə ŋkwʉ́ nshòm",
      lang2: "Mbakaloléǎ mbɔ́ nə́ saŋ mətsʉ pəmbaŋa, pənjwwí, ntǎchyə́... Fɔ́ mphyə ŋkwʉ́ nshòm",
    },
    {
      id: 3,
      fr: "Le baccalauréat est un jeu qui consiste à ressortir les noms des filles, des garçons, des fruits, des animaux, etc. par ordre alphabétique",
      en: "The baccalaureat is a game that consists in giving names of girls, boys, fruits, animals etc in alphabetic order",
      lang1: "Mbakaloléǎ mbɔ́ nə́ saŋ mətsʉ pəmbaŋa, pənjwwí, ntǎchyə́... Fɔ́ mphyə ŋkwʉ́ nshòm",
      lang2: "Mbakaloléǎ mbɔ́ nə́ saŋ mətsʉ pəmbaŋa, pənjwwí, ntǎchyə́... Fɔ́ mphyə ŋkwʉ́ nshòm",
    },
    {
      id: 4,
      fr: "Le baccalauréat est un jeu qui consiste à ressortir les noms des filles, des garçons, des fruits, des animaux, etc. par ordre alphabétique",
      en: "The baccalaureat is a game that consists in giving names of girls, boys, fruits, animals etc in alphabetic order",
      lang1: "Mbakaloléǎ mbɔ́ nə́ saŋ mətsʉ pəmbaŋa, pənjwwí, ntǎchyə́... Fɔ́ mphyə ŋkwʉ́ nshòm",
      lang2: "Mbakaloléǎ mbɔ́ nə́ saŋ mətsʉ pəmbaŋa, pənjwwí, ntǎchyə́... Fɔ́ mphyə ŋkwʉ́ nshòm",
    },
    {
      id: 5,
      fr: "Le baccalauréat est un jeu qui consiste à ressortir les noms des filles, des garçons, des fruits, des animaux, etc. par ordre alphabétique",
      en: "The baccalaureat is a game that consists in giving names of girls, boys, fruits, animals etc in alphabetic order",
      lang1: "Mbakaloléǎ mbɔ́ nə́ saŋ mətsʉ pəmbaŋa, pənjwwí, ntǎchyə́... Fɔ́ mphyə ŋkwʉ́ nshòm",
      lang2: "Mbakaloléǎ mbɔ́ nə́ saŋ mətsʉ pəmbaŋa, pənjwwí, ntǎchyə́... Fɔ́ mphyə ŋkwʉ́ nshòm",
    },
    {
      id: 6,
      fr: "Le baccalauréat est un jeu qui consiste à ressortir les noms des filles, des garçons, des fruits, des animaux, etc. par ordre alphabétique",
      en: "The baccalaureat is a game that consists in giving names of girls, boys, fruits, animals etc in alphabetic order",
      lang1: "Mbakaloléǎ mbɔ́ nə́ saŋ mətsʉ pəmbaŋa, pənjwwí, ntǎchyə́... Fɔ́ mphyə ŋkwʉ́ nshòm",
      lang2: "Mbakaloléǎ mbɔ́ nə́ saŋ mətsʉ pəmbaŋa, pənjwwí, ntǎchyə́... Fɔ́ mphyə ŋkwʉ́ nshòm",
    }
  ]

  const expressions = [
    {
      id: 1,
      cat: "Basique",
      content: data
    },
    {
      id: 2,
      cat: "Jour de la semaine",
      content: data
    },
    {
      id: 3,
      cat: "Mois de l'année",
      content: data
    },
    {
      id: 4,
      cat: "Pronons",
      content: data
    },
  ]

  return (
    <div className="">
      <Nav opacity={40} />
      <div className="w-screen min-h-[400px] bg-exp bg-cover bg-no-repeat bg-center text-center flex justify-center mx-auto items-center">
        <div className="h-1/2 w-full">
          <p className="text-white text-4xl font-bold mb-6">Apprenez en ecourtant ou en lisant avec A-frilang</p>

          <form action="" className="mt-9">
            <div className="flex justify-center bg-white w-2/3 mx-auto rounded-md">

              <input type="text"
                className="w-8/12 py-3 px-3 mt-0 outline-none rounded-l-md"
              />
              <select name="" id="" className="px-4 w-3/12">
                <option value="">Catégories</option>
                <option value="base">Basique</option>
                <option value="week_day">Jour de la semaine</option>
                <option value="months">Mois</option>
                <option value="pronons">Pronons</option>
                <option value="adjectifs">Adjectifs</option>
                <option value="politess">Politesse</option>
                <option value="Compter">Compter</option>
                <option value="Aliments">Aliments</option>
                <option value="Conjugaison">Conjugaison</option>
                <option value="Couleurs">Couleurs</option>
                <option value="Famille">Famille</option>
                <option value="Mariage">Mariage</option>
                <option value="ecole">Ecole</option>
                <option value="Santé">Santé</option>
                <option value="Corps humain">Corps humain</option>
                <option value="Moyens de transport">Moyens de transport</option>
                <option value="Villes">Villes</option>
                <option value="Villages">Villages</option>
                <option value="Communications">Communications</option>
                <option value="Métiers">Métiers</option>
                <option value="Monde végétal/Nature">Monde végétal/Nature</option>
                <option value="Monde animal">Monde animal</option>
                <option value="Voyages">Voyages</option>
                <option value="Sport">Sport</option>
                <option value="Loisirs">Loisirs</option>
                <option value="conversation_1">Conversation type 1</option>
                <option value="conversation_2">Conversation type 2</option>
                <option value="conversation_3">Conversation type 3</option>
                <option value="conversation_4">Conversation type 4</option>
              </select>
              <button className="bg-secondary w-1/12 rounded-r-md">
                Lancer
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="lg:mb-12 mt-8 space-y-4 px-6 md:px-0">
        <h2 className="text-center text-2xl font-bold text-gray-800 md:text-4xl">
          Expréssions disponibles
        </h2>
        <p className="text-center">
          Découvrez et apprennez en toute liberté.
        </p>
      </div>

      <div className="">
        {expressions.map(item => (
          <div key={item.id} className="my-16">
            <p className="text-3xl font-bold bg-tert w-fit p-2 px-4 mx-9 rounded-lg text-white">{item.cat}</p>
            <div className="flex justify-center gap-y-4 gap-x-6 mx-auto w-screen overflow-scroll px-12 my-6">
              {item.content.map(content => (
                <div key={content.id} className="border-none lg:min-w-[350px]  text-lg bg-tert/10 hover:bg-tert/20 duration-300 ease-in-out rounded-md p-3">
                  <div className="text-end text-sm cursor-pointer">
                    <p 
                      onClick={()=>{
                        setShow(true)
                      }}
                      className="border">
                      voir plus
                    </p>
                  </div>
                  <div className="flex justify-start py-1">
                    <p><span className="font-bold pr-2">Fr:</span>{String(content.fr).slice(0, 55)}...</p>
                  </div>
                  <div className="flex justify-start py-1">
                    <p><span className="font-bold pr-2">En:</span>{String(content.en).slice(0, 55)}...</p>
                  </div>
                  <div className="flex justify-start py-1">
                    <p><span className="font-bold pr-2">Ŋgə̂mbà:</span>{String(content.lang1).slice(0, 55)}...</p>
                  </div>
                  <div className="flex justify-start py-1">
                    <p><span className="font-bold pr-2">Jô:</span>{String(content.lang2).slice(0, 55)}...</p>
                  </div>
                  <figcaption>Listen to the T-Rex:</figcaption>
                  <audio controls src={aud} className="w-full rounded">
                    <a href={aud}> Download audio </a>
                  </audio>
                  <audio controls src={aud} className="w-full mt-2 rounded">
                    <a href={aud}> Download audio </a>
                  </audio>
                </div>
              ))}

            </div>
          </div>
        ))}
      </div>

      {/* THE MODAL */}
      <div className={`${show ? "" : "hidden"} fixed flex mx-auto justify-center items-center backdrop-blur-sm bg-tert/10 h-screen w-screen top-0`}>
        <div 
          onClick={()=>{
            setShow(false)
          }}
          className="backdrop-blur-sm bg-tert/40 text-white w-9 h-9 text-center p-2 rounded-full absolute top-20 right-52 cursor-pointer" >
          X
        </div>
        <div className="w-2/3 min-h-1/2 bg-white rounded-xl shadow-xl">
         <div className="p-4">
          <div className="flex justify-start py-1 my-3">
              <p><span className="font-bold pr-2">Français:</span>{expressions[0].content[0].fr}</p>
            </div>
            <div className="flex justify-start py-1 my-3">
              <p><span className="font-bold pr-2">English:</span>{expressions[0].content[0].en}</p>
            </div>
            <div className="flex justify-start py-1 my-3">
              <p><span className="font-bold pr-2">Ŋgə̂mbà:</span>{expressions[0].content[0].lang1}</p>
            </div>
            <div className="flex justify-start py-1 my-3">
              <p><span className="font-bold pr-2">Jô:</span>{expressions[0].content[0].lang2}</p>
            </div>

            <div className="flex justify-start py-1 my-3">
              <p><span className="font-bold pr-2">Exemple/Example Ŋgə̂mbà:</span>{expressions[0].content[0].lang1}</p>
            </div>
            <div className="flex justify-start py-1 my-3">
              <p><span className="font-bold pr-2">Exemple/Example Jô:</span>{expressions[0].content[0].lang2}</p>
            </div>
            <figcaption>Audio Ŋgə̂mbà:</figcaption>
            <audio controls src={aud} className="w-full rounded">
              <a href={aud}> Download audio </a>
            </audio>
            <figcaption>Audio Jô:</figcaption>
            <audio controls src={aud} className="w-full mt-2 rounded">
              <a href={aud}> Download audio </a>
            </audio>
         </div>
        </div>
      </div>
       
       <Footer />
    </div>
  )
}

export default Search;