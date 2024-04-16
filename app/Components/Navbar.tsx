// import { usePathname } from 'next/navigation'
// import Link from 'next/link'

// const navItems = [
//   {
//     path: '/alza-tu-voz',
//     name: '¿Qué es ALZA TU VOZ?'
//   },
//   {
//     path: '/como-lo-hacemos',
//     name: '¿Cómo lo hacemos?'
//   },
//   {
//     path: '/riobamba',
//     name: 'Riobamba'
//   },
//   {
//     path: '/quevedo',
//     name: 'Quevedo'
//   },
//   {
//     path: '/lo-que-se-viene',
//     name: 'Lo que se viene'
//   }
//   // {
//   //   path: '/convocatorias',
//   //   name: 'Convocatorias'
//   // }
// ]

// export default function Navbar () {
//   // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
//   const pathname = usePathname() || '/'
//   return (
//   <div className='font-bold'>
//     <nav className="flex flex-col md:flex-row w-full z-[100] rounded-full p-2 bg-hcanewblue">
//       {navItems.map((item) => {
//         const isActive = item.path === pathname

//         return (
//           <Link
//             key={item.path}
//             className={`px-4 py-2 rounded-full text-sm lg:text-base relative no-underline duration-300 ease-in text-white ${
//               isActive ? 'bg-hcaneworange' : 'bg-hcanewblue'
//             }`}
//             href={item.path}
//           >
//             <span>{item.name}</span>
//           </Link>
//         )
//       })}
//     </nav>
//   </div>
//   )
// }
'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const navItems = [
  // {
  //   path: '/alza-tu-voz',
  //   name: '¿Qué es ALZA TU VOZ?'
  // },
  {
    name: '¿Qué es ALZA TU VOZ?',
    submenu: [
      { path: '/alza-tu-voz#que-es', name: '¿Qué es?' },
      { path: '/alza-tu-voz#como-lo-creamos', name: '¿Cómo lo creamos?' },
      { path: '/alza-tu-voz#como-nos-organizamos', name: '¿Cómo nos organizamos?' }
    ]
  },
  // {
  //   path: '/como-lo-hacemos',
  //   name: '¿Cómo lo hacemos?'
  // },
  {
    name: '¿Cómo lo hacemos?',
    submenu: [
      { path: '/como-lo-hacemos#nuestro-enfoque', name: 'Nuestro enfoque' },
      { path: '/como-lo-hacemos#herramientas', name: 'Recursos' }
    ]
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
                  <div className="absolute left-0 opacity-0 group-hover:opacity-100 mt-2 py-2 w-48 bg-hcanewblue rounded-md shadow-xl z-20 transition-opacity duration-300">
                    {item.submenu.map(subItem => (
                      <Link key={subItem.path} href={subItem.path}>
                        <p className="block px-4 py-2 text-sm text-white hover:bg-hcaneworange">
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
