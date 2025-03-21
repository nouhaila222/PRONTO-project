import React, { useRef } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa";
import './brand.css'
const brands = [
{ id: 1, name: "Dell", image: "/brands/dell.png" },
{ id: 2, name: "Philips", image: "/brands/philips.png" },
{ id: 3, name: "Huawei", image: "/brands/huawei.png" },
{ id: 4, name: "Vivo", image: "/brands/hp.png" },
{ id: 5, name: "ThinkPad", image: "/brands/lenovo.png" },
{ id: 6, name: "Samsung", image: "/brands/samsung.png" },
{ id: 7, name: "LG", image: "/brands/lg.png" },
{ id: 8, name: "Asus", image: "/brands/asus.png" },
{ id: 9, name: "Acer", image: "/brands/acer.png" },
{ id: 10, name: "Canon", image: "/brands/canon.png" },
{ id: 11, name: "Epson", image: "/brands/epson.png" },
];

export default function TopBrands() {
const scrollRef = useRef(null);

const scrollLeft = () => {
scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
};

const scrollRight = () => {
scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
};

return (
<div className="w-full px-6 py-4 bg-white">
    <h2 className="font-bold text-2xl ml-20 mb-6">Top Brands</h2>
    
    <div className="relative">
    {/* Left Scroll Button */}
    <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10 hidden md:flex"
    >
    <FaArrowLeft />
    </button>

    {/* Scrollable Brand List */}
    <div
        ref={scrollRef}
        className="flex space-x-2 overflow-x-auto scrollbar-hide scroll-smooth"
    >
        {brands.map((brand) => (
        <div
            key={brand.id}
            className="flex-shrink-0 bg-white  p-4 hover:shadow-lg transition duration-300"
        >
            <img src={brand.image} alt={brand.name} className="w-18 h-12 object-contain" />
        </div>
        ))}
    </div>

    {/* Right Scroll Button */}
    <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10 hidden md:flex"
    >
        <FaArrowRight />
    </button>
    </div>
</div>
);
}
