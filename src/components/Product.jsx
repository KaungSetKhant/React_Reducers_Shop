import React, { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { BiSolidCommentDetail } from "react-icons/bi";
import { StateContextCustom } from "../context/StateContext";
import { Link } from "react-router-dom";
import 'animate.css';


const Product = (props) => {
  const { id, title, price, description, image, rating, category } = props;
  const { dispatch } = StateContextCustom();

  function getStars(starRate) {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (starRate - 1 < i) {
        stars.push(<span className=" text-gray-500 text-2xl ">☆</span>);
      } else {
        stars.push(
          <span className=" text-yellow-300 text-2xl shadow-xl">★</span>
        );
      }
    }
    return stars;
  }

  return (
    <div className="animate__animated animate__swing  rounded-lg shadow-2xl mb-3 w-[310px] h-[390px] mt-5 mx-auto p-2  border-t-8 border-t-pink-500">
      <div className=" ">
        <img src={image} className=" w-24 h-24 mx-auto" />
      </div>

      <h2 className="bg-gray-100 text-teal-500 text-2xl mt-3 font-mono">
        {title.substring(0, 15)}...
      </h2>
      <p className=" text-lg mt-2">{description.substring(0, 40)}...</p>
      <p className=" mt-3 text-blue-500 font-mono">
        Price<span className=" text-xl">: ${price}</span>
      </p>

      <div className="flex justify-between items-center mt-3">
        <p>{getStars(rating.rate)}</p>
        <p className=" text-yellow-600">
          {rating.rate}/{rating.count}
        </p>
      </div>

      <div className="mt-5 flex items-center justify-around">
        <button
          onClick={() => dispatch({ type: "ADD_TO_CART", payload: props })}
          className=" hover:scale-105 flex justify-between items-center gap-3 px-4 py-3 text-white bg-teal-500 rounded-md shadow-lg"
        >
          <FaCartShopping size={20} color="white" /> Add to Cart
        </button>

        <Link to={`/detail/${id}`}>
          <button className=" hover:scale-105 flex justify-between items-center gap-3 px-4 py-3 text-white bg-gray-500 rounded-md shadow-lg">
            <BiSolidCommentDetail size={20} color="white" />
            Detail
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Product;
