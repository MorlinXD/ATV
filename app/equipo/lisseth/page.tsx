import Image from 'next/image';

export default function LissethTeam() {
  return (
    <div className="container mx-auto flex justify-center my-20 px-6">
      <Image
        src="/images/equipo/Lisseth.png"
        alt="Lisseth Tixi"
        width={600}
        height={900}
        className="rounded-3xl"
      />
    </div>
  );
}
