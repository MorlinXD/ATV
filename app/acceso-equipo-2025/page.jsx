'use client';

import '../../lib/amplifyClient';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn, getCurrentUser } from 'aws-amplify/auth';

export default function AccesoEquipoPage() {
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);
  const [checkingSession, setCheckingSession] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await getCurrentUser();
        router.replace('/admin');
      } catch {
        console.log('No hay sesión, mostrando login…');
      } finally {
        setCheckingSession(false);
      }
    };

    checkAuth();
  }, [router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg(null);
    setLoading(true);

    try {
      await signIn({ username, password });
      router.push('/admin');
    } catch (error) {
      console.error('Error al iniciar sesión', error);

      let message = 'No se pudo iniciar sesión. Inténtalo de nuevo.';
      if (error && error.name === 'UserNotFoundException') {
        message = 'El usuario no existe.';
      } else if (error && error.name === 'NotAuthorizedException') {
        message = 'Usuario o contraseña incorrectos.';
      }

      setErrorMsg(message);
    } finally {
      setLoading(false);
    }
  };

  if (checkingSession) {
    return (
      <main className="min-h-[60vh] flex items-center justify-center px-4">
        <p className="text-gray-500">Verificando sesión…</p>
      </main>
    );
  }

  return (
    <main className="min-h-[60vh] flex items-center justify-center px-4 py-12 bg-gradient-to-b from-sky-50 to-slate-100">
      <div className="w-full max-w-4xl mx-auto">
        <div className="grid gap-8 md:grid-cols-[1.1fr,1fr] items-stretch">
          <section className="hidden md:flex flex-col justify-center rounded-3xl bg-white/70 border border-sky-100 shadow-sm px-8 py-10">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-sky-500 mb-3">
              Acceso interno
            </p>
            <h1 className="text-3xl font-bold text-slate-900 mb-3 leading-tight">
              Panel del equipo <span className="text-sky-600">Alza Tu Voz</span>
            </h1>
            <p className="text-sm text-slate-600 mb-4">
              Este espacio es exclusivo para el equipo de la iniciativa. Desde aquí podrán
              administrar contenidos, revisar resultados y mantener la plataforma actualizada.
            </p>
            <ul className="mt-2 space-y-2 text-sm text-slate-600">
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Autenticación segura con AWS Cognito.
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Acceso solo con credenciales institucionales.
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Próximamente: gestión de blog y secciones del sitio.
              </li>
            </ul>
          </section>

          <section className="bg-white rounded-3xl shadow-xl shadow-sky-100/70 border border-sky-100 px-6 py-8 sm:px-8">
            <header className="mb-6 text-center md:text-left">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-sky-500 mb-2">
                Inicia sesión
              </p>
              <h2 className="text-xl font-semibold text-slate-900">Acceso al panel interno</h2>
              <p className="text-xs text-slate-500 mt-1">
                Usa tu correo institucional y la contraseña asignada por el equipo técnico.
              </p>
            </header>

            {errorMsg && (
              <div className="mb-4 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 flex items-start gap-2">
                <span className="mt-[3px] h-2 w-2 rounded-full bg-red-500" />
                <span>{errorMsg}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Usuario (correo institucional)
                </label>
                <input
                  type="email"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50/60 px-3.5 py-2.5 text-sm text-slate-800 outline-none transition focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                  placeholder="nombre@datalat.org"
                  autoComplete="username"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Contraseña
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50/60 px-3.5 py-2.5 text-sm text-slate-800 outline-none transition focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                  placeholder="********"
                  autoComplete="current-password"
                />
              </div>

              <div className="flex items-center justify-between pt-1">
                <p className="text-[11px] text-slate-500">
                  Si tienes problemas para ingresar, contacta al equipo técnico.
                </p>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-2 w-full inline-flex items-center justify-center gap-2 rounded-full bg-sky-600 text-white py-2.5 text-sm font-semibold shadow-lg shadow-sky-300/40 hover:bg-sky-700 active:bg-sky-800 disabled:opacity-60 disabled:cursor-not-allowed transition"
              >
                {loading ? (
                  <>
                    <span className="h-4 w-4 rounded-full border-2 border-white border-b-transparent animate-spin" />
                    Verificando credenciales…
                  </>
                ) : (
                  'Ingresar al panel'
                )}
              </button>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}
