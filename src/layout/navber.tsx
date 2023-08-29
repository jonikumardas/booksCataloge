import { Link, NavLink } from "react-router-dom";
import logo from '../assets/logo.png'
const Navber = () => {
  return (
    <div>
      <div className="navbar bg-slate-900 sticky top-0 drop-shadow-lg z-40">
        <div className="flex-1">
          <Link to='/'> 
          <img src={logo} className="lg:w-52 lg:h-24" alt="" />
            </Link>
        </div>
        <div className="flex-none">
        
        <ul className="menu menu-horizontal px-1 ">
     <NavLink className='lg:m-5 mx-3' to ="/"> Home</NavLink>
     <NavLink className='lg:m-5 mx-2' to ="/books"> Books</NavLink>
     <NavLink className='lg:m-5 mx-3'to ="/check-out"> CheckOut</NavLink>
    </ul>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
            
              <div className="indicator">
              <NavLink to="/card">
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
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                </NavLink> 
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52  bg-slate-900 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">8 Items</span>
                <span className="text-base-100">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-secondary btn-block">
                    View cart &#8594;
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="data:image/jpeg;base64,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" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-900 rounded-box w-52"
            >
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navber;
