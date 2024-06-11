import React from 'react'
import Pagefront from '../components/ui/Pagefront'
import Text from '../components/ui/Text'
import Heading from '../components/ui/Heading'
import Card from '../components/ui/Card'

function Membership() {
  return (
    <>
      <Pagefront right={false} height={false} src="https://i.shgcdn.com/d61f124a-5eb2-41c7-abd1-ace0dd6f7d97/-/format/auto/-/preview/3000x3000/-/quality/lighter/">
        Choose this you'll love it
      </Pagefront>
      <section className="membership-plans container mx-auto p-4 pt-6">
        <div className="flex flex-wrap -mx-4 justify-center gap-5">
          <Card className="w-full md:w-1/3 xl:w-1/4 p-4 mb-4 bg-tertiary">
            <img src="https://via.placeholder.com/300x200" alt="Basic Plan" />
            <Heading size="md" weight="bold" className="text-gray-800">
              Basic Plan - $9.99/month
            </Heading>
            <Text className="text-gray-600">
              Our basic plan is perfect for those who want to get started with fitness. You'll get access to our fitness library, limited workout tracking, and email support.
            </Text>
            <ul className="list-disc pl-4">
              <li><Text>Access to our fitness library</Text></li>
              <li><Text>Limited workout tracking</Text></li>
              <li><Text>Email support</Text></li>
            </ul>
            <Text size="sm" weight="bold" className="text-gray-800">
              Trainers
            </Text>
            <ul className="list-disc pl-4">
              <li><Text>John Doe - Fitness Coach</Text></li>
              <li><Text>Jane Smith - Nutritionist</Text></li>
            </ul>
          </Card>

          <Card className="w-full md:w-1/3 xl:w-1/4 p-4 mb-4 bg-tertiary">
            <img src="https://via.placeholder.com/300x200" alt="Premium Plan" />
            <Heading size="md" weight="bold" className="text-gray-800">
              Premium Plan - $19.99/month
            </Heading>
            <Text className="text-gray-600">
              Our premium plan is designed for those who want to take their fitness to the next level. You'll get access to our fitness library, unlimited workout tracking, personalized coaching, nutrition planning, and prioritized email support.
            </Text>
            <ul className="list-disc pl-4">
              <li><Text>Access to our fitness library</Text></li>
              <li><Text>Unlimited workout tracking</Text></li>
              <li><Text>Personalized coaching</Text></li>
              <li><Text>Nutrition planning</Text></li>
              <li><Text>Prioritized email support</Text></li>
            </ul>
            <Text size="sm" weight="bold" className="text-gray-800">
              Trainers
            </Text>
            <ul className="list-disc pl-4">
              <li><Text>Mike Brown - Fitness Coach</Text></li>
              <li><Text>Emily Johnson - Nutritionist</Text></li>
              <li><Text>David Lee - Yoga Instructor</Text></li>
            </ul>
          </Card>

          <Card className="w-full md:w-1/3 xl:w-1/4 p-4 mb-4 bg-tertiary">
            <img src="https://via.placeholder.com/300x200" alt="Pro Plan" />
            <Heading size="md" weight="bold" className="text-gray-800">
              Pro Plan - $29.99/month
            </Heading>
            <Text className="text-gray-600">
              Our pro plan is designed for serious fitness enthusiasts. You'll get access to our fitness library, unlimited workout tracking, personalized coaching, nutrition planning, prioritized email support, priority phone support, and a free fitness consultation.
            </Text>
            <ul className="list-disc pl-4">
              <li><Text>Access to our fitness library</Text></li>
              <li><Text>Unlimited workout tracking</Text></li>
              <li><Text>Personalized coaching</Text></li>
              <li><Text>Nutrition planning</Text></li>
              <li><Text>Prioritized email support</Text></li>
              <li><Text>Priority phone support</Text></li>
              <li><Text>Free fitness consultation</Text></li>
            </ul>
            <Text size="sm" weight="bold" className="text-gray-800">
              Trainers
            </Text>
            <ul className="list-disc pl-4">
              <li><Text>Sarah Taylor - Fitness Coach</Text></li>
              <li><Text>Michael Davis - Nutritionist</Text></li>
              <li><Text>Lisa Nguyen - Yoga Instructor</Text></li>
              <li><Text>Tom Harris - Strength Coach</Text></li>
            </ul>
          </Card>
        </div>
      </section>
    </>
  )
}

export default Membership