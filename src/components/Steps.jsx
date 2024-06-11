import React from 'react'
import Text from './ui/Text'
import Heading from './ui/Heading'
import Card from './ui/Card'

function Steps() {
  return (
    <section className=" steps py-[12%]">
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
            <Card className="shadow-black bg-tertiary">
              <div className="relative block group">
                <img
                  src="https://t4.ftcdn.net/jpg/01/10/60/93/360_F_110609357_6HZoN2iNERZ2m4bAy77PRNZXNepkG8BC.jpg"
                  alt="exercise"
                  loading="lazy"
                  className="object-cover h-full w-full transition duration-500 aspect-square object-left"
                />
                <Heading className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition duration-500 bg-black bg-opacity-50">
                  Push
                </Heading>
              </div>
              <Heading className="text-center text-black">
                Step 1
              </Heading>
            </Card>
          </li>
          <li>
            <Card className="shadow-black bg-tertiary">
              <div className="relative block group">
                <img
                  src="https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2023/06/bodybuilding-back-workout-scaled.jpg?fit=2560%2C1707&ssl=1"
                  alt="exercise"
                  loading="lazy"
                  className="object-cover h-full w-full transition duration-500 aspect-square"
                />

                <Heading className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition duration-500 bg-black bg-opacity-50">
                  Pull
                </Heading>
              </div>
              <Heading className="text-center text-black">
                Step 2
              </Heading>
            </Card>
          </li>
          <li>
            <Card className="shadow-black bg-tertiary">
              <div className="relative block group">
                <img
                  src="https://www.bodybuilding.com/images/2016/june/leg-workouts-for-men-7-best-workouts-for-quads-glutes-hams-tall-v2.jpg"
                  alt="exercise"
                  loading="lazy"
                  className="object-cover h-full w-full transition duration-500 aspect-square"
                />
                <Heading className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition duration-500 bg-black bg-opacity-50">
                  Leg
                </Heading>
              </div>
              <Heading className="text-center text-black">
                Step 3
              </Heading>
            </Card>
          </li>
          <li>
            <Card className="shadow-black bg-tertiary">
              <div className="relative block group">
                <img
                  src="https://st2.depositphotos.com/2972641/6115/i/450/depositphotos_61151947-Bodybuilder-posing-in-the-gym.jpg"
                  alt="exercise"
                  loading="lazy"
                  className="object-cover h-full w-full transition duration-500 aspect-square"
                />
                <Heading className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition duration-500 bg-black bg-opacity-50">
                  Pose
                </Heading>
              </div>
              <Heading className="text-center text-black">
                Step 4
              </Heading>
            </Card>
          </li>
          
        </ul>
      </div>
    </section>
  )
}

export default Steps