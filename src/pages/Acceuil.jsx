import React, { useEffect, useState } from "react";
import img1 from "../prontoImages/img1.png";
import img2 from "../prontoImages/img2.jpeg";
import img3 from "../prontoImages/img3.jpeg";
import img4 from "../prontoImages/img4.jpeg";
import img5 from "../prontoImages/img5.png";
import img6 from "../prontoImages/img5.png";
import bg1 from "../prontoImages/bg1.jpg";
import gift from "../prontoImages/gift-card.png";
import delivery from "../prontoImages/free-delivery.png";
import money from "../prontoImages/money-back-guarantee.png";
import support from "../prontoImages/online-support.png";
import Navbar from "../components/Navbar";
import api from "../axios";
import ProdCard from "../components/prodCard";
import axios from "axios";
import Loader from "../components/Loader";

// const products = [
//   {
//     id: 1,
//     name: "PC Gamer Asus Rog Strix GA15 ",
//     category: "ORDINATEUR",
//     image: img1,
//     originalPrice: "$450.00",
//     discountedPrice: "$410.00",
//     sale: true,
//     rating: 3,
//   },
//   {
//     id: 2,
//     name: "Gamer Xtreme VR Gaming PC",
//     category: "ORDINATEUR",
//     image: img2,
//     originalPrice: "$325.00",
//     discountedPrice: "$300.00",
//     sale: true,
//     rating: 4,
//   },
//   {
//     id: 3,
//     name: "Gaming Headset With Microphone",
//     category: "AUDIO",
//     image: img3,
//     originalPrice: "$250.00",
//     discountedPrice: "$225.00",
//     sale: true,
//     rating: 4,
//   },
//   {
//     id: 4,
//     name: "Gaming Keyboard and Mouse Combo",
//     category: "KEYBORAD AND MOUSE",
//     image: img4,
//     originalPrice: "$120.00",
//     discountedPrice: "$80.00",
//     sale: true,
//     rating: 4,
//   },
//   {
//     id: 5,
//     name: "Apple Watch Series 9",
//     category: "SMARTWATCH",
//     image: img5,
//     originalPrice: "$500.00",
//     discountedPrice: "$450.00",
//     sale: true,
//     rating: 5,
//   },
//   {
//     id: 6,
//     name: "Canon PIXMA - All-in-One Printer",
//     category: "PRINTER",
//     image: img6,
//     originalPrice: "$250.00",
//     discountedPrice: "$220.00",
//     sale: true,
//     rating: 4,
//   },
// ];

const Accueil = () => {



  const [products, setProducts] = useState([])
  const [IsLoading, setIsLoading] = useState([])
  let electronicCats = ["tablets", "smartphones", "laptops", "mens-watches", "mobile-accessories"];
  const getFakeProducts = async () => {
    setIsLoading(true);
    Promise.all(
      electronicCats.sort((a, b) => Math.random() - Math.random()).map(async c => {
        let res = await api.get(`/products/category/` + c)
        setProducts(old => [...old, ...res.data.products])
      })
    )
    setIsLoading(false);
  }

  useEffect(() => {
    if (products.length == 0) {
      getFakeProducts()
    }
  }, [])

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


      <section>
        <div>
          <h2 className="font-bold ml-20 mt-20 mb-10 text-2xl">Trending Proudcts</h2>
        </div>
        <div className="r-w-p-s">
          {
            IsLoading ?
              <div className="w-full h-52 c-c-c">
                <Loader />
              </div>
              :

              products.map((product) => <ProdCard Prod={product} key={product.id} />)
          }
        </div>
      </section>
    </div>
  );
};

export default Accueil;
