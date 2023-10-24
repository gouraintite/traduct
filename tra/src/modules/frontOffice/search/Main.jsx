import { useState, useEffect } from "react"
import { useRecoilState } from "recoil"
import { expressionData } from "../../../stores/data"
import Nav from "../../../components/navBar"
import Footer from "../../../components/footer"
import DetailsModal from "../../../components/details"
//import for requests
import axiosInstance from '../../../config/axios'
import { base_url_api } from "@/config/constants"
 

export const Search = () => {

  const [show, setShow] = useState(false)
  const [count, setCount] = useState(0)
  const [dictionaryItems, setDictionaryItems] = useRecoilState(expressionData);
  const [audioData, setAudioData] = useState('')
  const [detailsExpression, setDetailsExpression] = useState(
    {
      "id": 10011,
      "name": "testItem",
      "user": 10010,
      "expressions": [
        {
          "id": 10012,
          "langue": "francais",
          "contenu": "je mankjadsflkjldafjkdfge une bananne seul",
          "dictionaryItem": 10011
        },
        {
          "id": 10013,
          "langue": "en",
          "contenu": "I eat bana86f6d98nne seul",
          "dictionaryItem": 10011
        }
      ],
      "translations": [
        {
          "id": 10014,
          "langue": "jô",
          "contenu": "contMbakaloléǎ mbɔ́ nə́ saŋ mətsʉ pəmbaŋa, pənjwwí, ntǎchyə́... Fɔ́ mphyə ŋkwʉ́ nshòm",
          "audio": "storage/audio/20231021100452886_1536b03d-62a8-4fb9-9153-1af2fd0b135e.mp3",
          "example": "Mbakaloléǎ mbɔ́ nə́ saŋ mətsʉ pəmbaŋa, pənjwwí, ntǎchyə́... Fɔ́ mphyə ŋkwʉ́ nshòm",
          "ditionaryItem": 10011,
        },

        {
          "id": 10014,
          "langue": "jô",
          "contenu": "contMbakaloléǎ mbɔ́ nə́ saŋ mətsʉ pəmbaŋa, pənjwwí, ntǎchyə́... Fɔ́ mphyə ŋkwʉ́ nshòm",
          "audio": "storage/audio/20231021100452886_1536b03d-62a8-4fb9-9153-1af2fd0b135e.mp3",
          "example": "Mbakaloléǎ mbɔ́ nə́ saŋ mətsʉ pəmbaŋa, pənjwwí, ntǎchyə́... Fɔ́ mphyə ŋkwʉ́ nshòm",
          "ditionaryItem": 10011,
        }
      ]

  })

  // useEffect(()=>{
  //   show(show=>{setShow(!show)})
  // }, [choosed])



  useEffect(()=>{
    handleGetData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count])

  const handleGetData = ()=>{
    axiosInstance.get(`${base_url_api}dictionaryItems/getAll?page=0`)
    .then(response=>{
      setDictionaryItems(response?.data) 
    })
    .then((response)=>{
      response?.data[0]?.translations[0].audioData.arrayBuffer();
    })
    .then((AudioData)=>{
      setAudioData(new Uint8Array(AudioData));
    })
    .then((response)=>{
      console.log(dictionaryItems, 'errer');
      console.log(response, 'this is the response');
    })
    .catch(err=>{
      console.log(err, 'this is the error');
    })
  }

  if (count < 1) {
    setTimeout(() => {
      setCount(count+1)
    }, 6000);
  }

  // const playAudio = () => {
  //   if (audioData) {
  //     const blob = new Blob([audioData], { type: 'audio/mpeg' }); // Adjust the type as needed
  //     const url = URL.createObjectURL(blob);
  //     const audio = new Audio(url);
  //     audio.play();
  //   }
  // };

  const Ho = ({byte}) =>{
    const audioData = "data:audio/mpeg;base64," + byte;

    return (
      <div>
        <audio controls className="w-full my-2 rounded-lg">
          <source src={audioData} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    );
  };

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
      <div className="flex justify-center gap-y-4 gap-x-6 mx-auto w-screen overflow-scroll px-12 my-6">
        {dictionaryItems && dictionaryItems.map(item => (
          <div onMouseEnter={()=>{
            setDetailsExpression(item)
          }} key={item.id} className="my-16">
            {/* <p className="text-3xl font-bold bg-tert w-fit p-2 px-4 mx-9 rounded-lg text-white">{item.cat}</p> */}
            <div className="">
                <div className="border-none lg:min-w-[350px]  text-lg bg-tert/10 hover:bg-tert/20 duration-300 ease-in-out rounded-md p-3">
                  <div className="text-end text-sm cursor-pointer">
                    <p 
                      onClick={()=>{
                        setShow(true)
                        setDetailsExpression(item)
                      }}
                      className="font-bold text-secondary text-lg">
                      voir plus
                    </p>
                  </div>
                  <div className="flex justify-start py-1">
                    <p><span className="font-bold pr-2">Fr:</span>{String(item?.expressions[0].contenu).slice(0, 55)}...</p> 
                  </div>
                  <div className="flex justify-start py-1">
                    <p><span className="font-bold pr-2">En:</span>{String(item?.expressions[1].contenu).slice(0, 55)}...</p>
                  </div>
                  <div className="flex justify-start py-1">
                    <p><span className="font-bold pr-2">Ŋgə̂mbà:</span>{String(item.translations[1].contenu).slice(0, 55)}...</p>
                  </div>
                  <div className="flex justify-start py-1">
                    <p><span className="font-bold pr-2">Exemple Ŋgə̂mbà:</span>{String(item.translations[1].example).slice(0, 55)}...</p>
                  </div>
                  <div className="flex justify-start py-1">
                    <p><span className="font-bold pr-2">Jô:</span>{String(item.translations[0].contenu).slice(0, 55)}...</p>
                  </div>
                  <div className="flex justify-start py-1">
                    <p><span className="font-bold pr-2">Exemple Jô:</span>{String(item.translations[0].contenu).slice(0, 55)}...</p>
                  </div>
                  {/* {String(item.translations[0].audioData)} */}
                 <Ho byte={String(item.translations[0].audioData)} />
                 <Ho byte={String(item.translations[1].audioData)} />
                </div>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="">
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
      </div> */}

      {/* THE MODAL */}
      <div className={`${show ? "" : "hidden"} fixed flex mx-auto justify-center items-center backdrop-blur-sm bg-tert/10 h-screen w-screen top-0`}>
        <div 
          onClick={()=>{
            setShow(false)
          }}
          className="backdrop-blur-sm bg-tert/40 text-white w-9 h-9 text-center p-2 rounded-full absolute top-20 right-52 cursor-pointer" >
          X
        </div>
        <DetailsModal content={detailsExpression} />
      </div>
       
       <Footer />
    </div>
  )
}

export default Search;