'use client';
import SectionLayout from '@/src/layouts/SectionLayout';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React from 'react';

const items = [
  {
    id: 1,
    image: '/images/resources/resource1.jpg',
    sources: {
      esp: 'https://drive.google.com/file/d/1th0SJu6gu4oKgPM7WMuiph9S7BpPF8Ee/view',
      eng: 'https://drive.google.com/file/d/1Il_PtZ3-BFvebJzuRkU3f_VrFcuXP_rG/view?usp=drive_link',
      xlsx: '',
    },
  },
  {
    id: 2,
    image: '/images/resources/resource2.jpg',
    sources: {
      esp: 'https://drive.google.com/file/d/1qO0TEfboNzN15W4dBY8e4irZysE4ymFM/view',
      eng: 'https://drive.google.com/file/d/1tYeZ2_H-mKdDHcSER4MjXX767ybR8u1e/view?usp=sharing',
      xlsx: '',
    },
  },
  {
    id: 3,
    image: '/images/resources/resource3.jpg',
    sources: {
      esp: 'https://drive.google.com/file/d/19cynme6_Zo8SySp3Ose20GiIOIB3qn8e/view',
      eng: '',
      xlsx: 'https://drive.google.com/drive/folders/1Qpb-TKFR_JNY77ums_N5Q9V5CPy6eQD1?usp=sharing',
    },
  },
  {
    id: 4,
    image: '/images/resources/resource4.jpg',
    sources: {
      esp: 'https://drive.google.com/file/d/1IsIxLvpdS4vAjOtjWaqvN3G69XDUIkVq/view',
      eng: '',
      xlsx: 'https://drive.google.com/drive/folders/1Ws9w8QLABnQEuxPK5JDLJ0Sw20DcL7HX?usp=sharing',
    },
  },
  {
    id: 5,
    image: '/images/resources/resource5.jpg',
    sources: {
      esp: 'https://drive.google.com/file/d/1GjFGfUBmwU7zHlJgXSkOqFIdxaFYRRb3/view?usp=sharing',
      eng: '',
      xlsx: '',
    },
  },
  // {
  //   id: 6,
  //   image: '/images/resources/resource1.jpg',
  //   sources: {
  //     esp: '',
  //     eng: '',
  //     xlsx: '',
  //   },
  // },
  // {
  //   id: 7,
  //   image: '/images/resources/resource1.jpg',
  //   sources: {
  //     esp: '',
  //     eng: '',
  //     xlsx: '',
  //   },
  // },
  // {
  //   id: 8,
  //   image: '/images/resources/resource1.jpg',
  //   sources: {
  //     esp: '',
  //     eng: '',
  //     xlsx: '',
  //   },
  // },
];

export default function ResourcesAvailable() {
  const pathname = usePathname();
  // Si estamos en /alza-tu-voz -> no renderiza nada
  if (pathname === '/alza-tu-voz') {
    return null;
  }

  return (
    <SectionLayout id="recursos" className="mb-20">
      <h1 className="text-hcaneworange text-4xl font-semibold text-center my-10">
        Accede a nuestros recursos y herramientas
      </h1>
      <p className="text-lg text-justify mb-10">
        Queremos que todo lo chévere que creamos como parte de &quot;Alza Tu Voz&quot; sea útil para
        otras iniciativas en todo el mundo. En este espacio, vamos a compartir recursos y
        herramientas que estamos usando para hacer que las ciudades sean un mejor lugar para las y
        los adolescentes y jóvenes.
      </p>
      <ul className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] lg:grid-cols-4 gap-4 gap-y-8">
        {items.map((item) => (
          <li key={item.id}>
            <ResourceCard image={item.image} sourceLinks={item.sources} />
          </li>
        ))}
      </ul>
    </SectionLayout>
  );
}

function ResourceCard({
  image,
  sourceLinks,
}: {
  image: string;
  sourceLinks: {
    esp: string;
    eng: string;
    xlsx: string;
  };
}) {
  const { eng, esp, xlsx } = sourceLinks;

  // const thereIsSource;
  return (
    <section className="flex flex-col justify-center items-center">
      <Image
        className="rounded-3xl"
        src={image}
        alt={`Imagen del recurso`}
        width={270}
        height={255}
      />
      <section className="flex justify-center items-center mt-2 gap-3">
        <SourceLink sourceLink={eng} label="EN" />
        <SourceLink sourceLink={esp} label="SP" />
        <SourceLink sourceLink={xlsx} label="XLS" />
      </section>
    </section>
  );
}

function SourceLink({ sourceLink, label }: { sourceLink: string; label: string }) {
  const thereIsSource = sourceLink && sourceLink.length > 0;
  if (!thereIsSource) {
    return (
      <button
        disabled
        className="disabled:cursor-not-allowed disabled:opacity-45 rounded-full hover:bg-hcaneworange duration-300 flex justify-center items-center p-1 bg-hcasilver w-11 h-11"
      >
        {label}
      </button>
    );
  }
  return (
    <a
      href={sourceLink}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-full hover:bg-hcaneworange duration-300 flex justify-center items-center p-1 bg-hcasilver w-11 h-11"
    >
      {label}
    </a>
  );
}
