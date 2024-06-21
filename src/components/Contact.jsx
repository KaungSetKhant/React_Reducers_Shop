import React from "react";
import 'animate.css';

const Contact = () => {
  return (
    <div>
      <>
        <div className="flex justify-center animate__animated animate__fadeInLeft">
          <div className="w-4/5 my-5 mx-auto flex flex-col items-center md:flex-row ">
            <div className="border w-[70%] h-full bg-gray-200 text-green-500 p-10 rounded-lg shadow-xl">
              {" "}
              <span>
                <h1 className="text-3xl font-semibold text-center mb-4 text-green-500">
                  Contact Us
                </h1>
                <p className="text-xs font-normal mt-2 text-center">
                  Contact us by filling this contact form.{" "}
                </p>
              </span>
              <div className="mt-6 leading-7 text-center">
                {" "}
                <input
                  type="text"
                  name=""
                  placeholder="Full Name"
                  id=""
                  className="border-2 w-[80%] mb-4 p-1 border-white placeholder:text-black placeholder:opacity-80 text-sm bg-transparent focus:outline-none"
                />
                <input
                  type="email"
                  name=""
                  placeholder="Email Address"
                  id=""
                  className="border-2 w-[80%] mb-4 p-1 border-white placeholder:text-black placeholder:opacity-80 text-sm bg-transparent focus:outline-none"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  id="phone"
                  className="border-2 w-[80%] mb-4 p-1 border-white placeholder:text-black placeholder:opacity-80 text-sm bg-transparent focus:outline-none"
                />
                <textarea
                  id="message"
                  name="message"
                  placeholder="Write us a message"
                  className="w-[80%] bg-transparent border-2 border-white h-44 text-sm outline-none placeholder:text-black placeholder:opacity-80 py-1 px-2 mt-6 resize-none leading-6 duration-200 ease-in-out rounded-lg"
                />
                <button className="block m-auto w-[60%] md:w-[50%] text-center border bg-green-500 rounded-full py-1 mt-6 text-lg font-bold tracking-wide uppercase text-white brightness-105 hover:bg-green-600">
                  Send
                </button>
              </div>
            </div>
            <div className="border w-[70%] md:w-[40%] bg-gray-100 items-center flex flex-col justify-center leading-7 space-y-8 p-8 h-full">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/002/309/887/small/social-media-marketing-illustration-for-advertising-online-service-platform-online-course-analytic-ad-management-software-website-vector.jpg"
                alt=""
                className=""
              />
              <p className="text-black">
                Wish store is a React js app to provide best web design
                components for free. It uses React, NextJs, Tailwind CSS and
                deployed on Digital Ocean.
              </p>
            </div>
          </div>
        </div>
        <script src="https://cdn.tailwindcss.com" />
      </>
    </div>
  );
};

export default Contact;
