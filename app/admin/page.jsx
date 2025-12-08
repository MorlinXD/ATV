'use client';

import '../../lib/amplifyClient';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getCurrentUser, signOut } from 'aws-amplify/auth';

export default function AdminDashboardPage() {
  const router = useRouter();
  const [checking, setChecking] = useState(true);
  const [userEmail, setUserEmail] = useState(null);

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

  const goTo = (path) => {
    router.push(path);
  };

  if (checking) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500 animate-pulse">Verificando acceso…</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 px-4 py-8 pt-24">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        {/* Encabezado */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Panel de administración</h1>
            <p className="text-sm text-gray-500 mt-1">
              Sesión iniciada como <span className="font-semibold text-gray-700">{userEmail}</span>
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="px-5 py-2 rounded-full bg-red-500 text-white text-sm font-semibold hover:bg-red-600 transition shadow-sm"
          >
            Cerrar sesión
          </button>
        </div>

        {/* Mensaje principal */}
        <p className="text-gray-600 mb-6">
          Selecciona un módulo para gestionar el contenido del sitio.
        </p>

        {/* Grid de módulos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Blog */}
          <div
            className="border rounded-2xl p-5 bg-gradient-to-br from-indigo-50 to-white hover:shadow-md transition cursor-pointer flex flex-col justify-between"
            onClick={() => goTo('/admin/blog')}
          >
            <div>
              <h2 className="font-semibold text-lg text-gray-800 mb-1">Editar blog</h2>
              <p className="text-sm text-gray-500 mb-3">
                Crear, editar y administrar las entradas del blog.
              </p>
            </div>
            <span className="text-sm font-semibold text-indigo-600 mt-2">
              Ir a gestión del blog →
            </span>
          </div>

          {/* Resultados */}
          <div
            className="border rounded-2xl p-5 bg-gradient-to-br from-emerald-50 to-white hover:shadow-md transition cursor-pointer flex flex-col justify-between"
            onClick={() => goTo('/admin/resultados')}
          >
            <div>
              <h2 className="font-semibold text-lg text-gray-800 mb-1">
                Editar sección Resultados
              </h2>
              <p className="text-sm text-gray-500 mb-3">
                Actualizar logros, métricas e historias de impacto.
              </p>
            </div>
            <span className="text-sm font-semibold text-emerald-600 mt-2">Ir a resultados →</span>
          </div>

          {/* Riobamba */}
          <div
            className="border rounded-2xl p-5 bg-gradient-to-br from-sky-50 to-white hover:shadow-md transition cursor-pointer flex flex-col justify-between"
            onClick={() => goTo('/admin/riobamba')}
          >
            <div>
              <h2 className="font-semibold text-lg text-gray-800 mb-1">Editar página Riobamba</h2>
              <p className="text-sm text-gray-500 mb-3">
                Gestionar contenido específico de la sede Riobamba.
              </p>
            </div>
            <span className="text-sm font-semibold text-sky-600 mt-2">Ir a Riobamba →</span>
          </div>

          {/* Quevedo */}
          <div
            className="border rounded-2xl p-5 bg-gradient-to-br from-amber-50 to-white hover:shadow-md transition cursor-pointer flex flex-col justify-between"
            onClick={() => goTo('/admin/quevedo')}
          >
            <div>
              <h2 className="font-semibold text-lg text-gray-800 mb-1">Editar página Quevedo</h2>
              <p className="text-sm text-gray-500 mb-3">
                Actualizar información, actividades y recursos de Quevedo.
              </p>
            </div>
            <span className="text-sm font-semibold text-amber-600 mt-2">Ir a Quevedo →</span>
          </div>

          {/* Nuestra iniciativa */}
          <div
            className="border rounded-2xl p-5 bg-gradient-to-br from-rose-50 to-white hover:shadow-md transition cursor-pointer flex flex-col justify-between"
            onClick={() => goTo('/admin/nuestra-iniciativa')}
          >
            <div>
              <h2 className="font-semibold text-lg text-gray-800 mb-1">
                Editar Nuestra Iniciativa
              </h2>
              <p className="text-sm text-gray-500 mb-3">
                Modificar el relato, objetivos y enfoque de la iniciativa.
              </p>
            </div>
            <span className="text-sm font-semibold text-rose-600 mt-2">
              Ir a Nuestra Iniciativa →
            </span>
          </div>
          <div
            onClick={() => router.push('/admin/imagenes')}
            className="border rounded-xl p-4 cursor-pointer hover:shadow-md transition bg-white"
          >
            <h2 className="font-semibold mb-2">Gestionar imágenes</h2>
            <p className="text-sm text-gray-500">
              Sube y revisa las imágenes que se usan en la web.
            </p>
          </div>
          {/* Extra: Contenido general / estático */}
          <div
            className="border rounded-2xl p-5 bg-gradient-to-br from-slate-50 to-white hover:shadow-md transition cursor-pointer flex flex-col justify-between"
            onClick={() => goTo('/admin/secciones')}
          >
            <div>
              <h2 className="font-semibold text-lg text-gray-800 mb-1">Otras secciones</h2>
              <p className="text-sm text-gray-500 mb-3">
                Espacio para futuros módulos de edición de contenido estático.
              </p>
            </div>
            <span className="text-sm font-semibold text-slate-600 mt-2">Ver secciones →</span>
          </div>
        </div>
      </div>
    </main>
  );
}
