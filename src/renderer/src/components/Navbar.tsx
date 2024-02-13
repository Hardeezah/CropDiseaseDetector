import Logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div className="navbar bg-[rgb(50,56,65)]">
        <img src={Logo} alt="logo" width={40} height={40} />
      <a className="btn btn-ghost text-xl text-white">CropDiseaseDetector</a>
    </div>
  )
}

export default Navbar
