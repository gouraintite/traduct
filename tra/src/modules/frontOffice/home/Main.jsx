import HeaderSection from "../../../components/header"
import Nav from "../../../components/navBar"
import Footer from "../../../components/footer"
import Testimonials from "../../../components/testimonial"
import HowToUse from "../../../components/howToUse"

const Login = () => {
  return (
    <>
      <div className="w-full">
      <Nav />
      <HeaderSection />
      <HowToUse />
      <div className="pt-12 text-center lg:h-screen lg:mb-0 mb-4 h-auto">
        <h2 className="text-4xl font-bold pb-1 px-1">
          Conçu pour apprendre à l &apos;aise.
        </h2>
        <span>
          Avec des expressions disponibles en texte et en audio, possédant chacune des exemples d'appui.
        </span>

        <div className="lg:flex flex flex-wrap justify-around border rounded-xl lg:w-3/4 w-full lg:px-0 px-2 mx-auto lg:h-2/3 h-auto items-center mt-16">
          <div className="w-auto  h-full rounded-xl m-2 flex justify-center items-center text-center">
            <div className="">
                <svg fill="#865e3c" width="52" height="52" version="1.1" x="0px" y="0px" viewBox="0 0 64 64" className="mx-auto my-3">
                <path d="M56,34.8h-3.9V9.6c0-4.2-3.3-7.6-7.3-7.8l-31.6,0C6.9,1.7,1.8,7,1.8,13.5v4.3c0,2,1.7,3.7,3.7,3.7h6.5v26.7
                  c0,3.5,2.9,6.4,6.5,6.4h3.7v5.1c0,1,0.5,1.8,1.4,2.3c0.4,0.2,0.8,0.3,1.2,0.3c0.5,0,1-0.1,1.4-0.4l4.6-3l4.5,2.9l0.2,0.1
                  c0.9,0.4,1.8,0.4,2.6-0.1c0.8-0.5,1.2-1.3,1.2-2.2v-5H56c3.4,0,6.3-2.8,6.3-6.3v-7.3C62.3,37.6,59.4,34.8,56,34.8z M6.3,13.5
                  c0-4,3.1-7.3,6.9-7.3h22.7c-0.6,1.2-1,2.6-1,4.1V17H6.3V13.5z M30.7,44.5c-3.7,0-6.6-2.9-6.6-6.5c0-3.6,3-6.5,6.6-6.5
                  s6.6,2.9,6.6,6.5C37.3,41.6,34.4,44.5,30.7,44.5z M32.4,54.6c-1-0.7-2.3-0.7-3.4,0l-2.4,1.6v-8c1.3,0.5,2.7,0.8,4.1,0.8
                  c1.5,0,2.9-0.3,4.1-0.8v8L32.4,54.6z M39.3,50.1v-5.2c1.6-1.9,2.5-4.3,2.5-6.9c0-6.1-5-11-11.1-11c-6.1,0-11.1,4.9-11.1,11
                  c0,2.6,0.9,5.1,2.5,7v5.1h-3.7c-1.1,0-2-0.8-2-1.9V21.5h19.2c2,0,3.7-1.7,3.7-3.7v-7.4c0-2.2,1.5-3.9,3.5-4.1h1.5
                  c1.8,0,3.2,1.5,3.2,3.3v40.5H39.3z M57.8,48.3c0,1-0.8,1.8-1.8,1.8h-3.9V39.3H56c1,0,1.8,0.8,1.8,1.8V48.3z"/>
                </svg>

                <p className="text-xl font-bold">Vous en priorité</p>
                <p className="text-center flex mx-auto py-3">
                  <span className="lg:w-1/2 mx-auto">Nous avons un seul et unique objectif, faciliter votre apprentissage.</span>
                </p>
              </div>

          </div>
          <div className="lg:w-1/2 w-full bg-tert/10 flex flex-wrap h-full rounded-xl lg:p-1">
            <div className="flex justify-center items-center w-1/2 h-1/2 bg-transparent hover:bg-white duration-300 ease-out rounded-2xl">
                <div className=" w-full h-3/4 px-4 text-start rounded-2xl">

                    <svg fill="#865e3c" width="42" height="42" version="1.1" x="0px"
                      y="0px" viewBox="0 0 64 64" className="border border-slate-300 p-2 rounded-lg">
                    <path d="M54.1,14.5h-4.6c1.1-0.8,2-1.7,2.4-2.8c0.6-1.5,0.6-4-2.5-6.9c-3.3-3.2-6.3-3.2-8.2-2.7c-4.3,1.1-7.2,6.1-8.8,9.7
                      c-1.6-3.6-4.5-8.5-8.8-9.7c-1.9-0.5-4.9-0.4-8.2,2.7c-3.1,3-3,5.4-2.5,6.9c0.4,1.1,1.3,2,2.4,2.8H9.9c-2.9,0-5.3,2.4-5.3,5.3v6.6
                      c0,2.8,2.3,5.1,5.1,5.2V56c0,3.4,2.8,6.3,6.3,6.3h32.7c3.4,0,6.3-2.8,6.3-6.3V31.5c2.5-0.4,4.4-2.6,4.4-5.2v-6.6
                      C59.4,16.8,57,14.5,54.1,14.5z M42.3,6.3c0.1,0,0.4-0.1,0.7-0.1c0.7,0,1.8,0.3,3.3,1.7c1.2,1.1,1.5,1.9,1.4,2.1
                      c-0.5,1.4-5.5,2.9-11.2,3.5C37.9,10.4,40,6.9,42.3,6.3z M18.4,8c1.5-1.4,2.6-1.7,3.3-1.7c0.3,0,0.5,0.1,0.7,0.1
                      c2.3,0.6,4.5,4,5.9,7.2c-5.7-0.6-10.7-2.1-11.2-3.5C17,9.8,17.3,9.1,18.4,8z M9.1,26.3v-6.6c0-0.4,0.3-0.8,0.8-0.8h44.2
                      c0.4,0,0.8,0.3,0.8,0.8v6.6c0,0.4-0.3,0.8-0.8,0.8H9.9C9.5,27.1,9.1,26.8,9.1,26.3z M48.7,57.8H16c-1,0-1.8-0.8-1.8-1.8V31.6h36.2
                      V56C50.5,57,49.7,57.8,48.7,57.8z"/>
                    </svg>

                    
                    <p className="font-bold text-xl mt-3">
                      Tout en free 
                    </p>
                    <p className="mt-3 text-md">
                      Vous avez accès à tout sans débourser un sous.
                    </p>
                </div>
            </div>
            <div className="flex justify-center items-center w-1/2 h-1/2 bg-transparent hover:bg-white duration-300 ease-out rounded-2xl">
                <div className=" w-full h-3/4 px-4 text-start rounded-2xl">

                    <svg fill="#865e3c" width="42" height="42" version="1.1" id="lni_lni-protection" x="0px"
                      y="0px" viewBox="0 0 64 64" className="border border-slate-300 p-1 rounded-lg">
                    <g>
                      <path d="M53.6,7.5L33.3,1.9c-0.8-0.2-1.7-0.2-2.5,0L10.4,7.5C8.3,8.1,6.8,10,6.8,12.2V27c0,15.5,9.2,29.2,23.4,34.9
                        c0.6,0.2,1.2,0.4,1.8,0.4s1.2-0.1,1.8-0.4c14.2-5.7,23.4-19.5,23.4-35V12.2C57.2,10,55.7,8.1,53.6,7.5z M52.7,26.9
                        c0,13.4-8.3,25.8-20.5,30.8c-0.1,0-0.2,0-0.3,0C19.4,52.7,11.3,40.6,11.3,27V12.2c0-0.1,0.1-0.3,0.2-0.3l20.4-5.6c0,0,0.1,0,0.1,0
                        c0,0,0,0,0.1,0l20.4,5.6c0.1,0,0.2,0.2,0.2,0.3V26.9z"/>
                      <path d="M43.3,22.6L29.5,34.2L23.3,29c-1-0.8-2.4-0.7-3.2,0.3c-0.8,1-0.7,2.4,0.3,3.2l7.6,6.4c0.4,0.4,0.9,0.5,1.4,0.5
                        s1-0.2,1.4-0.5L46.2,26c1-0.8,1.1-2.2,0.3-3.2C45.7,21.9,44.2,21.8,43.3,22.6z"/>
                    </g>
                    </svg>

                    <p className="font-bold text-xl mt-3">
                      Servie sécurisé
                    </p>
                    <p className="mt-3 text-md">
                      Baladez-vous sur notre plateforme en toute sécurisé.
                    </p>
                </div>
            </div>
            <div className="flex justify-center items-center w-1/2 h-1/2 bg-transparent hover:bg-white duration-300 ease-out rounded-2xl">
                <div className=" w-full h-3/4 px-4 text-start rounded-2xl">
                                      
                  <svg fill="#865e3c" width="42" height="42" version="1.1" id="lni_lni-headphone" x="0px" y="0px" viewBox="0 0 64 64" className="border border-slate-300 p-1 rounded-lg">
                  <path d="M53.6,18c-5.9-5.8-13.7-8.9-22.1-8.7C15.1,9.5,1.8,22.8,1.8,38.9v11.5c0,2.3,1.9,4.3,4.3,4.3h6.2c2.3,0,4.3-1.9,4.3-4.3
                    v-8.8c0-2.3-1.9-4.3-4.3-4.3H6.3c0.8-13,11.8-23.5,25.2-23.7c7.1-0.2,13.9,2.5,18.9,7.4c4.5,4.4,7.1,10.1,7.3,16.2h-5.9
                    c-2.3,0-4.3,1.9-4.3,4.3v8.8c0,2.3,1.9,4.3,4.3,4.3H58c2.3,0,4.3-1.9,4.3-4.3v-12C62.3,30.8,59.2,23.5,53.6,18z M11.9,50.2H6.3v-8.3
                    h5.7V50.2z M57.8,50.2h-5.7v-8.3h5.7V50.2z"/>
                  </svg>

                    <p className="font-bold text-xl mt-3">
                      Apprenez en audio
                    </p>
                    <p className="mt-3 text-md">
                      Les expressions vous pouvez également les écouter.
                    </p>
                </div>
            </div>            
            <div className="flex justify-center items-center w-1/2 h-1/2 bg-transparent hover:bg-white duration-300 ease-out rounded-2xl">
                <div className=" w-full h-3/4 px-4 text-start rounded-2xl">
                    <svg fill="#865e3c" width="42" height="42" version="1.1"
                      x="0px" y="0px" viewBox="0 0 64 64" className="border border-slate-300 p-2 rounded-lg">
                    <g>
                      <path d="M4,8.9h56c1.2,0,2.3-1,2.3-2.3s-1-2.3-2.3-2.3H4c-1.2,0-2.3,1-2.3,2.3S2.8,8.9,4,8.9z"/>
                      <path d="M60,21.3H4c-1.2,0-2.3,1-2.3,2.3s1,2.3,2.3,2.3h56c1.2,0,2.3-1,2.3-2.3S61.2,21.3,60,21.3z"/>
                      <path d="M60,38.2H4c-1.2,0-2.3,1-2.3,2.3s1,2.3,2.3,2.3h56c1.2,0,2.3-1,2.3-2.3S61.2,38.2,60,38.2z"/>
                      <path d="M42.5,55.1H4c-1.2,0-2.3,1-2.3,2.3s1,2.3,2.3,2.3h38.5c1.2,0,2.3-1,2.3-2.3S43.7,55.1,42.5,55.1z"/>
                    </g>
                    </svg>

                    <p className="font-bold text-xl mt-3">
                      Apprenez en texte
                    </p>
                    <p className="mt-3 text-md">
                      Les expressions vous pouvez également les lire.
                    </p>
                </div>
            </div>
          </div>
        </div>
      </div>
      <Testimonials />
      <Footer />
      </div>
    </>
  )
}

export default Login