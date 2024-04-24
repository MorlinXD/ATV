'use client'
import React, { useState, useEffect } from 'react'
// import Image from 'next/image'

interface CarouselProps {
  texts: Array<{
    text: string
  }>
}

const MainCarousel: React.FC<CarouselProps> = ({ texts }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % texts.length)
  }

  // const handlePrev = () => {
  //   setActiveIndex((prevIndex) => (prevIndex - 1 + texts.length) % texts.length)
  // }

  useEffect(() => {
    const interval = setInterval(handleNext, 5000)

    return () => { clearInterval(interval) }
  }, [activeIndex, texts.length])

  return (

    <div id="indicators-carousel" className=" w-full">
      <div className="coverflow-hidden">
        {texts.map((e, index) => (
          <div key={index} className={index === activeIndex ? 'block duration-700 ease-in-out' : 'hidden duration-700 ease-in-out'}>
            <div className='flex flex-col justify-center items-center'>
              {/* <Image src="/carousel1.svg" alt="" width={1139} height={248} className='relative'/> */}
              {/* <p className='absolute font-marker font-bold text-hcablack text-sm md:text-xl lg:text-3xl p-2 mx-2 lg:p-32 xl:p-48'>{e.text}</p> */}
              <p className='font-bold text-hcablack text-xl md:text-4xl lg:text-6xl p-2 mb-10'>{e.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute z-30 flex space-x-3 md:space-x-6 -translate-x-1/2 left-1/2">
        {texts.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 md:w-4 md:h-4 rounded-full hover:w-5 hover:h-5 ${index === activeIndex ? 'bg-hcanewblue w-4 h-4 md:w-5 md:h-5 rounded-full' : 'bg-hcanewlightblue'}`}
            aria-current={index === activeIndex ? 'true' : 'false'}
            aria-label={`Slide ${index + 1}`}
            onClick={() => { setActiveIndex(index) }}>
          </button>
        ))}
      </div>

      {/* <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-2 md:px-8 lg:px-20 2xl:px-48 cursor-pointer" onClick={handlePrev}>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
           <svg className=" w-4 h-4 lg:w-6 lg:h-6 text-hcadarkblue" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                 <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
             </svg>
             <span className="sr-only">Previous</span>
         </span>
      </button>
      <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-2 md:px-8 lg:px-20 2xl:px-48 cursor-pointer" onClick={handleNext}>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
             <svg className="w-4 h-4 lg:w-6 lg:h-6 text-hcadarkblue" aria-hidden="true" xmlns="http:www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                 <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
             </svg>
             <span className="sr-only">Next</span>
         </span>
      </button> */}
    </div>
  )
}

export default MainCarousel
