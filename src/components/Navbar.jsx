import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../images/logo.svg";
import { StateContextCustom } from "../context/StateContext";
import { CiMenuFries } from "react-icons/ci";
import { MdRestaurantMenu } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
// import 'animate.css';
// import Category from "./Category";

const Navbar = () => {
  const {
    toggle,
    handleToggle,
    search,
    setSearch,
    state: { carts },
  } = StateContextCustom();
  console.log(carts);

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const toggleTheme = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div>
      <nav className="p-4 bg-pink-400 shadow-lg">
        <div className="flex flex-wrap items-center justify-between m-3">
          <Link to={"/"}>
            <div className="flex items-center justify-between gap-3 cursor-pointer ">
              <img src={logo} alt="" className="w-20 h-20 rounded shadow-lg " />
              <p className="font-mono text-2xl text-white shadow-lg ">Wish</p>
            </div>
          </Link>

          <div className=" md:hidden">
            <button onClick={handleToggle}>
              {toggle ? (
                <CiMenuFries size={40} color="white" />
              ) : (
                <MdRestaurantMenu size={40} color="white" />
              )}
            </button>
          </div>

          <div className="items-center justify-between hidden gap-5 lg:flex md:flex ">
            <NavLink
              className="px-2 py-1 font-mono text-xl text-white rounded cursor-pointer hover:border-b-2 hover:border-b-pink-100 active:bg-pink-300 active:text-white"
              to={"/"}
            >
              Home
            </NavLink>
            <NavLink
              className="px-2 py-1 font-mono text-xl text-white rounded cursor-pointer hover:border-b-2 hover:border-b-pink-100 active:bg-pink-300 active:text-white"
              to={"/about"}
            >
              About
            </NavLink>
            <NavLink
              className="px-2 py-1 font-mono text-xl text-white rounded cursor-pointer hover:border-b-2 hover:border-b-pink-100 active:bg-pink-300 active:text-white"
              to={"/contact"}
            >
              Contact
            </NavLink>
            <NavLink
              className="px-2 py-1 font-mono text-xl text-white rounded cursor-pointer hover:border-b-2 hover:border-b-pink-100 active:bg-pink-300 active:text-white"
              to={"/services"}
            >
              Services
            </NavLink>

            <div className=" md:flex lg:flex xl:flex sm:hidden">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search Product..."
                className="p-2 text-xl text-white bg-transparent border-b-4 outline-none placeholder:text-white border-b-pink-200"
              />
            </div>

            <Link to={"/addtocart"}>
              <div className="relative mt-5 cursor-pointer ">
                <FaCartShopping size={30} color="white" />
                <span className="absolute bottom-5 bg-pink-300 px-3 py-1 rounded-[50%] left-2 text-lg font-mono text-white">
                  {carts.length}
                </span>
              </div>
            </Link>

            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input
                type="checkbox"
                onChange={toggleTheme}
                className=" hidden"
              />

              {/* sun icon */}
              <svg
                className="swap-on fill-current w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-off fill-current w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </div>
        </div>

        {!toggle ? (
          <div className="z-20 flex flex-col items-center justify-center gap-5 mt-5 duration-300 md:hidden">
            <NavLink
              className="px-2 py-1 font-mono text-xl text-white rounded cursor-pointer hover:border-b-2 hover:border-b-pink-100 active:bg-pink-300 active:text-white"
              to={"/"}
            >
              Home
            </NavLink>
            <NavLink
              className="px-2 py-1 font-mono text-xl text-white rounded cursor-pointer hover:border-b-2 hover:border-b-pink-100 active:bg-pink-300 active:text-white"
              to={"/about"}
            >
              About
            </NavLink>
            <NavLink
              className="px-2 py-1 font-mono text-xl text-white rounded cursor-pointer hover:border-b-2 hover:border-b-pink-100 active:bg-pink-300 active:text-white"
              to={"/contact"}
            >
              Contact
            </NavLink>
            <NavLink
              className="px-2 py-1 font-mono text-xl text-white rounded cursor-pointer hover:border-b-2 hover:border-b-pink-100 active:bg-pink-300 active:text-white"
              to={"/services"}
            >
              Services
            </NavLink>
            <div>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search Product..."
                className="p-2 text-xl text-white bg-transparent border-b-4 outline-none placeholder:text-white border-b-pink-200"
              />
            </div>
            <Link to={"/addtocart"}>
              <div className="relative mt-5 cursor-pointer ">
                <FaCartShopping size={30} color="white" />
                <span className="absolute bottom-5 bg-pink-300 px-3 py-1 rounded-[50%] left-2 text-lg font-mono text-white">
                  {carts.length}
                </span>
              </div>
            </Link>

            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input
                type="checkbox"
                onChange={toggleTheme}
                className=" hidden"
              />

              {/* sun icon */}
              <svg
                className="swap-on fill-current w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-off fill-current w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </div>
        ) : null}
      </nav>

      {/* <Category/> */}
    </div>
  );
};

export default Navbar;
