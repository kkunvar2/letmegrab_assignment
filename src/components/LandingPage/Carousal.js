import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';

import coffee from '../Assests/coffee.png'

import coffee1 from '../Assests/coffee1.jpg'
import coffee2 from '../Assests/coffee2.jpg'
import coffee3 from '../Assests/coffee3.jpg'
import coffee4 from '../Assests/coffee4.jpg'

import coffee5 from '../Assests/coffee1.webp'
import coffee6 from '../Assests/coffee2.webp'
import coffee7 from '../Assests/coffee3.webp'
import coffee8 from '../Assests/coffee4.webp'
import coffee9 from '../Assests/coffee5.webp'
import coffee10 from '../Assests/coffee6.webp'
import coffee11 from '../Assests/coffee7.webp'
import coffee12 from '../Assests/coffee8.webp'


const Carousal = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const images = [coffee, coffee1, coffee2, coffee3, coffee4,coffee5,coffee6,coffee7,coffee8, coffee9, coffee10, coffee11, coffee12];

    useEffect(() => {
        //  autoplay 
        const interval = setInterval(handleNext, 3000); 

        return () => clearInterval(interval);
    }, [currentIndex]);

  return (
    <>
          <div className='flex flex-col justify-center items-center m-auto'>
            <div className=' flex justify-center items-center bg-black h-screen '>
                {images.map((img, index) => (
                    <motion.img
                        key={index}
                        src={img}
                        alt={`image ${index}`}
                        className="rounded-[12px]"
                        initial={{ x: '100%', scale: 0.7, opacity: 0.4 }}
                        animate={{
                            x: currentIndex === index ? '0%' : (currentIndex < index ? '100%' : '-100%'),
                            scale: currentIndex === index ? 1 : 0.7,
                            opacity: currentIndex === index ? 1 : 0
                        }}
                        transition={{ duration: 0.4 }}
                        style={{ position: 'absolute', width: '500px' }}
                    />
                ))}
                <button
                    className='absolute bottom-46 left-10 text-white bg-indigo-400 rounded-md py-2 px-4'
                    onClick={handlePrev}
                >
                    Prev
                </button>
                <button
                    className='absolute bottom-40 right-10 text-white bg-indigo-400 rounded-md py-2 px-4'
                    onClick={handleNext}
                >
                    Next
                </button>
            </div>
        </div>    
    </>
)
}

export default Carousal