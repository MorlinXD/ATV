import React from 'react';
import SectionLayout from '../layouts/SectionLayout';
const items = [
  {
    id: 1,
    src: '/images/home/new_gallery/Portada5.jpg',
  },
  {
    id: 2,
    src: '/images/home/new_gallery/image 17.jpg',
  },
  {
    id: 3,
    src: '/images/home/new_gallery/Portada.jpg',
  },
  {
    id: 4,
    src: '/images/home/new_gallery/Portada1.jpg',
  },
  {
    id: 5,
    src: '/images/home/new_gallery/Portada2.jpg',
  },
  {
    id: 6,
    src: '/images/home/new_gallery/Portada3.jpg',
  },
  {
    id: 7,
    src: '/images/home/new_gallery/Portada4.jpg',
  },
  {
    id: 8,
    src: '/images/home/new_gallery/Rectangle.jpg',
  },
  {
    id: 9,
    src: '/images/home/new_gallery/Rectangle1.jpg',
  },
];

export default function GalleryHero() {
  return (
    <SectionLayout className="mb-20">
      <ul className="flex flex-wrap justify-center items-center gap-4">
        {items.map((item) => (
          <li key={item.id}>
            <img
              className="object-cover w-[360px] h-[200px]"
              src={item.src}
              alt={`Gallery image ${item.id}`}
            />
          </li>
        ))}
      </ul>
    </SectionLayout>
  );
}
