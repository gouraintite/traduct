// import { useState } from 'react'
import Logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'
const Nav = () => {

  return (
    <>

<div className="relative w-full">
        <header className="absolute top-0 left-0 w-full flex justify-center">
            <nav className="absolute w-full">
                <div className={`relative z-30 ${window.location.pathname=='/expressions' ? 'bg-gray-900/60' : 'bg-white-900/60'}`}>
                    <div className="mx-9 m-auto md:px-0 lg:py-0 lg:px-10">
                        <div className="flex flex-wrap items-center justify-between py-3 gap-6 md:gap-0">
                            <input type="checkbox" name="toggle_nav" id="toggle_nav" className="peer hidden" />
                            <div className="w-full px-6 flex justify-between md:w-max md:px-0 z-30">
                                <a href="/" aria-label="logo">
                                    <img src={Logo} className="w-36 dark:hidden" alt="tailus logo" width="14" height="68" />
                                    <img src={Logo} className="w-16 hidden dark:block" alt="tailus logo" width="44" height="8" />
                                </a>
                                
                                <div className="flex items-center md:hidden max-h-10">
                                    <label role="button" for="toggle_nav" aria-label="humburger" id="hamburger" className="relative p-2">
                                        <div id="line"
                                            className="m-auto h-0.5 w-6 rounded bg-sky-900 dark:bg-gray-300 transition duration-300"></div>
                                        <div id="line2"
                                            className="m-auto mt-2 h-0.5 w-6 rounded bg-sky-900 dark:bg-gray-300 transition duration-300">
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
                                    <ul className="gap-y-6 tracking-wide 
                                    text-gray-800 dark:text-gray-500 font-medium flex flex-col md:flex-row md:gap-y-0">
                                        <li>
                                            <NavLink to={"/"} className="block md:px-4 group">
                                                <div className="nav_item">
                                                    <span>Accueil</span>
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
                                        <li>
                                            <NavLink to={"/manage_expressions"} className="block md:px-4 group">
                                                <div className="nav_item">
                                                    <span className="group-hover:text-yellow-700">Gérer</span>
                                                </div>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to={"/new_expression"} className="block md:px-4 group">
                                                <div className="nav_item">
                                                    <span className="group-hover:text-yellow-700">Ajouter</span>
                                                </div>
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>

                                <div className="w-full pl-2
                                sm:w-max gap-4 flex min-w-max flex-col sm:flex-row">
                                    <NavLink to={'/go'} type="button" title="Start buying" className="w-full py-3 px-6 rounded-xl text-center transition dark:active:bg-yellow-900 dark:focus:bg-gray-800 active:bg-yellow-200 focus:bg-yellow-100 sm:w-max">
                                        <span className="block text-yellow-600 dark:text-yellow-700 font-semibold">
                                            Devenir membre
                                        </span>
                                    </NavLink>
                                    <NavLink to={'/connexion'} type="button" title="Start buying" className="w-full py-3 px-6 rounded-xl text-center transition bg-secondary hover:bg-yellow-700 active:bg-yellow-800 focus:bg-yellow-700 sm:w-max">
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
                                    
     {/* <nav className="fixed z-40 w-full border-b-2 bg-white/75 md:absolute">
            <div className="container m-auto px-2 md:px-12 lg:px-7">
                <div className="flex px-6 md:px-0 z-20 flex-wrap items-center justify-between py-3 gap-6 md:py-4 md:gap-0">
                    <input type="checkbox" name="" id="toggleNav" className="peer hidden" />
                    <label for="toggleNav" role="overlaynav" className="fixed left-0 top-0 transition-all 
                    md:peer-checked:hidden md:hidden opacity-0 hidden peer-checked:z-0 
                    peer-checked:opacity-75 peer-checked:block w-full h-screen
                    bg-gray-200 bg-opacity-75"></label>
                    <div className="relative z-40 py-0">
                        <NavLink href="/" aria-label="logo">
                            <img src={Logo} className="w-9 sm:w-12" alt="tailus logo" width="44" height="6" />
                        </NavLink>
                    </div>
                    
                    <div id="navlinks"
                        className="fixed h-full w-4/5 max-w-sm top-0 -left-full peer-checked:-left-0 md:relative md:top-0 md:left-0 transition-all z-30 md:flex items-center p-8 bg-white md:space-y-0 md:p-0 md:flex-nowrap md:bg-transparent md:w-max">
                        <div className="z-20 flex gap-8 md:gap-0 flex-col md:flex-row md:items-center w-full">
                            <ul className="pt-28  lg:pt-0 gap-8 tracking-wide font-medium flex-col flex md:flex-row md:gap-0">
                                <li className="max-w-max">
                                    <NavLink to="/expressions" active className="block md:px-3 group">
                                        <div
                                            className="relative text-white px-3 rounded-md
                                                    before:absolute before:-bottom-2 md:before:-bottom-7 before:origin-left before:w-full before:h-0.5 before:mx-auto before:mt-auto before:rounded-full before:bg-tert before:transition before:scale-x-0 group-hover:before:scale-x-100">
                                            <span className="transition">Trouver</span>
                                          </div>
                                    </NavLink>
                                </li>
                                <li className="max-w-max">
                                    <NavLink to="/eesions" className="block md:px-3 group">
                                        <div
                                            className="hidden sm:block w-full py-3 px-6 text-center rounded-md text-white transition bg-secondary hover:bg-tert active:bg-tert focus:bg-tert sm:w-max">
                                            <span className="transition">Tester tab</span>
                                          </div>
                                    </NavLink>
                                </li>
                                {localStorage.getItem('userToken') && <>
                                <li className="max-w-max">
                                    <NavLink to="/manage_expressions" className="block md:px-3 group">
                                        <div
                                            className="relative text-gray-600
                                                    before:absolute before:-bottom-2 md:before:-bottom-7 before:origin-left before:w-full before:h-0.5 before:mx-auto before:mt-auto before:rounded-full before:bg-tert before:transition before:scale-x-0 group-hover:before:scale-x-100">
                                            <span className="transition">Gérer</span>
                                        </div>
                                    </NavLink>
                                </li>
                                <li className="max-w-max">
                                    <NavLink to="/new_expression" className="block md:px-3 group">
                                        <div
                                            className="relative text-gray-600
                                                    before:absolute before:-bottom-2 md:before:-bottom-7 before:origin-left before:w-full before:h-0.5 before:mx-auto before:mt-auto before:rounded-full before:bg-tert before:transition before:scale-x-0 group-hover:before:scale-x-100">
                                            <span className="transition">Ajouter</span>
                                        </div>
                                    </NavLink>
                                </li>
                                </> }
                            </ul>
                            {!localStorage.getItem('userToken') && <div className="flex sm:hidden pt-4 w-full">
                                <button type="button" title="Start buying"
                                    className=" flex justify-center items-center w-full py-3 px-6 text-center rounded-full transition bg-primary hover:bg-secondary active:bg-secondary focus:bg-tert">
                                    <NavLink href='/login' className="block text-white text-sm">
                                        Connexion
                                    </NavLink>
                                </button>
                            </div>}
                        </div>
                    </div>
                    <div className="block-endnav w-max flex items-center gap-4">
                        {!localStorage.getItem('userToken') && <button type="button" title="Start buying"
                            className="hidden sm:block w-full py-3 px-6 text-center rounded-full transition bg-primary hover:bg-secondary active:bg-secondary focus:bg-tert sm:w-max">
                            <NavLink href='/login' className="block text-white text-sm">
                                        Connexion
                                    </NavLink>
                        </button>}

                        <div className="flex items-center md:hidden max-h-10">
                            <label role="button" for="toggleNav" aria-label="humburger" id="hamburger" className="relative  p-6 -mr-6">
                                <div role="hidden" id="line"Gérer
                                    className="m-auto h-0.5 w-6 rounded bg-sky-900 transition duration-300"></div>
                                <div role="hidden" id="line2"
                                    className="m-auto mt-2 h-0.5 w-6 rounded bg-sky-900 transition duration-300">
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </nav> */}
    </>
  )
}

export default Nav