'use client';
import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function BlogPage() {
  const [editorValue, setEditorValue] = useState('');
  const [isClient, setIsClient] = useState(false);

  const handleEditorChange = (value) => {
    setEditorValue(value);
  };
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Prevent server-side rendering issues
  }

  const modules = {
    toolbar: [
      [{ header: '1' }, { header: '2' }, { font: [] }],
      [{ align: [] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ script: 'sub' }, { script: 'super' }],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ indent: '-1' }, { indent: '+1' }],
      ['blockquote', 'code-block'],
      ['link', 'image', 'video'],
      [{ color: [] }, { background: [] }],
      ['clean'],
    ],
  };

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white shadow-lg rounded-lg p-10 mt-10">
        <h1 className="text-3xl font-semibold text-center text-hcaneworange mb-6">
          Escribe aquí tu blog
        </h1>
        <p className="text-lg font-light text-gray-700 mb-6">
          Aquí podrás escribir o pegar contenido para el blog que será enviado para su revisión y
          posterior publicación.
          <br />
          <span className="font-semibold text-red-500">
            Nota importante: Las imágenes deben ser dadas formato antes de ser agregadas. Usa el
            ícono de imágenes en la barra de herramientas.
          </span>
        </p>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Contenido del Blog:</h2>
        <ReactQuill
          value={editorValue}
          onChange={handleEditorChange}
          modules={modules}
          placeholder="Escribe aquí el contenido de tu blog..."
        />
        <div className="mt-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Vista Previa del Contenido:</h2>
          <div className="p-4 bg-gray-100 rounded-lg">
            <p className="text-gray-700">
              {editorValue ? editorValue : 'Aquí se mostrará el contenido del blog'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BlogPage;
