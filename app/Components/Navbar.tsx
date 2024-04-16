import { usePathname } from 'next/navigation'
import Link from 'next/link'

const navItems = [
  {
    path: '/alza-tu-voz',
    name: '¿Qué es ALZA TU VOZ?'
  },
  {
    path: '/como-lo-hacemos',
    name: '¿Cómo lo hacemos?'
  },
  {
    path: '/riobamba',
    name: 'Riobamba'
  },
  {
    path: '/quevedo',
    name: 'Quevedo'
  },
  {
    path: '/lo-que-se-viene',
    name: 'Lo que se viene'
  }
  // {
  //   path: '/convocatorias',
  //   name: 'Convocatorias'
  // }
]

export default function Navbar () {
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  const pathname = usePathname() || '/'
  return (
  <div className='font-bold'>
    <nav className="flex flex-col md:flex-row w-full z-[100] rounded-full p-2 bg-hcanewblue">
      {navItems.map((item) => {
        const isActive = item.path === pathname

        return (
          <Link
            key={item.path}
            className={`px-4 py-2 rounded-full text-sm lg:text-base relative no-underline duration-300 ease-in text-white ${
              isActive ? 'bg-hcaneworange' : 'bg-hcanewblue'
            }`}
            href={item.path}
          >
            <span>{item.name}</span>
          </Link>
        )
      })}
    </nav>
  </div>
  )
}
