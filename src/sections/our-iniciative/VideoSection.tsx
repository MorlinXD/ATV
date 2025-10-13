'use client';
import SectionLayout from '@/src/layouts/SectionLayout';
import Image from 'next/image';
import React, { useState } from 'react';

const videos = [
  {
    id: 1,
    link: 'https://www.youtube.com/embed/5OMgHvN96iY?si=Pv4viBqQPm-UglH8',
    title: '¿Qué es el proyecto Alza Tu Voz?',
  },
  {
    id: 2,
    link: 'https://www.youtube.com/embed/Ss4d2bt2ePA?si=fHhwZRnZmKSCUKo-',
    title: 'Escucha nuestra canción - Riobamba',
  },
  {
    id: 3,
    link: 'https://www.youtube.com/embed/JjKzCsKU2Lw?si=q1ydBPNiJYDeH4Nw',
    title: 'Escucha nuestra canción - Quevedo',
  },
  {
    id: 4,
    link: 'https://www.youtube.com/embed/wGrxMKPqlWI?si=bwoBkrPOgSzVg1Cc',
    title: 'Conoce el proceso de co-creación',
  },
  {
    id: 5,
    link: 'https://www.youtube.com/embed/cb_ou_ru8Fk?si=Ltef9vLa0P4hObhS',
    title: 'Telar comunitario - Riobamba',
  },
  {
    id: 6,
    link: 'https://www.youtube.com/embed/EzdcW37eJ30?si=tleBEqRaT-0hEPIk',
    title: 'Telar comunitario - Quevedo',
  },
];
export default function VideoSection() {
  const [sourceSelected, setSourceSelected] = useState(videos[0].link);

  function handleVideoSelect(link: string) {
    setSourceSelected(link);
  }
  return (
    <SectionLayout className="mt-[50px] mb-10 flex flex-col lg:flex-row justify-center gap-5 mx-auto p-5">
      <div className="h-[400px]">
        <iframe
          src={sourceSelected}
          className="h-full w-full lg:w-auto aspect-video rounded-lg shadow-[0_0_10px_-4px_#000]"
          name="Video"
        ></iframe>
      </div>
      <ul className="bg-gradient-to-br from-black to-black/40 text-white rounded-md flex flex-col gap-3 shadow-[0_0_10px_-4px_#000]">
        <li>
          <h1 className="font-semibold text-lg px-4 py-2">Conoce al proyecto Alza Tu Voz</h1>
        </li>
        <li className="max-h-[340px] overflow-y-auto">
          <section className="flex flex-col gap-1">
            {videos.map((video, index) => {
              return (
                <button
                  onClick={() => handleVideoSelect(video.link)}
                  className="h-20 rounded-md flex justify-center gap-4 items-center p-2 hover:bg-black/30 bg-black/80"
                  key={index}
                >
                  <Image
                    src="/logos/youtubeIcon.png"
                    alt="YouTube Icon"
                    width={70}
                    height={40}
                    className="aspect-video h-full object-contain rounded-md"
                  ></Image>
                  <p className="w-full h-full flex items-center text-white">{video.title}</p>
                </button>
              );
            })}
          </section>
        </li>
      </ul>
    </SectionLayout>
  );
}
