import { useState } from "react";
import React from 'react'
import Carousel from "../components/Carousel";
import { useEffect, useRef } from "react";
import { AnimatePresence } from "framer-motion";
function HomeFront() {
    const h1Ref = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const images = ["https://t4.ftcdn.net/jpg/03/17/72/47/360_F_317724775_qHtWjnT8YbRdFNIuq5PWsSYypRhOmalS.jpg", "https://t4.ftcdn.net/jpg/03/17/72/47/360_F_317724775_qHtWjnT8YbRdFNIuq5PWsSYypRhOmalS.jpg", "https://t4.ftcdn.net/jpg/03/17/72/47/360_F_317724775_qHtWjnT8YbRdFNIuq5PWsSYypRhOmalS.jpg", "https://t4.ftcdn.net/jpg/03/17/72/47/360_F_317724775_qHtWjnT8YbRdFNIuq5PWsSYypRhOmalS.jpg", "https://t4.ftcdn.net/jpg/03/17/72/47/360_F_317724775_qHtWjnT8YbRdFNIuq5PWsSYypRhOmalS.jpg"];

    const headings = ["Your Destination for 1", "Your Destination for 2", "Your Destination for 3", "Your Destination for 4", "Your Destination for 5"];

    useEffect(() => {
        const node = h1Ref.current;
    
        function handleAnimationEnd() {
            node.classList.remove('animate-fadeIn');
            node.removeEventListener('animationend', handleAnimationEnd);
        }
    
        if (node) {
            node.classList.add('animate-fadeIn');
            node.addEventListener('animationend', handleAnimationEnd);
        }
    
        return () => {
            if (node) {
                node.removeEventListener('animationend', handleAnimationEnd);
            }
        };
    }, [activeIndex]);

    const handleCarouselChange = (index) => {
        setActiveIndex(index);
    };

    return (
        <section>
            <div className=" flex items-center justify-center w-screen h-fit home-content relative lg:flex-nowrap flex-wrap">
                <Carousel images={images} className="overflow-x-hidden home-carousel select-none lg:w-5/6 w-screen" onChange={handleCarouselChange} />
                <div className=" lg:w-2/6 flex justify-center lg:static lg:mr-10 absolute lg:translate-x-0 -translate-x-1/2 left-1/2 bottom-0 home-head w-full">

                    {/* <ReactCarousel
                        selectedItem={activeIndex}
                        infiniteLoop={true}
                        autoPlay={true}
                        interval={3000}
                        showThumbs={false}
                        showArrows={false}
                        showIndicators={false}
                        showStatus={false}
                        stopOnHover={false}
                        axis="vertical"
                    >
                        {headings.map((heading, index) => (
                            <h1 key={index} className={`font-bold text-center exo-2 text-white lg:text-[4.5vw] text-[6vw]`}>
                                {heading}
                            </h1>
                        ))}
                    </ReactCarousel> */}

                    <AnimatePresence mode="wait">
                        <h1 ref={h1Ref} className="font-bold text-center lg:text-black text-white lg:text-[4.5vw] text-[6vw] exo-2 overflow-hidden w-full animate-fadeIn">
                            {headings[activeIndex]}
                        </h1>
                        {/* <motion.h1
                                className={`font-bold text-center lg:text-black text-white lg:text-[4.5vw] text-[6vw] exo-2 overflow-hidden w-full`}
                                key={activeIndex}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1}}
                                exit={{ opacity: 0}}
                                transition={{ duration: 0.25}}
                            >
                                {headings[activeIndex]}
                            </motion.h1> */}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    )
}

export default HomeFront