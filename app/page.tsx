"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { SparklesCore } from "@/components/ui/sparkles";
import Guess from "@/components/Secondlayout/guess";
import { Link } from "lucide-react";
import Image from 'next/image';
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/router';
import { PinContainer } from "@/components/ui/3d-pin";


 


import {
  IconPlaystationCircle,
  IconPlaystationSquare,
  IconPlaystationTriangle,
  IconPlaystationX
} from "@tabler/icons-react";


export default function Home() {
  return (
    <>
    <Guess>
    <div className="bg-[url('https://i.pinimg.com/originals/34/db/9d/34db9d43064d10907faa5136315dd49e.jpg')] opacity-50 min-h-screen min-w-full bg-current bg-cover bg-center flex flex-col items-center  overflow-hidden">
    {/* Dekstop */}
    <div className="hidden 2xl:block">
      <div className="flex flex-row">
      <div className="items-start text-start  m-5 flex flex-col gap-8">
        <h1 className="text-5xl font-bold">Toko Game Sharing Termurah</h1>
        <h1 className="text-9xl font-bold"><span className="bg-clip-text text-transparent bg-gradient-to-r from-[#12c2e9] via-[#c471ed] to-[#f64f59]">Hanzation</span><br /> Store</h1>
        <div className="flex flex-row gap-4 justify-start ">
          <IconPlaystationCircle className="lg:w-20 lg:h-20 text-red-500" />
          <IconPlaystationSquare className="lg:w-20 lg:h-20 text-blue-500" />
          <IconPlaystationTriangle className="lg:w-20 lg:h-20 text-green-500" />
          <IconPlaystationX className="lg:w-20 lg:h-20 text-yellow-500" />
        </div>
        <div >
          <a href="/order">
            <Button  className="w-48 h-18 mt-2 gap-5 text-xl " >
              Order Now
              <IconPlaystationCircle className="mr-2 h-12 w-12 text-red-500"/>
            </Button>
          </a>
        </div>
      </div>
      <div className="items-start text-start m-5  gap-8 ">
        <CardContainer className="inter-var w-full ">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Hanzation Qris
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Hanzation Store Hanya Menerima Pembayaran Melalui Qris Selain Itu Merupakan Penipuan
        </CardItem>
        <CardItem
          translateZ="100"
          rotateX={20}
          rotateZ={-10}
          className="w-full mt-4"
        >
<Image
  src="/qris.jpeg"
  height={1000} // Use numbers directly instead of strings for size props
  width={1000}
  className="h-full w-full object-contain rounded-xl group-hover/card:shadow-xl"
  alt="thumbnail"
/>

        </CardItem>
      </CardBody>
    </CardContainer>
      </div>
      </div>
    </div>
      {/* Mobile */}
      <div className="items-center text-center  m-5 flex flex-col gap-8 2xl:hidden">
        <h1 className="text-xl font-bold">Toko Game Sharing Termurah</h1>
        <h1 className="text-7xl font-bold"><span className="bg-clip-text text-transparent bg-gradient-to-r from-[#12c2e9] via-[#c471ed] to-[#f64f59]">Hanzation</span><br /> Store</h1>
      <div className="flex flex-row gap-4 text-center justify-center ">
        
        <div className="flex flex-col gap-8 items-end ">
          <IconPlaystationCircle className=" w-5 lg:w-10 lg:h-10 text-red-500"/>
          <IconPlaystationSquare className=" w-5 lg:w-10 lg:h-10 text-blue-500"/>
          <IconPlaystationTriangle className=" w-5 lg:w-10 lg:h-10 text-green-500"/>
          <IconPlaystationX className=" w-5 lg:w-10 lg:h-10 text-yellow-500"/>
          
        </div>
        <div className="flex flex-col lg:w-1/5 gap-8 items-start">
          <h1 className=" w-5 lg:text-4xl">Murah</h1>
          <h1 className=" w-5 lg:text-4xl">Aman</h1>
          <h1 className=" w-5 lg:text-4xl">Ramah</h1>
          <h1 className=" w-5 lg:text-4xl">Mudah</h1>
        </div>
        <div className="ml-10 hidden lg:block">
          <Image
            src="/qris.jpeg"
            height={1000} // Use numbers directly instead of strings for size props
            width={1000}
            className="h-86 w-64  object-contain rounded-xl group-hover/card:shadow-xl bg-red-500"
            alt="thumbnail"
          />
        </div>
      </div>
      <div >
        <a href="/order">
          <Button  className="w-32 " >
            <IconPlaystationCircle className="mr-2 h-4 w-4 text-red-500"/>
            Order Now
          </Button>
        </a>
      </div>
    </div>
    </div>
    </Guess>
    </>
  );
};
