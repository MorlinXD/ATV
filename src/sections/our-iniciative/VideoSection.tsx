'use client';
import SectionLayout from '@/src/layouts/SectionLayout';
import Image from 'next/image';
import React, { useState } from 'react';

const videos = [
  { id: 1, link: 'https://www.youtube.com/embed/5OMgHvN96iY?si=Pv4viBqQPm-UglH8', title: '¿Qué es el proyecto Alza Tu Voz?' },
  { id: 2, link: 'https://www.youtube.com/embed/Ss4d2bt2ePA?si=fHhwZRnZmKSCUKo-', title: 'Escucha nuestra canción - Riobamba' },
  { id: 3, link: 'https://www.youtube.com/embed/JjKzCsKU2Lw?si=q1ydBPNiJYDeH4Nw', title: 'Escucha nuestra canción - Quevedo' },
  { id: 4, link: 'https://www.youtube.com/embed/wGrxMKPqlWI?si=bwoBkrPOgSzVg1Cc', title: 'Conoce el proceso de co-creación' },
  { id: 5, link: 'https://www.youtube.com/embed/cb_ou_ru8Fk?si=Ltef9vLa0P4hObhS', title: 'Telar comunitario - Riobamba' },
  { id: 6, link: 'https://www.youtube.com/embed/EzdcW37eJ30?si=tleBEqRaT-0hEPIk', title: 'Telar comunitario - Quevedo' },
];

export default function VideoSection() {
  const [sourceSelected, setSourceSelected] = useState(videos[0].link);

  function handleVideoSelect(link: string) {
    setSourceSelected(link);
  }

  return (
    <section className="relative overflow-hidden bg-hcanewlightblue/65 pb-52 pt-10">
      {/* === Elipse invertida blanca === */}
      <div
        className="
          absolute bottom-0 left-1/2 -translate-x-1/2
          w-[200%] h-[350px]
          bg-white
          rounded-[50%]
          translate-y-1/2
          z-10
        "
      ></div>

      {/* Contenido principal */}
      <SectionLayout className="relative z-20 flex flex-col lg:flex-row justify-center gap-5 mx-auto p-5">
        {/* Video principal */}
        <div className="h-[400px] w-full lg:w-2/3">
          <iframe
            src={sourceSelected}
            className="h-full w-full aspect-video rounded-lg shadow-[0_0_10px_-4px_rgba(0,0,0,0.6)]"
            name="Video"
            allowFullScreen
          ></iframe>
        </div>

        {/* Lista lateral de videos */}
        <ul className="bg-hcaneworange text-white rounded-md flex flex-col gap-3 shadow-[0_0_10px_-4px_rgba(0,0,0,0.6)] lg:w-1/3">
          <li>
            <h1 className="font-semibold text-lg px-4 py-2">Conoce al proyecto Alza Tu Voz</h1>
          </li>
          <li className="max-h-[340px] overflow-y-auto">
            <section className="flex flex-col gap-1 p-2">
              {videos.map((video, index) => (
                <button
                  key={index}
                  onClick={() => handleVideoSelect(video.link)}
                  className="h-20 rounded-md flex justify-start gap-4 items-center p-2 hover:bg-white/80 bg-white/40 transition-colors duration-200"
                >
                  <Image
                    src="/logos/youtubeIcon.png"
                    alt="YouTube Icon"
                    width={70}
                    height={40}
                    className="aspect-video h-full object-contain rounded-md"
                  />
                  <p className="w-full h-full flex items-center text-white hover:text-black text-left">
                    {video.title}
                  </p>
                </button>
              ))}
            </section>
          </li>
        </ul>
      </SectionLayout>
    </section>
  );
}
