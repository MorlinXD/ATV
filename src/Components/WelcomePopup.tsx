'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const WelcomePopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ENABLE_POPUP = false; // Cambia a true si quieres volver a activarlo

  useEffect(() => {
    if (!ENABLE_POPUP) return;

    const popupData = localStorage.getItem('popupShown');
    const currentTime = new Date().getTime();

    if (popupData === null) {
      setIsOpen(true);
      localStorage.setItem('popupShown', currentTime.toString());
    } else {
      const lastShown = parseInt(popupData);
      const oneDay = 24 * 60 * 60 * 1000;

      if (currentTime - lastShown >= oneDay) {
        setIsOpen(true);
        localStorage.setItem('popupShown', currentTime.toString());
      }
    }
  }, [ENABLE_POPUP]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-lg p-4 md:p-6 w-full max-w-7xl animate-fade-in">
        <div className="relative w-full" style={{ aspectRatio: '1080/627' }}>
          <Image
            src="/convocatoria-9.webp"
            alt="Incidiendo en el espacio público a través de los datos"
            fill
            className="object-contain rounded-lg"
            priority
          />
        </div>

        <div className="flex justify-center mt-6">
          <a
            href="https://bit.ly/UrbanoRiobamba"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              setIsOpen(false);
            }}
            className="bg-hcaneworange text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-all text-lg font-semibold"
          >
            Regístrate aquí
          </a>
        </div>

        <button
          onClick={() => {
            setIsOpen(false);
          }}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 p-2"
          aria-label="Cerrar"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default WelcomePopup;
