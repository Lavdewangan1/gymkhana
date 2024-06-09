import React from 'react'
import Text from './ui/Text'
import Heading from './ui/Heading'

function Steps() {
  return (
    <section className=" steps">
        <div className="max-w-screen-xl px-4 mx-auto">
          <header className="text-center">
            <Heading className=" text-black">
              Your Ultimate Destination for Fitness
            </Heading>
            <Text className="max-w-md mx-auto mt-4 sm:text-lg">
              Our state-of-the-art facility and expert trainers are here to help
              you achieve your fitness goals, whether you're just starting out
              or are a seasoned pro.
            </Text>
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
          </ul>
        </div>
      </section>
  )
}

export default Steps