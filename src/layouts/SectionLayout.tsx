import React from 'react';

type Props = {
  children: React.ReactNode;
  id?: string;
  className?: string;
};

export default function SectionLayout({ children, id, className }: Props) {
  return (
    <section
      {...(id && { id })}
      className={`shadow-animation p-2 mt-0 py-10 sm:py-2 w-11/12 max-w-6xl mx-auto ${className}`}
    >
      {children}
    </section>
  );
}
