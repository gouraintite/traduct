import { useState } from "react"
import { handleChangeInput } from "../../../frontOffice/addExpression/functions"
import Logo from "../../../../assets/logo.png"
import axios from 'axios'
import { base_url_api2 } from "@/config/constants"
import { useNavigate } from "react-router-dom"
const Main = () => {

  const navigator = useNavigate()
  const [formData, setFormData] = useState({
    userName: '',
    passWord: ''
  })

  let data = {
    "username" : formData.userName,
    "password" : formData.passWord,
    "email" : formData.userName
}

// const config = {
//   headers: {
//     'Access-Control-Allow-Origin': '*',
//     'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
//     // Add other headers as needed
//   }
// };

const handleLogin = (e)=>{
  e.preventDefault()
  axios.post(`${base_url_api2}/users/login`, data)
    .then((response)=>{
      //console.log(response, 'this is the response');
      localStorage.setItem('userToken', response?.data?.acessToKen)
      localStorage.setItem('userId', response?.data?.id)
      navigator('/expressions')
    })
    .catch(()=>{
      // console.log(err, 'this is the error');
    })
}

  return (
    <>
      <div className="relative py-12 bg-primary/10 lg:h-full h-screen">
        <div className="container relative m-auto px-6 text-gray-500 md:px-12 xl:px-40">
          <div className="m-auto space-y-8 md:w-8/12 lg:w-6/12 xl:w-6/12">
            <a href="/">
              <img src={Logo} loading="lazy" className="mx-auto w-20" alt="tailus logo" />
            </a>
            <div className="rounded-3xl border border-gray-100 bg-white shadow-2xl shadow-gray-600/10 backdrop-blur-2xl">
              <div className="p-8 py-12 sm:p-16">
                  <h2 className="mb-8 text-2xl font-bold text-gray-800">Connexion </h2>
                  <form action="" className="space-y-8" onSubmit={(e)=>{handleLogin(e)}}>
                    <div className="space-y-2">
                      <label className="text-gray-600">Email</label>
                      <input
                        type="text"
                        placeholder="Nom d'utilisateur"
                        name="userName"
                        id="userName"
                        onChange={(e)=>{handleChangeInput(e, setFormData)}}
                        value={formData.userName}
                        required
                        className="focus:outline-none block w-full rounded-md border border-gray-200 bg-transparent px-4 py-3 text-gray-600 transition duration-300 focus:ring-2 focus:ring-cyan-300"
                      />
                    </div>

                    <div>
                      <div className="flex items-center justify-between">
                        <label className="text-gray-600 py-2">Mot de passe</label>
                      </div>
                      <input
                        type="password"
                        placeholder="Mot de passe"
                        name="passWord"
                        id="pwd"
                        onChange={(e)=>{handleChangeInput(e, setFormData)}}
                        value={formData.passWord}
                        required
                          className="focus:outline-none block w-full rounded-md border border-gray-200 bg-transparent px-4 py-3 text-gray-600 transition duration-300 focus:ring-2 focus:ring-cyan-300"
                      />
                    </div>

                    <button type="submit" className="mt-16 relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:after:bg-secondary active:duration-75 active:before:scale-95">
                      <span className="relative text-base font-semibold text-white">Connexion</span>
                    </button>

                  </form>
              </div>
            </div>
            <div className="space-x-4 text-center text-gray-500">
              <span>&copy; A-frilang</span>
              <a href="/#footer" className="text-sm hover:text-primary">Contact</a>
              <a href="../assets/documents/Lex SANDEU.pdf" className="text-sm hover:text-primary">Police & confidentiale</a>
            </div>
          </div>
        </div>
      </div>                           
    </>
  )
}

export default Main