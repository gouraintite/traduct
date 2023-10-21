import { useState, useEffect } from "react"
import Nav from "../../../components/navBar"
import Footer from "../../../components/footer"
import { FaEye, FaTrash, FaPen } from 'react-icons/fa'
import { useNavigate } from "react-router-dom"
import DetailsModal from "../../../components/details"
import AddExpressionForm from "../addExpression/addForm"
import {RxCrossCircled} from 'react-icons/rx'

function manageExpressions() {

  const [show, setShow] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)

  let navigator = useNavigate();

  useEffect(() => {
    handleDisplay()
  }, [])

  const handlePassDataFromDetailModalToParent = (value)=>{
    console.log(value, 'in parent');
    if (value) {
      setShow(false)
      setShowForm(true)
    }
  }

  const data = [
    {
      id: 1,
      fr: "Le baccalauréat est un jeu qui consiste à ressortir les noms des filles, des garçons, des fruits, des animaux, etc. par ordre alphabétique",
      en: "The baccalaureat is a game that consists in giving names of girls, boys, fruits, animals etc in alphabetic order",
      lang1: "Mbakaloléǎ mbɔ́ nə́ saŋ mətsʉ pəmbaŋa, pənjwwí, ntǎchyə́... Fɔ́ mphyə ŋkwʉ́ nshòm",
      lang2: "Mbakaloléǎ mbɔ́ nə́ saŋ mət\sʉ pəmbaŋa, pənjwwí, ntǎchyə́... Fɔ́ mphyə ŋkwʉ́ nshòm",
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

  const handleDisplay = () => {
    console.log(window.screen.width, 'ddfdgttf');
  }

  console.log(expressions[1].content[2], 'here expressions');

  return (
    <>
      <Nav />
      <div className="ring h-auto pt-20 px-6">
        <button onClick={() => { navigator('/new_expression') }}
          className="mt-4 relative flex h-11 w-auto items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:after:bg-secondary active:duration-75 active:before:scale-95">
          <span className="relative text-base font-semibold text-white">Ajouter une expression</span>
        </button>
        <div className="my-6 rounded">
          {expressions.map((item) => (
            <div key={item.id}>
              {item.content.map((element) => (
                <div key={element.id}
                  className="flex justify-around border my-2 py-4 pl-6 overflow-hidden">
                  <div className={`w-${window.screen.width * 9 / 12} overscroll-hidden`}>
                    {element.fr} ...
                  </div>
                  <div className="">
                    19/20/2023
                  </div>
                  <div className="flex justify-around mx-auto space-x-6">
                    <div
                      onClick={() => {
                        setShow(!show)
                      }}
                      className="text-tert border cursor-pointer p-2 rounded-lg hover:text-white hover:bg-green-500 duration-300 ease-in-out h-9">
                      <FaEye size={16} />
                    </div>
                    <div
                      onClick={() => {
                        setShowForm(!showForm)
                      }} className="text-tert border cursor-pointer p-2 rounded-lg hover:text-white hover:bg-blue-500 duration-300 ease-in-out h-9">
                      <FaPen size={16} />
                    </div>
                    <div
                      onClick={() => {
                        setShowDeleteModal(!showDeleteModal)
                      }} className="text-tert border cursor-pointer p-2 rounded-lg hover:text-white hover:bg-red-500 duration-300 ease-in-out h-9">
                      <FaTrash size={16} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* DETAIL MODAL */}
      <div className={`${show ? "" : "hidden"} fixed flex mx-auto justify-center items-center backdrop-blur-sm bg-tert/10 h-screen w-screen top-0`}>
        <div
          onClick={() => {
            setShow(false)
          }}
          className="backdrop-blur-sm bg-tert/40 text-white w-9 h-9 text-center p-2 rounded-full absolute top-20 right-52 cursor-pointer" >
          X
        </div>
        <DetailsModal expressions={expressions} calledByAdmin={true} handlePassPropToParent={handlePassDataFromDetailModalToParent} />
      </div>


      {/* DELETE MODAL */}
      <div className={`${showDeleteModal ? "" : "hidden"} fixed flex mx-auto justify-center items-center backdrop-blur-sm bg-tert/10 h-screen w-screen top-0`}>
        <div
          onClick={() => {
            setShowDeleteModal(false)
          }}
          className="backdrop-blur-sm bg-tert/40 text-white w-9 h-9 text-center p-2 rounded-full absolute top-20 right-52 cursor-pointer" >
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
                    }}
                    className="border px-6 bg-green-600 text-white py-2 rounded-lg cursor-pointer font-bold">
                  Oui
                </div>
            </div>
        </div>
      </div>

      {/* EDIT MODAL */}
      <div className={`${showForm ? "" : "hidden"} fixed flex mx-auto justify-center items-center backdrop-blur-sm bg-tert/10 h-screen w-screen top-0`}>
        <div
          onClick={() => {
            setShowForm(!showForm)
          }}
          className="backdrop-blur-sm bg-tert/40 text-white w-9 h-9 text-center p-2 rounded-full absolute top-20 right-52 cursor-pointer" >
          X
        </div>
        <div className="rounded-3xl border border-gray-100 bg-white shadow-2xl shadow-gray-600/10 backdrop-blur-2xl">
          <div className="pt-8 py-2 sm:p-16">
            <h2 className="mb-6 text-2xl font-bold text-gray-800">Modification d'une expréssion</h2>
            <AddExpressionForm calledToEdit={true} />
          </div>
        </div>

      </div>

      <Footer />
    </>
  )
}

export default manageExpressions