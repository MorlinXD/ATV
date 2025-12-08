'use client';

import '../../lib/amplifyClient'; // asegura que Amplify.configure se ejecute
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function AdminLoginPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
        <h1 className="text-xl font-semibold text-center mb-4 text-gray-800">
          Acceso equipo <span className="text-hcanewblue">Alza Tu Voz</span>
        </h1>

        <Authenticator>
          {({ user }) => {
            useEffect(() => {
              if (user) {
                // si ya está autenticado, mandarlo al panel
                router.push('/admin');
              }
            }, [user, router]);

            return (
              <p className="text-center text-gray-500">
                Verificando sesión…
              </p>
            );
          }}
        </Authenticator>
      </div>
    </main>
  );
}
