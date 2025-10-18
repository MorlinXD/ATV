'use client';
import React from 'react';
import CountUp from 'react-countup';

export default function HowWeDoItResults() {
  return (
    <section className="flex flex-col justify-center items-center py-12" id="resultados">
      {/* Título */}
      <div className="flex flex-col items-center text-center mb-8">
        <h2 className="text-4xl text-hcaneworange font-bold">Nuestros principales resultados</h2>
        <p className="text-sm mt-1 text-hcablack italic">
          (Actualizado a{' '}
          {new Date().toLocaleDateString('es-EC', { year: 'numeric', month: 'long' })})
        </p>
      </div>

      {/* Estadísticas principales (primera fila) */}
      <div className="flex flex-wrap justify-center items-center gap-6 w-full max-w-6xl mb-6">
        <ResultCard
          title={391}
          subtitle="adolescentes"
          data={[
            { label: 'Ciudad:', values: ['219 Riobamba', '172 Quevedo'] },
            { label: 'Género:', values: ['179 masculino', '207 femenino', '1 personas trans','4 prefiero no decir'] },
          ]}
        />

        <ResultCard
          title={53}
          subtitle="docentes"
          data={[
            { label: 'Ciudad:', values: ['25 Quevedo', '28 Riobamba'] },
            { label: 'Género:', values: ['18 masculino', '35 femenino'] },
          ]}
        />
        <ResultCard
          title={25}
          subtitle="cuidadores"
          data={[
            { label: 'Riobamba:', values: ['femenino 23', 'masculino 2'] },
            //{ label: 'Quevedo:', values: ['femenino', 'masculino '] },
          ]}
        />
    
      </div>

      {/* Beneficiarios indirectos (segunda fila) */}
      <div className="flex justify-center w-full max-w-6xl">
        <ResultCard
          title={6360}
          subtitle="beneficiarios indirectos"
          data={[
            { label: 'Colegios XXI:', values: ['2650'] },
            { label: 'Transforma Tu Cole:', values: ['3000'] },
            { label: 'Festivales Urbanos:', values: ['710'] },
          ]}
        />
        <ResultCard
          title={1551}
          subtitle="seguidores"
          data={[
            { label: 'Instagram:', values: ['1065 followers'] },
            { label: 'TikTok:', values: ['486 followers'] },
          ]}
        />
      </div>
    </section>
  );
}

function ResultCard({
  title,
  subtitle,
  data,
}: {
  title: number;
  subtitle: string;
  data: { label: string; values: string[] }[];
}) {
  return (
    <div className="flex flex-col items-center text-center p-4 animate-fade-in">
      <h3 className="text-5xl sm:text-6xl font-bold text-hcanewblue">
        <CountUp start={0} end={title} duration={2} separator="," />
      </h3>
      <h4 className="text-xl sm:text-2xl font-semibold text-hcablack">{subtitle}</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 mt-2 text-sm text-start">
        {data.map((block, idx) => (
          <div key={idx}>
            <p className="font-semibold">{block.label}</p>
            {block.values.map((v, i) => (
              <span key={i}>
                {v}
                {i < block.values.length - 1 && <br />}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
