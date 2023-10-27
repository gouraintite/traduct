// import { useState } from 'react'
import Logo from '../assets/logo.png'

const Nav = ({opacity}) => {

  // const [menu, setmenu] = useState(false)
  let op = opacity || 5;
  return (
    <>
      <div className={`fixed border-2 h-auto py-2 bg-white/${op} backdrop-blur-sm w-full z-50`}>
        <div className="py-2 xl:px-24 px-6 h-auto">
          <div className="flex justify-evenly">
              <div className="flex justify-start mr-auto items-center w-1/4">
                <a href='/'>
                  <img src={Logo} alt="" className='w-12 rounded-sm' />
                </a>
                {/* <p className='font-[900] text-xl pl-4'>
                  A-frilang
                </p> */}
              </div>
              <ul className="lg:flex justify-end items-end block space-y-3 text-end space-x-3 mx-auto w-full max-w-2/3">
                {
                  (!localStorage.getItem('userToken')) && (
                    <li>
                      <a href='/expressions' className='border rounded-full px-3 py-2 duration-200 easy-in-out hover:bg-secondary hover:text-white hover:cursor-pointer'>
                        Trouver une expréssion
                      </a>
                    </li>
                  )
                }
                {
                  (window.location.pathname === '/' && !localStorage.getItem('userToken')) && (
                    <>
                      <li>
                        <a href='#footer' className='border rounded-full px-3 py-2 duration-200 easy-in-out hover:bg-secondary hover:text-white hover:cursor-pointer'>
                          Contact
                        </a>
                      </li>
                      <li>
                        <a href='#start' className='border rounded-full px-3 py-2 duration-200 easy-in-out bg-tert text-white hover:cursor-pointer'>
                          Commencer
                        </a>
                      </li>
                    </>)
                }
                {
                  localStorage.getItem('userToken') && (
                    <>
                      <li>
                        <a href='/new_expression' className='border rounded-full px-3 py-2 duration-200 easy-in-out hover:bg-secondary hover:text-white hover:cursor-pointer'>
                          Ajouter une expréssion
                        </a>
                      </li>
                      <li>
                        <a href='/manage_expressions' className='border rounded-full px-3 py-2 duration-200 easy-in-out bg-tert text-white hover:cursor-pointer'>
                          Gérer mes expréssions
                        </a>
                      </li>
                    </>)
                }
                {!localStorage.getItem('userToken') && <li>
                  <a href='/login' className='rounded-full px-3 py-2 duration-200 easy-in-out bg-primary border-none text-white hover:cursor-pointer'>
                    Connexion
                  </a>
                </li>}
              </ul>
              <div className='right-0 w-full absolute flex lg:hidden justify-end items-end pr-2' id='menu'>
                  {/* <svg fill="#1C2033" width="32" height="32" version="1.1" x="0px"
                    y="0px" viewBox="0 0 64 64">
                  <g>
                    <path d="M60,29.8H4c-1.2,0-2.3,1-2.3,2.3c0,1.2,1,2.3,2.3,2.3h56c1.2,0,2.3-1,2.3-2.3C62.3,30.8,61.2,29.8,60,29.8z"/>
                    <path d="M60,46.8H4c-1.2,0-2.3,1-2.3,2.3s1,2.3,2.3,2.3h56c1.2,0,2.3-1,2.3-2.3S61.2,46.8,60,46.8z"/>
                    <path d="M4,17.2h56c1.2,0,2.3-1,2.3-2.3s-1-2.3-2.3-2.3H4c-1.2,0-2.3,1-2.3,2.3S2.8,17.2,4,17.2z"/>
                  </g>
                  </svg> */}
                  {!localStorage.getItem('userToken') && <a href='/login' className='rounded-full px-3 py-1 duration-200 easy-in-out bg-primary border-none text-white hover:cursor-pointer'>
                    Connexion
                  </a>}
              </div>
              {/* <div className='absolute row row-auto ring w-1/2 inline'>
                <div className='border rounded-full px-3 py-1 duration-200 easy-in-out hover:bg-secondary hover:text-white hover:cursor-pointer'>
                  Trouver une expréssion
                </div>
                <a href='#footer' className='border rounded-full px-3 py-1 duration-200 easy-in-out hover:bg-secondary hover:text-white hover:cursor-pointer'>
                  Nous contacter
                </a>
                <a href='#start' className='border rounded-full px-3 py-1 duration-200 easy-in-out bg-tert text-white hover:cursor-pointer'>
                  Commencer
                </a>
                <a href='/login' className='rounded-full px-3 py-1 duration-200 easy-in-out bg-primary border-none text-white hover:cursor-pointer'>
                  Connexion
                </a>
              </div> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Nav