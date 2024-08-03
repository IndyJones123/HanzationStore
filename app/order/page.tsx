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
import { WobbleCard } from "@/components/ui/wobble-card";



export default function order() {
  return (
    <>
    <Guess>
    <div className="bg-[url('https://i.pinimg.com/originals/34/db/9d/34db9d43064d10907faa5136315dd49e.jpg')] opacity-50 min-h-screen min-w-full bg-current bg-cover bg-center flex flex-col items-center  overflow-hidden">
    {/* Dekstop */}
    <div className="hidden 2xl:block">
      <div className="flex flex-row">
      <div className="items-start text-start  m-5 flex flex-col gap-8">

        <h1 className="text-8xl font-bold"><span className="text-black">Peraturan</span><br /></h1>
        <div className="flex flex-row gap-4 justify-start ">
          <IconPlaystationCircle className="lg:w-20 lg:h-20 text-red-500" />
          <IconPlaystationSquare className="lg:w-20 lg:h-20 text-blue-500" />
          <IconPlaystationTriangle className="lg:w-20 lg:h-20 text-green-500" />
          <IconPlaystationX className="lg:w-20 lg:h-20 text-yellow-500" />
        </div>
        <div className="grid grid-cols-3 gap-5 ">
        <WobbleCard className="bg-black text-white text-center">
        <h1 className="text-4xl">1. Login Steam</h1>
        </WobbleCard>
        <WobbleCard className="bg-black text-white text-center">
        <h1 className="text-4xl">2. Mode Offline</h1>
        </WobbleCard>
        <WobbleCard className="bg-black text-white text-center">
        <h1 className="text-4xl">3. Enjoy Game</h1>
        </WobbleCard>
        </div>

             
        <div >
          <a href="/games">
            <Button  className="w-48 h-18 mt-2 gap-5 text-xl " >
              Setuju
              <IconPlaystationSquare className="mr-2 h-12 w-12 text-blue-500"/>
            </Button>
          </a>
        </div>
      </div>
      </div>
    </div>
      {/* Mobile */}
      <div className="items-center text-center  m-5 flex flex-col gap-8 2xl:hidden">
        <h1 className="text-6xl font-bold"><span className="text-black">Peraturan</span><br /></h1>
      <div className="flex flex-row gap-4 text-center justify-center ">
        
        <div className="flex flex-col gap-8 items-center">
            <div className="flex flex-row gap-4 items-center justify-center">
                <IconPlaystationCircle className=" w-5 lg:w-10 lg:h-10 text-red-500"/>
                <IconPlaystationSquare className=" w-5 lg:w-10 lg:h-10 text-blue-500"/>
                <IconPlaystationTriangle className=" w-5 lg:w-10 lg:h-10 text-green-500"/>
                <IconPlaystationX className=" w-5 lg:w-10 lg:h-10 text-yellow-500"/>
            </div>
            <div className="flex flex-col gap-4 items-center justify-center w-1/2 ">
                <div className="bg-black rounded-lg text-white">1. Login Akun</div>
                <div className="bg-black rounded-lg text-white">2. Mode Offline</div>
                <div className="bg-black rounded-lg text-white">3. Enjoy Game</div>
            </div>
                
        </div>
        
      </div>

      <div >
        <a href="/games">
          <Button  className="w-32 " >
            <IconPlaystationSquare className="mr-2 h-4 w-4 text-blue-500"/>
            Setuju
          </Button>
        </a>
      </div>
    </div>
    </div>
    </Guess>
    </>
  );
};
