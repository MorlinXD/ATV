import React from 'react';
import styles from './styles.module.css';

interface FlipCardProps {
  src: string;
  alt: string;
  title: string;
  question: string;
}

const FlipCard: React.FC<FlipCardProps> = ({ src, alt, title, question }) => {
  return (
    <div className={`${styles.perspective} w-72 h-40 cursor-pointer`}>
      <div className={styles.card}>
        {/* Front of the card */}
        <div
          className={`${styles.front} inset-0 bg-white flex flex-col justify-center items-center rounded-lg shadow-md p-6`}
        >
          <img src={src} alt={alt} className="h-24 mb-10" />
          <span className="text-xl font-medium">{title}</span>
        </div>
        {/* Back of the card */}
        <div
          className={`${styles.back} absolute inset-0 bg-hcaneworange text-white flex justify-center items-center rounded-lg shadow-md p-2`}
        >
          <span>{question}</span>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
