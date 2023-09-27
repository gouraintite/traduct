
import aud from "../../../assets/go.ogg"
export const Search = () => {

  const data = [
    {
      id:1,
      fr: "ereer",
      en: "ererer",
      lang1: "Ŋgə̂mbàde",
      lang2: "jôdiejd"
    },
    {
      id:2,
      fr: "ereer",
      en: "ererer",
      lang1: "Ŋgə̂mbàde",
      lang2: "jôdiejd"
    },
    {
      id:3,
      fr: "ereer",
      en: "ererer",
      lang1: "Ŋgə̂mbàde",
      lang2: "jôdiejd"
    },
    {
      id:4,
      fr: "ereer",
      en: "ererer",
      lang1: "Ŋgə̂mbàde",
      lang2: "jôdiejd"
    },
    {
      id:5,
      fr: "ereer",
      en: "ererer",
      lang1: "Ŋgə̂mbàde",
      lang2: "jôdiejd"
    },
    {
      id:6,
      fr: "ereer",
      en: "ererer",
      lang1: "Ŋgə̂mbàde",
      lang2: "jôdiejd"
    }
  ]
  return (
    <div className="">
        <div className="w-screen min-h-[400px] bg-exp bg-cover bg-no-repeat bg-center text-center flex justify-center mx-auto items-center">
          <div className="h-1/2 w-full">
            <p className="text-white text-4xl font-bold mb-6">Apprenez en ecourtant ou en lisant avec A-frilang</p>

            <form action="" className="mt-9">
              <div className="flex justify-center bg-white w-2/3 mx-auto rounded-md">

                <input type="text"
                        className="w-8/12 py-3 px-3 mt-0 outline-none" 
                />
                <select name="" id="" className="px-4 w-3/12">
                  <option value="">Catégories</option>
                  <option value="base">Basique</option>
                  <option value="week_day">Jour de la semaine</option>
                  <option value="months">Mois</option>
                  <option value="pronons">Pronons</option>
                  <option value="adjectifs">Adjectifs</option>
                  <option value="politess">Politesse</option>
                  <option value="Compter">Compter</option>
                  <option value="Aliments">Aliments</option>
                  <option value="Conjugaison">Conjugaison</option>
                  <option value="Couleurs">Couleurs</option>
                  <option value="Famille">Famille</option>
                  <option value="Mariage">Mariage</option>
                  <option value="ecole">Ecole</option>
                  <option value="Santé">Santé</option>
                  <option value="Corps humain">Corps humain</option>
                  <option value="Moyens de transport">Moyens de transport</option>
                  <option value="Villes">Villes</option>
                  <option value="Villages">Villages</option>
                  <option value="Communications">Communications</option>
                  <option value="Métiers">Métiers</option>
                  <option value="Monde végétal/Nature">Monde végétal/Nature</option>
                  <option value="Monde animal">Monde animal</option>
                  <option value="Voyages">Voyages</option>
                  <option value="Sport">Sport</option>
                  <option value="Loisirs">Loisirs</option>
                  <option value="conversation_1">Conversation type 1</option>
                  <option value="conversation_2">Conversation type 2</option>
                  <option value="conversation_3">Conversation type 3</option>
                  <option value="conversation_4">Conversation type 4</option>
                </select>
                <button className="bg-secondary w-1/12">
                  Lancer
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="lg:mb-20 my-8 space-y-4 px-6 md:px-0">
          <h2 className="text-center text-2xl font-bold text-gray-800  md:text-4xl">
            Expréssions disponibles
          </h2>
          <p className="text-center">
              Découvrez et apprennez en toute liberté.
          </p>
      </div>

      <div className="grid grid-cols-4 gap-2 gap-x-6 w-11/12 mx-auto">
        {data.map(item=>(
          <div key={item.id} className="border-none text-lg bg-tert/10 hover:bg-tert/20 duration-300 ease-in-out rounded-md p-3">
              <div className="text-end text-sm">
                <p className="border-">
                  voir plus
                </p>
              </div>
              <div className="flex justify-start py-1">
                <p className="font-bold pr-4">Fr:</p>
                <p>{item.fr}</p>
              </div>              
              <div className="flex justify-start py-1">
                <p className="font-bold pr-4">Fr:</p>
                <p>{item.fr}</p>
              </div>              
              <div className="flex justify-start py-1">
                <p className="font-bold pr-4">Fr:</p>
                <p>{item.fr}</p>
              </div>
              <figcaption>Listen to the T-Rex:</figcaption>
                <audio controls src={aud} className="w-full">
                  <a href={aud}> Download audio </a>
                </audio>
              <audio src=""></audio>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Search;