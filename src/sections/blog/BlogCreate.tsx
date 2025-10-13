'use client';

import SectionLayout from '@/src/layouts/SectionLayout';
import React, { useState } from 'react';
import Image from 'next/image';

export default function BlogCreate() {
  return (
    <section className="bg-[#E1EBFA]">
      <SectionLayout>
        <h1 className="text-hcaneworange text-center text-4xl font-semibold my-10">
          ¡Miniblogs... cuéntanos tu experiencia!
        </h1>
        <p className="text-lg mb-10">
          Lorem ipsum dolor sit amet consectetur. Elit faucibus id etiam velit nunc ipsum sit. Quis
          malesuada sit placerat quis id nam. Cursus nibh ornare augue sed netus sagittis sit tempus
          lorem. Justo turpis egestas dis magna.
        </p>
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <BlogListCreated />
          <BlogForm />
        </section>
      </SectionLayout>
    </section>
  );
}

const blogsCreated = [
  {
    id: 1,
    title: 'Página web ATV',
    date: 'Junio 2024',
    module: 'Finanzas',
    image: '',
  },
  {
    id: 2,
    title: 'Página web ATV',
    date: 'Junio 2024',
    module: 'Finanzas',
    image: '',
  },
  {
    id: 3,
    title: 'Página web ATV',
    date: 'Junio 2024',
    module: 'Finanzas',
    image: '',
  },
  {
    id: 4,
    title: 'Página web ATV',
    date: 'Junio 2024',
    module: 'Finanzas',
    image: '',
  },
];

function BlogListCreated() {
  return (
    <ul className="flex flex-wrap gap-4 justify-center items-center">
      {blogsCreated.map((blog) => (
        <li key={blog.id} className="w-full max-w-60">
          <div className="rounded-2xl shadow-lg w-full min-h-56 flex flex-col">
            <Image
              className="bg-[#D9D9D9] rounded-t-2xl"
              src={blog.image}
              width={290}
              height={180}
              alt={blog.title}
            />
            <section className="pt-2 pb-5 px-5 h-full flex-1 flex flex-col justify-between bg-white rounded-b-2xl">
              <p className="text-hcanewblue font-semibold">{blog.title}</p>
              <section className="text-hcaneworange text-xs flex justify-between items-center">
                <p>{blog.date}</p>
                <p>{blog.module}</p>
                <button className="bg-hcaneworange w-8 h-8 text-white text-xl flex justify-center items-center rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>
              </section>
            </section>
          </div>
        </li>
      ))}
      <li className="w-full flex justify-end">
        <a className="underline text-hcadarkblue mr-12" href="">
          Ver más...
        </a>
      </li>
    </ul>
  );
}

const fields = [
  {
    id: 'name',
    label: 'Nombre/alias',
    type: 'text',
    value: '',
    placeHolder: 'Ej. Ema',
  },
  {
    id: 'age',
    label: 'Edad',
    type: 'text',
    value: '',
    placeHolder: 'Ej. 15 años',
  },
  {
    id: 'activity',
    label: 'Actividad en la que participaste',
    type: 'comboBox',
    value: '',
    placeHolder: 'Selecciona una opción',
    options: ['Opción 1', 'Opción 2', 'Opción 3'],
  },
  {
    id: 'title',
    label: 'Titulo del blog',
    type: 'text',
    value: '',
    placeHolder: 'Ej. "Un dia en Alza Tu Voz"',
  },
  {
    id: 'text',
    label: 'Texto del blog',
    type: 'textarea',
    value: '',
    placeHolder: 'Escribe tu reporte aquí',
  },
];

function BlogForm() {
  const [itemsForm, setItemsForm] = useState(fields);

  function handleChange(item: (typeof fields)[0], value: string) {
    const newItems = itemsForm.map((field) => {
      if (field.id === item.id) {
        return { ...field, value };
      }
      return field;
    });
    setItemsForm(newItems);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    let data = {};
    itemsForm.forEach((field) => {
      data = { ...data, [field.id]: field.value };
    });
    console.log({ data });
  }

  return (
    <section className="flex flex-col">
      <form onSubmit={handleSubmit} id="blogForm" className="grid grid-cols-[3fr_1fr] gap-2">
        {itemsForm.map((field, index) => {
          const isTwoColumns = index < 2;
          let input = (
            <input
              className="p-2 rounded"
              value={field.value}
              onChange={(e) => handleChange(field, e.target.value)}
              type={field.type}
              placeholder={field.placeHolder}
              required
            />
          );
          if (field.type === 'textarea') {
            input = (
              <textarea
                className="p-2 rounded"
                onChange={(e) => handleChange(field, e.target.value)}
                value={field.value}
                placeholder={field.placeHolder}
                required
              />
            );
          }
          if (field.type === 'comboBox') {
            input = (
              <select
                className="min-h-11 p-2 rounded"
                placeholder={field.placeHolder}
                onChange={(e) => handleChange(field, e.target.value)}
              >
                {field.options?.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            );
          }

          return (
            <div
              key={field.id}
              className={`flex flex-col text-lg ${isTwoColumns ? 'col-span-1' : 'col-span-2'}`}
            >
              <label className="font-semibold">{field.label}</label>
              {input}
            </div>
          );
        })}
        <div className="col-span-2 flex gap-3 mt-4">
          <input required className="h-6 w-6 min-h-6 min-w-6" type="checkbox" />
          <section>
            <h1 className="font-semibold text-sm">Disclaimer:</h1>
            <p className="text-xs leading-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio a, ratione eos
              est dolores, veniam nobis inventore dicta at iure repellendus cupiditate porro autem
              officia dolore quisquam maiores veritatis iusto.
            </p>
          </section>
        </div>
      </form>
      <button
        form="blogForm"
        className="bg-hcaneworange p-2 text-white w-full max-w-[220px] self-end mt-4 rounded-md"
        type="submit"
      >
        Enviar miniblog
      </button>
    </section>
  );
}
