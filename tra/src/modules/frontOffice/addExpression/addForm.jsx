import { useState, useEffect } from 'react'
import axios from 'axios'
import { handleChangeInput, handleSubmit } from './functions'
import { useNavigate } from 'react-router-dom'
import { base_url_api2 } from "@/config/constants"
import axiosInstance from '../../../config/axios'
import { MultiSelect } from "react-multi-select-component";

const AddExpressionForm = ({ calledToEdit, autoFill }) => { 

  let navigator = useNavigate()
  // console.log(String(autoFill?.expressions[autoFill?.expressions[1]?.language === 10012 ? 1 : 0]?.contenu).slice(0, 55), 'display');
  
  const [formData, setFormData] = useState({ 
    fr: '',
    en: '',
    lang1: '',
    lang2: '',
    exemple_lang1: '',
    exemple_lang2: '',
    audio1: null,
    audio2: null,
    id_express_fr: '',
    id_express_en: '',
    id_express_jo: '',
    id_express_ngem: ''
  })
  // console.log(formData, 'forrrmmm.....');
  
  const [categorie, setCategorie] = useState([])
  const [categorieToPost, setCategorieToPost] = useState([])
  const [dicos, setDicos] = useState(1010)
  const [audioFile, setAudioFile] = useState(null);
  const [audioFile2, setAudioFile2] = useState(null);
  const [count, setCount] = useState(0)

  let co= new Array()


  const convertMoule = ()=>{

    function Cat(label, value){
      this.value = value;
      this.label = label;
    }

    categorie.map((e)=>{
      let moule = new Cat;

      moule.value = e.id
      moule.label = e.name
      co.push(moule)
      
    })
  }

  useEffect(() => {
  calledToEdit && setFormData((prev)=>({ ...prev, 
    fr: String(autoFill?.expressions[autoFill?.expressions[0]?.language === 10012 ? 0 : 1]?.contenu).slice(0, 55),
    en: String(autoFill?.expressions[autoFill?.expressions[1]?.language === 10013 ? 1 : 0]?.contenu).slice(0, 55),
    lang1: String(autoFill.translations[autoFill.translations[0]?.language === 10011 ? 0 : 1]?.contenu).slice(0, 55),
    lang2: String(autoFill.translations[autoFill.translations[1]?.language === 10010 ? 1 : 0]?.contenu).slice(0, 55),
    exemple_lang1: String(autoFill?.translations[autoFill.translations[0]?.language === 10011 ? 0 : 1]?.example),
    exemple_lang2: String(autoFill?.translations[autoFill.translations[1]?.language === 10010 ? 1 : 0]?.example),
    id_express_fr: String(autoFill?.expressions[autoFill?.expressions[0]?.language === 10012 ? 0 : 1]?.id),
    id_express_en:  String(autoFill?.expressions[autoFill?.expressions[1]?.language === 10013 ? 1 : 0]?.id),
    id_express_jo: String(autoFill.translations[autoFill.translations[1]?.language === 10010 ? 1 : 0]?.id),
    id_express_ngem: String(autoFill.translations[autoFill.translations[0]?.language === 10011 ? 0 : 1]?.id)

}))
    // return () => {
    //   second
    // }
  }, [autoFill])
  

  convertMoule()
  useEffect(() => {
    handleGetData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count])
  

  useEffect(() => {
    // console.log(categorieToPost, 'categorieToPost');

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categorieToPost])

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    // console.log(file, 'file 1');
    setAudioFile(file);
  };

  const handleFileChange2 = (e) => {
    const file = e.target.files[0];
    // console.log(file, 'file 2');
    setAudioFile2(file);
  };

  // how to verify that the setter of a useState have already change his value to launch and operation depending on the new value

  // get catégories

  const handleGetData = () => {
    axiosInstance.get(`${base_url_api2}/categories/get-all`)
      .then(response => {
        setCategorie(response?.data)
        // console.log(response.data);
      })
      .then((response) => {
        // console.log(categorie, 'errer');
        // console.log(response, 'this is the response');
      })
      .catch(err => {
        // console.log(err, 'this is the error');
      })
  }

  const handleCreateDictionnaryItem = (e) => {
    e.preventDefault()
    // console.log('handling doing....');
    let finalCategorieToPost = new Array();
    for (const el in categorieToPost) {
      finalCategorieToPost.push(categorieToPost[el]?.value)
      // console.log('finalcat', finalCategorieToPost);
    }
    axios.post(`${base_url_api2}/dictionaryItems/add`, {
      "name": "testDicos",
      "user": localStorage.getItem('userId'),
      "categories" : finalCategorieToPost
    }).then((response) => {
      new Promise((res) => {
        setDicos(response?.data)
        console.log(dicos,finalCategorieToPost, response?.data);
        res(true)
      }).then(() => {
        handleAddFrAndEn(response?.data)
      }).then(() => {
        handleAddTranslationsFrAndEn(response?.data)
      })
    })
      .catch((error) => {
        // console.log(error, 'this is error');
      })
  }


  const handleAddFrAndEn = (dicos) => {
    axios.post(`${base_url_api2}/expressions/add`, {
      "dictionaryItem": dicos,
      "language": 10012,
      "contenu": formData.fr
    }).then((response) => {
      // console.log(response, 'fr done');
    }).catch(err => {
      // console.log(err, 'fr failed');
    })

    axios.post(`${base_url_api2}/expressions/add`, {
      "dictionaryItem": dicos,
      "language": 10013,
      "contenu": formData.en
    }).then((response) => {
      // console.log(response, 'eng done');
    }).catch(err => {
      // console.log(err, 'fr failed');
    })
  }

  const handleAddTranslationsFrAndEn = (dicos) => {

    let formDataContent = new FormData();

    formDataContent.append('dictionaryItemId', dicos); // Add the name field
    formDataContent.append('language', 10011); // Add lang
    formDataContent.append('contenu', formData.lang1); // Add the name field
    formDataContent.append('example', formData.exemple_lang1);
    formDataContent.append('audioFile', audioFile); // Add the audio file

    axios.post(`${base_url_api2}/translations/add`, formDataContent, {
      headers: {
        'Content-Type': 'multipart/form-data', // Important for sending form data
      },
    }).then((response) => {
      // console.log(response, 'Jó translations done');
    }).catch(err => {
      // console.log(err, 'Jó translations failed');
    })


    let formDataContent2 = new FormData();

    formDataContent2.append('dictionaryItemId', dicos); // Add the name field
    formDataContent2.append('language', 10010); // Add the audio file
    formDataContent2.append('contenu', formData.lang2); // Add the name field
    formDataContent2.append('example', formData.exemple_lang2);
    formDataContent2.append('audioFile', audioFile2); // Add the audio file
    // console.log(audioFile2, 'aud 2');

    axios.post(`${base_url_api2}/translations/add`, formDataContent2, {
      headers: {
        'Content-Type': 'multipart/form-data', // Important for sending form data
      },
    }).then((response) => {
      // // console.log(response, 'Ŋgə̂mbà translations done');
      navigator('/manage_expressions')
    }).catch(err => {
      // // console.log(err, 'Ŋgə̂mbà translations failed');
    })
  }

  
  const handleUpdateDictionnaryItem = (e) => {
    e.preventDefault()
    // // console.log('handling updating....', formData.id_express_fr, typeof(formData.id_express_fr), formData.id_express_en, autoFill?.id,  typeof(autoFill?.id) );

    let finalCategorieToPost = new Array();
    for (const el in categorieToPost) {
      finalCategorieToPost.push(categorieToPost[el]?.value)
      // // console.log('updated', finalCategorieToPost);
    }
    axios.put(`${base_url_api2}/dictionaryItems/update/${autoFill?.id}`, {
      "name": "updated",
      "user": localStorage.getItem('userId'),
      "categorie" : (finalCategorieToPost.length===0 ? [10009] : finalCategorieToPost)
    }).then((response) => {
      new Promise((res) => {
        setDicos(response?.data)
        // // console.log('dicos............', dicos, response?.data);
        res(true)
      }).then(() => {
        handleEditFrAndEn(response?.data)
      }).then(() => {
        handleEditTranslationsFrAndEn(response?.data)
      })
    })
      .catch((error) => {
        // console.log(error, 'this is error');
      })
  }


  const handleEditFrAndEn = (dicos) => {
    axios.put(`${base_url_api2}/expressions/update/${formData.id_express_fr}`, {
      "dictionaryItem": dicos,
      "language": 10012,
      "contenu": formData.fr
    }).then((response) => {
      // // console.log(response, 'fr done');
    }).catch(err => {
      // // console.log(err, 'fr failed');
    })


    axios.put(`${base_url_api2}/expressions/update/${formData.id_express_en}`, {
      "dictionaryItem": dicos,
      "language": 10013,
      "contenu": formData.en
    }).then((response) => {
     // console.log(response, 'eng done');
      location.reload()
    }).catch(err => {
     // console.log(err, 'fr failed');
    })
  }

  const handleEditTranslationsFrAndEn = (dicos) => {

    let formDataContent = new FormData();
    // // console.log(autoFill.expressions[1].language?.id, autoFill.expressions[0].language?.id, 'lang ids');
    

    formDataContent.append('dictionaryItemId', dicos); // Add the name field
    formDataContent.append('language', autoFill.expressions[1].language?.id); // Add the audio file
    formDataContent.append('contenu', formData.lang1); // Add the name field
    formDataContent.append('example', formData.exemple_lang1);
    formDataContent.append('audioFile', audioFile); // Add the audio file

    axios.put(`${base_url_api2}/translations/update/${formData.id_express_ngem}`, formDataContent, {
      headers: {
        'Content-Type': 'multipart/form-data', // Important for sending form data
      },
    }).then((response) => {
      console.log(response, 'Jó translations done');
    }).catch(err => {
      // console.log(err, 'Jó translations failed');
    })


    let formDataContent2 = new FormData();

    formDataContent2.append('dictionaryItemId', dicos); // Add the name field
    formDataContent2.append('language', autoFill.expressions[0].language?.id); // Add the audio file
    formDataContent2.append('contenu', formData.lang2); // Add the name field
    formDataContent2.append('example', formData.exemple_lang2);
    formDataContent2.append('audioFile', audioFile2); // Add the audio file

    axios.put(`${base_url_api2}/translations/update/${formData.id_express_jo}`, formDataContent2, {
      headers: {
        'Content-Type': 'multipart/form-data', // Important for sending form data
      },
    }).then((response) => {
      console.log(response, 'Ŋgə̂mbà translations done');
      // navigator('/manage_expressions')
    }).catch(err => {
    })
  }


  return (<>
    <form action="" className="space-y-6 overflow-hidden px-2" onSubmit={(e) => {calledToEdit ? handleUpdateDictionnaryItem(e) : handleCreateDictionnaryItem(e) }}>
      <div className='flex lg:flex-nowrap md:flex-nowrap flex-wrap justify-center mx-auto items-center w-full lg:space-x-6 space-x-0 lg:space-y-0 md:space-x-3 md:space-y-0 space-y-4'>
        <div className="w-2/3 lg:w-1/2">
          <label className="text-gray-600">Français</label>
          <textarea
            // onChange={(e) => { handleChangeInput(e, setFormData) }}
            onChange={(e)=>{
              setFormData((prevFormatData)=>({
                ...prevFormatData,
                fr: e.target.value}))
            }}
            name="fr"
            id="fr"
            value={formData.fr}
            required
            cols="3"
            rows="1"
            className="focus:outline-none block w-full rounded-md border border-gray-200 bg-transparent px-4 py-3 text-gray-600 transition duration-300 focus:ring-2 focus:ring-secondary/90"
          />
        </div>

        <div className="w-2/3 lg:w-1/2">
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
      <div className='flex lg:flex-nowrap  md:flex-nowrap flex-wrap justify-center mx-auto items-center w-full lg:space-x-6 space-x-0 lg:space-y-0 md:space-x-3 md:space-y-0 space-y-4'>
        <div className="w-2/3 lg:w-1/2">
          <label className="text-gray-600">Jó</label>
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
        <div className="w-2/3 lg:w-1/2">
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
      </div>
      <div className='flex lg:flex-nowrap  md:flex-nowrap flex-wrap justify-center mx-auto items-center w-full lg:space-x-6 space-x-0 lg:space-y-0 md:space-x-3 md:space-y-0 space-y-4'>
        <div className="w-2/3 lg:w-1/2">
          <label className="text-gray-600">Exemple Jó</label>
          <textarea
            onChange={(e) => { handleChangeInput(e, setFormData) }}
            value={formData.exemple_lang2}
            name="exemple_lang2"
            id="exemple_lang2"
            cols="3"
            rows="1"
            className="focus:outline-none block w-full rounded-md border border-gray-200 bg-transparent px-4 py-3 text-gray-600 transition duration-300 focus:ring-2 focus:ring-secondary/90"
          />
        </div>
        <div className="w-2/3 lg:w-1/2">
          <label className="text-gray-600">Exemple Ŋgə̂mbà</label>
          <textarea
            onChange={(e) => { handleChangeInput(e, setFormData) }}
            value={formData.exemple_lang1}
            name="exemple_lang1"
            id="exemple_lang1"
            cols="3"
            rows="1"
            className="focus:outline-none block w-full rounded-md border border-gray-200 bg-transparent px-4 py-3 text-gray-600 transition duration-300 focus:ring-2 focus:ring-secondary/90"
          />
        </div>  
      </div>
      <div className='flex justify-center mx-auto items-center w-full space-x-6'>
        <div className="w-1/2">
          <label className="text-gray-600">Audio Jó</label>
          <input
            type="file"
            accept='.aac, .ogg, .mpga, .mp3'
            onChange={(e) => { handleFileChange2(e) }}
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

        <div className="w-1/2">
          <label className="text-gray-600">Audio Ŋgə̂mbà</label>
          <input
            type="file"
            accept='.aac, .ogg, .mpga, .mp3'
            onChange={(e) => { handleFileChange(e) }}
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
      </div>
      <div className='flex justify-center mx-auto items-center w-full space-x-6'>
        <div className="w-1/2">
          <label className="text-gray-600">Catégories</label>
          <MultiSelect
            options={co}
            value={categorieToPost}
            onChange={setCategorieToPost}
            labelledBy="Select"
          />
        </div>

        <div className="w-1/2">
      <button type='submit' className="mt-9 relative flex mx-auto h-11 w-10/12 items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:after:bg-secondary active:duration-75 active:before:scale-95">
        <span className="relative text-base font-semibold text-white">{calledToEdit ? 'valider' : 'Ajouter'}</span>
      </button>
        </div>
      </div>
    </form>
  </>)
}

export default AddExpressionForm