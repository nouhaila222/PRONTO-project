import React from 'react'

const BtnCompare = ({ prodId }) => {
    return (
        <button className='text-xs font-semibold  rounded-xl p-1 border border-gray-300  r-c-c'>
            Comparer
            <svg className='stroke-2  h-4 ml-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokelinecap="round" strokelinejoin="round" width={32} height={32} strokeWidth={1}> <path d="M6 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path> <path d="M18 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path> <path d="M11 6h5a2 2 0 0 1 2 2v8"></path> <path d="M14 9l-3 -3l3 -3"></path> <path d="M13 18h-5a2 2 0 0 1 -2 -2v-8"></path> <path d="M10 15l3 3l-3 3"></path> </svg>
        </button>
    )
}

export default BtnCompare
