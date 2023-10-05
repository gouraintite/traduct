import { useState } from 'react'
import { handleChangeInput, handleSubmit } from './functions'
import Nav from '../../../components/navBar'
import Footer from '../../../components/footer'
const AddExpression = () => {

  // const [fr, setfr] = useState(null)
  // const [en, seten] = useState(null)
  // const [lang1, setlang1] = useState(null)
  // const [lang2, setlang2] = useState(null)
  // const [exemple_lang1, setexemple_lang1] = useState(null)
  // const [exemple_lang2, setexemple_lang2] = useState(null)
  // const [audio1, setaudio1] = useState(null)
  // const [audio2, setaudio2] = useState(null)

  const [formData, setFormData] = useState({
      fr: '',
      en:'',
      lang1:'',
      lang2:'',
      exemple_lang1:'',
      exemple_lang2:'',
      audio1: '',
      audio2: ''
  })

  
  return (
    <>
    <Nav />
    <div className="h-screen py-20 bg-primary/10 ">
    <div className="m-auto px-6 text-gray-500 md:px-12 xl:px-40">
      <div className="m-auto space-y-8 md:w-8/12 lg:w-9/12 xl:w-10/12">
        <div className="rounded-3xl border border-gray-100 bg-white shadow-2xl shadow-gray-600/10 backdrop-blur-2xl">
          <div className="pt-8 py-2 sm:p-16">
              <h2 className="mb-6 text-2xl font-bold text-gray-800">Ajouter une expréssion</h2>
              <form action="" className="space-y-6" onSubmit={(e)=>{handleSubmit(e, formData)}}>
                <div className='flex justify-center mx-auto items-center w-full space-x-6'>
                  <div className="w-1/2">
                    <label className="text-gray-600">Français</label>
                    <textarea
                      onChange={(e)=>{handleChangeInput(e, setFormData)}}
                      value={formData.fr} 
                      name="fr" 
                      id="fr"
                      required 
                      cols="3" 
                      rows="1"
                      className="focus:outline-none block w-full rounded-md border border-gray-200 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-secondary/90"
                    />
                  </div>

                  <div className="w-1/2">
                    <label className="text-gray-600">English</label>
                    <textarea
                      onChange={(e)=>{handleChangeInput(e, setFormData)}}
                      value={formData.en}
                      name="en" 
                      id="en"
                      required 
                      cols="3" 
                      rows="1"
                      className="focus:outline-none block w-full rounded-md border border-gray-200 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-secondary/90"
                    />
                  </div>
                </div>
                <div className='flex justify-center mx-auto items-center w-full space-x-6'>
                  <div className="w-1/2">
                    <label className="text-gray-600">Ŋgə̂mbà</label>
                    <textarea
                      onChange={(e)=>{handleChangeInput(e, setFormData)}}
                      value={formData.lang1} 
                      name="lang1" 
                      id="lang1"
                      required 
                      cols="3" 
                      rows="1"
                      className="focus:outline-none block w-full rounded-md border border-gray-200 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-secondary/90"
                    />
                  </div>
                  <div className="w-1/2">
                    <label className="text-gray-600">Jô</label>
                    <textarea 
                      onChange={(e)=>{handleChangeInput(e, setFormData)}}
                      value={formData.lang2}
                      name="lang2" 
                      id="lang2"
                      required 
                      cols="3" 
                      rows="1"
                      className="focus:outline-none block w-full rounded-md border border-gray-200 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-secondary/90"
                    />
                  </div>
                </div>
                <div className='flex justify-center mx-auto items-center w-full space-x-6'>
                  <div className="w-1/2">
                    <label className="text-gray-600">Exemple Ŋgə̂mbà</label>
                    <textarea
                      onChange={(e)=>{handleChangeInput(e, setFormData)}}
                      value={formData.exemple_lang1}
                      name="exemple_lang1" 
                      id="exemple_lang1" 
                      required
                      cols="3" 
                      rows="1"
                      className="focus:outline-none block w-full rounded-md border border-gray-200 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-secondary/90"
                    />
                  </div>

                  <div className="w-1/2">
                    <label className="text-gray-600">Exemple Jô</label>
                    <textarea 
                      onChange={(e)=>{handleChangeInput(e, setFormData)}}
                      value={formData.exemple_lang2}
                      name="exemple_lang2" 
                      id="exemple_lang2" 
                      required
                      cols="3" 
                      rows="1"
                      className="focus:outline-none block w-full rounded-md border border-gray-200 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-secondary/90"
                    />
                  </div>
                </div>
                <div className='flex justify-center mx-auto items-center w-full space-x-6'>
                  <div className="w-1/2">
                    <label className="text-gray-600">Audio Ŋgə̂mbà</label>
                    <input
                      type="file"
                      accept='.aac, .ogg, .mpga, .mp3'
                      onChange={(e)=>{handleChangeInput(e, setFormData)}}
                      value={formData.audio1}
                      name="audio1"
                      id="audio1"
                      required
                      className='block w-full text-sm bg-secondary text-gray-500
                      file:mr-4 file:py-2 file:px-4
                      file:rounded-md file:border-0
                      file:text-sm file:font-semibold
                      file:bg-secondary file:text-white
                      hover:file:bg-tert
                      transition duration-300 ease-out 
                      focus:outline-none rounded-md border border-gray-200 bg-transparent invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-secondary/90'     
                    />
                  </div>

                  <div className="w-1/2">
                    <label className="text-gray-600">Audio Jô</label>
                    <input
                      type="file"
                      accept='.aac, .ogg, .mpga, .mp3'
                      onChange={(e)=>{handleChangeInput(e, setFormData)}}
                      value={formData.audio2}
                      name="audio2"
                      id="audio2"
                      required
                      className='block w-full text-sm bg-secondary text-gray-500
                      file:mr-4 file:py-2 file:px-4
                      file:rounded-md file:border-0
                      file:text-sm file:font-semibold
                      file:bg-secondary file:text-white
                      hover:file:bg-tert
                      focus:outline-none rounded-md border border-gray-200 bg-transparent transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-secondary/90'   
                   />
                  </div>
                </div>

                <button type="submit" className="relative flex mx-auto h-11 w-1/3 items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:after:bg-secondary active:duration-75 active:before:scale-95">
                  <span className="relative text-base font-semibold text-white">Ajouter</span>
                </button>

              </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
  </>    
  )

}
export default AddExpression

