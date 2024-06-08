import { useState } from "react";
import React from 'react'
import Carousel from "../components/Carousel";
import { Carousel as ReactCarousel } from 'react-responsive-carousel';
function HomeFront() {
    const [activeIndex, setActiveIndex] = useState(0);
    const images = ["https://t4.ftcdn.net/jpg/03/17/72/47/360_F_317724775_qHtWjnT8YbRdFNIuq5PWsSYypRhOmalS.jpg", "https://t4.ftcdn.net/jpg/03/17/72/47/360_F_317724775_qHtWjnT8YbRdFNIuq5PWsSYypRhOmalS.jpg", "https://t4.ftcdn.net/jpg/03/17/72/47/360_F_317724775_qHtWjnT8YbRdFNIuq5PWsSYypRhOmalS.jpg", "https://t4.ftcdn.net/jpg/03/17/72/47/360_F_317724775_qHtWjnT8YbRdFNIuq5PWsSYypRhOmalS.jpg", "https://t4.ftcdn.net/jpg/03/17/72/47/360_F_317724775_qHtWjnT8YbRdFNIuq5PWsSYypRhOmalS.jpg"];

    const headings = ["Your Destination for Fitness", "Your Destination for Fitness", "Your Destination for Fitness", "Your Destination for Fitness", "Your Destination for Fitness"];

    const handleCarouselChange = (index) => {
        setActiveIndex(index);
    };

    return (
        <section>
            <div className=" flex items-center justify-center w-screen h-fit home-content relative lg:flex-nowrap flex-wrap">
                <Carousel images={images} className="overflow-x-hidden home-carousel select-none lg:w-5/6 w-full" onChange={handleCarouselChange} />
                <div className=" lg:w-2/6 flex justify-center lg:static lg:mr-10 absolute lg:translate-x-0 -translate-x-1/2 left-1/2 bottom-0 home-head w-full">
                    <ReactCarousel
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
                    </ReactCarousel>
                </div>
            </div>
        </section>
    )
}

export default HomeFront