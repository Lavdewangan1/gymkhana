import React from 'react'
import Carousel from "../components/Carousel";

function HomeFront() {

    const images = ["https://t4.ftcdn.net/jpg/03/17/72/47/360_F_317724775_qHtWjnT8YbRdFNIuq5PWsSYypRhOmalS.jpg", "https://t4.ftcdn.net/jpg/03/17/72/47/360_F_317724775_qHtWjnT8YbRdFNIuq5PWsSYypRhOmalS.jpg", "https://t4.ftcdn.net/jpg/03/17/72/47/360_F_317724775_qHtWjnT8YbRdFNIuq5PWsSYypRhOmalS.jpg", "https://t4.ftcdn.net/jpg/03/17/72/47/360_F_317724775_qHtWjnT8YbRdFNIuq5PWsSYypRhOmalS.jpg", "https://t4.ftcdn.net/jpg/03/17/72/47/360_F_317724775_qHtWjnT8YbRdFNIuq5PWsSYypRhOmalS.jpg"];
    return (
        <section>
            <div className=" flex items-center justify-center w-screen h-fit home-content relative lg:flex-nowrap flex-wrap">
                <Carousel images={images} className="overflow-x-hidden home-carousel select-none lg:w-5/6 w-full" />
                <div className=" lg:w-2/6 flex justify-center lg:static absolute lg:translate-x-0 -translate-x-1/2 left-1/2 bottom-0 home-head w-full">
                    <h2 className="text-3xl font-bold sm:text-4xl text-center">
                        <div className="">Your Ultimate Destination for </div>
                    </h2>
                </div>
            </div>
        </section>
    )
}

export default HomeFront