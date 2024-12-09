// import { useState } from 'react'
import { useState } from 'react'
import Logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'
import { RxCrossCircled } from 'react-icons/rx'
import { FaDoorOpen } from 'react-icons/fa'



const Nav = () => {

    const [showDeleteModal, setShowDeleteModal] = useState(false)
    var navTextColor = window.location.pathname == '/expressions' ? 'text-gray-200' : 'text-gray-700'

    return (
        <>

            <div className="relative w-full">
                <header className="absolute top-0 left-0 w-full flex justify-center">
                    <nav className="w-full fixed bg-secondary/25 backdrop-blur-md z-99">
                        <div className={`relative z-30 ${window.location.pathname == '/expressions' ? 'bg-gray-900/60' : 'bg-white-900/60'}`}>
                            <div className="mx-9 m-auto md:px-0 lg:py-0 lg:px-10">
                                <div className="flex flex-wrap items-center justify-between py-2 gap-6 md:gap-0">
                                    <input type="checkbox" name="toggle_nav" id="toggle_nav" className="peer hidden" />
                                    <div className="w-full px-6 flex justify-between md:w-max md:px-0 z-30">
                                        <a href="/" aria-label="logo">
                                            <img src={Logo} className="w-16 dark:hidden" alt="tailus logo" width="14" height="68" />
                                            <img src={Logo} className="w-16 hidden dark:block" alt="tailus logo" width="44" height="8" />
                                        </a>

                                        <div className="flex items-center md:hidden max-h-10">
                                            <label role="button" for="toggle_nav" aria-label="humburger" id="hamburger" className="relative p-2">
                                                <div id="line"
                                                    className="m-auto h-0.5 w-6 rounded bg-tert dark:bg-tert transition duration-300"></div>
                                                <div id="line2"
                                                    className="m-auto mt-2 h-0.5 w-6 rounded bg-tert dark:bg-tert transition duration-300">
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                    <label for="toggle_nav" className="hidden peer-checked:block fixed w-full h-full left-0 top-0 z-10 bg-yellow-200 bg-opacity-30 backdrop-blur backdrop-filter"></label>
                                    <div className="hidden z-40 peer-checked:flex w-11/12 mx-auto md:mx-0 flex-col 
                                        justify-end items-center gap-y-8 p-6 
                                        rounded-xl bg-white dark:bg-gray-800 md:flex md:w-8/12 
                                        md:gap-y-0 md:gap-x-4 md:divide-x md:p-0 
                                        md:flex-row md:bg-transparent lg:w-7/12">
                                        <div className="block w-full md:w-max">
                                            <ul className={`gap-y-3 tracking-wide ${navTextColor} font-medium flex flex-col md:flex-row md:gap-y-0`}>
                                                <li>
                                                    <NavLink to={"/"} className="block md:px-4 group">
                                                        <div className="nav_item">
                                                            <span className="group-hover:text-yellow-700">Accueil</span>
                                                        </div>
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to={"/expressions"} className="block md:px-4 group">
                                                        <div className="nav_item">
                                                            <span className="group-hover:text-yellow-700">Trouver</span>
                                                        </div>
                                                    </NavLink>
                                                </li>
                                                {
                                                    localStorage.userToken && <>
                                                        <li>
                                                            <NavLink to={"/manage_expressions"} className="block md:px-4 group">
                                                                <div className="nav_item">
                                                                    <span className="group-hover:text-yellow-700">Expressions</span>
                                                                </div>
                                                            </NavLink>
                                                        </li>
                                                        <li>
                                                            <NavLink to={"/add_categorie"} className="block md:px-4 group">
                                                                <div className="nav_item">
                                                                    <span className="group-hover:text-yellow-700">Catégories</span>
                                                                </div>
                                                            </NavLink>
                                                        </li>
                                                    </>
                                                }
                                            </ul>
                                        </div>
                                        <div className={`w-full pl-2 sm:w-max gap-4 flex min-w-max flex-col sm:flex-row cursor-pointer`}
                                            onClick={() => {
                                                setShowDeleteModal(!showDeleteModal)
                                            }}>
                                            {localStorage.userToken && <div title="Déconnectez-vous de votre compte existant" className="w-full py-3 px-6 rounded-xl text-center transition bg-red-400 hover:bg-red-700 active:bg-yellow-800 focus:bg-yellow-700 sm:w-max">
                                                <span className="block text-white font-semibold">
                                                    Deconnexion
                                                </span>
                                            </div>

                                            }
                                        </div>
                                        <div className={`w-full pl-2 sm:w-max gap-4 flex min-w-max flex-col sm:flex-row ${localStorage.userToken ? 'hidden' : ''}`} >
                                            <NavLink to={'/go'} type="button" title="Devenir membre" className="w-full py-3 px-6 rounded-xl text-center transition dark:active:bg-yellow-900 dark:focus:bg-gray-800 active:bg-yellow-200 focus:bg-yellow-100 sm:w-max">
                                                <span className="block text-yellow-600 dark:text-yellow-700 font-semibold">
                                                    Devenir membre
                                                </span>
                                            </NavLink>
                                            <NavLink to={'/login'} type="button" title="Acceder à votre compte existant" className="w-full py-3 px-6 rounded-xl text-center transition bg-secondary hover:bg-yellow-700 active:bg-yellow-800 focus:bg-yellow-700 sm:w-max">
                                                <span className="block text-white font-semibold">
                                                    Connexion
                                                </span>
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>
            </div>

            {/* LOGOUT MODAL */}
            <div className={`${showDeleteModal ? "" : "hidden"} z-50 fixed flex mx-auto justify-center items-center backdrop-blur-sm bg-tert/10 h-screen w-screen top-0`}>
                <div
                    onClick={() => {
                        setShowDeleteModal(false)
                    }}
                    className="backdrop-blur-sm bg-tert/40 z-50 text-white w-9 h-9 text-center p-2 rounded-full absolute top-64 right-96 cursor-pointer" >
                    X
                </div>
                <div className="shadow-md bg-white p-4 rounded-lg text-center">
                    <FaDoorOpen color="red" size={64} className="text-center mx-auto mb-4" />
                    <p className="text-xl">
                        Voulez-vous vraiment vous déconnecter?
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
                                localStorage.clear()
                                window.location.replace('/')
                            }}
                            className="border px-6 bg-green-600 text-white py-2 rounded-lg cursor-pointer font-bold">
                            Oui
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nav