import Image from 'next/image'

export default function Footer () {
  return (
    <footer>
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
