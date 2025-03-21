import React from 'react'
import { useEffect, useState } from "react";

// import img1 from "../prontoImages/img1.png";
// import img2 from "../prontoImages/img2 (2).jpeg";
// import img3 from "../prontoImages/img3 (2).jpeg";
// import img4 from "../prontoImages/img4 (2).jpeg";
// import img5 from "../prontoImages/img5 (2).png";
// import img6 from "../prontoImages/img6 (2).png";
import { IoPricetags } from "react-icons/io5";
import { TbShoppingCartPlus } from "react-icons/tb";
import { GoGitCompare } from "react-icons/go";
import { GrFavorite } from "react-icons/gr";

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
//     review:"+12k reviews",
//     intro:" A powerful gaming PC with top performance for demanding gamers."
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
//     review:"+8k reviews",
//     intro:"A PC designed for virtual reality and high-performance gaming."
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
//     review:"+4k reviews",
//     intro:"A gaming headset with a built-in microphone for immersive sound and clear communication."
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
//     review:"+10k reviews",
//     intro:"A gaming keyboard and mouse combo with RGB lighting and responsive keys."
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
//     review:"+6k reviews",
//     intro:"A powerful smartwatch with health monitoring and advanced connectivity."
//   },

// ];

export default function TrendingView() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products") // Load JSON file
      .then(response => response.json())
      .then(data => setProducts(data.products))
      .catch(error => console.error("Error loading products:", error));
  }, []);
  return (
    <div>
          <section className='h-[530px]'>
        <div>
          <h2 className="font-bold ml-20 mt-20 mb-10 text-2xl">Trending Proudcts</h2>
        </div>
        <div className="flex flex-row gap-4 mr-2 ml-2">
          {products.map((product)=>(
          <div key={product.id}
          className="bg-white w-[230px] shadow-xl hover:scale-110 transition-all duration-300 center relative">
            <GrFavorite className=' text-gray-500 ml-[190px] hover:text-red-500 hover:scale-125 transition-all duration-300 cursor-pointer absolute top-5 right- w-6 h-6'/>
            
            {/* SALE */}
            <div className="relative top-5 left-4 bg-red-600 text-white text-xs rounded-full w-10">
              <p className="text-center">sale</p>
            </div>

            {/* images */}
            <img src={product.image} alt={product.name} className="w-[160px] ml-3">
            </img>

            {/* info */}
            <h4 className="text-xs text-gray-600 text-center">{product.category}</h4>
            <p className="text-xs font-bold ml-2 text-center h-14 flex items-center justify-center">{product.name}</p>

            <p className="text-xs font-semibold text-center h-14">{product.intro}</p>

            {/* rating reviews */}
            <div className="text-yellow-400 ml-2 flex flex-row justify-between items-center">
              {"★".repeat(product.rating)}
              {"☆".repeat(5-product.rating)}
              <p className="text-gray-500 text-xs mt-1 mr-3">{product.review}</p>
              </div>

              {/* prix */}
              <div className="flex flex-row items-center space-x-2  ml-3">
                <IoPricetags className="text-[#011C3D] text-m" />
                <span className="text-[#011C3D] font-medium">{product.discountedPrice}</span>
              </div>

               <div className="flex flex-row justify-center space-x-2 mt-3 mb-1 ">
                  <button className=" items-center justify-center border border-gray-400 rounded-sm font-normal text-xs flex flex-row space-x-4 w-[80px] h-[23px] ml-1"><GoGitCompare />Compare</button>
                  <button className="items-center justify-center rounded-full bg-blue-500 font-normal text-white text-xs flex flex-row  space-x-2 w-[120px] mr-1 h-6">Add to Cart<TbShoppingCartPlus /></button>
                </div>

          </div>
          ))}
          </div>
        
      </section>
    </div>
  )
}
