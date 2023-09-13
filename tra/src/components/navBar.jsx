import { useState } from 'react'
import Logo from '../assets/logo.png'

const Nav = () => {

  const [menu, setmenu] = useState(false)


  return (
    <>
      <div className='fixed ring ring-tert bg-white/5 backdrop-blur-sm w-full'>
        <div className="py-4 xl:px-24 px-6">
          <div className="flex justify-between">
              <div className="flex justify-start items-center w-1/4">
                <div>
                  <img src={Logo} alt="" className='w-32 rounded-sm' />
                </div>
                {/* <p className='font-[900] text-xl pl-4'>
                  Lex SANDEU
                </p> */}
              </div>
              <ul className="lg:flex justify-end ring hidden space-x-3 mx-auto w-1/2">
                <li>
                  <a href='#' className='border rounded-full px-3 py-1 duration-200 easy-in-out hover:bg-secondary hover:text-white hover:cursor-pointer'>
                    Trouver une expréssion
                  </a>
                </li>
                <li>
                  <a href='#footer' className='border rounded-full px-3 py-1 duration-200 easy-in-out hover:bg-secondary hover:text-white hover:cursor-pointer'>
                    Nous contacter
                  </a>
                </li>
                <li>
                  <a href='#start' className='border rounded-full px-3 py-1 duration-200 easy-in-out bg-tert text-white hover:cursor-pointer'>
                    Commencer
                  </a>
                </li>
                <li>
                  <a href='/login' className='rounded-full px-3 py-1 duration-200 easy-in-out bg-primary border-none text-white hover:cursor-pointer'>
                    Connexion
                  </a>
                </li>
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
                  <a href='/login' className='rounded-full px-3 py-1 duration-200 easy-in-out bg-primary border-none text-white hover:cursor-pointer'>
                    Connexion
                  </a>
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