'use client';
import React, { useState } from 'react';
import { YouTubeEmbed } from '@next/third-parties/google';

interface CarouselProps {
  videoUrls: string[];
}

const VideoCarousel: React.FC<CarouselProps> = ({ videoUrls }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % videoUrls.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + videoUrls.length) % videoUrls.length);
  };

  return (
    <div id="indicators-carousel" className="flex flex-col gap-4">
      <div className="relative overflow-hidden rounded-lg">
        {videoUrls.map((url, index) => (
          <div
            key={index}
            className={
              index === activeIndex
                ? 'block duration-700 ease-in-out aspect-w-16 aspect-h-9'
                : 'hidden duration-700 ease-in-out aspect-w-16 aspect-h-9'
            }
          >
            <YouTubeEmbed videoid={url} style={'max-width: none'} />
          </div>
        ))}
      </div>
      <div className="flex flex-row justify-center">
        <button
          type="button"
          className="top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer"
          onClick={handlePrev}
        >
          <span className="inline-flex items-center justify-center w-24 h-10 rounded-lg bg-hcaneworange group-hover:bg-white group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer"
          onClick={handleNext}
        >
          <span className="inline-flex items-center justify-center w-24 h-10 rounded-lg bg-hcaneworange group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white"
              aria-hidden="true"
              xmlns="http:www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default VideoCarousel;
