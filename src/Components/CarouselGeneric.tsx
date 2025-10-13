import React, { useState } from 'react';

export default function CarouselGeneric({
  items,
  itemsPerView = 3,
  autoSlide = false,
  autoSlideInterval = 3000,
}: {
  items: React.ReactNode[];
  itemsPerView?: number;
  autoSlide?: boolean;
  autoSlideInterval?: number;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = items.length;
  const maxIndex = Math.max(0, totalItems - itemsPerView);

  // Auto-slide functionality
  React.useEffect(() => {
    if (!autoSlide) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, autoSlideInterval);

    return () => clearInterval(interval);
  }, [autoSlide, autoSlideInterval, maxIndex]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(Math.max(0, index), maxIndex));
  };

  return (
    <div className="relative mt-32">
      {/* Carousel Container */}
      <div>
        {/* daba problemas de separacion esto: gap-x-10 */}
        <div
          className="flex transition-transform duration-300 ease-in-out "
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
          }}
        >
          {items.map((item, index) => (
            <div key={index} className="flex-shrink-0" style={{ width: `${100 / itemsPerView}%` }}>
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      {totalItems > itemsPerView && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white shadow-lg rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Anterior"
          >
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white shadow-lg rounded-full w-10 h-10 flex items-center justify-center hover:bg-hcanewlightblue transition-colors"
            aria-label="Siguiente"
          >
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {totalItems > itemsPerView && (
        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-hcaneworange' : 'bg-hcanewlightblue hover:bg-hcamelon'
              }`}
              aria-label={`Ir a la diapositiva ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
