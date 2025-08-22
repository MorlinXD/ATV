import Image from 'next/image'
import Link from 'next/link'

export default function Footer () {
  return (
    <footer className='bg-hcanewblue text-white'>
      <div className='container mx-auto py-10 px-8 flex flex-col md:flex-row md:items-start md:justify-between gap-8'>
        {/* Logos a la izquierda */}
        <div className='flex flex-col items-center md:items-start'>
          <div className='flex items-center gap-6'>
            <Link href='/'>
              <Image
                src='/logo-hce-2.png'
                alt='Logo Healthy Cities Ecuador'
                width={200}
                height={154}
                priority
              />
            </Link>
          </div>
        </div>

        {/* Contactos a la derecha */}
        <div className='text-center md:text-right'>
          <p className='font-bold mb-3'>Contactos:</p>
          <div className='text-sm flex flex-col gap-1'>
            <div>
              <p className='font-semibold leading-[10px]'>
                Correo electrónico:
              </p>
              <p>info@lab-xxi.com</p>
            </div>
            <div>
              <p className='font-semibold leading-[10px] mt-2'>
                Contacto en Riobamba ATV:
              </p>
              <p>(+593) 0979831036</p>
            </div>
            <div>
              <p className='font-semibold leading-[10px] mt-2'>
                Contacto en Quevedo ATV:
              </p>
              <p>(+593) 0979833698</p>
            </div>
          </div>
          <div className='flex justify-end gap-1 mt-4'>
            <a
              href='https://www.tiktok.com/@alzatuvoz.ec?_t=8nwUyNPC8da&_r=1'
              target='_blank'
              rel='noreferrer'
            >
              <Image
                className='rounded-full'
                src='/logos/tiktok.svg'
                alt='TikTok'
                width={50}
                height={50}
              />
            </a>
            <a
              href='https://www.instagram.com/alzatuvoz_ec?igsh=MXJxeTFzMnFveTlqeA=='
              target='_blank'
              rel='noreferrer'
            >
              <Image
                className='rounded-full'
                src='/logos/instagram.svg'
                alt='Instagram'
                width={50}
                height={50}
              />
            </a>
          </div>
        </div>
      </div>

      {/* Texto inferior */}
      <div className='text-center px-6 py-8 text-sm md:text-base max-w-4xl mx-auto'>
        <p>
          ¿Has vivido o presenciado una situación de abuso de poder o violencia
          en el proyecto? Escríbenos tu queja a{' '}
          <a
            href='mailto:hca@lab-xxi.com'
            className='text-hcaneworange font-semibold'
          >
            hca@lab-xxi.com
          </a>{' '}
          o haz tu denuncia{' '}
          <a
            href='https://forms.gle/zeuTz3hxPBdpgMsT7'
            target='_blank'
            rel='noreferrer'
            className='text-hcaneworange font-semibold'
          >
            aquí
          </a>
          .
        </p>
        <p className='mt-4'>
          Queremos que todos puedan navegar sin barreras. Trabajamos para hacer
          el sitio accesible y fácil de usar. Si tienes dificultades o
          sugerencias, escríbenos a{' '}
          <a
            href='mailto:hca@lab-xxi.com'
            className='text-hcaneworange font-semibold'
          >
            hca@lab-xxi.com
          </a>
          . Tu experiencia nos importa.
        </p>
      </div>
    </footer>
  )
}
