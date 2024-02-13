import { Link } from 'react-router-dom'

export const Card = () => {
  return (
    <div className="card flex w-120 bg-green-600 text-neutral-content mt-16">
      <div className="card-body items-center text-center">
        <h2 className="card-title">Scan Your Crops</h2>
        <p></p>
        <div className="card-actions justify-end">
          <Link to="/scan">
            <button className="btn btn-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 5.08V19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5.08M17 8l-3-3h-4l-3 3M12 19a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"></path>
              </svg>
              Scan
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
