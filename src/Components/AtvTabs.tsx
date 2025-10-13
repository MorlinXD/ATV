'use client';
import React, { useState } from 'react';

interface Tab {
  name: string;
  content: string;
}

const tabs: Tab[] = [
  {
    name: 'Diagnóstico participativo',
    content: `
      Colaboramos con
      adolescentes, gobiernos
      locales y sociedad civil para
      identificar sus desafíos y
      prioridades. Lo hicimos a
      través de actividades
      creativas como telares
      comunitarios, encuestas por
      WhatsApp, grupos focales,
      mapas parlantes y espacios
      de discusión y creación.
    `,
  },
  {
    name: 'Jornadas de priorización',
    content: `
      Validamos resultados y
      priorizamos de manera
      conjunta las áreas más
      importantes a abordar. En
      laboratorios cívicos con los
      Grupos Núcleo, el Consorcio
      y la sociedad civil,
      construimos una visión
      común para el futuro.
    `,
  },
  {
    name: 'Co-diseño del proyecto',
    content: `
      Involucramos a todos los
      actores en la co-creación del
      proyecto para asegurar un
      compromiso mutuo y una
      visión clara para los
      próximos dos años y medio.
    `,
  },
];

const AtvTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(tabs[0].name);

  return (
    <div className="flex flex-col">
      {/* Tabs Header */}
      <div className="flex space-x-1 p-3 rounded-t-md">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            className={`flex-1 py-2 px-4 md:text-xl font-medium leading-5 text-hcanewblue rounded-md focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60 ${
              activeTab === tab.name
                ? 'bg-white shadow'
                : 'text-white hover:bg-white/[0.12] hover:text-white'
            }`}
            onClick={() => {
              setActiveTab(tab.name);
            }}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-5 bg-white rounded-b-md shadow md:text-2xl">
        {tabs.find((tab) => tab.name === activeTab)?.content}
      </div>
    </div>
  );
};

export default AtvTabs;
