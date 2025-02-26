import React from "react";
import logo from "../prontoImages/logo.png";
import { IoSearchOutline } from "react-icons/io5";
import { TiShoppingCart } from "react-icons/ti";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { CiMenuBurger } from "react-icons/ci";

export default function Navbar() {
  return (
    <div>
     
      <nav className="bg-white shadow-md p-4 flex justify-between items-center h-20 fixed top-0 left-0 w-full z-50">

        <img className="h-16 w-[180px] ml-16" src={logo} alt="Pronto Tech Logo" />

      
        <div className="flex items-center border px-4 py-2 rounded-full w-[500px]">
          <IoSearchOutline className="text-gray-500 mr-2 text-m" />
          <input type="text" placeholder="Search a product" className="h-5 outline-none"/>
        </div>

        
        <div className="flex space-x-4 mr-16">
          <button className="text-gray-700 text-3xl"><TiShoppingCart /></button>
          <button className="text-gray-700 text-3xl"><MdOutlineFavoriteBorder /></button>
          <button className="text-gray-700 text-3xl"><CgProfile /></button>
        </div>
      </nav>

      {/* Space to Prevent Content Overlap */}
      <div className="h-20"></div>

      {/* Bottom Navbar */}
      <nav className="bg-[#0D0F3F] shadow-md p-4 flex justify-between items-center h-[52px] z-50">
        <div className="flex items-center space-x-4 px-4 ml-16">
          <CiMenuBurger className="text-2xl text-white" />
          <span className="font-semibold text-white">Menu Products</span>
        </div>
        <ul className="hidden md:flex space-x-8 font-medium text-white mr-16">
          <li className="hover:text-blue-400 cursor-pointer">Ordinateurs</li>
          <li className="hover:text-blue-400 cursor-pointer">Composants</li>
          <li className="hover:text-blue-400 cursor-pointer">Impression</li>
          <li className="hover:text-blue-400 cursor-pointer">Caisses</li>
          <li className="hover:text-blue-400 cursor-pointer">Réseaux</li>
          <li className="hover:text-blue-400 cursor-pointer">Promotions</li>
        </ul>
      </nav>
    </div>
  );
}
