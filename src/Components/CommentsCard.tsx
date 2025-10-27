import React from 'react';

interface CommentsCardProps {
  image: string;
  name: string;
  text: string;
}

const CommentsCard: React.FC<CommentsCardProps> = ({ image, name, text }) => {
  return (
    <figure className="flex flex-col items-center justify-center bg-hcasilver p-4 shadow-lg rounded-xl m-2 flex-auto min-w-[200px]">
      <img className="py-6" src={image} alt="Logo" />
      <h3 className="font-bold">{name}</h3>
      <p className="text-center mt-2 px-4">{text}</p>
    </figure>
  );
};

export default CommentsCard;
