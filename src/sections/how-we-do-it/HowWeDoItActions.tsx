import React from 'react';

export default function HowWeDoItActions() {
  return (
    <section className="bg-hcablue-light" id="atv-datos" style={{ backgroundColor: '#EDF5FD' }}>
      <div
        className="container mx-auto flex flex-col justify-center items-center py-5
      "
      >
        <div className="flex flex-col items-center text-center">
          <h2 className="text-4xl mt-4 font-bold text-hcaneworange">Nuestras acciones</h2>
          <p className="text-sm mt-1 text-hca-gray italic">Actualizadas hasta Agosto 2025</p>
        </div>

        <div className="mt-8 w-full flex justify-center">
          {/* Contenedor del gráfico Genially */}
          <div className="w-full lg:w-11/12">
            <div
              style={{
                position: 'relative',
                paddingBottom: '56.25%',
                height: 0,
              }}
            >
              <iframe
                title="Actualización Línea de Tiempo"
                frameBorder="0"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                }}
                src="https://view.genially.com/68a33d550963d2cda6841166"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
