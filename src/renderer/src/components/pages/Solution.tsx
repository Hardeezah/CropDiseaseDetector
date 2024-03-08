import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom';

export const Solution = () => {
  const location = useLocation()
  const { responseData } = location.state

  const { disease_name, fungicide_application, resistant_varieties, sanitation, monitoring } =
    responseData

  return (
    <>
      <button className="absolute right-5 top-5 rounded-full bg-green-800 p-4">
        <Link to="/home">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        </Link>
      </button>
      <div className="container mx-auto mt-10 px-4 ">
        <h1 className="text-4xl font-bold mb-4 text-black">{disease_name}</h1>
        <div className="bg-gray-100 p-6 rounded-md bg-green-500">
          <h2 className="text-2xl font-semibold mb-2 text-white">Fungicide Application:</h2>
          <p className="text-white">{fungicide_application}</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-md mt-4 bg-green-500">
          <h2 className="text-2xl font-semibold mb-2 text-white">Resistant Varieties:</h2>
          <p className="text-white">{resistant_varieties}</p>
        </div>
        <div className="text-white p-6 rounded-md mt-4 bg-green-500">
          <h2 className="text-2xl font-semibold mb-2 text-white">Sanitation:</h2>
          <p className="text-white">{sanitation}</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-md mt-4 bg-green-500">
          <h2 className="text-2xl font-semibold mb-2 text-white">Monitoring:</h2>
          <p className="text-white">{monitoring}</p>
        </div>
      </div>
    </>
  )
}
