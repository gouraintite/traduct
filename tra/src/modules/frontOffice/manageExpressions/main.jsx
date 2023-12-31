import { useState, useEffect } from "react"
import toast, { Toaster } from 'react-hot-toast';

import Nav from "../../../components/navBar"
import Footer from "../../../components/footer"
import { FaEye, FaTrash, FaPen } from 'react-icons/fa'
import { useNavigate } from "react-router-dom"
import DetailsModal from "../../../components/details"
import AddExpressionForm from "../addExpression/addForm"
import { RxCrossCircled } from 'react-icons/rx'
import { useRecoilValue, useRecoilState } from "recoil"
import { expressionData } from "../../../stores/data"
import Empty from '../../../assets/empty.svg'

// requests imports
import { base_url_api2 } from '@/config/constants'
import axiosInstance from "@/config/axios"

export const ManageExpressions = () => {

  const [show, setShow] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [isGoingToBeDeleteId, setIsGoingToBeDeleteId] = useState(null)
  const valLog = useRecoilValue(expressionData)


  const [count, setCount] = useState(0)
  const [dictionaryItems, setDictionaryItems] = useRecoilState(expressionData);
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
  // console.log(valLog, 'vallog here');

  let navigator = useNavigate();

  useEffect(() => {
    handleGetData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count])

  const handleGetData = () => {

    const headers = {
      'ngrok-skip-browser-warning': 'true'
    };
    axiosInstance.get(`${base_url_api2}/dictionaryItems/get-all`, { headers })
      .then(response => {
        setDictionaryItems(response?.data?.content)
        // console.log(response.data);
      })
      .then((response) => {
      //   console.log(dictionaryItems, 'errer');
      //   console.log(response, 'this is the response');
       })
      .catch(err => {
        // console.log(err, 'this is the error');
      })
  }

  const handleDelete = ()=>{
    axiosInstance.delete(`${base_url_api2}/dictionaryItems/delete/${isGoingToBeDeleteId}`)
    .then(()=>{
      const notify = () => toast('Suppréssion éffectuée avec succès');
      notify()
      handleGetData()
    })
    .catch((error)=>{
      // console.log(error, 'while deleting');
    })
  }
  if (count < 1) {
    setTimeout(() => {
      setCount(count + 1)
    }, 6000);
  }

  const handlePassDataFromDetailModalToParent = (value) => {
    // console.log(value, 'in parent');
    if (value) {
      setShow(false)
      setShowDeleteModal(true)
    }
  }


  const handlePassDataFromDetailModalToParentShow = (value) => {
    // console.log(value, 'in parent');
    if (value) {
      setShow(false)
      setShowForm(true)
    }
  }

  return (
    <>
      <Nav />
      <div className="h-screen pt-24 px-6 z-50">
        <button onClick={() => { navigator('/new_expression') }}
          className="mt-4 relative flex h-11 w-auto items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:after:bg-secondary active:duration-75 active:before:scale-95">
          <span className="relative text-base font-semibold text-white">Ajouter une expression</span>
        </button> 
        {/* {valLog.length} */}
        <div className="my-6 rounded">
          {typeof(dictionaryItems) === 'object' && valLog.map((item) => (
            <div key={item.id}>
              <div onMouseEnter={()=>{
                setIsGoingToBeDeleteId(item.id) 
                setDetailsExpression(item)
                // console.log(item, 'on hover');
                // console.log(isGoingToBeDeleteId, 'hover'); 
              }}
                className="flex justify-around border my-2 py-2 pl-6 overflow-scroll items-center hover:bg-secondary/10 duration-150 ease-in">
                <div className={`w-9/12 h-12 flex items-center overflow-hidden`}>
                  <div className="w-1/2">
                    {item?.expressions.length > 0 ? String(item?.expressions[1].contenu) : '---'}
                  </div>
                  <div className="w-1/2 border-x-2 py-4 pl-3">
                    {item?.expressions.length > 0 ? String(item?.expressions[0].contenu) : '---'}
                  </div>
                </div>
                <div className="px-3 text-sm text-emerald-900 italic">
                  {String(item?.lastUpdated).slice(0, 10)}
                </div>
                <div className="flex justify-around items-end space-x-6">
                  <div
                    onClick={() => {
                      setShow(!show)
                      setDetailsExpression(item)
                    }}
                    className="text-tert border cursor-pointer p-2 rounded-lg hover:text-white hover:bg-green-500 duration-300 ease-in-out h-9">
                    <FaEye size={16} />
                  </div>
                  <div
                    onClick={() => {
                      setDetailsExpression(item)
                      setShowForm(!showForm)
                      setDetailsExpression(item)
                    }} className="text-tert border cursor-pointer p-2 rounded-lg hover:text-white hover:bg-blue-500 duration-300 ease-in-out h-9">
                    <FaPen size={16} />
                  </div>
                  <div
                    onClick={() => {
                      setShowDeleteModal(!showDeleteModal)
                      setIsGoingToBeDeleteId(item.id)
                      // console.log(isGoingToBeDeleteId, 'click');
                    }} className="text-tert border cursor-pointer p-2 rounded-lg hover:text-white hover:bg-red-500 duration-300 ease-in-out h-9">
                    <FaTrash size={16} />
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
      </div>
      <Toaster 
                      containerStyle={{
                        textAlign:'center',
                        fontSize:'larger'
                      }}
                      toastOptions={{
                        // Define default options
                        className: '',
                        duration: 4000,
                        style: {
                          background: '#72491B',
                          color: '#fff',
                        },
                    
                        // Default options for specific types
                        success: {
                          duration: 3000,
                          theme: {
                            primary: 'green',
                            secondary: 'black',
                          },
                        },
                      }}
                    />
      {/* DETAIL MODAL */}
      <div className={`${show ? "" : "hidden"} z-50 fixed flex mx-auto justify-center items-center backdrop-blur-sm bg-tert/10 h-screen w-screen top-0`}>
        <div
          onClick={() => {
            setShow(false)
          }}
          className="backdrop-blur-sm bg-tert/40 z-50 text-white w-9 h-9 text-center p-2 rounded-full absolute top-40 right-52 cursor-pointer" >
          X
        </div>
        <DetailsModal content={detailsExpression} calledByAdmin={true} handlePassPropToParent={handlePassDataFromDetailModalToParent} handleEditMore={handlePassDataFromDetailModalToParentShow} />
      </div>


      {/* DELETE MODAL */}
      <div className={`${showDeleteModal ? "" : "hidden"} z-50 fixed flex mx-auto justify-center items-center backdrop-blur-sm bg-tert/10 h-screen w-screen top-0`}>
        <div
          onClick={() => {
            setShowDeleteModal(false)
          }}
          className="backdrop-blur-sm bg-tert/40 z-50 text-white w-9 h-9 text-center p-2 rounded-full absolute top-64 right-96 cursor-pointer" >
          X
        </div>
        <div className="shadow-md bg-white p-4 rounded-lg text-center">
          <RxCrossCircled color="red" size={64} className="text-center mx-auto mb-4" />
          <p className="text-xl">
            Vous allez suprimer cet expression, en êtes-vous bien sûr?
          </p>
          <div className="flex justify-evenly mx-auto space-x-4 mt-6">
            <div
              onClick={() => {
                setShowDeleteModal(false)
              }}
              className="border px-6 bg-red-600 text-white py-2 rounded-lg cursor-pointer font-bold">
              Non
            </div>
            <div
              onClick={() => {
                setShowDeleteModal(false)
                handleDelete()
              }}
              className="border px-6 bg-green-600 text-white py-2 rounded-lg cursor-pointer font-bold">
              Oui
            </div>
          </div>
        </div>
      </div>

      {/* EDIT MODAL */}
      <div className={`${showForm ? "" : "hidden"} z-50 fixed flex flex-row-reverse mx-auto justify-center items-center backdrop-blur-sm bg-tert/10 h-screen w-screen top-0`}>
        <div
          onClick={() => {
            setShowForm(!showForm)
          }}
          className="backdrop-blur-sm bg-tert/40 z-50 text-white w-9 h-9 text-center p-2 rounded-full absolute top-20 right-80 cursor-pointer" >
          X
        </div>
        <div className="rounded-3xl relative border border-gray-100 bg-white shadow-2xl shadow-gray-600/10 backdrop-blur-2xl">
          <div className="pt-8 py-2 sm:p-16">
            <h2 className="mb-6 text-2xl lg:text-start text-center font-bold text-gray-800">Modification d'une expréssion</h2>
            <AddExpressionForm calledToEdit={true} autoFill={detailsExpression} />
          </div>
        </div>

      </div>

      <Footer />
    </>
  )
}

export default ManageExpressions