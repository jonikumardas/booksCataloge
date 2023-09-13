import { NavLink } from "react-router-dom";
import {
  AiOutlineHeart,
  AiOutlineHome,
  AiOutlineShoppingCart,
  AiOutlineUpload,
  AiOutlineUser,
  AiTwotoneBook,
  AiTwotoneCalculator,
  AiTwotoneSetting,
} from "react-icons/ai";
import "../style/search.css";
import '../style/shere.css'
const Navber = () => {
  return (
    <div 
      style={{ background: "#fffffe" }}
      className="flex justify-evenly navbar bg-base-100 shadow-2xl sticky"
    >
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
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
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-64"
          >
            <li>
              <NavLink to="/">
                <AiOutlineHome /> Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/books" className="my-2">
                <AiTwotoneBook /> Books
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="my-2">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" className="my-2">
                Blog
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar">
          <div className="search hover:shadow-xl me-2">
            <input
              placeholder="What are you looking for?"
              className="w-52 text-sm"
              type="text"
            />
            <button type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="navbar-end">
        <div>
          <NavLink to="/check-out" className="btn mx-1 hidden lg:inline-block">
            <p className="mt-4"> Checkout</p>
          </NavLink>
        </div>

        <div>
          <div className="drawer drawer-end">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label htmlFor="my-drawer-4" className="btn mx-1 lg:text-2xl">
                <AiOutlineUser />
              </label>
            </div>
            <div className="drawer-side">
              <label htmlFor="my-drawer-4" className="drawer-overlay" />
              <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                <li>
                  <NavLink to="/profile" className=" m-1">
                    profile
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/check-out" className="lg:hidden  m-1">
                    <AiTwotoneCalculator />
                    Checkout
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/upload" className="m-1">
                    <AiOutlineUpload />
                    Upload for sell
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/like" className="m-1">
                    <AiOutlineHeart />
                    fevourite
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/settings" className=" m-1">
                    <AiTwotoneSetting />
                    Settings
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/log-in" className=" m-1">
                    Log in
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <NavLink
            to="/like"
            className="mx-1 btn hidden sm:inline-block lg:inline-block text-2xl"
          >
            <p className="mt-4">
              <AiOutlineHeart />
            </p>
          </NavLink>
        </div>

        <div>

        <div className="drawer drawer-end">
            <input id="my-drawer-5" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label htmlFor="my-drawer-5" className="btn mx-1 lg:text-2xl coustom-button">
                <AiOutlineShoppingCart />
              </label>
            </div>
            <div className="drawer-side">
              <label htmlFor="my-drawer-5" className="drawer-overlay" />
              <div className="menu p-4 w-80 min-h-full bg-gray-200 text-base-content">
                <span className="font-bold text-lg">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navber;
