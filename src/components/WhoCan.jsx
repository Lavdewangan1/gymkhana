import React from 'react'
import Heading from './ui/Heading'
import Card from './ui/Card'
import Text from './ui/Text'

function WhoCan() {
    return (
        <section className=" who-can h-fit flex flex-col items-center">
            <Heading className=" text-tertiary">
                Anyone Can Join
            </Heading>
            <div className="flex flex-wrap justify-around items-center gap-8 py-10 px-4">
                <Card className="shadow-white bg-tertiary lg:basis-[40%]">
                    <img src="https://www.bodybuilding.com/images/2016/october/beginner-bros-guide-to-the-gym-upper-body-header-960x540.jpg" alt="gym beginner" />
                    <Text className="text-center font-bold text-black">
                        Beginners
                    </Text>
                </Card>
                <Card className=" shadow-white bg-tertiary lg:basis-[40%]">
                    <img src="https://i0.wp.com/www.muscleandfitness.com/wp-content/uploads/2020/03/Bald-Man-Performing-Incline-Dumbbell-Press-In-Gym.jpg?quality=86&strip=all" alt="gym bro" />
                    <Text className="text-center font-bold text-black">
                        Intermediate
                    </Text>
                </Card>
            </div>
        </section>
    )
}

export default WhoCan