import { FaPen, FaTrash } from "react-icons/fa";

const DetailsModal = ({ expressions, calledByAdmin, handlePassPropToParent }) => {

  
  console.log(calledByAdmin, 'called by admin');
  return (
    <div className="w-2/3 min-h-1/2 bg-white rounded-xl shadow-xl">
      <div className="p-4">
        <div className="flex justify-start py-1 my-3">
          <p><span className="font-bold pr-2">Français:</span>{expressions[0].content[0].fr}</p>
        </div>
        <div className="flex justify-start py-1 my-3">
          <p><span className="font-bold pr-2">English:</span>{expressions[1].content[0].en}</p>
        </div>
        <div className="flex justify-start py-1 my-3">
          <p><span className="font-bold pr-2">Ŋgə̂mbà:</span>{expressions[0].content[0].lang1}</p>
        </div>
        <div className="flex justify-start py-1 my-3">
          <p><span className="font-bold pr-2">Jô:</span>{expressions[0].content[0].lang2}</p>
        </div>

        <div className="flex justify-start py-1 my-3">
          <p><span className="font-bold pr-2">Exemple/Example Ŋgə̂mbà:</span>{expressions[0].content[0].lang1}</p>
        </div>
        <div className="flex justify-start py-1 my-3">
          <p><span className="font-bold pr-2">Exemple/Example Jô:</span>{expressions[0].content[0].lang2}</p>
        </div>

        {calledByAdmin && <>
          <div className="flex space-x-4">
            <button onClick={() => {
              handlePassPropToParent((openEditModal) => {
                !openEditModal
                console.log(openEditModal, 'deeep');
              })
            }}
              className="mt-4 relative flex h-11 w-auto items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:after:bg-secondary active:duration-75 active:before:scale-95">
              <span className="relative text-base font-semibold text-white flex items-center"> <FaPen className="mr-2" /> Modifier cette expression </span>
            </button>
            <button onClick={() => {
              handlePassPropToParent((openEditModal) => {
                !openEditModal
                console.log(openEditModal, 'deeep');
              })
            }}
              className="mt-4 relative flex h-11 w-auto items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-red-600 before:transition before:duration-300 hover:before:scale-105 active:after:bg-red-500 active:duration-75 active:before:scale-95">
              <span className="relative text-base font-semibold text-white flex items-center"> <FaTrash className="mr-2" /> Supprimer cette expression </span>
            </button>
          </div>
        </>
        }
      </div>
    </div>
  )
}

export default DetailsModal