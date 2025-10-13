import Image from 'next/image';

export default function TatianaTeam() {
  return (
    <div className="container mx-auto flex justify-center my-20 px-6">
      <Image
        src="/images/equipo/Tatiana.png"
        alt="Tatiana Gavilanes"
        width={600}
        height={900}
        className="rounded-3xl"
      />
    </div>
  );
}
