'use client';

import { type FC, type HTMLAttributeAnchorTarget } from 'react';
import Link from 'next/link';
import { sendGAEvent } from '@next/third-parties/google';

interface Props {
  label: string;
  link: string;
  target?: HTMLAttributeAnchorTarget;
  color: string;
  eventName: string; // Nombre del evento para Google Analytics
  eventCategory?: string; // Categoría del evento (opcional)
  eventLabel?: string; // Etiqueta del evento (opcional)
  eventValue?: string | number; // Valor del evento (opcional)
}

const GAEventButton: FC<Props> = ({
  label,
  link,
  target,
  color,
  eventName,
  eventCategory = 'Button', // Categoría por defecto
  eventLabel = label, // Si no se proporciona, usa el label del botón
  eventValue,
}) => {
  // Función para manejar el clic y enviar el evento a Google Analytics
  const handleClick = () => {
    sendGAEvent('event', eventName, {
      event_category: eventCategory,
      event_label: eventLabel,
      value: eventValue ?? link,
    });
  };

  return (
    <Link href={link} target={target}>
      <button
        onClick={handleClick}
        className={`text-2xl text-white font-bold ${color} py-8 px-32 mt-4 bg-no-repeat hover:opacity-80 transition-opacity duration-300 rounded-t-2xl rounded-br-2xl`}
      >
        {label}
      </button>
    </Link>
  );
};

export default GAEventButton;
