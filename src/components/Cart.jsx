import { Table } from "flowbite-react";
import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import { FaCircleMinus } from "react-icons/fa6";
import { StateContextCustom } from "../context/StateContext";

const Cart = ({ item,increaseTotal,decreaseTotal }) => {
    const [quantity,setQuantity] = useState(1);
    const {dispatch} = StateContextCustom()

    const increaseQty = () => {
        setQuantity(quantity + 1)
        increaseTotal(item.price)
    }
    const decreaseQty = () => {
        if(quantity > 1){
            setQuantity(quantity - 1)
            decreaseTotal(item.price)
        }
    }
    const oneItemPrice = item.price * quantity;

    const removeBtn = () => {
      dispatch({type:"REMOVE_FROM_CART",payload:item})
      decreaseTotal(oneItemPrice)
    }
  return (
    
    <Table.Row className=" border-pink-300   text-[1rem] text-gray-900 font-mono bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className=" whitespace-nowrap font-medium text-gray-900 dark:text-white">
        <img className=" max-w-[150px] h-[150px]" src={item.image} />
      </Table.Cell>
      <Table.Cell className=" "><div className="w-60 h-10 overflow-y-scroll text-start">{item.title}</div></Table.Cell>
      <Table.Cell className=" text-center ">{item.category}</Table.Cell>
      <Table.Cell className="text-center ">{item.rating.rate}</Table.Cell>
      <Table.Cell className=""><div className="w-60 h-20 overflow-y-scroll text-start">{item.description}</div></Table.Cell>
      <Table.Cell className=" text-center text-2xl text-teal-600">
        ${oneItemPrice.toFixed(2)}
      </Table.Cell>
      <Table.Cell className=" flex flex-col justify-between gap-5 items-center mt-5 ">
        <button onClick={decreaseQty}><FaCircleMinus size={25} color="gray" /></button>
        <button ><span className=" text-2xl font-mono ">{quantity}</span></button>
        <button onClick={increaseQty}><FaPlusCircle size={25} color="teal" /></button>
      </Table.Cell>
      <Table.Cell onClick={removeBtn} className="">
        <a
          href="#"
          className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
        >
          <FaTrash color="red" size={20} />
        </a>
      </Table.Cell>
    </Table.Row>
  );
};

export default Cart;
