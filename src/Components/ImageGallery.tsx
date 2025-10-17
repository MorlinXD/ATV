'use client';
import { type FC, useState } from 'react';
import Image from 'next/image';
import React from 'react';


interface ImageGalleryProps {
  galleries: Array<{
    src: string;
    alt?: string;
    width: number;
    height: number;
  }>;
}

const ImageGallery: FC<ImageGalleryProps> = ({ galleries }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(null);

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setCurrentImageIndex(null);
    setIsModalOpen(false);
  };

  const goToPrevImage = () => {
    if (currentImageIndex !== null && currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const goToNextImage = () => {
    if (currentImageIndex !== null && currentImageIndex < galleries.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  return (
    <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {galleries.map((gallery, index) => (
        <button
          key={index}
          onClick={() => {
            openModal(index);
          }}
          className="relative w-full pb-[75%] focus:outline-none"
        >
          <Image
            src={gallery.src}
            alt={gallery.alt ?? 'Imagen de galería'}
            width={gallery.width}
            height={gallery.height}
            // fill={true}
            style={{ objectFit: 'cover' }}
            // objectFit='cover'
            className="absolute top-0 left-0 w-full h-full rounded-md"
          />
        </button>
      ))}

      {isModalOpen && currentImageIndex !== null && (
        <div className="fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center bg-black bg-opacity-80">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 p-2 text-white focus:outline-none"
          >
            <span className="text-4xl text-white font-marker font-bold">X</span>
          </button>
          <button
            onClick={goToPrevImage}
            className="absolute left-4 p-2 text-white focus:outline-none"
          >
            <span className="text-4xl text-white font-marker font-bold">{'<'}</span>
          </button>
          <button
            onClick={goToNextImage}
            className="absolute right-4 p-2 text-white focus:outline-none"
          >
            <span className="text-4xl text-white font-marker font-bold">{'>'}</span>
          </button>
          <Image
            src={galleries[currentImageIndex].src}
            alt={galleries[currentImageIndex].alt ?? 'Gallery Image'}
            width={galleries[currentImageIndex].width}
            height={galleries[currentImageIndex].height}
            className="object-cover max-w-full max-h-full"
          />
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
