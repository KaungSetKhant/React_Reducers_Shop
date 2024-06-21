import React from "react";
import BrandSlider from "./BrandSlider";
import 'animate.css';


const About = () => {
  return (
    <div>
      <>
        <div className="flex items-center justify-center text-center animate__animated animate__fadeInLeft">
          <div className="flex flex-col p-2 m-2  max-w-7xl ">
            <div className="text-4xl md:text-3xl  text-pink-400  font-mono ">Meet Our Team</div>
            <div className="text-sm mx-2 md:text-xl text-stone-500">
              Meet the team member who have contributed their designs for this
              websites.
            </div>
            <div className="text-sm mx-2 md:text-xl mb-2 text-stone-500">
              Resource person of Tailblocks communinty
            </div>

            <div className="flex items-center justify-center md:flex-row flex-col space-x-4 space-y-2 p-2">
              <div className="flex-col px-6 py-2 ">
                <div className="h-40 w-60 rounded-2xl overflow-hidden bg-gray-200">
                  <img
                    src="https://snackfever.com/cdn/shop/articles/a-3_86c78076-4c77-465a-bce3-e6d64fe214ba.jpg?v=1562248103"
                    alt=""
                    className=""
                  />
                </div>

                <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                  IU
                </div>
                <div className=" italic text-gray-500">CEO, Tailblocks</div>
              </div>
              <div className="flex-col px-6 py-2 ">
                <div className="h-40 w-60 rounded-2xl overflow-hidden bg-gray-200">
                  <img
                    src="https://i.pinimg.com/736x/37/d1/8b/37d18b192b41e983d56d3ea9998cae72.jpg"
                    alt=""
                    className=""
                  />
                </div>

                <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                  Beckkhan
                </div>
                <div className=" italic text-gray-500">Executive Producer</div>
              </div>
              <div className="flex-col px-6 py-2 ">
                <div className="h-40 w-60 rounded-2xl overflow-hidden bg-gray-200">
                  <img
                    src="https://qph.cf2.quoracdn.net/main-qimg-25361499358e6a4af2ab877d48a1b84f-pjlq"
                    alt=""
                    className=""
                  />
                </div>

                <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                  Sofia
                </div>
                <div className=" italic text-gray-500">HR</div>
              </div>
            </div>
            <div className="flex space-x-4 space-y-2 p-2 items-center justify-center md:flex-row flex-col ">
              <div className="flex-col px-6 py-2 ">
                <div className="h-40 w-60 rounded-2xl overflow-hidden bg-gray-200">
                  <img
                    src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a51002b5-f37a-47bc-90ce-eb9a499854f3/dg2bg2i-99c2994a-3212-4ca5-b3b9-9f9676390089.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2E1MTAwMmI1LWYzN2EtNDdiYy05MGNlLWViOWE0OTk4NTRmM1wvZGcyYmcyaS05OWMyOTk0YS0zMjEyLTRjYTUtYjNiOS05Zjk2NzYzOTAwODkuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.PDntkahz3lSAwlhNfmY7WxyDS1Ph9MpzDIt64pKomk8"
                    alt=""
                    className=""
                  />
                </div>

                <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                  Lina
                </div>
                <div className=" italic text-gray-500">Manager</div>
              </div>
              <div className="flex-col px-6 py-2 ">
                <div className="h-40 w-60 rounded-2xl overflow-hidden bg-gray-200">
                  <img
                    src="https://img.freepik.com/premium-photo/close-up-portrait-young-handsome-man-glasses-wearing-jacket-outdoors_613910-18510.jpg"
                    alt=""
                    className=""
                  />
                </div>

                <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                  Hannah Saw
                </div>
                <div className=" italic text-gray-500">Marketing Producer</div>
              </div>
              <div className="flex-col px-6 py-2 ">
                <div className="h-40 w-60 rounded-2xl overflow-hidden bg-gray-200">
                  <img
                    src="https://starsunfolded.com/wp-content/uploads/2016/10/Robbert-Pattinson.jpg"
                    alt=""
                    className=""
                  />
                </div>

                <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                  Wednesday Addams
                </div>
                <div className=" italic text-gray-500">Financer</div>
              </div>
            </div>
          </div>
        </div>
        <script src="https://cdn.tailwindcss.com" />
      </>

      <div className="flex justify-center animate__animated animate__swing">
        <div className="flex flex-col justify-center items-center bg-slate-100 max-w-7xl">
          <div className="text-4xl text-pink-400 font-mono mt-4 ">
            Testimonial
          </div>
          <div className="text-2xl text-black font-bold mt-2 ">
            What our Customers Say
          </div>
          <div className="flex flex-col items-center justify-evenly my-12 lg:px-10 lg:flex-row space-y-8 lg:space-y-0 ">
            <div className="flex flex-col justify-center items-center p-10 bg-white shadow w-[90%] md:w-[70%] lg:w-[30%] overflow-hidden">
              <div className="  " />
              <div className="flex flex-col -mt-20 -mr-[352px] hidden xl:block">
                <div className="w-2 h-14 bg-blue-900" />
                <div className="w-2 h-14 bg-pink-400" />
              </div>
              <h1 className="text-xl tracking-tight font-semibold text-pink-400 uppercase   ">
                1. Best Components
              </h1>
              <p className="text-black mt-3 text-center w-[90%] lg:w-[100%]">
                {" "}
                Tailblocks provides best Tailwind CSS Components and Blocks to
                create an unique websites within minutes. It has upto 60+ free
                components for front-end Web Development.
              </p>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScd28istIVgPGA3uyBBIbVybIgcDpyh11cww&s"
                className="rounded-full mt-4"
                alt=""
              />
              <div className="flex flex-col -ml-[352px] mt-72 absolute hidden xl:block">
                <div className="w-2 h-14 bg-blue-900" />
                <div className="w-2 h-14 bg-pink-400" />
              </div>
              <h1 className="text-lg font-semibold text-pink-400 uppercase mt-1">
                mark warner
              </h1>
              <h1 className="text-lg font-semibold text-black uppercase -mt-1">
                ceo / director
              </h1>
            </div>
            <div className="flex flex-col justify-center items-center p-10 bg-white shadow w-[90%] md:w-[70%] lg:w-[30%] overflow-hidden">
              <div className="  " />
              <div className="flex flex-col -mt-20 -mr-[352px] hidden xl:block">
                <div className="w-2 h-14 bg-blue-900" />
                <div className="w-2 h-14 bg-pink-400" />
              </div>
              <h1 className="text-xl tracking-tight font-semibold text-pink-400 uppercase   ">
                2. Amazing Designs
              </h1>
              <p className="text-black mt-3 text-center w-[90%] lg:w-[100%]">
                {" "}
                Tailblocks provides best Tailwind CSS Components and Blocks to
                create an unique websites within minutes. It has upto 60+ free
                components for front-end Web Development.
              </p>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScd28istIVgPGA3uyBBIbVybIgcDpyh11cww&s"
                className="rounded-full mt-4"
                alt=""
              />
              <div className="flex flex-col -ml-[352px] mt-72 absolute hidden xl:block">
                <div className="w-2 h-14 bg-blue-900" />
                <div className="w-2 h-14 bg-pink-400" />
              </div>
              <h1 className="text-lg font-semibold text-pink-400 uppercase mt-1">
                alexa daniel
              </h1>
              <h1 className="text-lg font-semibold text-black uppercase -mt-1">
                ceo / director
              </h1>
            </div>
            <div className="flex flex-col justify-center items-center p-10 bg-white shadow w-[90%]  md:w-[70%] lg:w-[30%] overflow-hidden">
              <div className="  " />
              <div className="flex flex-col -mt-20 -mr-[352px] hidden xl:block">
                <div className="w-2 h-14 bg-blue-900" />
                <div className="w-2 h-14 bg-pink-400" />
              </div>
              <h1 className="text-xl tracking-tight font-semibold text-pink-400 uppercase   ">
                3. Impressive
              </h1>
              <p className="text-black mt-3 text-center w-[90%] lg:w-[100%]">
                {" "}
                Tailblocks provides best Tailwind CSS Components and Blocks to
                create an unique websites within minutes. It has upto 60+ free
                components for front-end Web Development.
              </p>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScd28istIVgPGA3uyBBIbVybIgcDpyh11cww&s"
                className="rounded-full mt-4"
                alt=""
              />
              <div className="flex flex-col -ml-[352px] mt-72 absolute hidden xl:block">
                <div className="w-2 h-14 bg-blue-900" />
                <div className="w-2 h-14 bg-pink-400" />
              </div>
              <h1 className="text-lg font-semibold text-pink-400 uppercase mt-1">
                jessy bush
              </h1>
              <h1 className="text-lg font-semibold text-black uppercase -mt-1">
                ceo / director
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div>
        <BrandSlider/>
      </div>
    </div>
  );
};

export default About;
