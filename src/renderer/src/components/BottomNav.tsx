import { Link } from 'react-router-dom'
import history from '../assets/history.png'
import people from '../assets/people.png'
import home from '../assets/home-64.png'

export const BottomNav = () => {
  return (
    <div className="btm-nav bottom-[-4px] bg-[rgb(22,163,74)] rounded-btn ">
      <button>
        <Link to="/home"className="text-center flex gap-3">
          <img src={home} alt="home" width={30} />
          <span className="btm-nav-label">Home</span>
        </Link>
      </button>

      <button className="text-center flex justify-center ">
        <Link to="/ecosystem" className="text-center flex gap-3">
          <img src={people} alt="people" width={32} height={30} />
          <span className="btm-nav-label ecosystem">Ecosystem</span>
        </Link>
      </button>

      <button>
        <Link to="/history" className="text-center flex gap-2">
          <img src={history} alt="history" />
          <span className="btm-nav-label history">History</span>
        </Link>
      </button>
    </div>
  )
}
