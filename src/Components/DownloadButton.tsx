import { type FC, type HTMLAttributeAnchorTarget } from 'react';
import Link from 'next/link';

interface Props {
  label?: string;
  image?: string;
  link: string;
  target?: HTMLAttributeAnchorTarget;
}

const DownloadButton: FC<Props> = ({ label, link, image, target }) => {
  return (
    <Link href={link} target={target}>
      <button
        className="flex gap-4 items-center text-lg font-bold text-white py-12 px-20 bg-no-repeat bg-center relative hover:opacity-80 transition-opacity duration-300"
        style={{ backgroundImage: 'url("images/download-icon.svg")' }}
      >
        {label}
        <img src={image} />
      </button>
    </Link>
  );
};

export default DownloadButton;
