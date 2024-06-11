import React from 'react'
import Pagefront from '../components/ui/Pagefront'
import Text from '../components/ui/Text'
import Heading from '../components/ui/Heading'

function About() {
  return (
    <>
      <Pagefront right={false} src="https://media.istockphoto.com/id/923450682/photo/brothers-doing-push-ups.jpg?s=612x612&w=0&k=20&c=z-9TLLM0WfC_0EC0ws0XnGZvYpTI4PLQ_-jhz2pfHiI=">
        Who are we?
      </Pagefront>
      <section className="about-section container mx-auto p-4 pt-6">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 xl:w-1/2 p-4 mb-4">
            <Heading size="lg" weight="bold" className="text-gray-800 mb-4">
              Our Story
            </Heading>
            <Text className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </Text>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/2 p-4 mb-4">
            <Heading size="lg" weight="bold" className="text-gray-800 mb-4">
              Our Mission
            </Heading>
            <Text className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </Text>
          </div>
        </div>
      </section>
    </>
  )
}

export default About