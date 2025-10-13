import React from 'react';

export default function HowWeDoitIndicatorsPrev() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 w-full px-4">
      {/* Formación y Aprendizaje */}
      <div
        className="flex flex-col p-6 rounded-lg"
        style={{ backgroundColor: '#F0F6F5' }}
      >
        <div className="flex items-center space-x-2">
          <div
            className="w-6 h-6 rounded-full"
            style={{ backgroundColor: '#C8F3ED' }}
          ></div>
          <h3 className="text-md font-bold" style={{ color: '#097063' }}>
            Formación y aprendizaje
          </h3>
        </div>
        <ul
          className="list-disc list-inside mt-4 text-sm space-y-2"
          style={{ color: '#2B3B48' }}
        >
          <li>
            <strong>Capacitación docente:</strong> Sesión &quot;Formación de
            formadores&quot; (Octubre 2024 - Diciembre 2024)
          </li>
          <li>
            <strong>Capacitación de adolescentes:</strong> &quot;Mi ciudad y
            yo&quot;, herramientas para liderar cambios. (Noviembre 2024 - Enero
            2025)
          </li>
          <li>
            <strong>Guía de educación:</strong> Desarrollo de la guía &quot;Alza
            tu voz&quot; (Enero 2025)
          </li>
          <li>
            <strong>Capacitación de adolescentes:</strong> Desarrollo de la
            herramienta de participación juvenil. (Marzo 2025)
          </li>
        </ul>
      </div>

      {/* Participación pública */}
      <div
        className="flex flex-col p-6 rounded-lg"
        style={{ backgroundColor: '#EBF6F6' }}
      >
        <div className="flex items-center space-x-2">
          <div
            className="w-6 h-6 rounded-full"
            style={{ backgroundColor: '#A4E1B3' }}
          ></div>
          <h3 className="text-md font-bold" style={{ color: '#00593B' }}>
            Participación pública
          </h3>
        </div>
        <ul
          className="list-disc list-inside mt-4 text-sm space-y-2"
          style={{ color: '#2B3B48' }}
        >
          <li>
            <strong>1. Eventos en espacio público:</strong> Festivales de
            Intervenciones Urbanas (Febrero 2025)
          </li>
          <li>
            <strong>2. Incidencia política local:</strong> (Abril 2025)
          </li>
        </ul>
      </div>

      {/* Salud mental */}
      <div
        className="flex flex-col p-6 rounded-lg"
        style={{ backgroundColor: '#F9EDF5' }}
      >
        <div className="flex items-center space-x-2">
          <div
            className="w-6 h-6 rounded-full"
            style={{ backgroundColor: '#FFCCE6' }}
          ></div>
          <h3 className="text-md font-bold" style={{ color: '#FF0084' }}>
            Salud mental
          </h3>
        </div>
        <ul
          className="list-disc list-inside mt-4 text-sm space-y-2"
          style={{ color: '#2B3B48' }}
        >
          <li>
            <strong>Campaña:</strong> &quot;Un espacio seguro para hablar de
            salud mental&quot; (Febrero 2025)
          </li>
          <li>
            <strong>Artístico y deportivo:</strong> Actividades para jóvenes
            (Marzo 2025)
          </li>
        </ul>
      </div>

      {/* Fortalecimiento digital */}
      <div
        className="flex flex-col p-6 rounded-lg"
        style={{ backgroundColor: '#F0EAF9' }}
      >
        <div className="flex items-center space-x-2">
          <div
            className="w-6 h-6 rounded-full"
            style={{ backgroundColor: '#C8B0F2' }}
          ></div>
          <h3 className="text-md font-bold" style={{ color: '#7E36C5' }}>
            Fortalecimiento digital
          </h3>
        </div>
        <ul
          className="list-disc list-inside mt-4 text-sm space-y-2"
          style={{ color: '#2B3B48' }}
        >
          <li>
            <strong>Plataforma virtual:</strong> Desarrollo de la página de
            recursos para docentes (Enero 2025)
          </li>
          <li>
            <strong>Monitoreo digital:</strong> Uso de datos para incidencia
            política. (Febrero 2025)
          </li>
        </ul>
      </div>

      {/* Herramientas para jóvenes */}
      <div
        className="flex flex-col p-6 rounded-lg"
        style={{ backgroundColor: '#E7F2F6' }}
      >
        <div className="flex items-center space-x-2">
          <div
            className="w-6 h-6 rounded-full"
            style={{ backgroundColor: '#B3D0DC' }}
          ></div>
          <h3 className="text-md font-bold" style={{ color: '#00658D' }}>
            Herramientas para jóvenes
          </h3>
        </div>
        <ul
          className="list-disc list-inside mt-4 text-sm space-y-2"
          style={{ color: '#2B3B48' }}
        >
          <li>
            <strong>Encuestas digitales:</strong> &quot;Mi ciudad y yo&quot;,
            &quot;Imaginando mi futuro&quot;. (Septiembre 2024 - Diciembre 2024)
          </li>
          <li>
            <strong>Plataforma virtual:</strong> Mapeo de necesidades en las
            comunidades. (Febrero 2025)
          </li>
        </ul>
      </div>

      {/* Dashboard de datos */}
      <div
        className="flex flex-col p-6 rounded-lg"
        style={{ backgroundColor: '#D9D9D9' }}
      >
        <div className="flex items-center space-x-2">
          <div
            className="w-6 h-6 rounded-full"
            style={{ backgroundColor: '#FFFFFF' }}
          ></div>
          <h3 className="text-md font-bold" style={{ color: '#595959' }}>
            Dashboard de datos
          </h3>
        </div>
        <ul
          className="list-disc list-inside mt-4 text-sm space-y-2"
          style={{ color: '#2B3B48' }}
        >
          <li>
            <strong>Monitoreo:</strong> Recolección y análisis de datos para
            evaluación de impacto. (Enero 2025)
          </li>
          <li>
            <strong>Visualización:</strong> Creación de tableros de control para
            la comunidad. (Marzo 2025)
          </li>
        </ul>
      </div>
    </div>
  );
}
