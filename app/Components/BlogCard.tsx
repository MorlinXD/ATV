import React from 'react'
import Link from 'next/link'

interface BlogCardProps {
  image: string
  name: string
  date: string
  link: string
}

const BlogCard: React.FC<BlogCardProps> = ({ image, name, date, link }) => {
  return (
    <figure className="flex flex-col bg-white p-4 shadow-lg rounded-xl w-96 min-w-[400px]">
      <img className="py-4" src={image} alt="Blog image" />
      <h3 className='font-bold text-hcanewblue'>{name}</h3>
      <div className='flex justify-between'>
        <p className="mt-2">
          {date}
        </p>
        <Link href={link}>
          <img className="w-10 h-10" src='/images/row-icon.svg' alt="Logo" />
        </Link>
      </div>
    </figure>
  )
}

export default BlogCard
