/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Search from "./Utils/Search";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const [sticky, setSticky] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(true);
    navigate("/Login");
  };

  const NavItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/CourseSection">Course</Link>
      </li>
      <li>
        <Link to="/ContactSection">Contact</Link>
      </li>
      <li>
        <Link to="/AboutSection">About</Link>
      </li>
    </>
  );

  return (
    <>
      <div
        className={`max-w-screen-2xl z-50 font-semibold container mx-auto -20 px-4 bg-white fixed top-0 left-0 right-0 ${
          sticky ? "bg-white backdrop-filter backdrop-blur" : ""
        } shadow-md duration-300 transition-all ease-in-out`}
      >
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost">
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
                    strokeWidth={2}
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {NavItems}
              </ul>
            </div>
            <a className="btn btn-ghost text-xl">StuCode</a>
          </div>
          <div className="navbar-end space-x-3">
            <div className="navbar-center flex-grow px-4">
              <div className="hidden ">
                <Search />
              </div>
            </div>
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="text-black cursor-pointer"
              >
                Logout
              </button>
            ) : (
              <>
                <button className="text-black cursor-pointer">
                  <Link to="/Login">Masuk</Link>
                </button>
                <button className="text-black cursor-pointer">
                  <Link to="/Register">Daftar</Link>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
