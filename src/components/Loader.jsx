import React from 'react'
import Lottie from 'react-lottie'
import AnimationData from '../resources/Animation - 1740247422300.json'
const Loader = () => {
    return (
        <div className='c-c-c w-full h-52'>
            <Lottie

                options={{
                    animationData: AnimationData,
                    autoplay: true,
                    loop: true

                }}
                height={150}
            />

            <p className="mt-4 font-bold opacity-80">Fetching data...</p>
        </div>
    )
}

export default Loader
