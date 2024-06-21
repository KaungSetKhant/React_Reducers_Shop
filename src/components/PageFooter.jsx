import React from "react";
import logo from "../images/logo.svg";
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { Link } from "react-router-dom";

const PageFooter = () => {
  return (
    <div className=" p-5 bg-pink-400 font-mono flex items-center flex-col text-white mt-auto">
      <div className="flex items-center justify-between w-[90%] flex-wrap gap-5">
        <div className=" flex flex-col items-center">
          <div className="flex items-center justify-between gap-3">
            <img src={logo} className="w-20 h-20 rounded shadow-lg " />
            <p className="text-2xl">Wish</p>
          </div>

          <div className="flex items-center justify-between gap-3">
            <FaFacebookF size={20} />
            <IoLogoYoutube size={20} />
            <FaTwitter size={20} />
            <IoLogoInstagram size={20} />
          </div>
        </div>

        <div className="flex items-center justify-around gap-5">
          <Link to={"/about"}>
            <p>About Us</p>
          </Link>
          <Link to={"/contact"}>
            <p>Contact Us</p>
          </Link>
          <Link to={"services"}>
            <p>Services</p>
          </Link>
        </div>

        <div>
          <p>Subscribe for Wish Store</p>
          <input
            placeholder="Your Email"
            className=" border-2 border-gray-400 rounded-lg shadow-lg"
            type="text"
          />
          <button className="  text-white px-4 py-2 bg-red-600 rounded-lg shadow-xl">
            Subscribe
          </button>
        </div>
      </div>

      <div className="shadow-xl p-2 border-t-2 border-t-gray-200 w-full mt-5">
        <p className="text-center">Copyright &copy; 2024 By Wish Store</p>
      </div>
    </div>
  );
};

export default PageFooter;
