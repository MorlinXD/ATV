import React from 'react';
import Link from 'next/link';

interface BlogCardProps {
  image: string;
  name: string;
  date: string;
  link: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ image, name, date, link }) => {
  return (
    <Link href={link}>
      <figure className="flex flex-col bg-white p-4 shadow-lg rounded-xl w-96 min-w-[400px] cursor-pointer">
        <img className="py-4" src={image} alt="Blog image" />
        <h3 className="font-bold text-hcanewblue">{name}</h3>
        <div className="flex justify-between">
          <p className="mt-2">{date}</p>
          <img className="w-10 h-10" src="/images/row-icon.svg" alt="Logo" />
        </div>
      </figure>
    </Link>
  );
};

export default BlogCard;
