import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Carousel from "../components/Carousel";


export default function HomePage() {
  const images = ["https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg", "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg", "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg", "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg", "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"];
  return (
    <>
      <section>
        <div className=" flex items-center justify-center w-screen h-fit home-content relative lg:flex-nowrap flex-wrap">
          <Carousel images={images} className="overflow-x-hidden home-carousel select-none lg:w-4/6 w-full" />
          <div className=" lg:w-2/6 flex justify-center lg:static absolute lg:translate-x-0 -translate-x-1/2 left-1/2 bottom-0 home-head w-full">
            <h2 className="text-3xl font-bold sm:text-4xl text-center">
              <div className="">Your Ultimate Destination for </div>
            </h2>
          </div>
          {/* <div className=" w-2/5">
              <p className="mt-8 text-center">
                We believe that fitness should be fun and enjoyable.That's why
                we've created a vibrant and friendly atmosphere where you can
                connect with like-minded individuals and make new friends.
              </p>
              <p className="mt-4 text-center sm:text-lg">
                Join us today and discover the joy of fitness!
              </p>
            </div> */}
        </div>
      </section>
      <section className=" who-can h-fit">
        <div className="grid md:grid-cols-2 grid-cols-1 grid-rows-3 justify-items-center items-center gap-3 pt-10 px-4">
          <img src="https://img.freepik.com/premium-photo/colorful-flower-with-green-leaf_1028782-202406.jpg" alt="" />
          <img src="https://img.freepik.com/premium-photo/colorful-flower-with-green-leaf_1028782-202406.jpg" alt="" />
          <img src="https://img.freepik.com/premium-photo/colorful-flower-with-green-leaf_1028782-202406.jpg" alt="" />
          <img src="https://img.freepik.com/premium-photo/colorful-flower-with-green-leaf_1028782-202406.jpg" alt="" />
        </div>
      </section>

      <section className=" steps">
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
          <header className="text-center">
            <h2 className="text-xl font-bold  sm:text-4xl text-tertiary">
              Your Ultimate Destination for Fitness
            </h2>

            <p className="max-w-md mx-auto mt-4 sm:text-lg">
              Our state-of-the-art facility and expert trainers are here to help
              you achieve your fitness goals, whether you're just starting out
              or are a seasoned pro.
            </p>
          </header>

          <ul className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
            <li>
              <div className="relative block group">
                <img
                  src="https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt="exercise"
                  loading="lazy"
                  className="object-cover h-full w-full transition duration-500 aspect-square group-hover:opacity-90"
                />
              </div>
            </li>

            <li>
              <div className="relative block group">
                <img
                  src="https://images.unsplash.com/photo-1581009137042-c552e485697a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt="exercise"
                  loading="lazy"
                  className="object-cover h-full w-full transition duration-500 aspect-square group-hover:opacity-90"
                />
              </div>
            </li>

            <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
              <div className="relative block group">
                <img
                  src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt="exercise"
                  loading="lazy"
                  className="object-cover h-full w-full transition duration-500 aspect-square group-hover:opacity-90"
                />
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
