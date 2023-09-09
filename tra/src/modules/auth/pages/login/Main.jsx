import HeaderSection from "../../../../components/header"
import Nav from "../../../../components/navBar"
import Footer from "../../../../components/footer"
import Testimonials from "../../../../components/testimonial"
import HowToUse from "../../../../components/howToUse"
import Logo from "../../../../assets/react.svg"

const Login = () => {
  return (
    <>
      <Nav />
      <HeaderSection />
      <div className="pt-12 text-center h-screen">
        <h2 className="text-4xl font-bold pb-1">
          Conçu pour apprendre à l &apos;aise.
        </h2>
        <span>
          apiente optio repellendus atque illum odio! Fugiat at expedita deserunt dolorum molestias.
        </span>

        <div className="flex justify-around border rounded-xl w-3/4 mx-auto h-2/3 items-center mt-16">
          <div className="w-1/2 h-full rounded-xl m-2 flex justify-center items-center text-center">
              <div className="">
                <img src={Logo} alt="" className="py-3 mx-auto"/>
                <p className="text-xl font-bold">User centred</p>
                <p className="text-center flex mx-auto py-3">
                  <span className="w-1/2 mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit</span>
                </p>
              </div>

          </div>
          <div className="w-1/2 bg-tert/5 flex flex-wrap backdrop-blur-sm h-full rounded-xl p-1">
            <div className="flex justify-center items-center w-1/2 h-1/2 bg-transparent hover:bg-white duration-300 ease-out rounded-2xl">
                <div className=" w-full h-3/4 px-4 text-start rounded-2xl">
                    <img src={Logo} alt="" className="border border-slate-300 rounded-md p-1"/>
                    <p className="font-bold text-xl mt-3">
                      Ceci est la sécurité
                    </p>
                    <p className="mt-3 text-md">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Etdo
                    </p>
                </div>
            </div>
            <div className="flex justify-center items-center w-1/2 h-1/2 bg-transparent hover:bg-white duration-300 ease-out rounded-2xl">
                <div className=" w-full h-3/4 px-4 text-start rounded-2xl">
                    <img src={Logo} alt="" />
                    <p className="font-bold text-xl mt-3">
                      Ceci est la sécurité
                    </p>
                    <p className="mt-3 text-md">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Etdo
                    </p>
                </div>
            </div>            <div className="flex justify-center items-center w-1/2 h-1/2 bg-transparent hover:bg-white duration-300 ease-out rounded-2xl">
                <div className=" w-full h-3/4 px-4 text-start rounded-2xl">
                    <img src={Logo} alt="" />
                    <p className="font-bold text-xl mt-3">
                      Ceci est la sécurité
                    </p>
                    <p className="mt-3 text-md">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Etdo
                    </p>
                </div>
            </div>            <div className="flex justify-center items-center w-1/2 h-1/2 bg-transparent hover:bg-white duration-300 ease-out rounded-2xl">
                <div className=" w-full h-3/4 px-4 text-start rounded-2xl">
                    <img src={Logo} alt="" />
                    <p className="font-bold text-xl mt-3">
                      Ceci est la sécurité
                    </p>
                    <p className="mt-3 text-md">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Etdo
                    </p>
                </div>
            </div>
          </div>
        </div>
      </div>
      <HowToUse />
      <Testimonials />
      <Footer />
    </>
  )
}

export default Login