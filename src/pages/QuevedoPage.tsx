import React from 'react';
import QuevedoHero from '../sections/quevedo/QuevedoHero';
import QuevedoBanner from '../sections/quevedo/QuevedoBanner';
import QuevedoActivities from '../sections/quevedo/QuevedoActivities';
//import QuevedoCalendar from '../sections/quevedo/QuevedoCalendar';
import QuevedoGallery from '../Components/QuevedoGallery';

export default function QuevedoPage() {
  return (
    <main className="pt-32">
      <img
        className="w-full max-h-[500px] mx-auto object-cover mb-10"
        alt="banner Quevedo"
        src="/images/quevedo/page_quev/Banner.jpg"
      />
      <QuevedoHero />
      <QuevedoGallery />
      <QuevedoBanner />
      <QuevedoActivities />
      {/*<QuevedoCalendar />*/}
    </main>
  );
}
