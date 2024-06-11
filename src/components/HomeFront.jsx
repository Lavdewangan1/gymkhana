import { useState } from "react";
import React from 'react'
import Carousel from "../components/Carousel";
import { useEffect, useRef } from "react";
import { AnimatePresence } from "framer-motion";
function HomeFront() {
    const h1Ref = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const images = ["https://cdn.gulte.com/wp-content/uploads/2020/05/Golds-Gym-Bankruptcy.jpg", "https://goldsgym.com.au/wp-content/uploads/2020/10/Golds-Gym-Girl-Squad-1.webp", "https://content.jdmagicbox.com/comp/raipur-chhattisgarh/v4/9999px771.x771.110517093840.e6v4/catalogue/gold-s-gym-shanker-nagar-raipur-chhattisgarh-men-gyms-cjjd1v67f9.jpg", "https://img.etimg.com/thumb/msid-76255590,width-640,height-480,imgsize-934429,resizemode-4/golds-gym.jpg", "https://cdn.shopify.com/s/files/1/0558/6413/1764/files/Rewrite_Gold_s_Gym_Logo_Design_History_Evolution_0_1024x1024.jpg?v=1694740257"];

    const headings = ["Best GYM in the World", "With cool trainers", "At an affordable cost", "With all the equipments", "And a lovely environment"];

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
                <Carousel images={images} className="overflow-hidden home-carousel select-none aspect-video lg:w-5/6 w-screen" onChange={handleCarouselChange} />
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
                        <h1 ref={h1Ref} style={{ textShadow: '2px 2px 2px black' }} className="font-bold text-center text-white shadow-black lg:text-[4.5vw] text-[6vw] exo-2 overflow-hidden w-fit animate-fadeIn">
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