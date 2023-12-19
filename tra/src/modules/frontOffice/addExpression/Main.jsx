import Nav from '../../../components/navBar'
import Footer from '../../../components/footer'
import AddExpressionForm from './addForm'
const AddExpression = () => {

  return (
    <>
      <Nav />
      <div className="h-auto pt-28 pb-12 bg-primary/10 ">
        <div className="m-auto px-6 text-gray-500 md:px-12 xl:px-40">
          <div className="m-auto space-y-8 md:w-8/12 lg:w-9/12 xl:w-10/12">
            <div className="rounded-3xl border border-gray-100 bg-white shadow-2xl shadow-gray-600/10 backdrop-blur-2xl">
              <div className="pt-8 py-2 px-2 sm:p-16">
                <h2 className="mb-6 text-2xl lg:text-start text-center font-bold text-gray-800">Ajouter une expréssion</h2>
                <AddExpressionForm />
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

