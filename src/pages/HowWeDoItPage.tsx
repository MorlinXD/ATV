import React from 'react';

import HowWeDoItHero from '../sections/how-we-do-it/HowWeDoItHero';
import HowWeDoItIndicators from '../sections/how-we-do-it/HowWeDoItIndicators';
import HowWeDoItResults from '../sections/how-we-do-it/HowWeDoItResults';
import HowWeDoItActions from '../sections/how-we-do-it/HowWeDoItActions';
import HowWeDoItTools from '../sections/how-we-do-it/HowWeDoItTools';
import HowWeDoItDashboard from '../Components/HowWeDoItDashboard';
import GalleryHero from '../Components/GalleryHero';
// import HowWeDoitIndicatorsPrev from '../sections/how-we-do-it/HowWeDoitIndicatorsPrev';

export default function HowWeDoItPage() {
  return (
    <main className="flex min-h-screen flex-col pt-32">
      {/* <HowWeDoItHero /> */}
      <HowWeDoItResults />
      <HowWeDoItActions />
      {/* <HowWeDoitIndicatorsPrev /> */}
      <GalleryHero />
      <HowWeDoItIndicators />
      <HowWeDoItDashboard />
      {/* <HowWeDoItTools /> */}
    </main>
  );
}
