import Logo from '../assets/logo.png'
import help from '../assets/help.svg'
import about from '../assets/about.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    // <div className="navbar">
    //     <img src={Logo} alt="logo" width={40} height={40} />
    //   <a className="btn btn-ghost text-xl text-[rgb(50,56,65)]">CropDiseaseDetector</a>
    // </div>

    <div className="navbar bg-base-100 bg-gray-50 rounded-md">
      <div className="navbar-start">
        <img src={Logo} alt="logo" width={40} height={40} />
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost text-xl text-[rgb(50,56,65)]">CropDiseaseDetector</a>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle about">
          <Link to="/about">
            <img src={about} alt="logo" width={30} height={25} />
          </Link>
        </button>
        <button className="btn btn-ghost btn-circle help">
          <Link to="/help-center">
            <div className="indicator">
              <img src={help} alt="logo" width={30} height={25} />
            </div>
          </Link>
        </button>
      </div>
    </div>
  )
}

export default Navbar
