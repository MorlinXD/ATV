import Image from 'next/image'

export default function Footer () {
  return (
    <footer>

    <div className="relative flex justify-center bg-cover bg-center lg:h-80 pt-20" style={{ backgroundImage: 'url("/images/art-footer.png")' }}>
      <div className="flex flex-col items-center justify-center p-4 space-y-4 lg:space-y-0">
        <img src="/HCA-bn.svg" alt="Logo HCA" className="w-24 sm:w-40 h-auto lg:my-6" />
        <div className="flex flex-col items-center md:flex-row space-y-2 md:space-y-0 md:space-x-8 text-hcadarkblue">
          <a href="#" className=" hover:underline">Política de privacidad</a>
          <a href="#" className=" hover:underline">Política de cookies</a>
          <a href="#" className=" hover:underline">¿Tienes dudas o sugerencias? ¡Escríbenos!</a>
        </div>
      </div>
    </div>
    <Image
      src="/images/footer-logos.png"
      alt="Logos de socios del programa Healthy Cities Ecuador"
      width={1440}
      height={167}
      priority
    />
    </footer>
  )
}
