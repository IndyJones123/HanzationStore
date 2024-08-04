"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { SparklesCore } from "@/components/ui/sparkles";
import Guess from "@/components/Secondlayout/guess";
import { Link, Quote } from "lucide-react";
import Image from 'next/image';
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/router';
import { PinContainer } from "@/components/ui/3d-pin";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

 const items = [{
    Quote: "Hallo Nama Aku asdasndlas",
    name: "Alfian DM",
    title: "Saya sangat puas dengan layanan di Hanzation. Game yang saya cari selalu tersedia, dan kualitasnya tidak pernah mengecewakan. Terima kasih!",
 },
 {
    Quote: "Hallo Nama Aku asdasndlas",
    name: "David R",
    title: "Hanzation telah mengubah cara saya berbagi game dengan teman-teman! Prosesnya mudah dan cepat, dan koleksi game mereka sangat beragam.",
 },
  {
    Quote: "Hallo Nama Aku asdasndlas",
    name: "Maria T",
    title: "Hanzation adalah solusi terbaik untuk berbagi game Steam. Harga yang terjangkau dan dukungan pelanggan yang responsif membuat pengalaman saya sangat positif",
 },
 {
    Quote: "Hallo Nama Aku asdasndlas",
    name: "John K",
    title: "Layanan yang diberikan oleh Hanzation benar-benar memudahkan saya untuk bermain game dengan teman-teman. Pilihan game-nya luar biasa dan prosesnya sangat lancar.",
 },
 {
    Quote: "Hallo Nama Aku asdasndlas",
    name: "Emily L.",
    title: "Hanzation menawarkan cara yang mudah dan aman untuk berbagi game Steam. Saya sangat merekomendasikan layanan mereka untuk semua penggemar game!",
 },


]


import {
  IconPlaystationCircle,
  IconPlaystationSquare,
  IconPlaystationTriangle,
  IconPlaystationX
} from "@tabler/icons-react";

import { Compare } from "@/components/ui/compare";
import { title } from "process";


export default function contact() {
  return (
    <>
    <Guess>
    <div className="bg-[url('https://i.pinimg.com/originals/34/db/9d/34db9d43064d10907faa5136315dd49e.jpg')] min-h-screen min-w-full bg-current bg-cover bg-center flex flex-col items-center  overflow-hidden">
    {/* Dekstop */}
    <div className="hidden 2xl:block">
      <div className="flex flex-row">
      <div className="items-start text-start  m-5 flex flex-col gap-8">
        <h1 className="text-9xl font-bold"><span className="bg-clip-text text-transparent bg-gradient-to-r from-[#12c2e9] via-[#c471ed] to-[#f64f59]">Contact Us</span><br /></h1>
        <div className="flex flex-row gap-4 justify-start ">
          <IconPlaystationCircle className="lg:w-20 lg:h-20 text-red-500" />
          <IconPlaystationSquare className="lg:w-20 lg:h-20 text-blue-500" />
          <IconPlaystationTriangle className="lg:w-20 lg:h-20 text-green-500" />
          <IconPlaystationX className="lg:w-20 lg:h-20 text-yellow-500" />
        </div>
        <div >
          <a href="https://www.instagram.com/hanzationstore/">
            <Button  className="w-48 h-18 mt-2 gap-5 text-xl " >
              DM Now
              <IconPlaystationX className="mr-2 h-12 w-12 text-yellow-500"/>
            </Button>
          </a>
        </div>
      </div>
      </div>
      <div className="mt-10 bg-red-300">
            <InfiniteMovingCards className="mt-5 " speed="normal" items={items}/>
      </div>
      
    </div>
      {/* Mobile */}
      <div className="items-center text-center  m-5 flex flex-col gap-8 2xl:hidden">

        <h1 className="text-5xl font-bold"><span className="bg-clip-text text-transparent bg-gradient-to-r from-[#12c2e9] via-[#c471ed] to-[#f64f59]">Contact Us</span><br /></h1>
      <div className="flex flex-row gap-4 text-center justify-center items-center">
        <div className="flex flex-row gap-8 items-center justify-center ">
          <IconPlaystationCircle className=" w-5 lg:w-10 lg:h-10 text-red-500"/>
          <IconPlaystationSquare className=" w-5 lg:w-10 lg:h-10 text-blue-500"/>
          <IconPlaystationTriangle className=" w-5 lg:w-10 lg:h-10 text-green-500"/>
          <IconPlaystationX className=" w-5 lg:w-10 lg:h-10 text-yellow-500"/>
          
        </div>
      </div>
      <div >
        <a href="https://www.instagram.com/hanzationstore/">
          <Button  className="w-32 " >
            <IconPlaystationX className="mr-2 h-4 w-4 text-yellow-500"/>
            DM Now
          </Button>
        </a>
      </div>
      
    </div>
    <Compare
          firstImage="/happy.jpg"
          secondImage="/angry.jpg"
          firstImageClassName="object-contain object-left-top w-full h-full"
          secondImageClassname="object-contain object-left-top w-full h-full"
          className="w-full h-full rounded-lg lg:rounded-2xl 2xl:hidden"
          slideMode="hover"
          autoplay={false}
        />
    </div>
    </Guess>
    </>
  );
};
