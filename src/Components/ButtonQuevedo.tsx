import { type FC, type HTMLAttributeAnchorTarget } from 'react';
import Link from 'next/link';
import React from 'react';


interface Props {
  label: string;
  image?: string;
  link: string;
  target?: HTMLAttributeAnchorTarget;
}

const ButtonTwo: FC<Props> = ({ label, link, image, target }) => {
  return (
    <Link href={link} target={target}>
      <button
        className=" flex gap-4 items-center text-lg font-bold text-white py-10 px-32 bg-no-repeat bg-center relative hover:opacity-80 transition-opacity duration-300"
        style={{ backgroundImage: 'url("images/button-three.png")' }}
      >
        {label}
        <img src={image} />
      </button>
    </Link>
  );
};

export default ButtonTwo;
