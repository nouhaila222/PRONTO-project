import React, { useEffect, useState } from "react";

export default function MostViewed() {
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
    <div className="w-full p-6 mt-[100px]">
      <h2 className="font-bold text-2xl ml-20 mb-6">Most Viewed Products</h2>

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : error ? (
        <p className="text-red-500 text-center">Error: {error}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-2 gap-y-3">
          {products.length > 0 ? (
            products.map((product) => (
              <div
                key={product.id || product.name}
                className="bg-white rounded-lg shadow-lg p-4 flex flex-col w-[280px] h-auto"
              >
                <div className="flex flex-row">
                  <img
                    src={product.image || "fallback-image.jpg"}
                    alt={product.name || "No Name"}
                    className="w-24 h-20 object-contain border border-gray-200 rounded-lg"
                  />
                  <div className="flex flex-col ml-3">
                    <p className="text-gray-800 font-medium text-xs h-5">
                      {product.name || "Unknown Product"}
                    </p>
                    <div className="text-yellow-400 text-xs flex space-x-1 mt-1">
                      <span>{"★".repeat(product.rating || 0)}</span>
                      <span className="text-gray-300">
                        {"☆".repeat(5 - (product.rating || 0))}
                      </span>
                    </div>
                    <p className="text-red-500 font-semibold mt-1">
                      {product.discountedPrice ? `$${product.discountedPrice}` : "Price Unavailable"}
                      {product.sale && (
                        <span className="text-gray-500 line-through text-xs ml-2">
                          {product.originalPrice ? `$${product.originalPrice}` : ""}
                        </span>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">No products found.</p>
          )}
        </div>
      )}
    </div>
  );
}
