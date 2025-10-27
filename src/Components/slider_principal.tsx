'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Slider(): JSX.Element {
  const images: string[] = [
    '/images/menu_icon/slides/sinfon.png',
    '/images/menu_icon/slides/prueba2.png',
    '/images/menu_icon/slides/prueba.png',
  ];
  const loopImages = [...images, ...images];
  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-3/5 max-w-3xl mx-auto overflow-hidden rounded-2xl">
      {/* Contenedor que se desliza */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {loopImages.map((src: string, i: number) => (
          <div key={i} className="w-full flex-shrink-0">
            <Image
              src={src}
              alt={`slide-${i}`}
              width={1000}
              height={600}
              className="w-full h-full md:h-full object-contain bg-transparent"
              priority={i === 0}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
