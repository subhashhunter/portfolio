'use client';
import Image from "next/image";
import { assets } from "@/assets/assets";
import { useRef } from "react";

export const Navbar = () => {
  const sideMenuRef = useRef<HTMLUListElement>(null);

  const openMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = 'translateX(0)';
    }
  };

  const closeMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = 'translateX(100%)';
    }
  };

  return (
    <div>
      <nav className="w-full flex items-center justify-between px-8 py-5 z-50 fixed top-0 bg-white bg-opacity-80 shadow-md backdrop-blur-md">
        <a href="#home">
          {/* <Image src={assets.logo} className="w-28 cursor-pointer mr-14" alt="Logo" /> */}
        </a>
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Me</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#work">My Work</a></li>
          <li><a href="#contact">Contact Me</a></li>
        </ul>
        <div className="flex items-center gap-4">
          <button>
            {/* <Image src="" alt="Theme toggle" /> */}
          </button>
          <a href="#contact" className="hidden lg:flex items-center px-12 py-2 border border-gray-500 rounded-full ml-4 gap-3">
            Contact
            <Image src={assets.arrow_icon} className="w-3" alt="Arrow" />
          </a>
          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image src={assets.menu_black} alt="Open Menu" />
          </button>
        </div>

        {/* Mobile menu */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-6 py-20 px-10 fixed top-0 right-0 w-64 h-screen bg-white z-50 shadow-md transform translate-x-full transition-transform duration-300"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image src={assets.close_black} alt="Close" className="w-5 cursor-pointer" />
          </div>
          <li><a href="#home" onClick={closeMenu}>Home</a></li>
          <li><a href="#about" onClick={closeMenu}>About Me</a></li>
          <li><a href="#services" onClick={closeMenu}>Services</a></li>
          <li><a href="#work" onClick={closeMenu}>My Work</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact Me</a></li>
        </ul>
      </nav>
    </div>
  );
};
