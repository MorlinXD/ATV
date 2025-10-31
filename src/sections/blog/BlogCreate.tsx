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
        <p className="text-lg mb-10 text-center">
          Nos encanta saber cómo te sentiste y qué tienes para contarnos sobre las actividades en
          las que participaste. <p>Este es el espacio para que todo el mundo lea tu experiencia</p>
        </p>
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/*<BlogListCreated />*/}
          <BlogForm />
        </section>
      </SectionLayout>
    </section>
  );
}

const blogsCreated = [
  { id: 1, title: 'Página web ATV', date: 'Junio 2024', module: 'Finanzas', image: '' },
  { id: 2, title: 'Página web ATV', date: 'Junio 2024', module: 'Finanzas', image: '' },
  { id: 3, title: 'Página web ATV', date: 'Junio 2024', module: 'Finanzas', image: '' },
  { id: 4, title: 'Página web ATV', date: 'Junio 2024', module: 'Finanzas', image: '' },
];

function BlogListCreated() {
  return (
    <ul className="flex flex-wrap gap-4 justify-center items-center">
      {blogsCreated.map((blog) => (
        <li key={blog.id} className="w-full max-w-60">
          <div className="rounded-2xl shadow-lg w-full min-h-56 flex flex-col">
            <Image
              className="bg-[#D9D9D9] rounded-t-2xl"
              src={blog.image || '/images/placeholder.png'}
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
type Field = {
  id: string;
  label: string;
  type: 'text' | 'number' | 'textarea' | 'comboBox';
  value: string;
  placeHolder: string;
  options?: string[];
};

const fields: Field[] = [
  { id: 'name', label: 'Nombre/alias', type: 'text', value: '', placeHolder: 'Ej. Ema' },
  { id: 'age', label: 'Edad', type: 'number', value: '', placeHolder: 'Ej. 15' },
  {
    id: 'activity',
    label: 'Actividad en la que participaste',
    type: 'text',
    value: '',
    placeHolder: 'Escribe la actividad',
    options: ['Opción 1', 'Opción 2', 'Opción 3'],
  },
  {
    id: 'title',
    label: 'Título del blog',
    type: 'text',
    value: '',
    placeHolder: 'Ej. "Un día en Alza Tu Voz"',
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
  const [itemsForm, setItemsForm] = useState<Field[]>(fields);
  const [isSending, setIsSending] = useState(false);
  const [honeypot, setHoneypot] = useState(''); // campo oculto anti-spam
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  function handleChange(item: Field, value: string) {
    const newItems = itemsForm.map((field) => (field.id === item.id ? { ...field, value } : field));
    setItemsForm(newItems);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (honeypot) return; // anti-spam

    setIsSending(true);

    const data = Object.fromEntries(itemsForm.map((f) => [f.id, f.value]));

    try {
      const res = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setMessage({ text: '✅ Tu miniblog fue enviado correctamente', type: 'success' });
        setItemsForm(itemsForm.map((f) => ({ ...f, value: '' }))); // limpiar formulario
      } else {
        setMessage({ text: '❌ Ocurrió un error al enviar el correo', type: 'error' });
      }
    } catch (error) {
      console.error(error);
      setMessage({ text: '❌ Error de conexión al enviar el correo', type: 'error' });
    } finally {
      setIsSending(false);
      setTimeout(() => setMessage(null), 5000); // desaparecer mensaje después de 5s
    }
  }

  return (
    <section className="flex flex-col">
      {/* Mensaje de envío */}
      {message && (
        <div
          className={`p-3 mb-4 rounded text-white font-semibold ${
            message.type === 'success' ? 'bg-green-500' : 'bg-red-500'
          }`}
        >
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit} id="blogForm" className="grid grid-cols-[3fr_1fr] gap-2">
        {/* Campo oculto anti-spam */}
        <input
          type="text"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          style={{ display: 'none' }}
          tabIndex={-1}
          autoComplete="off"
        />

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
                onChange={(e) => handleChange(field, e.target.value)}
                required
              >
                <option value="">Selecciona una opción</option>
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
            <h1 className="font-semibold text-sm">Acuerdo:</h1>
            <p className="text-xs leading-3">
              Al enviar tu texto, nos das permiso para leerlo, editarlo un poquito (solo si hace
              falta) y publicarlo en este blog o en nuestras redes, siempre con tu nombre/alias como
              autora o autor. Si tienes menos de 18 años, pídele permiso a tu mamá, papá o
              representante antes de enviarlo.
            </p>
          </section>
        </div>
      </form>

      <button
        form="blogForm"
        className="bg-hcaneworange p-2 text-white w-full max-w-[220px] self-end mt-4 rounded-md flex justify-center items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        type="submit"
        disabled={isSending}
      >
        {isSending && (
          <svg
            className="animate-spin h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
          </svg>
        )}
        {isSending ? 'Enviando...' : 'Enviar miniblog'}
      </button>
    </section>
  );
}
