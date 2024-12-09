import { useState, useEffect } from "react"
import { useRecoilState } from "recoil"
import { expressionData } from "../../../stores/data"
import Nav from "../../../components/navBar"
import Footer from "../../../components/footer"
import DetailsModal from "../../../components/details"
//import for requests
import axiosInstance from '../../../config/axios'
import axios from "axios"
import { base_url_api2 } from "@/config/constants"
import { FaEye } from "react-icons/fa"
import Empty from '../../../assets/empty.svg'

export const Search = () => {

  const [show, setShow] = useState(false)
  const [count, setCount] = useState(0)
  const [dictionaryItems, setDictionaryItems] = useRecoilState(expressionData);
  // const [audioData, setAudioData] = useState('')
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
          "langue": "Jó",
          "contenu": "contMbakaloléǎ mbɔ́ nə́ saŋ mətsʉ pəmbaŋa, pənjwwí, ntǎchyə́... Fɔ́ mphyə ŋkwʉ́ nshòm",
          "audio": "storage/audio/20231021100452886_1536b03d-62a8-4fb9-9153-1af2fd0b135e.mp3",
          "example": "Mbakaloléǎ mbɔ́ nə́ saŋ mətsʉ pəmbaŋa, pənjwwí, ntǎchyə́... Fɔ́ mphyə ŋkwʉ́ nshòm",
          "ditionaryItem": 10011,
        },

        {
          "id": 10014,
          "langue": "Jó",
          "contenu": "contMbakaloléǎ mbɔ́ nə́ saŋ mətsʉ pəmbaŋa, pənjwwí, ntǎchyə́... Fɔ́ mphyə ŋkwʉ́ nshòm",
          "audio": "storage/audio/20231021100452886_1536b03d-62a8-4fb9-9153-1af2fd0b135e.mp3",
          "example": "Mbakaloléǎ mbɔ́ nə́ saŋ mətsʉ pəmbaŋa, pənjwwí, ntǎchyə́... Fɔ́ mphyə ŋkwʉ́ nshòm",
          "ditionaryItem": 10011,
        }
      ]

    })
  const [nextPage, setNextPage] = useState(0)
  const [searchedWord, setSearchedWord] = useState('')
  const [nbrPage, setNbrPage] = useState(0)
  const [categories, setCategories] = useState('')
  const [getCategories, setGetCategories] = useState(null)
  const [goToPage, setgoToPage] = useState(null)

  useEffect(() => {
    handleGetData(searchedWord)
    handleGetCategories()
    handlePagination(nbrPage)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count, nextPage, nbrPage, searchedWord, categories])


  useEffect(() => {
    nextPage !== nbrPage ? setNextPage(0) : null
    handleGetData(searchedWord)
  }, [categories])

  const handleGetCategories = () => {
    axios.get(`${base_url_api2}/categories/get-all`)
      .then(response => {
        setGetCategories(response?.data)
        console.log(response.data);
      })
      .then((response) => {
        console.log(getCategories, 'errer');
        console.log(response, 'this is the response');
      })
      .catch(err => {
        console.log(err, 'this is the error');
      })
  }

  const handleGetData = (search = '') => {
    let searchEndPoint = `http://localhost:8080/api/dictionaryItems/search?page=${nextPage || 0}&searchTerm=${searchedWord}${categories && `&categoriesId=${categories}`}`
    let getEndPoint = `http://localhost:8080/api/dictionaryItems/get-all?page=${nextPage || 0}`
    console.log(((searchedWord || categories) ? searchEndPoint : getEndPoint), search, 'hereee');

    axios.get((search || categories) ? searchEndPoint : getEndPoint)
      .then(response => {
        setDictionaryItems(response?.data?.content)
        setNbrPage(response?.data?.totalPages)
        console.log(response, 'res peekjk');
      })
      .then((response) => {
        response?.data[0]?.translations[0].audioData.arrayBuffer();
      })
      .then((AudioData) => {
        // setAudioData(new Uint8Array(AudioData));
      })
      .then(() => {
        console.log(dictionaryItems, 'errer');
      })
      .catch((err) => {
        console.log(err, 'this is the error');
      })
  }

  if (count < 1) {
    setTimeout(() => {
      setCount(count + 1)
    }, 100);
  }


  const handlePagination = (pages) => {
    const tab = [];
    for (let index = 0; index < pages; index++) {
      tab[index] = index;
    }
  
    const maxVisiblePages = 5; // Number of visible page numbers
    const isDotsNeeded = pages > maxVisiblePages;
  
    // Calculate the range of pages to display
    const getVisiblePages = () => {
      if (!isDotsNeeded) {
        return tab;
      }
  
      const visiblePages = [];
      const firstPage = 0;
      const lastPage = pages - 1;
  
      if (nextPage <= 2) {
        visiblePages.push(...tab.slice(0, 3), "...", lastPage);
      } else if (nextPage >= pages - 3) {
        visiblePages.push(firstPage, "...", ...tab.slice(pages - 3));
      } else {
        visiblePages.push(firstPage, "...", nextPage - 1, nextPage, nextPage + 1, "...", lastPage);
      }
  
      return visiblePages;
    };
  
    const handlePageChange = (page) => {
      if (page === "...") return; // Ignore clicks on dots
      setNextPage(page);
    };
  
    return (
      <>
        {/* "<< Go to First" */}
        <div
          onClick={() => setNextPage(0)}
          className="border-2 w-9 h-9 p-1 text-center m-1 rounded-lg hover:text-white hover:bg-secondary hover:font-semibold cursor-pointer"
        >
          {"<<"}
        </div>
  
        {/* "< Go to Previous" */}
        <div
          onClick={() => setNextPage((prev) => Math.max(0, prev - 1))}
          className="border-2 w-9 h-9 p-1 text-center m-1 rounded-lg hover:text-white hover:bg-secondary hover:font-semibold cursor-pointer"
        >
          {"<"}
        </div>
  
        {/* Page Numbers */}
        {getVisiblePages().map((page, i) => (
          <div
            key={i}
            onClick={() => handlePageChange(page)}
            className={`${
              nextPage === page && page !== "..." ? "bg-tert text-white" : ""
            } border-2 w-9 h-9 p-1 text-center m-1 rounded-lg hover:text-white hover:bg-secondary hover:font-semibold cursor-pointer`}
          >
            {page === "..." ? "..." : page + 1}
          </div>
        ))}
  
        {/* "> Go to Next" */}
        <div
          onClick={() => setNextPage((prev) => Math.min(pages - 1, prev + 1))}
          className="border-2 w-9 h-9 p-1 text-center m-1 rounded-lg hover:text-white hover:bg-secondary hover:font-semibold cursor-pointer"
        >
          {">"}
        </div>
  
        {/* ">> Go to Last" */}
        <div
          onClick={() => setNextPage(pages - 1)}
          className="border-2 w-9 h-9 p-1 text-center m-1 rounded-lg hover:text-white hover:bg-secondary hover:font-semibold cursor-pointer"
        >
          {">>"}
        </div>
        {/* <div>
          <p>Aller à la page:</p>
          <div className="border w-auto flex justify-start">
            <input type="text"
            className="border-none focus:outline-none w-20"
            value={goToPage}
            max={nbrPage}
            onChange={(e)=>{
         
              setgoToPage()
            }} />
            <div onClick={()=>{
              
              !isNaN(goToPage) && setNextPage(goToPage)
            }} className=" border-l-2 w-12 h-full text-center p-1 hover:text-white hover:bg-secondary hover:font-semibold cursor-pointer">Aller</div>
          </div>
        </div> */}
      </>
    );
  };

  const Ho = ({ byte }) => {
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
      <div className="max-w-screen min-h-[400px] bg-exp bg-cover bg-no-repeat bg-center text-center flex justify-center mx-auto items-center">
        <div className="h-1/2 w-9/12">
          <p className="text-white text-4xl font-bold mb-6">Apprenez en écoutant ou en lisant avec A-frilang</p>

          <form action="" className="mt-9">
            <div className="flex justify-center bg-white w-11/12 md:w-2/3 mx-auto rounded-md">
              <input type="search"
                onChange={(e) => {
                  setSearchedWord(e.target.value)
                  handleGetData(e.target.value)
                }}
                className="w-full py-3 px-3 mt-0 outline-none rounded-l-md"
                placeholder="Recherchez ici..."
              />
              <select name="" id="" className="px-4 w-3/12 rounded-r-md">
              <option value={null}>
                  Filtrez par catégorie
                </option>
                <option value={null} onClick={() => {
                  setCategories('')
                }}>
                  Tout
                </option>
                {getCategories && getCategories.map(item => (
                  <option
                    value={item.id}
                    key={item.id}
                    onClick={() => {
                      setCategories(item.id)
                    }}
                  >{item.name}</option>
                ))}
              </select>
              {/* <div
                className="bg-secondary w-3/12 rounded-r-md cursor-pointer flex text-center items-center">
                <p className="w-full">Lancer</p>
              </div> */}
            </div>
          </form>
        </div>
      </div>

      <div className="lg:mb-12 mt-8 space-y-4 px-6 md:px-0 container mx-auto">
        <h2 className="text-center text-2xl font-bold text-gray-800 md:text-4xl">
          Expréssions disponibles
        </h2>
        <p className="text-center">
          Découvrez et apprennez en toute liberté.
        </p>
      </div>
      <div className="lg:flex flex-wrap my-6 mx-auto container sm:mx-2 gap-y-3 lg:mx-auto">
        {typeof (dictionaryItems) === 'object' && dictionaryItems.map(item => (
          <div onMouseEnter={() => {
            setDetailsExpression(item)
          }} key={item.id} className="xl:w-1/4 lg:w-1/3 md:w-5/12 min-w-[300px]">
            <div className="lg:w-full sm:w-11/12 mx-auto">
              <div className="group border-none min-w-auto text-lg bg-tert/10 hover:bg-tert/20 transition-all duration-300 ease-in hover:ring-secondary hover:ring-1 rounded-md m-1 p-2">
                <div className="text-end text-sm cursor-pointer">
                  <p
                    onClick={() => {
                      setShow(true)
                      setDetailsExpression(item)
                    }}
                    className="text-transparent flex justify-end items-center group-hover:text-secondary text-md">
                    <FaEye size={20} /> <span className="pl-2">voir plus</span>
                  </p>
                </div>
                <div className="flex justify-start">
                  <p><span className="font-bold pr-2">Fr:</span>{String(item?.expressions[1]?.contenu).slice(0, 55)}...</p>
                </div>
                <div className="flex justify-start py-1">
                  <p><span className="font-bold pr-2">En:</span>{String(item?.expressions[0]?.contenu).slice(0, 55)}...</p>
                </div>
                <div className="flex justify-between items-center w-full py-1">
                  <p className="w-9/12 overflow-hidden"><span className="font-bold pr-2">Ŋgə̂mbà:</span>{String(item.translations[1]?.contenu).slice(0, 55)}...</p>
                  <div className="w-3/12">
                    <Ho byte={String(item?.translations[1]?.audioData)} />
                  </div>
                </div>
                <div className="flex justify-between items-center w-full py-1">
                  <p className="w-9/12 overflow-hidden"><span className="font-bold pr-2">Jó:</span>{String(item.translations[0]?.contenu).slice(0, 55)}...</p>
                  <div className="w-3/12">
                    <Ho byte={String(item?.translations[0]?.audioData)} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {(typeof (dictionaryItems) !== 'object' || dictionaryItems.length === 0) && 
        <div className="text-center text-md font-bold text-gray-800 md:text-xl mx-auto">
          <img src={Empty} className="w-1/2 mx-auto" alt="" />
          Aucune expréssion disponible pour le moment
        </div>}
      </div>

      <div className="flex mx-auto justify-center py-6">
        {handlePagination(nbrPage)}
      </div>

      {/* THE MODAL */}
      <div className={`${show ? "" : "hidden"} z-50 fixed flex mx-auto justify-center items-center backdrop-blur-sm bg-tert/10 h-screen w-screen top-0`}>
        <div
          onClick={() => {
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