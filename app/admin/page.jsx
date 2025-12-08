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
        console.error('No autenticado, redirigiendo…', error);
        router.replace('/acceso-equipo-2025');
      } finally {
        setChecking(false);
      }
    };

    checkAuth();
  }, [router]);

  const handleLogout = async () => {
    await signOut();
    router.push('/');
  };

  if (checking) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Verificando acceso…</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Panel de administración</h1>
            {userEmail && (
              <p className="text-sm text-gray-500">
                Sesión iniciada como <span className="font-semibold">{userEmail}</span>
              </p>
            )}
          </div>
          <button
            onClick={handleLogout}
            className="px-4 py-2 rounded-full bg-red-500 text-white text-sm font-semibold hover:bg-red-600 transition"
          >
            Cerrar sesión
          </button>
        </div>

        <p className="text-gray-600 mb-4">
          Aquí después podemos agregar módulos para editar el blog, resultados, secciones, etc.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="border rounded-xl p-4">
            <h2 className="font-semibold mb-2">Gestión del blog</h2>
            <p className="text-sm text-gray-500">
              (Pendiente) Crear, editar y ocultar entradas del blog.
            </p>
          </div>
          <div className="border rounded-xl p-4">
            <h2 className="font-semibold mb-2">Contenido de secciones</h2>
            <p className="text-sm text-gray-500">
              (Pendiente) Actualizar textos e imágenes de la web.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
