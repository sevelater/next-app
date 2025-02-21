"use client";

import { useState, useEffect, useRef } from "react";
import Image from 'next/image';
import profileImg from '../public/profile.png';

function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [navbar, setNavbar] = useState(true);
 

  // Close menu if clicking outside (but not when clicking the button)
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
  
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
  
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);
  
  // Handle Navbar Background Change on Scroll (Fix for SSR)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const changeBackground = () => {
        if (window.scrollY >= 5) {
          setNavbar(false);
        } else {
          setNavbar(true);
        }
      };
  
      window.addEventListener("scroll", changeBackground);
  
      return () => {
        window.removeEventListener("scroll", changeBackground);
      };
    }
  }, []);

  return (
    
    <>
      <div 
        className={navbar ? "flex justify-between bg-slate-400 bg-opacity-85 p-5 w-full z-50 fixed" : "flex justify-between bg-gray-400 bg-opacity-65 p-5 w-full z-50 fixed"}
        
        >
        <button className="text-2xl p-3">Márkus Szalon</button>

        <button
          ref={buttonRef}
          onClick={() => setIsOpen(!isOpen)} // Toggles open/close
          className="flex flex-col justify-center items-center scale-125 z-50"
        >
          <span
            className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
              isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
            }`}
          ></span>
          <span
            className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
              isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
            }`}
          ></span>
        </button>
      </div>

      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40">
          <div
            ref={menuRef}
            className="fixed top-0 right-0 h-full w-80 bg-slate-400 bg-opacity-85 flex items-center justify-center transition-all duration-300"
          >
            <ul className="text-zinc-950 text-xl w-2/4">
              <li className="py-12 hover:text-white cursor-pointer w-0 h-0">Főoldal</li>
              <li className="py-12 hover:text-white cursor-pointer w-0 h-0">Szolgáltatások</li>
              <li className="py-12 hover:text-white cursor-pointer w-0 h-0">Portfólióm</li>
              <li className="py-12 hover:text-white cursor-pointer w-0 h-0">Referencia</li>
              <li className="py-12 hover:text-white cursor-pointer w-0 h-0">Elérhetőségek</li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

const Page = () => {
  return (
    <div className="font-mono text-gray-100">
      <Menu/>

      <div className="bg-[url('../public/main.jpg')] bg-cover bg-center flex justify-center items-center py-64">
        <button
          className="p-4 px-12 bg-slate-400 rounded-2xl hover:bg-red-300"
          onClick={() => window.open("https://markusszalon.salonic.hu")}
        >
          Foglalás
        </button>
      </div>

      
      <div className="grid p-6 h-3/4 bg-slate-600" id="services">

      <div className="justify-items-center mt-8 mb-3 space-y-5" id="block">
        <p className="mb-12 p-2  rounded-md text-gray-100 font-semibold tracking-wider text-xl">Szolgáltatások</p>

        <div className="inlineflex w-full text-xl justify-between items-center p-5 bg-slate-500 rounded-md sm:text-2xl" id="service">
          
            <div className="flex items-center justify-between w-full ">
              <p className="">Hosszú Hajvágás</p>
              <p>25.50$</p>
            </div>
            <div className="inline-flex text-sm sm:text-lgw-full mb-5">
              <p>60 perc</p>
            </div>
            <div className="w-full h-0.5 bg-gray-100 bg-opacity-45 mb-5"></div>

            <div className="flex items-center justify-between w-full ">
              <p className="">Közepes Hajvágás</p>
              <p>20.50$</p>
            </div>
            <div className="inline-flex text-sm sm:text-lgw-full mb-5">
              <p>60 perc</p>
            </div>
            <div className="w-full h-0.5 bg-gray-100 bg-opacity-45 mb-5"></div>

            <div className="flex items-center justify-between w-full ">
              <p className="">Hosszú Hajvágás</p>
              <p>25.50$</p>
            </div>
            <div className="inline-flex text-sm sm:text-lgw-full mb-5">
              <p>60 perc</p>
            </div>
            <div className="w-full h-0.5 bg-gray-100 bg-opacity-45 mb-5"></div>

            <div className="flex items-center justify-between w-full ">
              <p className="">Hosszú Hajvágás</p>
              <p>25.50$</p>
            </div>
            <div className="inline-flex text-sm sm:text-lgw-full mb-5">
              <p>60 perc</p>
            </div>
            <div className="w-full h-0.5 bg-gray-100 bg-opacity-45 mb-5"></div>

            <div className="flex items-center justify-between w-full ">
              <p className="">Hosszú Hajvágás</p>
              <p>25.50$</p>
            </div>
            <div className="inline-flex text-sm sm:text-lgw-full" id="last">
              <p>60 perc</p>
            </div>
            


            


        </div>
  
          
      </div>
      </div>

      <div id="introduction" className="grid bg-slate-400 w-full pt-12 p-5 pb-12 sm:grid-cols-2">
        <Image 
          alt="profile pic"
          src={profileImg}
          className="flex justify-self-center justify-items-center w-2/5 pb-9"
        />

        <p className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias ipsam temporibus commodi fugiat voluptatum illum similique. Ea harum et nobis, facilis nam unde enim voluptas, officia facere adipisci incidunt amet.</p>


      </div>

    </div>
  );
};

export default Page;
