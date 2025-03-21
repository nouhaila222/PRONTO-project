<<<<<<< HEAD:src/components/Loader.jsx
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
=======
import React from "react";
import Lottie from "lottie-react";
import AnimationData from "../resources/Animation - 1740247422300.json";

const Loader = () => {
  return (
    <div className="c-c-c w-full h-52 flex flex-col items-center justify-center">
      <Lottie animationData={AnimationData} loop={true} className="w-40 h-40" />
      <p className="mt-4 font-bold opacity-80">Fetching data...</p>
    </div>
  );
};

export default Loader;
>>>>>>> 0d5bc495 (apii):frontend/src/components/Loader.jsx
