import React from 'react'
import Heading from './ui/Heading'
import Card from './ui/Card'
import Text from './ui/Text'

function Plans() {
  return (
    <section className=" popular-plans">
      <Heading className=" text-black relative z-[2] text-center">
        Your Ultimate Destination for Fitness
      </Heading>
      <div className="flex justify-center gap-5 mt-5 relative z-[2]">
        <Card className=" bg-black text-white">
          <Text className="text-center font-bold">
            Beginners
          </Text>
          <Text className="text-center w-[20rem]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur ratione eligendi, deserunt necessitatibus, nemo harum commodi eius debitis et illum incidunt dicta, quas eos magnam.
          </Text>
        </Card>
      </div>
    </section>
  )
}

export default Plans