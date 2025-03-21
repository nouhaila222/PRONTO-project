import React from "react";
import pronto from "../imagesAcceuil/pronto.png";
import visa from '../payementPhotos/visa.png';
import paypal from '../payementPhotos/paypal.png';
import gpay from '../payementPhotos/gpay (1).png';
import mastercard from '../payementPhotos/mastercard (1).png';
import america from '../payementPhotos/american-express.png';

import { IoIosHome } from "react-icons/io";
import { MdMarkEmailUnread } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { TbClockHour10Filled } from "react-icons/tb";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookF, FaLinkedin, FaXTwitter, FaTiktok } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="bg-[#0D0F3F] py-10">
      <div className="flex flex-wrap gap-10 justify-between px-10 md:px-20">
        {/* Contact Info */}
        <div className="text-white text-sm space-y-4">
          <img src={pronto} alt="Pronto logo" className="mb-6" />
          <p className="flex items-center gap-x-2">
            <IoIosHome /> Adresse : HAY ALAM, Agadir
          </p>
          <p className="flex items-center gap-x-2">
            <MdMarkEmailUnread /> Email : ProntoTech@gmail.com
          </p>
          <p className="flex items-center gap-x-2">
            <BsFillTelephoneFill /> Téléphone : 0528282828
          </p>
          <p className="flex items-center gap-x-2">
            <TbClockHour10Filled /> 09:00-13:00, 15:00-19:00 (Lundi - Samedi)
          </p>
        </div>

        {/* Footer Menus */}
        <div className="text-white text-sm mt-5">
          <h1 className="text-[#3CEFFE] text-xl font-medium mb-2">Menu</h1>
          <ul className="space-y-2">
            <li>Ordinateurs</li>
            <li>Composants</li>
            <li>Impression</li>
            <li>Caisses</li>
            <li>Réseaux</li>
            <li>Gaming</li>
            <li>Promotions</li>
          </ul>
        </div>

        <div className="text-white text-sm mt-5">
          <h1 className="text-[#3CEFFE] text-xl font-medium mb-2">Help & Support</h1>
          <ul className="space-y-2">
            <li>Shipping Info</li>
            <li>Returns</li>
            <li>How To Order</li>
            <li>How To Track</li>
          </ul>
        </div>

        <div className="text-white text-sm mt-5">
          <h1 className="text-[#3CEFFE] text-xl font-medium mb-2">Customer Care</h1>
          <ul className="space-y-2">
            <li>FAQs</li>
            <li>Terms Of Service</li>
            <li>Privacy Policy</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>

      {/* Social Media and Payment Methods */}
      <div className="flex flex-wrap justify-between items-center px-10 md:px-20 mt-6 ">
        {/* Social Media */}
        <div >
          <h3 className="text-white font-medium text-m">Follow Us :</h3>
          <ul className="flex items-center gap-3 text-white text-lg mt-2">
            <li><RiInstagramFill /></li>
            <li><FaFacebookF /></li>
            <li><FaXTwitter /></li>
            <li><FaLinkedin /></li>
            <li><FaTiktok /></li>
          </ul>
        </div>

        {/* Payment Methods */}
        <div >
          <h3 className="text-white font-medium text-m">We Accept :</h3>
          <div className="flex gap-3 mt-2 items-center">
            <img src={visa} alt="Visa" className="w-8 h-7" />
            <img src={paypal} alt="Paypal" className="w-9 h-7" />
            <img src={gpay} alt="Gpay" className="w-9 h-5" />
            <img src={mastercard} alt="Mastercard" className="w-8 h-7 " />
            <img src={america} alt="American Express" className="w-8 h-7" />
          </div>
        </div>

        <div >
          <h2 className="text-white font-medium text-m">Subscribe to Our Newsletter :</h2>
          <input type="email" name="email" placeholder="Enter your email" className="bg-white borde w-60 h-8 p-1 mt-2"/>
          <button className="bg-[#3DEDFE] w-18 h-8 text-sm font-semibold relative top-[-1px]">Submit</button>
        </div>
      </div>

      <hr className="border-gray-100 mt-5" />

      {/* Copyright */}
      <p className="text-white text-xs text-center mt-4">
        &copy; {new Date().getFullYear()} PRONTO TECH. All Rights Reserved.
      </p>
    </div>
  );
}
