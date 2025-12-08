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
        options: { accessLevel: 'protected' },
      });

      // Solo las de admin/
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

      conUrls.sort((a, b) => new Date(b.lastModified || 0) - new Date(a.lastModified || 0));

      setImagenes(conUrls);
    } catch (error) {
      console.error('Error al listar imágenes:', error);
      setErrorMsg('No se pudieron cargar las imágenes.');
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
      setErrorMsg('Primero selecciona un archivo.');
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
          accessLevel: 'protected',
          contentType: f.type,
          onProgress: (event) => {
            const porc = Math.round((event.transferredBytes / event.totalBytes) * 100);
            setProgress(porc);
          },
        },
      }).result;

      fileInputRef.current.value = '';
      setProgress(100);

      await fetchImages();
    } catch (error) {
      console.error('Error al subir imagen:', error);
      setErrorMsg('No se pudo subir la imagen.');
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
        options: { accessLevel: 'protected' },
      });

      await fetchImages();
    } catch (error) {
      console.error('Error al eliminar imagen:', error);
      setErrorMsg('No se pudo eliminar la imagen.');
    }
  };

  if (checking) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-slate-50">
        <p className="text-gray-500 text-sm">Verificando acceso…</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 px-4 py-10 pt-28">
      <div className="max-w-6xl mx-auto">
        {/* Encabezado superior */}
        <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Panel administrativo
            </p>
            <h1 className="mt-1 text-3xl font-bold text-slate-900 tracking-tight">
              Gestión de imágenes
            </h1>
            {userEmail && (
              <p className="mt-1 text-sm text-slate-500">
                Sesión iniciada como{' '}
                <span className="font-semibold text-slate-700">{userEmail}</span>
              </p>
            )}
          </div>

          <div className="flex items-center gap-3 self-start md:self-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 border border-emerald-100">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Sistema activo
            </span>
            <button
              onClick={() => router.push('/admin')}
              className="px-4 py-2 text-xs font-medium rounded-full border border-slate-300 text-slate-700 hover:bg-slate-50 transition"
            >
              ← Volver al panel
            </button>
          </div>
        </header>

        {/* Contenedor principal */}
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
          {/* Columna izquierda: lista de imágenes */}
          <section className="bg-white/90 backdrop-blur rounded-2xl border border-slate-100 shadow-sm p-5 md:p-6 flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-base font-semibold text-slate-900">Imágenes en el bucket</h2>
                <p className="text-xs text-slate-500 mt-1">
                  Vista general de los recursos almacenados en{' '}
                  <span className="font-mono">admin/</span>.
                </p>
              </div>
              <button
                onClick={fetchImages}
                disabled={loadingList}
                className="px-3 py-1.5 text-xs font-medium rounded-full border border-slate-300 text-slate-700 hover:bg-slate-50 disabled:opacity-60"
              >
                {loadingList ? 'Actualizando…' : 'Actualizar'}
              </button>
            </div>

            <div className="mt-2 border-t border-slate-100 pt-3 flex-1 min-h-[120px]">
              {imagenes.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center text-sm text-slate-400 py-6">
                  <div className="w-10 h-10 rounded-full border border-dashed border-slate-300 flex items-center justify-center mb-3">
                    <span className="text-lg">📁</span>
                  </div>
                  <p>No hay imágenes cargadas todavía.</p>
                  <p className="text-xs mt-1">
                    Sube tu primera imagen desde el panel de la derecha.
                  </p>
                </div>
              ) : (
                <ul className="divide-y divide-slate-100">
                  {imagenes.map((img) => {
                    const fileName = img.path.split('/').pop();
                    const fecha = img.lastModified && new Date(img.lastModified).toLocaleString();
                    return (
                      <li key={img.path} className="flex items-center gap-4 py-3 group">
                        {/* Miniatura */}
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl border border-slate-100 overflow-hidden bg-slate-50 flex-shrink-0 shadow-[0_0_0_1px_rgba(15,23,42,0.02)] group-hover:shadow-md transition-shadow">
                          <img
                            src={img.url}
                            alt={fileName}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Info */}
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-slate-900 truncate">{fileName}</p>
                          <p className="text-[11px] text-slate-500 break-all">{img.path}</p>
                          <div className="mt-1 flex flex-wrap items-center gap-2 text-[11px] text-slate-400">
                            <span>{(img.size / 1024).toFixed(1)} KB</span>
                            {fecha && (
                              <>
                                <span className="h-1 w-1 rounded-full bg-slate-300" />
                                <span>{fecha}</span>
                              </>
                            )}
                          </div>
                        </div>

                        {/* Borrar */}
                        <div className="flex flex-col items-end gap-1">
                          <button
                            onClick={() => handleDelete(img.path)}
                            className="px-3 py-1 text-[11px] font-medium rounded-full bg-red-500 text-white hover:bg-red-600 transition shadow-sm"
                          >
                            Eliminar
                          </button>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          </section>

          {/* Columna derecha: subida / detalles */}
          <section className="space-y-4">
            {/* Card de subida */}
            <div className="bg-white/90 backdrop-blur rounded-2xl border border-slate-100 shadow-sm p-5 md:p-6">
              <h2 className="text-base font-semibold text-slate-900">Subir nueva imagen</h2>
              <p className="text-xs text-slate-500 mt-1">
                Los archivos se almacenan con nivel de acceso{' '}
                <span className="font-semibold text-slate-700">protected</span>.
              </p>

              <form onSubmit={handleUpload} className="mt-4 space-y-3">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-medium text-slate-600">Archivo de imagen</label>
                  <div className="flex items-center gap-3">
                    <input
                      type="file"
                      accept="image/*"
                      ref={fileInputRef}
                      className="text-xs file:mr-3 file:py-1.5 file:px-3 file:rounded-full file:border-0 file:bg-slate-100 file:text-xs file:font-medium file:text-slate-700 hover:file:bg-slate-200 cursor-pointer"
                    />
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Formatos recomendados: JPG, PNG, WEBP. Tamaños moderados para mejor rendimiento.
                  </p>
                </div>

                <div className="pt-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <button
                    type="submit"
                    disabled={uploading}
                    className="inline-flex items-center justify-center px-4 py-2.5 rounded-full bg-hcanewblue text-white text-xs font-semibold shadow-sm hover:brightness-110 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {uploading ? 'Subiendo…' : 'Subir imagen'}
                  </button>

                  {errorMsg && <p className="text-[11px] text-red-600 flex-1">{errorMsg}</p>}
                </div>
              </form>

              {/* Barra de progreso */}
              {uploading && (
                <div className="mt-4">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-[11px] text-slate-500">Subiendo archivo…</p>
                    <p className="text-[11px] text-slate-500 font-medium">{progress}%</p>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                    <div
                      className="h-full bg-hcanewblue transition-all duration-150"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Card informativa / ayuda */}
            <div className="bg-slate-900 text-slate-50 rounded-2xl shadow-md p-5 md:p-6">
              <h3 className="text-sm font-semibold flex items-center gap-2">
                Buenas prácticas de contenido
              </h3>
              <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                Mantén una nomenclatura clara para los archivos, evita nombres genéricos como{' '}
                <span className="font-mono text-[11px] bg-slate-800 px-1.5 py-0.5 rounded">
                  image(1).png
                </span>{' '}
                y utiliza estructuras más descriptivas, por ejemplo{' '}
                <span className="font-mono text-[11px] bg-slate-800 px-1.5 py-0.5 rounded">
                  hero-home-enero-2025.png
                </span>
                .
              </p>
              <p className="mt-3 text-[11px] text-slate-400">
                Este módulo está pensado para uso interno del equipo. Revisa periódicamente y
                elimina recursos que ya no se utilicen para mantener el bucket ordenado.
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
