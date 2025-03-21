import React, { useEffect, useState } from "react";
import phones from "../imagesAcceuil/phones.jpg";
import { IoPricetags } from "react-icons/io5";
import { TbShoppingCartPlus } from "react-icons/tb";
import { GoGitCompare } from "react-icons/go";
import { GrFavorite } from "react-icons/gr";

export default function Smartphone() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then(response => response.json())
      .then(data => {
        console.log("Fetched data:", data);  // Ajoute cette ligne pour voir ce que l'API renvoie
        setProducts(data.products);  // Accède bien à "products"
      })
      .catch(error => console.error("Error loading products:", error));
  }, []);

  return (
    <div>
      <h2 className="font-bold text-2xl ml-20 mt-14 mb-8">Smartphone</h2>
      <section className="flex flex-row">

        {/* Section Promotion OPPO RENO 14 */}
        <div
          className="relative w-[350px] h-[360px] bg-cover bg-center text-white flex flex-col justify-center p-10 rounded-lg shadow-lg"
          style={{ backgroundImage: `url(${phones})` }}
        >
          <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
          <h1 className="font-bold text-2xl relative">OPPO RENO 14</h1>
          <p className="text-sm relative mt-4">
            Buy OPPO RENO 14 today <br /> to get up to 10% discount
          </p>
          <button className="underline mt-4 relative text-left text-sm font-semibold hover:text-gray-300">
            Shop now
          </button>
        </div>

        {/* Liste des produits */}
        <div className="flex flex-row gap-4 ml-4">
          {products.map((product) => (
            <div key={product.id} className="bg-white w-[220px] shadow-md rounded-lg p-4 relative">
              
              {/* Bouton Favori */}
              <GrFavorite className="text-gray-500 hover:text-red-500 hover:scale-125 transition-all duration-300 cursor-pointer absolute top-3 right-3 w-6 h-6" />
              
              {/* Badge Sale */}
              {product.discountedPrice !== product.originalPrice && (
                <div className="absolute top-2 left-2 bg-red-600 text-white text-xs rounded-full px-2">
                  Sale
                </div>
              )}

              {/* Image du produit */}
              <img src={product.image} alt={product.name} className="w-[160px] h-[160px] mx-auto" />

              {/* Informations */}
              <h4 className="text-xs text-gray-600 text-center">{product.category}</h4>
              <p className="text-sm font-bold text-center h-14 flex items-center justify-center">
                {product.title}
              </p>

              {/* Étoiles et avis */}
              <div className="text-yellow-400 flex justify-center items-center mt-2">
                {"★".repeat(Math.round(product.rating))}
                {"☆".repeat(5 - Math.round(product.rating))}
              </div>
              {/* <p className="text-gray-500 text-xs text-center mt-1">{product.stock} in stock</p> */}

              {/* Prix */}
              <div className="flex justify-center items-center space-x-2 mt-2">
                <IoPricetags className="text-[#011C3D] text-lg" />
                {product.discountedPrice !== product.originalPrice ? (
                  <>
                    <span className="text-gray-500 line-through text-sm">${product.originalPrice}</span>
                    <span className="text-[#011C3D] font-medium text-lg">${product.discountedPrice}</span>
                  </>
                ) : (
                  <span className="text-[#011C3D] font-medium text-lg">${product.originalPrice}</span>
                )}
              </div>

              {/* Boutons Actions */}
              <div className="flex flex-row justify-center items-center space-x-2 mt-3">
                <button className="border border-gray-400 rounded-sm font-normal text-xs flex flex-row items-center px-3 py-1 hover:bg-gray-100">
                  <GoGitCompare className="mr-1" /> Compare
                </button>
                <button className="bg-blue-500 text-white font-normal text-xs flex flex-row items-center px-3 py-1 rounded-sm hover:bg-blue-600">
                  Add to Cart <TbShoppingCartPlus className="ml-1" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </section>
    </div>
  );
}
