import Image from 'next/image'

export default function Header () {
  return (
    <header className='px-8 py-4 w-full bg-white'>
        <Image
          src="/images/logo-hce.png"
          alt="Logo Healthy Cities Ecuador"
          width={160}
          height={122}
          priority
        />
    </header>
  )
}
