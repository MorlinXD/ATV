import React from 'react';
import RiobambaHero from '../sections/riobamba/RiobambaHero';
import RiobambaGallery from '../sections/riobamba/RiobambaGallery';
import RiobambaBanner from '../sections/riobamba/RiobambaBanner';
//import RiobambaCalendar from '../sections/riobamba/RiobambaCalendar';
import RiobambaActivities from '../sections/riobamba/RiobambaActivities';

export default function RiobambaPage() {
  return (
    <main className="pt-28">
      <img
        className="w-full max-h-[500px] mx-auto object-cover mb-10"
        alt="banner riobamba"
        src="/images/riobamba/page_rio/Banner Riobamba.jpg"
      />
      <RiobambaHero />
      <RiobambaGallery />
      <RiobambaBanner />
      <RiobambaActivities />
      {/*<RiobambaCalendar />*/}
    </main>
  );
}
