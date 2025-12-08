'use client';

import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { getCurrentUser, signOut } from 'aws-amplify/auth';
import { list, getUrl } from 'aws-amplify/storage';
import SectionLayout from '@/src/layouts/SectionLayout';
import Image from 'next/image';
import '../../../lib/amplifyClient';

export default function AdminNuestraIniciativaPage() {
  const router = useRouter();
  const [checking, setChecking] = useState(true);
  const [userEmail, setUserEmail] = useState(null);

  // Estado del contenido
  const [formData, setFormData] = useState({
    title1: '¿Qué es Alza\n tu Voz?',
    p1: '"Alza Tu Voz" es un proyecto en el que junto a adolescentes de Quevedo y Riobamba, hacemos que sus ciudades sean más amigables, seguras y saludables.',
    p2: 'Nos enfocamos en tres aspectos clave: aprender y crecer en conjunto, participar para que nos escuchen, y cuidar nuestra salud mental y bienestar.',
    title2: 'Acerca del\n proyecto',
    p3: 'El programa Ciudades Saludables para Adolescentes (HCA) fue lanzado a nivel global entre 2018 y 2021 por Fundación Botnar, en su búsqueda de propuestas innovadoras que mejoren las ciudades y sean más amigables para l@s adolescentes.',
    p4: 'En nuestro país, el programa "Ciudades Saludables para Adolescentes" cobra vida gracias a la iniciativa "Alza Tu Voz", cuyo principal objetivo es fortalecer e involucrar activamente a adolescentes de Riobamba y Quevedo en la apropiación de sus ciudades.',
    bottomText:
      '“Alza Tu Voz” es una iniciativa liderada por LAB XXI en colaboración con aliados locales como Fundación Datalat, Huasipichanga, los GAD Municipales de Quevedo y Riobamba, y la Escuela Superior Politécnica de Chimborazo (ESPOCH). Este proyecto es el resultado de un proceso participativo en el que adolescentes comparten sus ideas, necesidades y propuestas, contribuyendo activamente al co-diseño de acciones para transformar sus ciudades.',
    bottomStrong:
      'físicos y digitales, que promuevan la inclusión y el bienestar!',
    imageSrc: '/images/Adicionales/ATV.png', // puede ser ruta local o path de bucket
  });

  // 🔐 Protección de ruta
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const user = await getCurrentUser();
        const email = user?.signInDetails?.loginId || user?.username || null;
        setUserEmail(email);
      } catch (error) {
        router.replace('/acceso-equipo-2025');
      } finally {
        setChecking(false);
      }
    };

    checkAuth();
  }, [router]);

  const handleLogout = async () => {
    try {
      await signOut();
      router.push('/');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const handleSave = () => {
    console.log('Contenido Nuestra Iniciativa (demo, aún sin backend):', formData);
    alert('(Demo) Contenido preparado en consola. Luego lo conectamos a guardado real.');
  };

  // ============ IMÁGENES DESDE BUCKET (S3) ============

  const [bucketImages, setBucketImages] = useState([]); // { path, url, size, lastModified }
  const [loadingBucket, setLoadingBucket] = useState(false);
  const [showImagePicker, setShowImagePicker] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState(null); // para preview de bucket

  const bucketLoadedRef = useRef(false);

  const fetchBucketImages = async () => {
    try {
      setLoadingBucket(true);
      const { items } = await list({
        path: '',
        options: { accessLevel: 'protected' },
      });

      // Solo las de carpeta admin/
      const soloAdmin = items.filter((it) => it.path.includes('/admin/'));

      const conUrls = await Promise.all(
        soloAdmin.map(async (it) => {
          const { url } = await getUrl({
            path: it.path,
            options: {
              accessLevel: 'protected',
              expiresIn: 3600,
            },
          });

          return {
            path: it.path,
            size: it.size,
            lastModified: it.lastModified,
            url: url.toString(),
          };
        })
      );

      conUrls.sort(
        (a, b) =>
          new Date(b.lastModified || 0) -
          new Date(a.lastModified || 0)
      );

      setBucketImages(conUrls);
      bucketLoadedRef.current = true;
    } catch (error) {
      console.error('Error al listar imágenes del bucket:', error);
      alert('No se pudieron cargar las imágenes del bucket. Revisa la consola.');
    } finally {
      setLoadingBucket(false);
    }
  };

  const openImagePicker = async () => {
    setShowImagePicker(true);
    if (!bucketLoadedRef.current) {
      await fetchBucketImages();
    }
  };

  const handleSelectBucketImage = (img) => {
    // Guardamos el PATH en el formulario (para futuro backend)
    setFormData((prev) => ({
      ...prev,
      imageSrc: img.path,
    }));
    // Y usamos la URL firmada solo para la vista previa
    setSelectedImageUrl(img.url);
    setShowImagePicker(false);
  };

  if (checking) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500 animate-pulse">Verificando acceso…</p>
      </main>
    );
  }

  // Helper para respetar saltos de línea en los títulos
  const renderTitle = (text) =>
    text.split('\n').map((line, idx, arr) => (
      <span key={idx}>
        {line}
        {idx < arr.length - 1 && <br />}
      </span>
    ));

  // Saber si la imagen actual es del bucket
  const isBucketImage = formData.imageSrc && formData.imageSrc.includes('/admin/');

  return (
    <main className="min-h-screen bg-gray-100 px-4 py-8 pt-24">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
              Editar sección: Nuestra Iniciativa
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Sesión iniciada como{' '}
              <span className="font-semibold text-gray-700">{userEmail}</span>
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => router.push('/admin')}
              className="px-4 py-2 text-sm rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
            >
              Volver al panel
            </button>
            <button
              onClick={handleLogout}
              className="px-5 py-2 rounded-full bg-red-500 text-white text-sm font-semibold hover:bg-red-600 transition shadow-sm"
            >
              Cerrar sesión
            </button>
          </div>
        </div>

        {/* Layout admin: formulario + vista previa */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Columna izquierda: formulario */}
          <div className="bg-white rounded-2xl shadow-lg p-6 space-y-5">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Contenido editable
            </h2>

            <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-1">
              {/* Título 1 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Título 1 (¿Qué es Alza tu Voz?){' '}
                  <span className="text-xs text-gray-400">
                    (puedes usar salto de línea con Enter)
                  </span>
                </label>
                <textarea
                  className="w-full border rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-hcaneworange"
                  rows={2}
                  value={formData.title1}
                  onChange={handleChange('title1')}
                />
              </div>

              {/* Párrafo 1 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Párrafo 1
                </label>
                <textarea
                  className="w-full border rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-hcaneworange"
                  rows={3}
                  value={formData.p1}
                  onChange={handleChange('p1')}
                />
              </div>

              {/* Párrafo 2 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Párrafo 2
                </label>
                <textarea
                  className="w-full border rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-hcaneworange"
                  rows={3}
                  value={formData.p2}
                  onChange={handleChange('p2')}
                />
              </div>

              {/* Título 2 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Título 2 (Acerca del proyecto){' '}
                  <span className="text-xs text-gray-400">
                    (puedes usar salto de línea con Enter)
                  </span>
                </label>
                <textarea
                  className="w-full border rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-hcaneworange"
                  rows={2}
                  value={formData.title2}
                  onChange={handleChange('title2')}
                />
              </div>

              {/* Párrafo 3 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Párrafo 3
                </label>
                <textarea
                  className="w-full border rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-hcaneworange"
                  rows={4}
                  value={formData.p3}
                  onChange={handleChange('p3')}
                />
              </div>

              {/* Párrafo 4 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Párrafo 4
                </label>
                <textarea
                  className="w-full border rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-hcaneworange"
                  rows={4}
                  value={formData.p4}
                  onChange={handleChange('p4')}
                />
              </div>

              {/* Texto inferior */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Texto inferior (párrafo largo final)
                </label>
                <textarea
                  className="w-full border rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-hcaneworange"
                  rows={5}
                  value={formData.bottomText}
                  onChange={handleChange('bottomText')}
                />
              </div>

              {/* Texto fuerte final */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Frase resaltada final (negrita)
                </label>
                <input
                  className="w-full border rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-hcaneworange"
                  value={formData.bottomStrong}
                  onChange={handleChange('bottomStrong')}
                />
              </div>

              {/* Imagen */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Imagen principal
                </label>
                <div className="flex flex-col gap-2">
                  <input
                    className="w-full border rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-hcaneworange"
                    value={formData.imageSrc}
                    onChange={handleChange('imageSrc')}
                  />
                  <p className="text-xs text-gray-400">
                    Puedes usar una ruta local (ej. /images/Adicionales/ATV.png) o un path de bucket (admin/...).
                  </p>
                  <button
                    type="button"
                    onClick={openImagePicker}
                    className="inline-flex items-center justify-center px-4 py-2 rounded-full border border-gray-300 text-xs font-medium text-gray-700 hover:bg-gray-100 transition self-start"
                  >
                    Elegir desde bucket
                  </button>
                </div>
              </div>
            </div>

            <div className="flex justify-end mt-4">
              <button
                onClick={handleSave}
                className="px-6 py-2 rounded-full bg-hcaneworange text-white text-sm font-semibold hover:bg-orange-500 transition shadow-sm"
              >
                Guardar cambios (demo)
              </button>
            </div>
          </div>

          {/* Columna derecha: vista previa */}
          <div className="bg-white rounded-2xl shadow-lg p-4 lg:p-6 overflow-y-auto max-h-[80vh]">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Vista previa
            </h2>

            <SectionLayout>
              <div className="flex flex-col lg:flex-row justify-center items-center w-full gap-10 lg:gap-20 text-justify">
                {/* Texto */}
                <div className="w-full lg:w-1/2 px-4 lg:px-0">
                  <h1 className="text-3xl sm:text-4xl text-hcaneworange font-bold mb-6">
                    {renderTitle(formData.title1)}
                  </h1>
                  <div className="text-pretty text-base sm:text-xl flex flex-col gap-y-4">
                    <p>{formData.p1}</p>
                    <p>{formData.p2}</p>
                  </div>
                  <h1 className="text-3xl sm:text-4xl text-hcaneworange font-bold my-8">
                    {renderTitle(formData.title2)}
                  </h1>
                  <div className="text-pretty text-base sm:text-xl flex flex-col gap-y-4">
                    <p>{formData.p3}</p>
                    <p>{formData.p4}</p>
                  </div>
                </div>

                {/* Imagen */}
                <div className="w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0">
                  {isBucketImage ? (
                    <img
                      src={
                        selectedImageUrl ||
                        'https://via.placeholder.com/400x435?text=Imagen+desde+bucket'
                      }
                      alt="Ilustración desde bucket"
                      className="w-full max-w-sm lg:max-w-full h-auto rounded-lg object-contain"
                    />
                  ) : (
                    <Image
                      src={formData.imageSrc || '/images/Adicionales/ATV.png'}
                      alt="Ilustración"
                      width={400}
                      height={435}
                      className="w-full max-w-sm lg:max-w-full h-auto"
                    />
                  )}
                </div>
              </div>

              <div className="text-justify text-pretty text-base sm:text-xl flex flex-col gap-y-4 mt-10">
                <p>{formData.bottomText}</p>
                <div className="w-full flex justify-center mt-4 py-10">
                  <p>
                    ¡Queremos crear espacios{' '}
                    <strong className="text-hcablack text-center">
                      {formData.bottomStrong}
                    </strong>
                    </p>
                </div>
              </div>
            </SectionLayout>
          </div>
        </div>
      </div>

      {/* MODAL SELECTOR DE IMAGEN DESDE BUCKET */}
      {showImagePicker && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-2xl shadow-xl max-w-3xl w-full max-h-[80vh] flex flex-col">
            <div className="px-5 py-4 border-b flex items-center justify-between">
              <h3 className="text-sm font-semibold text-gray-800">
                Seleccionar imagen desde bucket (carpeta admin/)
              </h3>
              <button
                onClick={() => setShowImagePicker(false)}
                className="text-xs text-gray-500 hover:text-gray-700"
              >
                Cerrar ✕
              </button>
            </div>

            <div className="p-4 overflow-y-auto flex-1">
              {loadingBucket ? (
                <p className="text-sm text-gray-500">Cargando imágenes…</p>
              ) : bucketImages.length === 0 ? (
                <p className="text-sm text-gray-500">
                  No se encontraron imágenes en admin/. Sube primero desde el módulo de imágenes.
                </p>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {bucketImages.map((img) => {
                    const name = img.path.split('/').pop();
                    return (
                      <button
                        key={img.path}
                        type="button"
                        onClick={() => handleSelectBucketImage(img)}
                        className="group border border-gray-200 rounded-xl overflow-hidden bg-gray-50 hover:border-hcaneworange hover:shadow-md transition flex flex-col"
                      >
                        <div className="w-full aspect-[4/3] bg-gray-100 overflow-hidden">
                          <img
                            src={img.url}
                            alt={name}
                            className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform"
                          />
                        </div>
                        <div className="px-2 py-2 text-left">
                          <p className="text-xs font-medium text-gray-800 truncate">
                            {name}
                          </p>
                          <p className="text-[10px] text-gray-400 truncate">
                            {(img.size / 1024).toFixed(1)} KB
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
