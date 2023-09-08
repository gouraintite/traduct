import Logo from '../assets/ogo.svg'
 

const HeaderSection = () => {
  return (
    <div className="flex justify-around space-x-4 py-6 h-screen px-12">
        <div className="w-1/2 flex items-center p-6">
            <div>
                <p className="font-bold text-6xl leading-snug">
                    Apprenez <br /> facilement le 
                        <span className='text-tert font-black'> jó</span> et <span className='text-primary font-black'>ŋgə̂mbà</span> 
                </p>
                <p className='text-xl'>
                <br /> de la façon la plus simple possible. Voluptas doloribus asperiores quaerat aperiam. Quidem harum omnis beatae ipsum soluta!
                </p>
                <br />
                <div className='flex justify-start space-x-12 w-1/2 lg:mt-12'>
                    <div className='rounded-full text-white/80 bg-primary py-3 px-5 hover:cursor-pointer hover:text-primary hover:bg-tert/20 easy-in-out duration-300'>
                        Commencer
                    </div>
                    <div className='rounded-full text-primary bg-tert/20 py-3 px-5 hover:cursor-pointer hover:text-white hover:bg-primary easy-in-out duration-300'>
                        En savoir plus
                    </div>
                </div>
            </div>
        </div>
        <div className="w-1/2 flex justify-center items-center">
            <img src={Logo} alt="" className='w-3/4'/>
        </div>
    </div>
  )
}

export default HeaderSection