"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../ui/sidebar";
import {
  IconPlaystationCircle,
  IconPlaystationSquare,
  IconPlaystationTriangle,
  IconPlaystationX
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface GuessProps {
  children: React.ReactNode;
}

const Guess: React.FC<GuessProps> = ({ children }) => {
  const links = [
    {
      label: "Home",
      href: "/",
      icon: (
        <IconPlaystationCircle className="h-5 w-5 flex-shrink-0 text-red-500" />     
      ),
    },
    {
      label: "Order",
      href: "/order",
      icon: (
        <IconPlaystationSquare className="h-5 w-5 flex-shrink-0 text-blue-500" />
      ),
    },
    {
      label: "Games",
      href: "/games",
      icon: (
        <IconPlaystationTriangle className="h-5 w-5 flex-shrink-0 text-green-500" />
      ),
    },
    {
      label: "Contact",
      href: "/contact",
      icon: (
        <IconPlaystationX className="h-5 w-5 flex-shrink-0 text-yellow-500" />
      ),
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div
      className={cn(
        "rounded-lg flex flex-col md:flex-row w-full flex-1 mx-auto border overflow-hidden ",
        "h-[100vh]" // for your use case, use `h-screen` instead of `h-[60vh]`
      )}
    >
      <Sidebar open={open} setOpen={setOpen} animate={true}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            <>
              <Logo />
            </>
            <div className="mt-12 flex flex-col gap-4">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: "Created By Alfian.dm",
                href: "https://www.instagram.com/alfian.dm/",
                icon: (
                  <Image
                    src="/Al.jpg"
                    className="h-7 w-7 flex-shrink-0 rounded-full"
                    width={50}
                    height={50}
                    alt="Avatar"
                  />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      {children}
    </div>
  );
}

export default Guess;

export const Logo = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20 "
    >
      <Image
          src="/logo.jpg"
          className="h-7 w-7 rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0"
          width={50}
          height={50}
          alt="Avatar"
      />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre"
      >
        Hanzation Store
      </motion.span>
    </Link>
  );
};
