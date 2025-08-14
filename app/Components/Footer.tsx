export default function Footer() {
  return (
    <footer className="bg-white text-black">
      <div className="container mx-auto py-10 px-8 flex flex-col items-center gap-6">
        {/* Logos superiores */}
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-6">
            <img src="/logos/healthy-cities.svg" alt="Healthy Cities" className="h-20" />
            <img src="/logos/logo-atv-footer.svg" alt="Alza Tu Voz" className="h-20" />
          </div>
          <p className="mt-2 text-center text-sm italic text-gray-600">
            a Fondation Botnar initiative
          </p>
        </div>

        {/* Redes sociales */}
        <div className="text-center">
          <p className="font-bold">¡Síguenos en nuestras redes sociales!</p>
          <div className="flex justify-center gap-4 mt-2">
            <a href="https://www.tiktok.com/@alzatuvoz.ec?_t=8nwUyNPC8da&_r=1" target="_blank" rel="noreferrer">
              <img src="/logos/tiktok.svg" alt="TikTok" className="h-10" />
            </a>
            <a href="https://www.instagram.com/alzatuvoz_ec?igsh=MXJxeTFzMnFveTlqeA==" target="_blank" rel="noreferrer">
              <img src="/logos/instagram.svg" alt="Instagram" className="h-10" />
            </a>
          </div>
        </div>

        {/* Contactos */}
        <div className="text-center">
          <p className="font-bold text-lg">Contactos:</p>
          <p className="font-semibold">Correo electrónico:</p>
          <p>info@lab-xxi.com</p>

          <p className="font-semibold mt-2">Contacto en Riobamba ATV:</p>
          <p>(+593) 0979831036</p>

          <p className="font-semibold mt-2">Contacto en Quevedo ATV:</p>
          <p>(+593) 0979833698</p>
        </div>
      </div>

      {/* Texto inferior */}
      <div className="text-center px-6 py-8 text-sm md:text-base max-w-4xl mx-auto">
        <p>
          ¿Has vivido o presenciado una situación de abuso de poder o violencia en el proyecto? 
          Escríbenos tu queja a{" "}
          <a href="mailto:hca@lab-xxi.com" className="text-hcaneworange font-semibold">
            hca@lab-xxi.com
          </a>{" "}
          o haz tu denuncia{" "}
          <a href="https://forms.gle/zeuTz3hxPBdpgMsT7" target="_blank" rel="noreferrer" className="text-hcaneworange font-semibold">
            aquí
          </a>.
        </p>
        <p className="mt-4">
          Queremos que todos puedan navegar sin barreras. Trabajamos para hacer el sitio accesible y fácil de usar.  
          Si tienes dificultades o sugerencias, escríbenos a{" "}
          <a href="mailto:hca@lab-xxi.com" className="text-hcaneworange font-semibold">
            hca@lab-xxi.com
          </a>. Tu experiencia nos importa.
        </p>
      </div>
    </footer>
  );
}
