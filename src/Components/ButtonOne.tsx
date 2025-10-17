import { type FC, type HTMLAttributeAnchorTarget } from 'react';
import Link from 'next/link';
import React from 'react';


interface Props {
  label: string;
  link: string;
  target?: HTMLAttributeAnchorTarget;
}

const ButtonOne: FC<Props> = ({ label, link, target }) => {
  return (
    <Link href={link} target={target}>
      <button
        className="text-lg font-bold text-white py-8 px-32 bg-no-repeat bg-center relative hover:opacity-80 transition-opacity duration-300"
        style={{ backgroundImage: 'url("images/button-one.png")' }}
      >
        {label}
      </button>
    </Link>
  );
};

export default ButtonOne;
