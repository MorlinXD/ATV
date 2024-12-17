export default function Footer () {
  return (
    <footer>
      <div className="container mx-auto py-10 px-8 flex justify-center">
        <div className="flex flex-col md:flex-row items-center space-x-8 gap-8">
          <div className="md:border-r-2 md:border-r-hcalightblue md:pr-10">
            <a href="https://lab-xxi.com" target="_blank" rel='noreferrer'>
              <img src="/logos/labxxi-logo.svg" alt="LabXXI" className="h-16"/>
            </a>
          </div>
          <a href="https://datalat.org" target="_blank" rel='noreferrer'>
            <img src="/logos/datalat-logo.svg" alt="Datalat" className="h-8"/>
          </a>
          <a href="https://www.espoch.edu.ec/" target="_blank" rel='noreferrer'>
            <img src="/logos/espoch-logo.svg" alt="Espoch" className="h-8"/>
          </a>
          <a href="https://www.huasipichanga.com/" target="_blank" rel='noreferrer'>
            <img src="/logos/huasipichanga-logo.svg" alt="Espoch" className="h-8"/>
          </a>
          <a href="https://quevedo.gob.ec/" target="_blank" rel='noreferrer'>
            <img src="/logos/gadquevedo-logo.svg" alt="Alcaldía de Quevedo" className="h-8"/>
          </a>
          <a href="https://www.gadmriobamba.gob.ec/" target="_blank" rel='noreferrer'>
            <img src="/logos/gadriobamba-logo.svg" alt="Alcaldía de Riobamba" className="h-8"/>
          </a>
        </div>
      </div>
      <div className="bg-hcanewblue text-white py-4">
        <div className="container mx-auto px-8 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src="/logos/logo-atv-footer.svg" alt="Alza Tu Voz" className="md:h-20"/>
          </div>
          <div className="text-right">
            <p className='text-lg font-bold mb-4'>Contactos</p>
            <p className='font-semibold'>Correo electrónico:</p>
            <a href="mailto:hca@lab-xxi.com ">
              <span>hca@lab-xxi.com </span>
            </a>
            <p className='font-semibold'>Contacto en Riobamba ATV:</p>
            <a href="tel:+593997053105">
              <span>(+593) 0997053105</span>
            </a>
            <p className='font-semibold'>Contacto en Quevedo ATV:</p>
            <a href="tel:+593999339595">
              <span>(+593) 0999339595</span>
            </a>
            <div className="flex justify-end space-x-2 mt-4">
              <a href="https://www.tiktok.com/@alzatuvoz.ec?_t=8nwUyNPC8da&_r=1" target="_blank" rel='noreferrer'>
                <img src="/logos/tiktok.svg" alt="Espoch" className="h-12"/>
              </a>
              <a href="https://www.instagram.com/alzatuvoz_ec?igsh=MXJxeTFzMnFveTlqeA==" target="_blank" rel='noreferrer'>
                <img src="/logos/instagram.svg" alt="Espoch" className="h-12"/>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-hcanewblue text-white text-lg lg:text-xl py-4 text-center">
        <div className="container mx-auto px-8 flex flex-col justify-center items-center">
          <p>
            ¿Has vivido o presenciado una situación de abuso de poder o violencia en el proyecto?
          </p>
          <p>
            Escríbenos tu queja a
            <a href="mailto:hca@lab-xxi.com "><span className="font-semibold text-hcaneworange"> hca@lab-xxi.com </span></a>
            o haz tu denuncia <a href="https://forms.gle/zeuTz3hxPBdpgMsT7" target="_blank" rel='noreferrer'><span className="font-semibold text-hcaneworange">aquí</span></a>.
          </p>
          <p>¡Gracias por contribuir a mantener un espacio seguro!</p>
        </div>
      </div>
    </footer>
  )
}
