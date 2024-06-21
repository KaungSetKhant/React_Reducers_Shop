import React from "react";
import Marquee from "react-fast-marquee";

const BrandSlider = () => {
  return (
    <div className="mt-10">
      <div className="text-4xl font-mono text-center text-pink-400 mb-5">
        <h2>Our Brand Partner</h2>
      </div>

      <div className="mb-5 shadow-xl p-2">
        <Marquee direction="right" speed={100} delay={5}>
          <div className="">
            <img className=" w-[80%] h-[150px]" src="https://www.freepnglogos.com/uploads/chanel-logo-24.png" />
          </div>
          <div className="">
            <img className=" w-[80%] h-[150px]" src="https://i.pinimg.com/originals/31/32/d7/3132d7cc02cdd9ceacd7bceb0738828d.png" />
          </div>
          <div className="">
            <img className=" w-[80%] h-[150px]" src="https://www.freepnglogos.com/uploads/zara-logo-png/zara-avrupa-logos-2020-desing--11.png" />
          </div>
          <div className="">
            <img className=" w-[80%] h-[150px]" src="https://logos-world.net/wp-content/uploads/2020/04/Ralph-Lauren-Logo.png" />
          </div>
          <div className="">
            <img className=" w-[80%] h-[150px]" src="https://cdn.freebiesupply.com/logos/large/2x/adidas-logo.png" />
          </div>
          <div className="">
            <img className=" w-[80%] h-[150px]" src="https://clipart-library.com/images_k/transparent-adidas-logo/transparent-adidas-logo-20.png" />
          </div>
        </Marquee>
      </div>
      
    </div>
  );
};

export default BrandSlider;
