'use client';

import '../../lib/amplifyClient';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getCurrentUser } from 'aws-amplify/auth';

export default function AdminLoginPage() {
  const router = useRouter();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      try {
        // Si hay usuario autenticado, lo mandamos directo al panel
        await getCurrentUser();
        router.replace('/admin');
      } catch (error) {
        // Si NO hay usuario, mostramos el login
        console.log('No autenticado, mostrando login');
        setChecking(false);
      }
    };

    checkUser();
  }, [router]);

  if (checking) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Verificando sesión…</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
        <h1 className="text-xl font-semibold text-center mb-4 text-gray-800">
          Acceso equipo <span className="text-hcanewblue">Alza Tu Voz</span>
        </h1>

        <Authenticator />
      </div>
    </main>
  );
}
