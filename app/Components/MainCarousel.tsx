'use client'
import { type FC, useState } from 'react'

interface Props {
  // imageURL: string
  text: string
}

interface CarouselProps {
  slides: Props[]
}

const MainCarousel: FC<CarouselProps> = () => {
  return (
    <div className='overflow-hidden mt-20 relative'>
      <div className='flex'>
        <img src="/carousel.svg" alt="" />
      </div>
    </div>
  )
}

export default MainCarousel
