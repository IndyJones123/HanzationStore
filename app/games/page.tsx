"use client";
import React, { useState } from "react";

import Guess from "@/components/Secondlayout/guess";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { IconPlaystationTriangle, IconPlaystationX } from "@tabler/icons-react";




export default function Games() {
 const [isHovered, setIsHovered] = useState(false);
  return (
    <>
    <Guess>
     <div className="w-full bg-[url('https://i.pinimg.com/originals/34/db/9d/34db9d43064d10907faa5136315dd49e.jpg')] bg-cover flex flex-col items-center  overflow-hidden ">
        <div className="flex flex-row items-center mt-2">
<h1 className="text-left ml-10 text-2xl bg-clip-text text-transparent text-white p-2 mx-4 hidden lg:block">
  GAME BEST SELLER
</h1>
      <div className="text-left ml-10 text-2xl bg-clip-text text-transparent text-white p-2 mx-4">
        <a href="/contact">
          <Button  className="w-32 " >
            <IconPlaystationTriangle className="mr-2 h-4 w-4 text-green-500"/>
            Pilih Game
          </Button>
        </a>
      </div>
        <Link href="https://docs.google.com/spreadsheets/d/1gsnBznYRzzqDd9DRa1p7fPRLUqHlX0miU2iV4sl4m6E/edit?gid=0#gid=0" target="_blank" className="text-end mr-10 w-36">
        <button className="p-[3px] relative w-36 ">
  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
  <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
    Catalog
  </div>
</button>
        </Link>
        
        </div>
        
      <div className="grid grid-cols-2 gap-5 justify-center align-middle p-10 lg:grid-cols-3">
            <div
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card h-36 lg:h-48 2xl:h-80 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
          "bg-[url(https://image.api.playstation.com/vulcan/img/rnd/202010/2217/LsaRVLF2IU2L1FNtu9d3MKLq.jpg)] bg-cover",
          // Preload hover image by setting it in a pseudo-element
          "before:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
          "hover:bg-[url(https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTBhbDB3dnRoNDFwYWR1MnprYnplZzBnMm03emlkMnQ0Zmh4b3p3dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/7eiWsPvHuEJU0NxJHh/giphy.gif)]",
          "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-20",
          "transition-all duration-500"
        )}
      >
        <div className="text relative z-50">
          <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
            God Of War
          </h1>
        </div>
      </div>
       <div
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card h-36 lg:h-48 2xl:h-80 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
          "bg-[url(https://image.api.playstation.com/vulcan/ap/rnd/202009/3021/QeJWAaLcYNOpCv7yCVZZEOY5.jpg)] bg-cover",
          // Preload hover image by setting it in a pseudo-element
          "before:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
          "hover:bg-[url(https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHdkdmFiYTRwaGozMWNtMWhqMWRkcTBtOXlodjFzam5qZDQyanYwaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/jCt1JUkh0RJVnCGUyP/giphy.gif)]",
          "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-20",
          "transition-all duration-500"
        )}
      >
        <div className="text relative z-50">
          <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
             Spider-Man Remastered
          </h1>
        </div>
      </div>
             <div
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card h-36 lg:h-48 2xl:h-80 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
          "bg-[url(https://assets.xboxservices.com/assets/1d/5b/1d5bc84f-2135-4e2f-8ca6-bb000d97db7f.jpg?n=Elden-Ring_GLP-Poster-Image-1084_1920x1080.jpg)] bg-cover",
          // Preload hover image by setting it in a pseudo-element
          "before:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
          "hover:bg-[url(https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExam5sanMzYTRram1lOXhqMXp1NmhvaWx2bGRrNnA3ZmhqNHJtZDE5biZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/AL4z1cASOArdlobY9u/giphy.gif)]",
          "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-20",
          "transition-all duration-500"
        )}
      >
        <div className="text relative z-50">
          <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
            Elden Ring
          </h1>
        </div>
      </div>
             <div
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card h-36 lg:h-48 2xl:h-80 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
          "bg-[url(https://image.api.playstation.com/vulcan/ap/rnd/202212/2101/CxnQHVI3gzboBTHqEEQVWZJ6.png)] bg-cover",
          // Preload hover image by setting it in a pseudo-element
          "before:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
          "hover:bg-[url(https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHlkZmQ2Z2d3a3psYXo3ajg2bDgxcXQ5aXZhNDlobXFxZGU2czE5ZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1rL3QDZZK8IapFwVuk/giphy.gif)]",
          "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-20",
          "transition-all duration-500"
        )}
      >
        <div className="text relative z-50">
          <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
            Tekken 8
          </h1>
        </div>
      </div>
             <div
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card h-36 lg:h-48 2xl:h-80 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
          "bg-[url(https://static1.thegamerimages.com/wordpress/wp-content/uploads/2021/02/Yakuza-Every-Game-Ranked-By-Hours-To-Completion.jpg)] bg-cover",
          // Preload hover image by setting it in a pseudo-element
          "before:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
          "hover:bg-[url(https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbTdreXJmdG1lMG1kMjUzcmZycmsweTJvOWl1ZjYzajJyeWFweW0wayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/7WmMKkbdCkgCpB3zgp/giphy.gif)]",
          "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-20",
          "transition-all duration-500"
        )}
      >
        <div className="text relative z-50">
          <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
            Yakuza
          </h1>
        </div>
      </div>
             <div
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card h-36 lg:h-48 2xl:h-80 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
          "bg-[url(https://c4.wallpaperflare.com/wallpaper/963/324/861/persona-4-persona-3-persona-series-persona-5-wallpaper-preview.jpg)] bg-cover",
          // Preload hover image by setting it in a pseudo-element
          "before:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
          "hover:bg-[url(https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmRweHZkcnFubmg5em82dHU1czJ1c3Z3NHYzbG9hem5oY2J3NXhjYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ENUwZ0s8CcZBoWwThW/giphy.gif)]",
          "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-20",
          "transition-all duration-500"
        )}
      >
        <div className="text relative z-50">
          <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
            Persona
          </h1>
        </div>
      </div>
      
      </div>
      
      

    </div>

    </Guess>

    
    </>
    
  );
};


