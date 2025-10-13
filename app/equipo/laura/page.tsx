import Image from 'next/image';

export default function LauraTeam() {
  return (
    <div className="container mx-auto flex justify-center my-20 px-6">
      <Image
        src="/images/equipo/Laura.png"
        alt="Laura Ostos"
        width={600}
        height={900}
        className="rounded-3xl"
      />
    </div>
  );
}
