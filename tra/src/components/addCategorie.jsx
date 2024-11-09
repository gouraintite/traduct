import {useState} from 'react';
import axios from '../config/axios'
import {base_url_api2} from "@/config/constants"


const AddCategorie = ({afterDone}) => {

    const [categorie, setCategorie] = useState('')

    const handleSubmit = (e) =>{
      e.preventDefault();
      axios.post(`${base_url_api2}/categories/add`, {
        "name": categorie
      }).then(() => {
        afterDone()
        setCategorie('')
        window.location.reload()
      }).catch(err => {
        console.log(err, 'fr failed');
      })
    }

  return (<>
    <form action="" className='text-white mt-6 py-2' onSubmit={handleSubmit}>
      <div className='flex justify-center mx-auto items-center w-full space-x-6'>
        <div className="w-10/12">
          <label className="mb-4">Nom de la catégorie</label>
          <input
            type="text"
            onChange={(e) => { setCategorie(e.target.value) }}
            required
            value={categorie}
            className="focus:outline-none block w-full rounded-md border border-gray-200 bg-transparent px-4 py-3 transition duration-300 focus:ring-2 focus:ring-white"

          />
        </div>
      </div>

      <button type='submit' className="mt-4 relative flex mx-auto h-11 w-2/3 items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:after:bg-secondary active:duration-75 active:before:scale-95">
        <span className="relative text-base font-semibold text-white">Ajouter</span>
      </button>
    </form>
  </>)
}

export default AddCategorie