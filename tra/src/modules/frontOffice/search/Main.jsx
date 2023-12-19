import { useState, useEffect } from "react"
import { useRecoilState } from "recoil"
import { expressionData } from "../../../stores/data"
import Nav from "../../../components/navBar"
import Footer from "../../../components/footer"
import DetailsModal from "../../../components/details"
//import for requests
import axiosInstance from '../../../config/axios'
import { base_url_api2 } from "@/config/constants"
import { FaEye } from "react-icons/fa"
import Empty from '../../../assets/empty.svg'

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
  const [nextPage, setNextPage] = useState(0)
  const [nbrPage, setNbrPage] = useState(0)
  // useEffect(()=>{
  //   show(show=>{setShow(!show)})
  // }, [choosed])



  useEffect(()=>{
    handleGetData()
    handlePagination(nbrPage)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count, nextPage, nbrPage])


  const handleGetData = ()=>{
    const headers = {
      'ngrok-skip-browser-warning': 'true'
    };
    axiosInstance.get(`${base_url_api2}/dictionaryItems/getAll?page=${nextPage}`, { headers })
    .then(response=>{
      setDictionaryItems(response?.data?.content)
      setNbrPage(response?.data?.totalPages)
      console.log(response, 'res peekjk');
    })
    .then((response)=>{
      response?.data[0]?.translations[0].audioData.arrayBuffer();
    })
    .then((AudioData)=>{
      setAudioData(new Uint8Array(AudioData));
    })
    .then(()=>{
      console.log(dictionaryItems, 'errer');
    })
    .catch((err)=>{
      console.log(err, 'this is the error');
    })
  }

  if (count < 1) {
    setTimeout(() => {
      setCount(count+1)
    },100);
  }

  const handlePagination = (pages)=>{

    let tab = [];
    for (let index = 0; index <pages; index++) {
      tab[index] = index
    }
    return <>
      {tab.map( i=>(
                  <div key={i}
                  onClick={()=>{
                    setNextPage(i)
                  }}
                  className={`${nextPage === i && 'bg-tert text-white'} border-2 w-9 h-9 p-1 text-center m-1 rounded-lg hover:text-white hover:bg-secondary hover:font-semibold cursor-pointer`}>
                    {i+1}
                </div>
      ))}
    </>
  }

  const Ho = ({byte}) =>{
    const audioData = "data:audio/mpeg;base64," + byte;

    return (
      <div>
        <audio controls className="w-12 mx-2 rounded-full">
          <source src={audioData} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    );
  };

  return (
    <div className="">
      <Nav opacity={40} />
      <div className="w-screen min-h-[400px] bg-exp bg-cover bg-no-repeat bg-center text-center flex justify-center mx-auto items-center">
        <div className="h-1/2 w-full">
          <p className="text-white text-4xl font-bold mb-6">Apprenez en ecourtant ou en lisant avec A-frilang</p>

          <form action="" className="mt-9">
            <div className="flex justify-center bg-white w-11/12 md:w-2/3 mx-auto rounded-md">
              <input type="text"
                className="w-7/12 py-3 px-3 mt-0 outline-none rounded-l-md"
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
              <button className="bg-secondary w-3/12 rounded-r-md">
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
      <div className="flex flex-wrap justify-around mx-auto gap-y-2 px-2 my-6">
          {typeof(dictionaryItems) ==='object' && dictionaryItems.map(item => (
          <div onMouseEnter={()=>{
            setDetailsExpression(item)
          }} key={item.id} className="my-6 lg:w-1/4 mx-auto px-3 md:w-1/2 sm:w-1/2 w-full">
                <div className="group border-none lg:min-w-[350px] text-lg bg-tert/10 hover:bg-tert/20 transition-all duration-300 ease-in hover:ring-secondary hover:ring-1 rounded-md p-3">
                  <div className="text-end text-sm cursor-pointer">
                    <p 
                      onClick={()=>{
                        setShow(true)
                        setDetailsExpression(item)
                      }}
                      className="text-transparent flex justify-end items-center group-hover:text-secondary text-md">
                      <FaEye size={20} /> <span className="pl-2">voir plus</span>
                    </p>
                  </div>
                  <div className="flex justify-start">  
                    <p><span className="font-bold pr-2">Fr:</span>{String(item?.expressions[0]?.contenu).slice(0, 55)}...</p> 
                  </div>
                  <div className="flex justify-start py-1">
                    <p><span className="font-bold pr-2">En:</span>{String(item?.expressions[1]?.contenu).slice(0, 55)}...</p>
                  </div>
                  <div className="flex justify-between items-center w-full py-1">
                    <p className="w-10/12 overflow-scroll"><span className="font-bold pr-2">Ŋgə̂mbà:</span>{String(item.translations[1]?.contenu).slice(0, 55)}...</p>
                    <div className="w-2/12">
                      <Ho byte={String(item?.translations[0]?.audioData)} />
                    </div>
                  </div>
                  <div className="flex justify-between items-center w-full py-1">
                    <p className="w-10/12 overflow-scroll"><span className="font-bold pr-2">Jô:</span>{String(item.translations[0]?.contenu).slice(0, 55)}...</p>
                    <div className="w-2/12">
                      <Ho byte={String(item?.translations[1]?.audioData)} />
                    </div>
                  </div>
                </div>
          </div>
        ))}

        {(typeof(dictionaryItems) !== 'object' || dictionaryItems.length === 0) && <div className="text-center text-md font-bold text-gray-800 md:text-xl">
          
          <img src={Empty} className="w-1/2 mx-auto" alt="" />
          Aucune expréssion disponible pour le moment
          </div>}
      </div>

      <div className="flex mx-auto justify-center py-6">
      {handlePagination(nbrPage)}
      </div>

      {/* THE MODAL */}
      <div className={`${show ? "" : "hidden"} fixed flex mx-auto justify-center items-center backdrop-blur-sm bg-tert/10 h-screen w-screen top-0`}>
        <div 
          onClick={()=>{
            setShow(false)
          }}
          className="backdrop-blur-sm bg-tert/40 text-white w-9 h-9 text-center p-2 rounded-full absolute top-48 right-52 cursor-pointer" >
          X
        </div>
        <DetailsModal content={detailsExpression} />
      </div>
       
       <Footer />
    </div>
  )
}

export default Search;