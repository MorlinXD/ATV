/* eslint-disable react/no-unescaped-entities */
'use client'
import { type FC } from 'react'
import Image from 'next/image'

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
      <div className='flex flex-col justify-center items-center'>
        <Image src="/carousel.svg" alt="" width={1139} height={248} className='relative'/>
        <p className='absolute font-marker text-hcadarkblue text-base md:text-xl lg:p-8'> "Alza Tu Voz" es un proyecto para construir ciudades más saludables para adolescentes de Quevedo y Riobamba.</p>
      </div>
    </div>
  )
}

export default MainCarousel
