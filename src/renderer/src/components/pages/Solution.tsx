import { useLocation } from 'react-router-dom'

export const Solution = () => {
  const location = useLocation()
  const { responseData } = location.state

  const { disease_name, fungicide_application, resistant_varieties, sanitation, monitoring } =
    responseData

  return (
    <div className="container mx-auto mt-10 px-4">
      <h1 className="text-3xl font-bold mb-4">{disease_name}</h1>
      <div className="bg-gray-100 p-6 rounded-md">
        <h2 className="text-xl font-semibold mb-2">Fungicide Application:</h2>
        <p>{fungicide_application}</p>
      </div>
      <div className="bg-gray-100 p-6 rounded-md mt-4">
        <h2 className="text-xl font-semibold mb-2">Resistant Varieties:</h2>
        <p>{resistant_varieties}</p>
      </div>
      <div className="bg-gray-100 p-6 rounded-md mt-4">
        <h2 className="text-xl font-semibold mb-2">Sanitation:</h2>
        <p>{sanitation}</p>
      </div>
      <div className="bg-gray-100 p-6 rounded-md mt-4">
        <h2 className="text-xl font-semibold mb-2">Monitoring:</h2>
        <p>{monitoring}</p>
      </div>
    </div>
  )
}
