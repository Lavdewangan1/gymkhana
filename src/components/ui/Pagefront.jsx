import React from 'react'

function Pagefront({ children, src, alt, right, height }) {
    return (
        <>
            {!right &&
                <section className='flex items-center page-front-left justify-between w-screen h-fit relative lg:flex-nowrap flex-wrap'>
                    <h1 className='page-head z-[2] lg:ml-16 lg:static absolute bottom-[3vw] font-bold text-center text-black exo-2 lg:text-[4.5vw] text-[6vw] overflow-hidden lg:w-[30vw] w-full'>
                        {children}
                    </h1>
                    {height &&
                        <div className='lg:w-[60vw] w-screen aspect-video overflow-hidden'>
                            <img src={src} alt={alt} className=' h-full object-cover' />
                        </div>
                    }
                    {!height &&
                        <div className='lg:w-[60vw] w-screen aspect-video overflow-hidden'>
                            <img src={src} alt={alt} className=' w-full object-cover' />
                        </div>
                    }
                </section>
            }
            {right &&
                <section className='flex items-center page-front-right justify-between w-screen h-fit relative lg:flex-nowrap flex-wrap'>
                    {height &&
                        <div className='lg:w-[60vw] w-screen aspect-video overflow-hidden'>
                            <img src={src} alt={alt} className=' h-full object-cover' />
                        </div>
                    }
                    {!height &&
                        <div className='lg:w-[60vw] w-screen aspect-video overflow-hidden'>
                            <img src={src} alt={alt} className=' w-full object-cover' />
                        </div>
                    }
                    <h1 className='page-head z-[2] lg:mr-24 mb-[3.5vw] font-bold text-center text-black exo-2 lg:text-[4.5vw] text-[6vw] overflow-hidden lg:w-[30vw] w-full'>
                        {children}
                    </h1>
                </section>
            }
        </>
    )
}

export default Pagefront;