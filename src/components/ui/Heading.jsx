import React from 'react'

function Heading(props) {
  return (
    <h1 className=' lg:text-[15rem] md:text-[13rem] text-[10rem] opacity-40'>
        {props.children}
    </h1>
  )
}

export default Heading;