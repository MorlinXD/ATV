import React from 'react';
import RaiseYourVoicePage from '@/src/pages/RaiseYourVoicePage';
import GalleryHero from '@/src/Components/GalleryHero';
import ResourcesAvailable from '@/src/sections/testimony/ResourcesAvailable';

export default function Home() {
  return (
    <>
      <RaiseYourVoicePage />
      <GalleryHero />
      <ResourcesAvailable />
    </>
  );
}
