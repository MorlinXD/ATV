import SectionLayout from '@/src/layouts/SectionLayout';
import React from 'react';

export default function BlogHero() {
  return (
    <SectionLayout>
      <h1 className="text-hcaneworange text-center text-4xl font-semibold my-10">
        Lo que tenemos por contar
      </h1>
      <p className="text-lg">
        ¡Te contamos lo que estamos haciendo en Alza Tu Voz! Te invitamos a leer nuestro blog,
        escrito por nosotr@s, las adolescentes que formamos parte de esta increible iniciativa. ¡No
        te lo pierdas!
      </p>
    </SectionLayout>
  );
}
