import React from 'react'

interface TeamCardProps {
  image: string
  text: string
}

const TeamCard: React.FC<TeamCardProps> = ({ image, text }) => {
  return (
    <figure className="flex flex-col justify-center items-center rounded-xl bg-white p-8 shadow-lg w-1/4">
      <img className="pt-10 w-32 h-24" src={image} alt="Logo" width={186} height={136} />
      <p className="mt-10">
        {text}
      </p>
    </figure>
  )
}

export default TeamCard
