import { useState } from 'react'
import axios from 'axios'
import { handleChangeInput, handleSubmit } from './functions'
import { useNavigate } from 'react-router-dom'

const AddExpressionForm = ({calledToEdit}) => {

  let navigator = useNavigate()

  const [formData, setFormData] = useState({
    fr: '',
    en: '',
    lang1: '',
    lang2: '',
    exemple_lang1: '',
    exemple_lang2: '',
    audio1: '',
    audio2: ''
  })

  const handlePostExpressions = (data) => {
    console.log('Posting');
    axios.post("", data)
      .then((response) => {
        console.log(response, 'req response');
      })
      .catch((error) => {
        console.log(error, 'this is error');
      })
      .finally(() => {
        console.log(formData, 'from req');
        navigator('/manage_expressions')
      })
  }


  const handleUpdateExpressions = (data) => {
    console.log('Updating...');
    axios.patch("", data)
      .then((response) => {
        console.log(response, 'req response');
      })
      .catch((error) => {
        console.log(error, 'this is error');
      })
      .finally(() => {
        console.log(formData, 'from req');
        navigator('/manage_expressions')
      })
  }

  var SentRequest;
  calledToEdit ? SentRequest = handleUpdateExpressions : SentRequest = handlePostExpressions

  return (<>
    <form action="" className="space-y-6" onSubmit={(e) => { handleSubmit(e, formData, SentRequest) }}>
                  <div className='flex justify-center mx-auto items-center w-full space-x-6'>
                    <div className="w-1/2">
                      <label className="text-gray-600">Français</label>
                      <textarea
                        onChange={(e) => { handleChangeInput(e, setFormData) }}
                        value={formData.fr}
                        name="fr"
                        id="fr"
                        required
                        cols="3"
                        rows="1"
                        className="focus:outline-none block w-full rounded-md border border-gray-200 bg-transparent px-4 py-3 text-gray-600 transition duration-300 focus:ring-2 focus:ring-secondary/90"
                      />
                    </div>

                    <div className="w-1/2">
                      <label className="text-gray-600">English</label>
                      <textarea
                        onChange={(e) => { handleChangeInput(e, setFormData) }}
                        value={formData.en}
                        name="en"
                        id="en"
                        required
                        cols="3"
                        rows="1"
                        className="focus:outline-none block w-full rounded-md border border-gray-200 bg-transparent px-4 py-3 text-gray-600 transition duration-300 focus:ring-2 focus:ring-secondary/90"
                      />
                    </div>
                  </div>
                  <div className='flex justify-center mx-auto items-center w-full space-x-6'>
                    <div className="w-1/2">
                      <label className="text-gray-600">Ŋgə̂mbà</label>
                      <textarea
                        onChange={(e) => { handleChangeInput(e, setFormData) }}
                        value={formData.lang1}
                        name="lang1"
                        id="lang1"
                        required
                        cols="3"
                        rows="1"
                        className="focus:outline-none block w-full rounded-md border border-gray-200 bg-transparent px-4 py-3 text-gray-600 transition duration-300 focus:ring-2 focus:ring-secondary/90"
                      />
                    </div>
                    <div className="w-1/2">
                      <label className="text-gray-600">Jô</label>
                      <textarea
                        onChange={(e) => { handleChangeInput(e, setFormData) }}
                        value={formData.lang2}
                        name="lang2"
                        id="lang2"
                        required
                        cols="3"
                        rows="1"
                        className="focus:outline-none block w-full rounded-md border border-gray-200 bg-transparent px-4 py-3 text-gray-600 transition duration-300 focus:ring-2 focus:ring-secondary/90"
                      />
                    </div>
                  </div>
                  <div className='flex justify-center mx-auto items-center w-full space-x-6'>
                    <div className="w-1/2">
                      <label className="text-gray-600">Exemple Ŋgə̂mbà</label>
                      <textarea
                        onChange={(e) => { handleChangeInput(e, setFormData) }}
                        value={formData.exemple_lang1}
                        name="exemple_lang1"
                        id="exemple_lang1"
                        required
                        cols="3"
                        rows="1"
                        className="focus:outline-none block w-full rounded-md border border-gray-200 bg-transparent px-4 py-3 text-gray-600 transition duration-300 focus:ring-2 focus:ring-secondary/90"
                      />
                    </div>

                    <div className="w-1/2">
                      <label className="text-gray-600">Exemple Jô</label>
                      <textarea
                        onChange={(e) => { handleChangeInput(e, setFormData) }}
                        value={formData.exemple_lang2}
                        name="exemple_lang2"
                        id="exemple_lang2"
                        required
                        cols="3"
                        rows="1"
                        className="focus:outline-none block w-full rounded-md border border-gray-200 bg-transparent px-4 py-3 text-gray-600 transition duration-300 focus:ring-2 focus:ring-secondary/90"
                      />
                    </div>
                  </div>
                  <div className='flex justify-center mx-auto items-center w-full space-x-6'>
                    <div className="w-1/2">
                      <label className="text-gray-600">Audio Ŋgə̂mbà</label>
                      <input
                        type="file"
                        accept='.aac, .ogg, .mpga, .mp3'
                        onChange={(e) => { handleChangeInput(e, setFormData) }}
                        value={formData.audio1}
                        name="audio1"
                        id="audio1"
                        // required
                        className='block w-full text-sm bg-secondary text-gray-500
                      file:mr-4 file:py-2 file:px-4
                      file:rounded-md file:border-0
                      file:text-sm file:font-semibold
                      file:bg-secondary file:text-white
                      hover:file:bg-tert
                      transition duration-300 ease-out 
                      focus:outline-none rounded-md border border-gray-200 bg-transparent focus:ring-2 focus:ring-secondary/90'
                      />
                    </div>

                    <div className="w-1/2">
                      <label className="text-gray-600">Audio Jô</label>
                      <input
                        type="file"
                        accept='.aac, .ogg, .mpga, .mp3'
                        onChange={(e) => { handleChangeInput(e, setFormData) }}
                        value={formData.audio2}
                        name="audio2"
                        id="audio2"
                        // required
                        className='block w-full text-sm bg-secondary text-gray-500
                      file:mr-4 file:py-2 file:px-4
                      file:rounded-md file:border-0
                      file:text-sm file:font-semibold
                      file:bg-secondary file:text-white
                      hover:file:bg-tert
                      focus:outline-none rounded-md border border-gray-200 bg-transparent transition duration-300 focus:ring-2 focus:ring-secondary/90'
                      />
                    </div>
                  </div>

                  <button type="submit" className="relative flex mx-auto h-11 w-1/3 items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:after:bg-secondary active:duration-75 active:before:scale-95">
                    <span className="relative text-base font-semibold text-white">{calledToEdit ? 'valider' : 'Ajouter'}</span>
                  </button>

                </form>
  </>)
}

export default AddExpressionForm