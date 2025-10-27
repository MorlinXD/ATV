import React from 'react';
import Image from 'next/image';
import styles from './styles.module.css';

const HeroQuevedo = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className={styles.bgWrapp}>
        <Image
          alt="Mountains"
          src="/layouts/hero-quevedo.png"
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
      <div className={styles.bgText}>{children}</div>
    </>
  );
};

export default HeroQuevedo;
