import React from "react";
import Image from "next/image";

function SixthSection() {
  return (
    <div className=" h-full bg-gray-200 ">
      <div className=" max-w-screen-xl mx-auto px-4 flex  justify-between relative">
        <div className=" flex flex-col  mt-10  ">
          <div className=" text-6xl  font-bold mb-4  text-blue-500">
            best study
          </div>
          <div className="text-blue-500  mb-4 font-bold text-6xl">
            material,{" "}
            <span className="text-black font-bold text-6xl">now at</span>
          </div>
          <div className=" text-black font-bold mb-20  text-6xl">
            your finger tips!
          </div>
          <div class="flex flex-wrap justify-between ">
            <div className="items-center text-black space-x-4 mb-5 flex">
              <Image src="./tick.svg" height={30} width={30} />
              <div className=" text-sm  opacity-50">live classes</div>
            </div>
            <div className="items-center space-x-4 mb-5 text-black flex">
              <Image src="./tick.svg" height={30} width={30} />
              <div className="text-sm opacity-50">progress tracking</div>
            </div>
          </div>
          <div className="items-center space-x-4  text-black flex">
            <Image src="./tick.svg" height={30} width={30} />
            <div className="text-sm opacity-50">diverse question bank</div>
          </div>
          <div className="download py-28  flex flex-col text-start">
            <div className="mb-4 ml-3 text-black font-semibold">
              Download the app
            </div>
            <div className="flex  justify-between">
              <Image src="./apple.svg" height={50} width={186} />
              <Image src="./playstore.svg" height={50} width={186} />
            </div>
          </div>
        </div>
        <div>
          <div className=" mt-3 relative">
            <Image
              src="./sixthSec1.svg"
              alt="Sixth Section Background"
              height={730}
              width={491}
            />
          </div>
          <div
            className=" absolute top-10 right-14
        "
          >
            <Image
              src="./sixthSec2.svg"
              alt="Sixth Section Overlay"
              height={210}
              width={410}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SixthSection;
