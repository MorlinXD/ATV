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
  }
]

export default function Navbar () {
  const pathname = (usePathname().length > 0) || '/'
  return (
  <div className='font-bold'>
    <nav className="flex flex-col md:flex-row w-full z-[100]  rounded-lg">
      {navItems.map((item) => {
        const isActive = item.path === pathname

        return (
          <Link
            key={item.path}
            className={`px-4 py-2 rounded-md text-sm lg:text-base relative no-underline duration-300 ease-in ${
              isActive ? 'text-hcalightblue' : 'text-hcadarkblue'
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
