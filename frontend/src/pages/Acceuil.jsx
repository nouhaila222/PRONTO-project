import React from "react";
import bg1 from "../imagesAcceuil/bg1.jpg";
import gift from "../imagesAcceuil/gift-card.png";
import delivery from "../imagesAcceuil/free-delivery.png";
import money from "../imagesAcceuil/money-back-guarantee.png";
import support from "../imagesAcceuil/online-support.png";
import watches from "../imagesAcceuil/watch.jpeg";

import TrendingView from "../components/trendingView";
import Smartphone from "../components/Smartphone";
import MostViewed from "../components/MostViewed";
import TopBrands from "../components/Brands";



const Accueil = () => {
  return (
    <div className="font-poppins">

      <div className="relative w-full h-[400px] md:h-[500px] lg:h-[550px] overflow-hidden">
        <img
          src={bg1}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col md:flex-row justify-between items-center px-6 md:px-16 lg:px-24">
      
          <div className="max-w-lg text-left">
            <h3 className="text-blue-600 font-semibold text-lg">#WeekendDeals</h3>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              Discount up to 35% for this month.
            </h1>
            <button className="mt-4 bg-yellow-400 text-black px-6 py-3 rounded-full text-lg font-semibold hover:bg-yellow-500">
              Get Promo
            </button>
          </div>
        </div>
      </div>

    
      <div className="flex flex-wrap md:flex-nowrap justify-between items-center mr-10 ml-10 space-x-8">
        <div className="flex items-center space-x-2">
          <img src={delivery} alt="free shipping" className="w-10 h-10" />
          <p className="text-gray-600 font-bold">FREE SHIPPING <br /> & RETURN</p>
        </div>

        <div className="flex items-center space-x-2">
          <img src={gift} alt="gift-card" className="w-10 h-10" />
          <p className="text-gray-600 font-bold">GIFT PROMOTION</p>
        </div>

        <div className="flex items-center space-x-2">
          <img src={money} alt="money back" className="w-10 h-10" />
          <p className="text-gray-600 font-bold">MONEY GUARANTEE</p>
        </div>

        <div className="flex items-center space-x-2">
          <img src={support} alt="online support" className="w-10 h-10" />
          <p className="text-gray-600 font-bold">ONLINE SUPPORT</p>
        </div>
      </div>

      
    <TrendingView />
    
    <Smartphone/>

    <section>
      <img src={watches} alt="watches" className="w-[600px] h-[350px] float-right mr-10 mt-5"></img>
      <div className="relative top-[120px] ml-[100px] ">
      <p className="text-gray-500 font-normal text-lg ">STARTING AT ONLY 120$</p>
      <h1 className="text-5xl font-bold">Fire-Boltt hurricane <br/> Smartwatch</h1>
      <button className="bg-blue-600 text-white text-sm font-normal w-25 h-6 rounded-sm mt-6">SHOP NOW</button>
      </div>
    </section>

    <MostViewed/>
    <TopBrands/>

    </div>
  );
};

export default Accueil;
