import AddCategorie from "../../../components/addCategorie";
import React from 'react'

import { useState, useEffect } from "react"
import Nav from "../../../components/navBar"
import Footer from "../../../components/footer"
import { FaTrash } from 'react-icons/fa'

import { RxCrossCircled } from 'react-icons/rx'
import { useRecoilValue, useRecoilState } from "recoil"
import { expressionData } from "../../../stores/data"
import Empty from '../../../assets/empty.svg'

// requests imports
import { base_url_api2 } from '@/config/constants'
import axiosInstance from "@/config/axios"

const NewCategorie = () => {


    const [show, setShow] = useState(false)
    const [showForm, setShowForm] = useState(false)
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [isGoingToBeDeleteId, setIsGoingToBeDeleteId] = useState(null)
    const valLog = useRecoilValue(expressionData)
    const [hideCategorieForm, setHideCategorieForm] = useState(true)

    const [count, setCount] = useState(0)
    const [categorie, setCategorie] = useState([]);
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


    useEffect(() => {
        handleGetData();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [count])

    const handleGetData = () => {

        axiosInstance.get(`${base_url_api2}/categories/get-all`)
            .then(response => {
                setCategorie(response?.data)
                console.log(response.data);
            })
            .then((response) => {
                console.log(categorie, 'errer');
                console.log(response, 'this is the response');
            })
            .catch(err => {
                console.log(err, 'this is the error');
            })
    }

    const handleDelete = () => {
        axiosInstance.delete(`${base_url_api2}/categories/delete/${isGoingToBeDeleteId}`)
            .then(response => {
                console.log(response, 'res delete');
                handleGetData()
            })
            .catch((error) => {
                console.log(error, 'while deleting');
            })
    }
    if (count < 1) {
        setTimeout(() => {
            setCount(count + 1)
        }, 6000);
    }

    const handlePassDataFromDetailModalToParent = (value) => {
        console.log(value, 'in parent');
        if (value) {
            setShow(false)
            setShowDeleteModal(true)
        }
    }


    const handlePassDataFromDetailModalToParentShow = (value) => {
        console.log(value, 'in parent');
        if (value) {
            setShow(false)
            setShowForm(true)
        }
    }

    return (
        <>
            <Nav />
            <div className="container mx-auto h-screen pt-24 w-11/12">
                {/* <button onClick={() => { setHideCategorieForm(!hideCategorieForm) }}
                    className="mt-4 flex h-11 w-auto items-center justify-center px-6 before:inset-0 rounded-lg bg-primary transition duration-300 hover:before:scale-105 active:after:bg-secondary active:duration-75 active:before:scale-95">
                    <span className="text-base font-semibold text-white">Ajouter une expression</span>
                    <div className={`border border-t-0 bg-tert rounded-lg ${hideCategorieForm ? 'hidden' : ' z-2'}`}>
                        <AddCategorie afterDone={() => {
                            setHideCategorieForm(!hideCategorieForm)
                        }} />
                        {console.log(categorie, 'cating')}
                    </div>
                </button> */}
                <button
                    className="mt-4 lg:mx-12 h-11 w-auto items-center justify-center pt-1.5 inset-0 rounded-full bg-primary transition duration-300 hover:before:scale-105 active:after:bg-secondary active:duration-75 active:before:scale-95">
                    <span onClick={() => { setHideCategorieForm(!hideCategorieForm)}} className=" text-base font-semibold text-white px-3">Ajouter une catégorie</span>
                    <div className={`border border-t-0 bg-tert rounded-lg ${hideCategorieForm ? 'hidden' : ' z-2'}`}>
                        <AddCategorie afterDone={() => {
                            setHideCategorieForm(!hideCategorieForm)
                        }} />
                        {console.log(categorie, 'cating')}
                    </div>
                </button>
                {/* {valLog.length} */}
                <div className="my-6 rounded flex flex-wrap gap-x-4 lg:mt-6 lg:px-12">
                    {categorie && categorie.map((item) => (
                        <div key={item.id}>
                            <div onMouseEnter={() => {
                                setIsGoingToBeDeleteId(item.id)
                                setDetailsExpression(item)
                                // console.log(item, 'on hover');
                                // console.log(isGoingToBeDeleteId, 'hover');
                            }}
                                className="flex rounded-lg bg-primary text-white hover:bg-secondary hover:shadow-lg transition-all duration-150 ease-in-out px-3 justify-around border my-2 overflow-hidden">
                                <div className={`auto h-12 flex items-center`}>
                                    {item?.name.length > 0 ? String(item?.name) : '---'}
                                </div>
                                <div className="flex justify-around items-end space-x-6">
                                    <div
                                        onClick={() => {
                                            setShowDeleteModal(!showDeleteModal)
                                            setIsGoingToBeDeleteId(item.id)
                                            console.log(isGoingToBeDeleteId, 'click');
                                        }} className="text-white border-none hover:text-red-500 cursor-pointer p-1 rounded-lg duration-300 ease-in-out h-9">
                                        <FaTrash size={16} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    {(typeof (categorie) !== 'object' || categorie.length === 0) && <div className="text-center text-md font-bold text-gray-800 md:text-xl">

                        <img src={Empty} className="w-1/2 mx-auto" alt="" />
                        Aucune catégorie disponible pour le moment
                    </div>}
                </div>
            </div>



            {/* DELETE MODAL */}
            <div className={`${showDeleteModal ? "" : "hidden"} fixed flex mx-auto justify-center items-center backdrop-blur-sm bg-tert/10 h-screen w-screen top-0`}>
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
                        Vous allez suprimer cette catégorie, toutes les <br /> expressions qui y sont liées seront egalement supprimées.
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
                            Oui j'accepte
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default NewCategorie