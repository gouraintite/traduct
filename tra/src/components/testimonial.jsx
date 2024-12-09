import { useEffect, useState } from "react"

const Testimonials = () => {

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('src/config/testimonials.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (

    <div className="lg:p-16 p-4 bg-primary/10">
      <div className="container m-auto px-1 text-gray-600 md:px-12 xl:px-6">
        <div className="lg:mb-20 mb-6 space-y-4 px-6 md:px-0">
          <h2 className="text-center text-2xl font-bold text-gray-800  md:text-4xl">
            Ils ont éssayé A-frilang
          </h2>
          <p className="text-center">
            Découvrez ce qui les a fait s'accrocher à A-frilang.
          </p>
        </div>
        <div className="md:columns-2 columns-1 gap-8 space-y-8 h-auto">
          {data.items.map(item => (
            <div key={item.name} className="testimony_card">
              <div className="flex gap-4">
                <div>
                  <h6 className="text-lg font-medium text-gray-700 ">{item.name}</h6>
                  {/* <p className="text-sm text-gray-500 ">Étudiant en phonétique</p> */}
                </div>
              </div>
              <p className="mt-4">&ldquo;{item.testimony} &ldquo; </p>
            </div>
          ))}
        </div>
      </div>
    </div>


  )
}

export default Testimonials