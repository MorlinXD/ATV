/* eslint-disable no-template-curly-in-string */
'use client'
import React, { useState } from 'react'
import styles from './styles.module.css'
// import { Transition } from '@headlessui/react';

interface FlipCardProps {
  src: string
  alt: string
  title: string
  question: string
}

const FlipCard: React.FC<FlipCardProps> = ({ src, alt, title, question }) => {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleFlip = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <div className={`${styles.perspective} w-72 h-40`} onClick={handleFlip}>
      {/* You need to use string concatenation properly */}
      <div className={`${styles.card} ${isFlipped ? styles['is-flipped'] : ''}`}>
        {/* Front of the card */}
        <div className={`${styles.front} inset-0 bg-white flex  flex-col justify-center items-center rounded-lg shadow-md p-6`}>
          <img
            src={src}
            alt={alt}
            className="h-24 mb-10"
          />
          <span className="text-xl font-medium">{title}</span>
        </div>
        {/* Back of the card */}
        <div className={`${styles.back} absolute inset-0 bg-hcaneworange text-white flex justify-center items-center rounded-lg shadow-md p-2`}>
          <span>{question}</span>
        </div>
      </div>
    </div>
  )
}

export default FlipCard
