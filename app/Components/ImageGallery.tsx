import { type FC } from 'react'
import Image from 'next/image'

interface ImageGalleryProps {
  galleries: Array<{
    src: string
    alt?: string
    width: number
    height: number
  }>
}

const ImageGallery: FC<ImageGalleryProps> = ({ galleries }) => {
  return (
    <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {galleries.map((gallery, index) => (
        <div key={index} className='relative w-full pb-[75%]'>
          <Image
            src={gallery.src}
            alt={gallery.alt ?? 'Imagen de galería'}
            width={gallery.width}
            height={gallery.height}
            // fill={true}
            style={{ objectFit: 'cover' }}
            // objectFit='cover'
            className='absolute top-0 left-0 w-full h-full rounded-md'
          />
        </div>
      ))}
    </div>
  )
}

export default ImageGallery
