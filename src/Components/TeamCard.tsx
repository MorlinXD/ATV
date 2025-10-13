import React from 'react';

interface TeamCardProps {
  image: string;
  text: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ image, text }) => {
  return (
    <figure className="flex flex-col items-center justify-center bg-white p-8 shadow-lg rounded-xl m-2 flex-auto min-w-[200px]">
      <img className="py-10" src={image} alt="Logo" />
      <p className="text-center mt-2">{text}</p>
    </figure>
  );
};

export default TeamCard;
