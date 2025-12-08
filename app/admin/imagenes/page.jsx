'use client';

import '../../../lib/amplifyClient';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getCurrentUser } from 'aws-amplify/auth';
import { uploadData, list, getUrl } from 'aws-amplify/storage';

export default function AdminImagenesPage() {
  const router = useRouter();
  const [checking, setChecking] = useState(true);
  const [userEmail, setUserEmail] = useState(null);
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [images, setImages] = useState([]);
  const [loadingImages, setLoadingImages] = useState(true);
  const [error, setError] = useState(null);

  // Proteger ruta (solo logged in)
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const user = await getCurrentUser();
        const email = user?.signInDetails?.loginId || user?.username || null;
        setUserEmail(email);
      } catch (err) {
        console.error('No autenticado, redirigiendo…', err);
        router.replace('/acceso-equipo-2025');
      } finally {
        setChecking(false);
      }
    };

    checkAuth();
  }, [router]);

  // Cargar imágenes existentes del bucket
  const fetchImages = async () => {
    try {
      setLoadingImages(true);
      setError(null);

      const { items } = await list({ path: 'imagenes/' }); // carpeta lógica "imagenes/"

      const urls = await Promise.all(
        items.map(async (item) => {
          const { url } = await getUrl({ path: item.path });
          return {
            key: item.path,
            url: url.toString(),
          };
        })
      );

      setImages(urls);
    } catch (err) {
      console.error('Error al listar imágenes:', err);
      setError('No se pudieron cargar las imágenes.');
    } finally {
      setLoadingImages(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const handleFileChange = (e) => {
    setFile(e.target.files?.[0] || null);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return;

    try {
      setUploading(true);
      setError(null);

      // Guardamos en una "carpeta" lógica dentro del bucket
      const path = `imagenes/${Date.now()}-${file.name}`;

      await uploadData({
        path,
        data: file,
        options: {
          contentType: file.type || 'image/jpeg',
        },
      }).result;

      setFile(null);
      await fetchImages();
    } catch (err) {
      console.error('Error al subir imagen:', err);
      setError('Hubo un problema al subir la imagen.');
    } finally {
      setUploading(false);
    }
  };

  if (checking) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Verificando acceso…</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-8 pt-28">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-md p-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              Biblioteca de imágenes
            </h1>
            {userEmail && (
              <p className="text-sm text-gray-500">
                Sesión iniciada como{' '}
                <span className="font-semibold">{userEmail}</span>
              </p>
            )}
          </div>

          <button
            type="button"
            onClick={() => router.push('/admin')}
            className="inline-flex items-center px-4 py-2 rounded-full border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
          >
            ← Volver al panel
          </button>
        </div>

        {/* Formulario de subida */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">
            Subir nueva imagen
          </h2>
          <form
            onSubmit={handleUpload}
            className="flex flex-col md:flex-row items-start md:items-center gap-4 bg-gray-50 border border-dashed border-gray-300 rounded-xl p-4"
          >
            <div className="flex-1">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4
                           file:rounded-full file:border-0
                           file:text-sm file:font-semibold
                           file:bg-hcanewblue file:text-white
                           hover:file:bg-blue-700"
              />
              <p className="mt-2 text-xs text-gray-500">
                Formatos permitidos: JPG, PNG, WEBP. Tamaño sugerido optimizado para web.
              </p>
            </div>

            <button
              type="submit"
              disabled={!file || uploading}
              className="px-5 py-2.5 rounded-full bg-hcaneworange text-white text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-orange-500 transition"
            >
              {uploading ? 'Subiendo…' : 'Subir imagen'}
            </button>
          </form>
          {error && (
            <p className="mt-2 text-sm text-red-500">
              {error}
            </p>
          )}
        </section>

        {/* Grid de imágenes */}
        <section>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-semibold text-gray-800">
              Imágenes cargadas
            </h2>
            <button
              type="button"
              onClick={fetchImages}
              className="text-xs font-medium text-hcanewblue hover:underline"
            >
              Actualizar lista
            </button>
          </div>

          {loadingImages ? (
            <p className="text-sm text-gray-500">Cargando imágenes…</p>
          ) : images.length === 0 ? (
            <p className="text-sm text-gray-500">
              Aún no se han subido imágenes.
            </p>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {images.map((img) => (
                <div
                  key={img.key}
                  className="border rounded-xl overflow-hidden bg-gray-50"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={img.url}
                    alt={img.key}
                    className="w-full h-32 object-cover"
                  />
                  <div className="p-2">
                    <p className="text-[10px] text-gray-500 break-all">
                      {img.key}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
