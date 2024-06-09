import React from 'react'

function Pagefront({ children, src, alt, right }) {
    return (
        <>
            {!right &&
                <section className='flex items-center page-front-left justify-center w-screen h-fit relative lg:flex-nowrap flex-wrap'>
                    <h1 className='page-head z-[2] lg:ml-16 lg:static absolute bottom-[4vw] font-bold text-center text-black exo-2 lg:text-[4.5vw] text-[6vw] overflow-hidden w-full'>
                        {children}
                    </h1>
                    <img src={src} alt={alt} className=' lg:w-[60vw] w-screen' />
                </section>
            }
            {right &&
                <section className='flex items-center page-front-right justify-center w-screen h-fit relative lg:flex-nowrap flex-wrap'>
                    <img src={src} alt={alt} className=' lg:w-[60vw] w-screen' />
                    <h1 className='page-head z-[2] lg:mr-16 mb-[4vw] font-bold text-center text-black exo-2 lg:text-[4.5vw] text-[6vw] overflow-hidden w-full'>
                        {children}
                    </h1>
                </section>
            }
        </>
    )
}

export default Pagefront;