import React from 'react'
import Video from "../components/Video";
import Heading from './ui/Heading';


function DemoVideo() {
    return (
        <section className=" demo-video flex justify-center items-center w-full">
            <Heading>DE</Heading>
            <Video />
            <Heading>MO</Heading>
        </section>
    )
}

export default DemoVideo