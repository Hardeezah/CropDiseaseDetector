import bg from './assets/bg.jpg'
import { Link } from 'react-router-dom'
import ABU from './assets/ABU.png'

function App() {
  return (
    <div className="flex justify-center">
      
      <img src={bg} alt="background-img" className="h-full w-full absolute" />
      <img src={ABU} alt="ABU" width={300} className='absolute mt-5'/>
      <div className="absolute bottom-[-300px] justify-center h-[500px] w-[800px] rounded-full bg-[rgba(78,37,14,0.95)] text-center">
        <h1 className="text-3xl mt-8 font-bold">CropDiseaseDetector</h1>
        <p className="text-gray-300">Your one-stop solution</p>
        <Link to="/home">
          <button className="mt-8 rounded-[5px] bg-green-500 px-10 py-4">Get Started</button>
        </Link>

        {/* <img src={} alt="" /> */}
      </div>
    </div>
  )
}

export default App
