import { FaPen, FaTrash } from "react-icons/fa";

const DetailsModal = ({ content, calledByAdmin, handlePassPropToParent, handleEditMore }) => {

  const Ho = ({byte}) =>{
    const audioData = "data:audio/mpeg;base64," + byte;

    return (
      <div>
        <audio controls className="w-12 h-9 mx-6 rounded-full">
          <source src={audioData} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    );
  };

  return (
    <div className="w-2/3 min-h-1/2 bg-white rounded-xl shadow-xl">
      <div className="p-4">
        <div className="flex justify-start py-1 my-3">
          <p><span className="font-bold pr-2">Français:</span>{content?.expressions.length > 0 ? String(content?.expressions[1]?.contenu) : '---'}</p>
        </div>
        <div className="flex justify-start py-1 my-3">
          <p><span className="font-bold pr-2">English:</span>{content?.expressions.length > 0 ? String(content?.expressions[0]?.contenu) : '---'}</p>
        </div>
        <div className="flex justify-start items-center py-1 my-3">
          <p><span className="font-bold pr-2">Ŋgə̂mbà:</span>{content?.translations.length > 0 ? String(content?.translations[1]?.contenu) : '---'}</p>
          <Ho byte={String(content?.translations[1]?.audioData) || "---"} />
        </div>
        <div className="flex justify-start items-center py-1 my-3">
          <p><span className="font-bold pr-2">Jó:</span>{content?.translations.length > 0 ? String(content?.translations[0]?.contenu) : '---'}</p>
        <Ho byte={String(content?.translations[0]?.audioData) || "---"} />

        </div>

        <div className="flex justify-start py-1 my-3">
          <p><span className="font-bold pr-2">Exemple/Example Ŋgə̂mbà:</span>{String(content?.translations[1]?.example) || '---'}</p>
        </div>
        <div className="flex justify-start py-1 my-3">
          <p><span className="font-bold pr-2">Exemple/Example Jó:</span>{String(content?.translations[0]?.example) || '---'}</p>
        </div>
        {calledByAdmin && <>
          <div className="flex space-x-4">
            <button onClick={() => {
              handleEditMore((openEditModal) => {
                // console.log(openEditModal, 'deeep');
                !openEditModal
              })
            }}
              className="mt-4 relative flex h-11 w-1/2 overflow-hidden items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:after:bg-secondary active:duration-75 active:before:scale-95">
              <span className="relative text-base font-semibold text-white flex items-center"> <FaPen className="mr-2" /> <span className="hidden lg:block">Modifier cette expression</span> </span>
            </button>
            <button onClick={() => {
              handlePassPropToParent((openDeleteModal) => {
                !openDeleteModal
                // console.log(openDeleteModal, 'delete modal');
              })
            }}
              className="mt-4 relative flex h-11 w-1/2 overflow-hidden items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-red-600 before:transition before:duration-300 hover:before:scale-105 active:after:bg-red-500 active:duration-75 active:before:scale-95">
              <span className="relative text-base font-semibold text-white flex items-center"> <FaTrash className="mr-2" /> <span className="hidden lg:block">Supprimer cette expression</span> </span>
            </button>
          </div>
        </>
        }
      </div>
    </div>
  )
}

export default DetailsModal