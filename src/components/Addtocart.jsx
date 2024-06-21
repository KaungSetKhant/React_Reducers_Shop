import React, { useEffect, useState } from "react";
import { StateContextCustom } from "../context/StateContext";
import Cart from "./Cart";
import { Table } from "flowbite-react";
import Noitemfound from "./Noitemfound";
import { FaTrash } from "react-icons/fa";

const Addtocart = () => {
  const {state: { carts },dispatch} = StateContextCustom();

  const [mainTotal, setMainTotal] = useState(0);

  useEffect(() => {
    setMainTotal(total);
  }, []);

  const increaseTotal = (price) => {
    setMainTotal(mainTotal + price);
  };

  const decreaseTotal = (price) => {
    setMainTotal(mainTotal - price);
  };

  const total = carts.reduce((pv, cv) => pv + cv.price, 0);

  return (
    <>
      {carts.length >= 1 ? (
        <div className="overflow-x-auto mx-auto mt-5">
          <Table striped>
            <Table.Head className=" text-xl text-center font-mono">
              <Table.HeadCell>Product Image</Table.HeadCell>
              <Table.HeadCell>Product Name</Table.HeadCell>
              <Table.HeadCell>Category</Table.HeadCell>
              <Table.HeadCell>Rating</Table.HeadCell>
              <Table.HeadCell>Description</Table.HeadCell>
              <Table.HeadCell>Price</Table.HeadCell>
              <Table.HeadCell>Qty</Table.HeadCell>
              <Table.HeadCell>
                <span className="sr-only">Edit</span>
              </Table.HeadCell>
            </Table.Head>

            <Table.Body className="divide-y text-center">
              {carts?.map((item) => {
                return (
                  <Cart
                    key={item.id}
                    item={item}
                    increaseTotal={increaseTotal}
                    decreaseTotal={decreaseTotal}
                  />
                );
              })}
              <Table.Row className=" border-t-4 border-t-pink-300  text-teal-600 bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell
                  colSpan={3}
                  className=" text-end text-2xl font-mono font-bold"
                >
                  Total :
                </Table.Cell>
                <Table.Cell
                  colSpan={2}
                  className="text-2xl font-mono text-start"
                >
                  $ {mainTotal.toFixed(2)}
                </Table.Cell>
                <Table.Cell colSpan={2}>
                  <button onClick={() => dispatch({type:"CLEAR_CART"})} className="flex items-center justify-between gap-1 border border-red-600 text-red-600 font-mono text-xl px-3 py-2 rounded-lg shadow-md"><FaTrash color="red" size={20} />Clear cart</button>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
      ) : (
        <Noitemfound />
      )}
    </>
  );
};

export default Addtocart;
