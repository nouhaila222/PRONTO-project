import React, { useEffect, useState } from "react";
import { IoPricetags } from "react-icons/io5";
import { TbShoppingCartPlus } from "react-icons/tb";
import { GoGitCompare } from "react-icons/go";
import { GrFavorite } from "react-icons/gr";

export default function TrendingView() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch products.");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched Data:", data);
        // تأكد من أن البيانات هي مصفوفة
        const productsArray = Array.isArray(data) ? data : data.products || [];
        setProducts(productsArray);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading products:", error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <section className="h-[530px]">
        <div>
          <h2 className="font-bold ml-20 mt-20 mb-10 text-2xl">Trending Products</h2>
        </div>
        <div className="flex flex-row gap-4 mr-2 ml-2">
          {loading ? (
            <p className="text-center">Loading...</p>
          ) : error ? (
            <p className="text-red-500 text-center">Error: {error}</p>
          ) : products && Array.isArray(products) && products.length > 0 ? (
            products.map((product) => (
              <div
                key={product.id}
                className="bg-white w-[230px] shadow-xl hover:scale-110 transition-all duration-300 center relative"
              >
                <GrFavorite className="text-gray-500 ml-[190px] hover:text-red-500 hover:scale-125 transition-all duration-300 cursor-pointer absolute top-5 right- w-6 h-6" />

                {/* SALE */}
                {product.sale && (
                  <div className="relative top-5 left-4 bg-red-600 text-white text-xs rounded-full w-10">
                    <p className="text-center">sale</p>
                  </div>
                )}

                {/* images */}
                <img
                  src={product.image || "fallback-image.jpg"}
                  alt={product.name}
                  className="w-[160px] ml-3"
                  onError={(e) => {
                    e.target.src = "fallback-image.jpg"; // استبدال الصورة في حالة الخطأ
                  }}
                />

                {/* info */}
                <h4 className="text-xs text-gray-600 text-center">{product.category}</h4>
                <p className="text-xs font-bold ml-2 text-center h-14 flex items-center justify-center">
                  {product.name}
                </p>

                <p className="text-xs font-semibold text-center h-14">{product.intro}</p>

                {/* rating reviews */}
                <div className="text-yellow-400 ml-2 flex flex-row justify-between items-center">
                  {"★".repeat(product.rating || 0)}
                  {"☆".repeat(5 - (product.rating || 0))}
                  <p className="text-gray-500 text-xs mt-1 mr-3">{product.review}</p>
                </div>

                {/* prix */}
                <div className="flex flex-row items-center space-x-2 ml-3">
                  <IoPricetags className="text-[#011C3D] text-m" />
                  <span className="text-[#011C3D] font-medium">
                    {product.discountedPrice || "Price Unavailable"}
                  </span>
                </div>

                <div className="flex flex-row justify-center space-x-2 mt-3 mb-1">
                  <button className="items-center justify-center border border-gray-400 rounded-sm font-normal text-xs flex flex-row space-x-4 w-[80px] h-[23px] ml-1">
                    <GoGitCompare />
                    Compare
                  </button>
                  <button className="items-center justify-center rounded-full bg-blue-500 font-normal text-white text-xs flex flex-row space-x-2 w-[120px] mr-1 h-6">
                    Add to Cart
                    <TbShoppingCartPlus />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">No products found.</p>
          )}
        </div>
      </section>
    </div>
  );
}