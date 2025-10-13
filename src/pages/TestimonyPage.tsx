import React from 'react';
import TestimonyGallery from '../sections/testimony/TestimonyGallery';
import NewFocus from '../sections/testimony/NewFocus';
import FocusItems from '../sections/testimony/FocusItems';

export default function TestimonyPage() {
  return (
    <main id="como-lo-creamos" className="pt-28">
      <h1 className="text-hcaneworange text-4xl font-semibold text-center my-10"></h1>
      <TestimonyGallery />
      <NewFocus />
      <FocusItems />
    </main>
  );
}
