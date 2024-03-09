import Logo from '../assets/logo.png'
import help from '../assets/help.svg'
import about from '../assets/about.svg'
import { Link } from 'react-router-dom'
import menu from '../assets/menu.png'
import notification from '../assets/notification.png'

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 bg-gray-50 rounded-md">
      <div className="navbar-start">
        <img src={Logo} alt="logo" width={40} height={40} />
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost text-xl text-[rgb(50,56,65)]">CropDiseaseDetector</a>
      </div>
      <div className="navbar-end">
        
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn m-1">
            <img src={menu} width={20} alt="" />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 bg-green-500 "
          >
            <li>
              <Link to="/about" className="flex gap-3">
                <img src={about} alt="logo" width={30} height={25} />
                <p>About</p>
              </Link>
            </li>
            <li>
              <Link to="/help-center" className="flex gap-3">
                <img src={help} alt="logo" width={30} height={25} />
                <p>Help</p>
              </Link>
            </li>
            <li>
<<<<<<< HEAD
              <Link to="/help-center" className="flex gap-3"></Link>
=======
            <Link to="/" className='flex gap-3'>
                <img src={notification} alt="logo" width={30} height={25} />
                <p>Notifications</p>
              </Link>
>>>>>>> 452674aa6e0ef8b9d113d78de543d1c3af7aed27
            </li>
          </ul>
        </div>
      </div>
      {/* <div className="navbar-end">
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
      </div> */}
    </div>
  )
}

export default Navbar
