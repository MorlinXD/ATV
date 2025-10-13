import React from 'react'
import Image from 'next/image'
import styles from './styles.module.css'

const HeroRiobamba = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
    <div className={styles.bgWrap}>
      <Image
        alt="Mountains"
        src='/layouts/hero-riobamba.png'
        quality={100}
        priority={true}
        fill
        sizes="100vw"
        style={{
          objectFit: 'cover'
        }}
      />
    </div>
    <div className={styles.bgText}>
      {children}
    </div>
  </>
  )
}

export default HeroRiobamba
