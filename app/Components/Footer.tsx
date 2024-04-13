import Image from 'next/image'

export default function Footer () {
  return (
    <footer>

    <div className="relative flex justify-center bg-cover bg-center lg:h-80 pt-16" style={{ backgroundImage: 'url("/art-footer.png")' }}>
      <div className="flex flex-col items-center justify-center p-4 mb-12 md:mb-16 space-y-4 lg:space-y-0">
        <img src="/HCA-bn.svg" alt="Logo HCA" className="w-24 sm:w-40 h-auto lg:my-6" />
        <div className="flex flex-col items-center md:flex-row space-y-2 md:space-y-0 md:space-x-8 text-hcadarkblue">
          <a href="/politica-privacidad" className=" hover:underline">Política de privacidad</a>
          {/* <a href="#" className=" hover:underline">Política de cookies</a> */}
          <a href="mailto:info@lab-xxi.com" className=" hover:underline">¿Tienes dudas o sugerencias? ¡Escríbenos!</a>
        </div>
      </div>
    </div>
    <div className='container mx-auto'>
      <Image
        src="/footer-img.png"
        alt="Logos de socios del programa Healthy Cities Ecuador"
        width={1920}
        height={379}
        priority
      />
    </div>
    </footer>
  )
}
