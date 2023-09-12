import Logo from '../assets/ogo.svg'
 import doc from '../assets/documents/traduct.pdf'

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
                <br /> de façon simple et éfficace, apprenez le jó et ŋgə̂mbà. Par du textes, des audios et des exemples qui facilite la compréhension.
                </p>
                <br />
                <div className='flex justify-start space-x-12 w-1/2 lg:mt-12'>
                    <a href='#start' className='rounded-full text-white/80 bg-primary py-3 px-5 hover:cursor-pointer hover:text-primary hover:bg-tert/20 easy-in-out duration-300'>
                        Commencer
                    </a>
                    <a href={doc} target='_blank' className='rounded-full text-primary bg-tert/20 py-3 px-5 hover:cursor-pointer hover:text-white hover:bg-primary easy-in-out duration-300'>
                        En savoir plus
                    </a>
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