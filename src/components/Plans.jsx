import React from 'react'
import Heading from './ui/Heading'
import Card from './ui/Card'
import Text from './ui/Text'

function Plans() {
  return (
    <section className="popular-plans">
      <Heading className="text-black relative z-[2] text-center">
        Your Ultimate Destination for Fitness
      </Heading>
      <div className="flex justify-center gap-5 mt-5 relative z-[2]">
        <Card className="bg-black text-white">
          <Text className="text-center font-bold">
            Basic
          </Text>
          <Text className="text-center w-[20rem]">
            $9.99/month
          </Text>
          <ul>
            <li>Access to our fitness library</li>
            <li> Limited workout tracking</li>
            <li>Email support</li>
          </ul>
        </Card>
        <Card className="bg-black text-white">
          <Text className="text-center font-bold">
            Premium
          </Text>
          <Text className="text-center w-[20rem]">
            $19.99/month
          </Text>
          <ul>
            <li>Access to our fitness library</li>
            <li>Unlimited workout tracking</li>
            <li>Personalized coaching</li>
            <li>Nutrition planning</li>
            <li>Prioritized email support</li>
          </ul>
        </Card>
        <Card className="bg-black text-white">
          <Text className="text-center font-bold">
            Pro
          </Text>
          <Text className="text-center w-[20rem]">
            $29.99/month
          </Text>
          <ul>
            <li>Access to our fitness library</li>
            <li>Unlimited workout tracking</li>
            <li>Personalized coaching</li>
            <li>Nutrition planning</li>
            <li>Prioritized email support</li>
            <li>Priority phone support</li>
            <li>Free fitness consultation</li>
          </ul>
        </Card>
      </div>
    </section>
  )
}

export default Plans