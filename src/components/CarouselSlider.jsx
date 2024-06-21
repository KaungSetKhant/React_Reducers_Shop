import React from "react";
import { Carousel } from "flowbite-react";
import 'animate.css';


const CarouselSlider = () => {
  return (
    <div className="h-56 sm:h-[500px] xl:h-[600px] 2xl:h-[700px] mt-3 animate__animated animate__flipInX">
      <Carousel slideInterval={5000}>
        <img src="https://i.pinimg.com/originals/e2/3f/95/e23f95b1dd15c6fd98477545faef2d08.jpg" />
        <img src="https://i.pinimg.com/originals/28/48/d7/2848d77f8f29490916cd8c1082198a36.png" />
        <img src="https://i1.wp.com/popbee.com/image/2022/02/recommend-by-hyun-bin-tom-ford-release-valentines-day-rose-perfume-collection-01.jpg" />
        <img src="https://uploads.dailyvanity.sg/wp-content/uploads/2021/03/A-Pinks-Naeun-Jo-Malone-London-Nectarine-Blossom-Honey.jpeg" />
        <img src="https://i.pinimg.com/originals/29/72/6c/29726cad5fcc69b2d0a08d4555016455.jpg" />
      </Carousel>
    </div>
  );
};

export default CarouselSlider;
