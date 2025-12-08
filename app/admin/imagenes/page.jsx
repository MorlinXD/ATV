'use client';

import '../../../lib/amplifyClient';
import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { getCurrentUser } from 'aws-amplify/auth';
import { uploadData, list, remove, getUrl } from 'aws-amplify/storage';

export default function AdminImagenesPage() {
  const router = useRouter();

  const [checking, setChecking] = useState(true);
  const [userEmail, setUserEmail] = useState(null);

  const fileInputRef = useRef(null);

  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);

  const [imagenes, setImagenes] = useState([]);
  const [loadingList, setLoadingList] = useState(false);

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

  // 📂 Listar imágenes desde S3
  const fetchImages = async () => {
    try {
      setLoadingList(true);
      setErrorMsg(null);

      const { items } = await list({
        path: '',
        options: { accessLevel: 'protected' }
      });

      // Filtrar solo admin/
      const soloAdmin = items.filter((it) => it.path.includes('/admin/'));

      const conUrls = await Promise.all(
        soloAdmin.map(async (it) => {
          const { url } = await getUrl({
            path: it.path,
            options: {
              accessLevel: 'protected',
              expiresIn: 3600
            }
          });

          return {
            path: it.path,
            size: it.size,
            lastModified: it.lastModified,
            url: url.toString()
          };
        })
      );

      conUrls.sort(
        (a, b) =>
          new Date(b.lastModified || 0) -
          new Date(a.lastModified || 0)
      );

      setImagenes(conUrls);
    } catch (error) {
      console.error("Error al listar imágenes:", error);
      setErrorMsg("No se pudieron cargar las imágenes.");
    } finally {
      setLoadingList(false);
    }
  };

  useEffect(() => {
    if (!checking) {
      fetchImages();
    }
  }, [checking]);

  // ⬆️ Subir imagen con barra de progreso
  const handleUpload = async (e) => {
    e.preventDefault();
    setErrorMsg(null);

    const f = fileInputRef.current?.files?.[0] || null;

    if (!f) {
      setErrorMsg("Primero selecciona un archivo.");
      return;
    }

    try {
      setUploading(true);
      setProgress(0);

      const key = `admin/${Date.now()}-${f.name}`;

      await uploadData({
        key,
        data: f,
        options: {
          accessLevel: "protected",
          contentType: f.type,
          onProgress: (event) => {
            const porc = Math.round((event.transferredBytes / event.totalBytes) * 100);
            setProgress(porc);
          },
        }
      }).result;

      fileInputRef.current.value = "";
      setProgress(100);

      await fetchImages();
    } catch (error) {
      console.error("Error al subir imagen:", error);
      setErrorMsg("No se pudo subir la imagen.");
    } finally {
      setUploading(false);
      setTimeout(() => setProgress(0), 800);
    }
  };

  // 🗑️ Eliminar imagen
  const handleDelete = async (path) => {
    const ok = window.confirm(`¿Eliminar la imagen "${path}"?`);
    if (!ok) return;

    try {
      await remove({
        path,
        options: { accessLevel: 'protected' }
      });

      await fetchImages();
    } catch (error) {
      console.error("Error al eliminar imagen:", error);
      setErrorMsg("No se pudo eliminar la imagen.");
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
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-md p-6 space-y-6">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <div>
            <h1 className="text-2xl font-bold">Gestión de imágenes</h1>
            {userEmail && (
              <p className="text-sm text-gray-500">
                Sesión iniciada como <span className="font-semibold">{userEmail}</span>
              </p>
            )}
          </div>

          <button
            onClick={() => router.push('/admin')}
            className="px-4 py-2 text-sm border rounded-full hover:bg-gray-100"
          >
            ← Volver al panel
          </button>
        </div>

        {/* SUBIR ARCHIVO */}
        <section className="border rounded-xl p-4 bg-gray-50">
          <h2 className="font-semibold mb-2">Subir nueva imagen</h2>

          <form onSubmit={handleUpload} className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              className="text-sm"
            />

            <button
              type="submit"
              disabled={uploading}
              className="px-4 py-2 rounded-full bg-hcanewblue text-white text-sm disabled:opacity-60"
            >
              {uploading ? "Subiendo…" : "Subir imagen"}
            </button>
          </form>

          {/* BARRA DE PROGRESO */}
          {uploading && (
            <div className="w-full mt-3">
              <p className="text-xs text-gray-600 mb-1">Subiendo… {progress}%</p>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-hcanewblue transition-all"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          )}

          {errorMsg && <p className="text-red-600 text-sm mt-3">{errorMsg}</p>}
        </section>

        {/* LISTA DE IMÁGENES */}
        <section className="border rounded-xl p-4">
          <div className="flex justify-between items-center mb-3">
            <h2 className="font-semibold">Imágenes en el bucket</h2>

            <button
              onClick={fetchImages}
              disabled={loadingList}
              className="px-3 py-1 text-xs border rounded-full hover:bg-gray-100 disabled:opacity-60"
            >
              {loadingList ? "Actualizando…" : "Actualizar lista"}
            </button>
          </div>

          {imagenes.length === 0 ? (
            <p className="text-sm text-gray-500">No hay imágenes cargadas.</p>
          ) : (
            <ul className="divide-y divide-gray-200">
              {imagenes.map((img) => {
                const fileName = img.path.split('/').pop();
                return (
                  <li key={img.path} className="flex items-center gap-4 py-3">

                    {/* MINIATURA */}
                    <div className="w-20 h-20 rounded-lg border overflow-hidden bg-gray-100">
                      <img
                        src={img.url}
                        alt={fileName}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* INFO */}
                    <div className="flex-1 min-w-0">
                      <p className="font-medium truncate">{fileName}</p>
                      <p className="text-xs text-gray-500 break-all">{img.path}</p>
                      <p className="text-xs text-gray-400">
                        {(img.size / 1024).toFixed(1)} KB
                      </p>
                    </div>

                    {/* BORRAR */}
                    <button
                      onClick={() => handleDelete(img.path)}
                      className="px-3 py-1 bg-red-500 text-white text-xs rounded-full hover:bg-red-600"
                    >
                      Eliminar
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </section>

      </div>
    </main>
  );
}
