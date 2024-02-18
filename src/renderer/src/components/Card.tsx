import { Link } from 'react-router-dom'
import camera from '../assets/camera.png'

export const Card = () => {
  return (
    <div className="card flex w-120 bg-green-600 text-neutral-content mt-16">
      <div className="card-body items-center text-center">
        <h2 className="card-title text-gray-50">Scan Your Crops</h2>
        <p></p>
        <div className="card-actions justify-end">
          <Link to="/scan">
            <button className="btn btn-primary scan">
              <img src={camera} alt="camera" width={22} height={22} />
              <p className='text-white'>Scan</p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
