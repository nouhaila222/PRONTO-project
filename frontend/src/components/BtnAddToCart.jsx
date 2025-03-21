import React from 'react'

const BtnAddToCart = ({ prodId }) => {
    return (
        <button className='p-1 text-sm px-4 text-white font-semibold bg-blue-900 rounded-xl r-c-c'>
            Ajout panier
            <svg className='stroke-2 ml-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width={32} height={32} strokeWidth={1}> <path d="M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path> <path d="M12.5 17h-6.5v-14h-2"></path> <path d="M6 5l14 1l-.86 6.017m-2.64 .983h-10.5"></path> <path d="M16 19h6"></path> <path d="M19 16v6"></path> </svg>
        </button>
    )
}

export default BtnAddToCart
