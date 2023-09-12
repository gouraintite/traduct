import Logo from '../assets/logo.png'

const Nav = () => {
  return (
    <>
      <div className='fixed ring ring-tert bg-white/5 backdrop-blur-sm w-full'>
        <div className="py-4 px-24">
          <div className="flex justify-between">
              <div className="flex justify-start items-center w-1/4">
                <div>
                  <img src={Logo} alt="" className='w-32 rounded-sm' />
                </div>
                {/* <p className='font-[900] text-xl pl-4'>
                  Traduct
                </p> */}
              </div>
              <div className="flex justify-end space-x-3 mx-auto w-1/2">
                <div className='border rounded-full px-3 py-1 duration-200 easy-in-out hover:bg-secondary hover:text-white hover:cursor-pointer'>
                  Accueil
                </div>
                <div className='border rounded-full px-3 py-1 duration-200 easy-in-out hover:bg-secondary hover:text-white hover:cursor-pointer'>
                  Trouver une expréssion
                </div>
                <a href='#footer' className='border rounded-full px-3 py-1 duration-200 easy-in-out hover:bg-secondary hover:text-white hover:cursor-pointer'>
                  Nous contacter
                </a>
                <a href='#start' className='rounded-full px-3 py-1 duration-200 easy-in-out bg-primary border-none text-white hover:cursor-pointer'>
                  Commencer
                </a>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Nav