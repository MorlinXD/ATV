import React from 'react';
import OurInitiativeHome from '../sections/our-iniciative/OurInitiativeHome';
import VideoSection from '../sections/our-iniciative/VideoSection';
import HowWasCreatedSection from '../sections/our-iniciative/HowWasCreatedSection';
import HowWeOrganice from '../sections/our-iniciative/HowWeOrganice';

export default function RaiseYourVoicePage() {
  return (
    <main id="que-es" className="flex min-h-screen flex-col pt-40">
      <OurInitiativeHome />
      <VideoSection />
      <HowWasCreatedSection />
      <HowWeOrganice />
      {/* <GallerySection /> */}
    </main>
  );
}
