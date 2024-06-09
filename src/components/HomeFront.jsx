import { useState } from "react";
import React from 'react'
import Carousel from "../components/Carousel";
import { motion, AnimatePresence } from "framer-motion";
function HomeFront() {
    const [activeIndex, setActiveIndex] = useState(0);
    const images = ["https://t4.ftcdn.net/jpg/03/17/72/47/360_F_317724775_qHtWjnT8YbRdFNIuq5PWsSYypRhOmalS.jpg", "https://t4.ftcdn.net/jpg/03/17/72/47/360_F_317724775_qHtWjnT8YbRdFNIuq5PWsSYypRhOmalS.jpg", "https://t4.ftcdn.net/jpg/03/17/72/47/360_F_317724775_qHtWjnT8YbRdFNIuq5PWsSYypRhOmalS.jpg", "https://t4.ftcdn.net/jpg/03/17/72/47/360_F_317724775_qHtWjnT8YbRdFNIuq5PWsSYypRhOmalS.jpg", "https://t4.ftcdn.net/jpg/03/17/72/47/360_F_317724775_qHtWjnT8YbRdFNIuq5PWsSYypRhOmalS.jpg"];

    const headings = ["Your Destination for 1", "Your Destination for 2", "Your Destination for 3", "Your Destination for 4", "Your Destination for 5"];

    const handleCarouselChange = (index) => {
        setActiveIndex(index);
    };

    return (
        <section>
            <div className=" flex items-center justify-center w-screen h-fit home-content relative lg:flex-nowrap flex-wrap">
                <Carousel images={images} className="overflow-x-hidden home-carousel select-none lg:w-5/6 w-full" onChange={handleCarouselChange} />
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

                    <AnimatePresence>
                            <motion.h1
                                className={`font-bold text-center lg:text-black text-white lg:text-[4.5vw] text-[6vw] exo-2 overflow-hidden w-full`}
                                key={headings[activeIndex]}
                                initial={{ y: 20, opacity: 0, display: "none" }}
                                animate={{ y: 0, opacity: 1, display: "block"}}
                                exit={{ opacity: 0, display: "none"}}
                                transition={{ duration: 0.25}}
                            >
                                {headings[activeIndex]}
                            </motion.h1>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    )
}

export default HomeFront