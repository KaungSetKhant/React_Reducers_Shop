import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { StateContextCustom } from "../context/StateContext";
import { FaCartShopping } from "react-icons/fa6";
import { ImHome } from "react-icons/im";

const Detail = () => {
  const [detail, setDetail] = useState({});
  const { id } = useParams();
  const { dispatch } = StateContextCustom();

  useEffect(() => {
    fetchDetail();
  }, []);

  const fetchDetail = async () => {
    const api = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await api.json();
    setDetail(data);
    console.log(data);
  };

  //   function showStars(starRate) {
  //     const stars = [];
  //     for (let i = 0; i < 5; i++) {
  //       if (starRate - 1 < i) {
  //         stars.push(<span className=" text-gray-500 text-2xl ">☆</span>);
  //       } else {
  //         stars.push(
  //           <span className=" text-yellow-300 text-2xl shadow-xl">★</span>
  //         );
  //       }
  //     }
  //     return stars;
  //   }

  return (
    <div className="shadow-xl rounded-xl flex items-center justify-center flex-col flex-wrap max-w-[800px] mx-auto mt-5 p-6 border-t-8 border-t-pink-500">
      <div className=" ">
        <img src={detail.image} className="mx-w-[400px] max-h-[400px]" />
      </div>

      <div className="text-xl mt-5 text-gray-400 font-mono">
        <h2 className="mb-2">
          <span className=" text-teal-500">Product name</span> : {detail.title}
        </h2>
        <p className="mb-2 ">
          <span className=" text-teal-500">Description</span> :{" "}
          {detail.description}
        </p>
        <p className="mb-2">
          <span className=" text-teal-500">Category</span> : {detail.category}
        </p>
        <p className="mb-2">
          <span className=" text-teal-500">Price</span> :{" "}
          <span className=" text-2xl text-orange-400 font-bold">
            ${detail.price}
          </span>{" "}
        </p>
      </div>

      <div className=" flex items-center justify-center gap-5 font-mono">
        <Link to={"/"}>
          <button className="flex justify-between items-center gap-3 px-4 py-3 text-white bg-gray-500 rounded-md shadow-lg">
            <ImHome size={20} color="white" />
            Back
          </button>
        </Link>
        <button
          className=" flex justify-between items-center gap-3 px-4 py-3 text-white bg-teal-500 rounded-md shadow-lg"
          onClick={() => dispatch({ type: "ADD_TO_CART", payload: detail })}
        >
          <FaCartShopping size={20} color="white" /> Add to Cart
        </button>
      </div>

      {/* <div>
        <p>{showStars(detail.rating.rate)}</p>
      </div> */}
    </div>
  );
};

export default Detail;
