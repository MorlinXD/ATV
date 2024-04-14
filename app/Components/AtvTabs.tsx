'use client'
import React, { useState } from 'react'

interface Tab {
  name: string
  content: string
}

const tabs: Tab[] = [
  {
    name: 'Diagnóstico participativo',
    content: 'Llevamos a cabo un diagnóstico participativo en el que identificamos las prioridades y necesidades de los y las adolescentes y jóvenes.Para ello, colaboramos estrechamente con adolescentes, gobiernos locales y la sociedad civil para comprender los desafíos que impactan en su bienestar. Entre las acciones que implementamos se incluyeron telares comunitarios, encuestas realizadas a través de WhatsApp, grupos focales, mapas parlantes, mapas mosaicos y numerosos espacios de encuentro, discusión y creación.'
  },
  {
    name: 'Jornadas de priorización',
    content: 'Validamos los resultados obtenidos para priorizar de forma conjunta las áreas de cambio que el programa abordaría. Organizamos laboratorios cívicos en Quevedo y Riobamba con la participación de representantes del Grupo Núcleo, el Consorcio y la sociedad civil. Durante estos encuentros, llegamos a acuerdos sobre los objetivos a largo plazo y construimos de manera colaborativa la teoría de cambio del programa.'
  },
  {
    name: 'Co-diseño del proyecto Alza Tu Voz',
    content: 'Promovimos la participación activa de todos los actores en la co-creación del proyecto "Alza Tu Voz". La idea es que aseguremos un compromiso mutuo y una visión completa del programa para los próximos dos años y medio.'
  }
]

const AtvTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(tabs[0].name)

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
            onClick={() => { setActiveTab(tab.name) }}
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
  )
}

export default AtvTabs
