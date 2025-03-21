import React, { useState } from 'react'
import BtnAddToCart from './BtnAddToCart'
import DotLoader from './DotLoader'
import BtnCompare from './BtnCompar'

// availabilityStatus
// : 
// "Low Stock"
// brand
// : 
// "Essence"
// category
// : 
// "beauty"
// description
// : 
// "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula."
// dimensions
// : 
// {width: 23.17, height: 14.43, depth: 28.01}
// discountPercentage
// : 
// 7.17
// id
// : 
// 1
// images
// : 
// ['https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png']
// meta
// : 
// {createdAt: '2024-05-23T08:56:21.618Z', updatedAt: '2024-05-23T08:56:21.618Z', barcode: '9164035109868', qrCode: 'https://assets.dummyjson.com/public/qr-code.png'}
// minimumOrderQuantity
// : 
// 24
// price
// : 
// 9.99
// rating
// : 
// 4.94
// returnPolicy
// : 
// "30 days return policy"
// reviews
// : 
// (3) [{…}, {…}, {…}]
// shippingInformation
// : 
// "Ships in 1 month"
// sku
// : 
// "RCH45Q1A"
// stock
// : 
// 5
// tags
// : 
// (2) ['beauty', 'mascara']
// thumbnail
// : 
// "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png"
// title
// : 
// "Essence Mascara Lash Princess"
// warrantyInformation
// : 
// "1 month warranty"
// weight
// : 
// 2


const ProdCard = ({ Prod }) => {

    const [isGetingImag, setGettingImg] = useState(true)
    return (
        <div  className='w-80 p-2 relative mb-10  hover:scale-105 hover:drop-shadow-xl rounded-2xl bg-white  drop-shadow-lg  c-s-c'>
            <span className="bg-red-500 p-1 absolute top-2 left-2 z-10 px-3 text-xs rounded-2xl text-white font-semibold">
                - {Prod.discountPercentage} %
            </span>
            {
                isGetingImag &&
                <div className="w-full c-c-c h-40">
                    <DotLoader />
                </div>
            }
            <img onLoad={() => setGettingImg(false)} src={Prod.images[0]} loading='lazy' alt="" className="max-w-full max-h-60 object-cover object-center rounded-tr-sm" />
            <div className="w-full mt-4 r-b-c">
                <h1 className="ml-4 font-semibold text-xl">{Prod.title}</h1>
                <button className='opacity-70'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400Z" /></svg>
                </button>
            </div>

            <p className="mt-4 w-full">
                {Prod.description}
            </p>
            <div className="r-s-c mt-4 w-full">
                <span className=" text-semibold bg-yellow-300 rounded-2xl p-1 px-4 font-semibold r-c-c">
                    <svg className='mr-2' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" /></svg>
                    {Prod.rating}
                </span>
                <p className="ml-4 opacity-70">{Math.floor(Math.random() * 1000 + 1)}k reviews </p>
            </div>
            <span className="r-s-c w-full font-bold  mt-8 ml-4 text-blue-900 text-xl  ">
                <svg className='fill-blue-900 mr-2' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M446-80q-15 0-30-6t-27-18L103-390q-12-12-17.5-26.5T80-446q0-15 5.5-30t17.5-27l352-353q11-11 26-17.5t31-6.5h287q33 0 56.5 23.5T879-800v287q0 16-6 30.5T856-457L503-104q-12 12-27 18t-30 6Zm0-80 353-354v-286H513L160-446l286 286Zm253-480q25 0 42.5-17.5T759-700q0-25-17.5-42.5T699-760q-25 0-42.5 17.5T639-700q0 25 17.5 42.5T699-640ZM480-480Z" /></svg>
                {Prod.price} MAD
            </span>

            <div className="mt-4 w-full r-b-c">
                <BtnCompare prodId={Prod.id} />
                <BtnAddToCart prodId={Prod.id} />
            </div>
        </div>
    )
}

export default ProdCard
