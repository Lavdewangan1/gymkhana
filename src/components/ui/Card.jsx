import React from 'react'

function Card(props) {
  return (
    <div className={` card p-5 add-shadow cursor-pointer ${props.className}`}>
        {props.children}
    </div>
  )
}

export default Card