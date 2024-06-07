import React from 'react'
import Video from "../components/Video";
import Heading from './ui/Heading';


function DemoVideo() {
    return (
        <section className=" demo-video flex justify-center items-center w-full">
            <h1>DE</h1>
            <Video />
            <h1>MO</h1>
        </section>
    )
}

export default DemoVideo