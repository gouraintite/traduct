import Logo from '../assets/ogo.svg'
 import doc from '../assets/documents/traduct.pdf'

const HeaderSection = () => {
  return (
    <div className="flex justify-around space-x-4 lg:py-6 h-screen lg:px-12">
        <div className="lg:w-1/2 w-full flex items-center p-6">
            <div>
                <p className="font-bold lg:text-6xl text-4  xl leading-snug">
                J’apprends facilement  <br /> le ghɔmálá’ <span className='text-primary font-bold'>(jó & ŋgə̂mbà)</span> 
                </p>
                <p className='text-xl'>
                <br /> de façon simple et éfficace, apprenez le jó et ŋgə̂mbà. Par des textes, des audios et des exemples qui facilite la compréhension.
                </p>
                <br />
                <p className='border-none bg-primary/10 rounded p-2 lg:text-md text-md'>bandjoun – Bafoussam – Baleng – bayangam – Baham – Badenkop – Batié – Bapa – Bahouan – Bamendjou – Bameka – Bansoa – Bamougoum – Bafounda</p>
                <div className='flex justify-start lg:space-x-12 space-x-6 w-full lg:mt-6 mt-3 lg:text-xl text-sm'>
                    <a href='#start' className='rounded-full text-white/80 bg-primary py-2 px-4 hover:cursor-pointer hover:text-primary hover:bg-tert/20 easy-in-out duration-300'>
                        Commencer
                    </a>
                    <a href={doc} target='_blank' rel='noreferrer' className='rounded-full text-primary bg-tert/20 py-2 px-4 hover:cursor-pointer hover:text-white hover:bg-primary easy-in-out duration-300'>
                        En savoir plus
                    </a>
                </div>
            </div>
        </div>
        <div className="lg:w-1/2 w-full lg:flex hidden justify-center items-center">
            <img src={Logo} alt="" className='w-3/4'/>
        </div>
    </div>
  )
}

export default HeaderSection