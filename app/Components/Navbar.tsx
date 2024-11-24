'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const navItems = [
  {
    name: '¿Qué es ALZA TU VOZ?',
    submenu: [
      { path: '/alza-tu-voz#que-es', name: '¿Qué es?' },
      { path: '/alza-tu-voz#como-lo-creamos', name: '¿Cómo lo creamos?' },
      { path: '/alza-tu-voz#como-nos-organizamos', name: '¿Cómo nos organizamos?' }
    ]
  },
  {
    name: '¿Cómo lo hacemos?',
    submenu: [
      { path: '/como-lo-hacemos#nuestro-enfoque', name: 'Nuestro enfoque' },
      { path: '/como-lo-hacemos#resultados', name: 'Resultados' },
      { path: '/como-lo-hacemos#herramientas', name: 'Recursos' },
      { path: '/convocatorias', name: 'Convocatorias' }
    ]
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
    path: '/blog',
    name: 'Blog'
  }
]

export default function Navbar () {
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  const pathname = usePathname() || '/'

  return (
    <div className='font-bold'>
      <nav className="flex flex-col md:flex-row w-full z-10 rounded-full p-2 md:bg-hcanewblue">
        {navItems.map((item) => {
          const isActive = item.path === pathname
          const isSubMenu = item.submenu !== undefined

          return (
            <div key={item.name} className="relative">
              {isSubMenu
                ? (
                <div className="group">
                  <p className={`px-4 py-2 md:rounded-full text-sm lg:text-base no-underline duration-300 ease-in text-white ${
                    isActive ? 'bg-hcaneworange' : 'bg-hcanewblue'
                  }`}>
                    {item.name}
                  </p>
                  <div className={`
                    md:absolute md:left-0 
                    md:opacity-0 md:group-hover:opacity-100 
                    md:mt-2 
                    w-full md:w-48 
                    bg-hcanewblue 
                    md:rounded-md md:shadow-xl 
                    z-20 
                    md:transition-opacity md:duration-300
                  `}>
                    {item.submenu.map(subItem => (
                      <Link key={subItem.path} href={subItem.path}>
                        <p className="block pl-8 md:pl-4 py-2 text-sm text-white hover:bg-hcaneworange">
                          {subItem.name}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
                  )
                : (
                <Link href={item.path}>
                  <p className={`px-4 py-2 md:rounded-full text-sm lg:text-base no-underline duration-300 ease-in text-white ${
                    isActive ? 'bg-hcaneworange' : 'bg-hcanewblue'
                  }`}>
                    {item.name}
                  </p>
                </Link>
                  )}
            </div>
          )
        })}
      </nav>
    </div>
  )
}
