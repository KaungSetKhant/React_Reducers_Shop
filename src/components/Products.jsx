import React from "react";
import { StateContextCustom } from "../context/StateContext";
import Product from "./Product";
import { Spinner } from "flowbite-react";
import Category from "./Category";
import CarouselSlider from "./CarouselSlider";
import BrandSlider from "./BrandSlider";

const Products = () => {
  const {
    state: { products },
    isLoading,
  } = StateContextCustom();
  console.log(products);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen mx-auto">
        <Spinner size="xl" color="info" aria-label="Info spinner example" />
      </div>
    );
  }
  return (
    <div>
      <div>
        <CarouselSlider />
      </div>

      <div className="flex flex-col items-center justify-center mx-auto">
        <Category />
        <div className="grid w-full grid-cols-1 mx-auto mt-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 h-scree">
          {products?.map((pd) => {
            return <Product key={pd.id} {...pd} />;
          })}
        </div>
      </div>
     
      <div>
        <BrandSlider />
      </div>
    </div>
  );
};

export default Products;
