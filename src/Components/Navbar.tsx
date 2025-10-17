'use client';
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';


type SubItem = { path: string; name: string };
type NavItem = { name: string; path?: string; submenu?: SubItem[] };

const navItems: NavItem[] = [
  {
    name: 'Nuestra iniciativa',
    submenu: [
      { path: '/alza-tu-voz#que-es', name: '¿Qué es Alza Tu Voz?' },
      { path: '/como-lo-hacemos', name: '¿Cómo lo hacemos?' },
      { path: '/como-lo-hacemos#recursos', name: 'Recursos' },
    ],
  },
  {
    name: 'Resultados',
    submenu: [
      { path: '/resultados', name: 'Actividades' },
      { path: '/resultados#atv-datosPWBI', name: 'Datos' },
    ],
  },
  {
    path: '/riobamba',
    name: 'Riobamba',
  },
  {
    path: '/quevedo',
    name: 'Quevedo',
  },
  {
    path: '/blog',
    name: 'Participa',
    submenu: [
      { path: '/convocatorias', name: 'Convocatorias' },
      { path: '/blog', name: 'Blog' },
    ],
  },
];

export default function Navbar(): JSX.Element {
  const pathname = usePathname() ?? '/';
  const [isOpen, setIsOpen] = useState<boolean>(false); // controla menú móvil
  const [openSubMenu, setOpenSubMenu] = useState<number | null>(null); // submenú abierto en móvil (por índice)

  // cerrar menu móvil al navegar
  useEffect(() => {
    setIsOpen(false);
    setOpenSubMenu(null);
  }, [pathname]);

  return (
    <header className="flex justify-end items-end lg:relative lg:self-end">
      {/* lg: se usa para la version web lo que no tiene lg se usa para la version movil */}
      <div
        className="
      relative font-bold  flex items-center justify-center text-white px-6 py-3 rounded-full
      bg-white
      lg:items-end lg:justify-between lg:bg-hcanewblue
    "
      >
        {/* Logo / Título   <div className="text-lg">LOGO</div>*/}

        {/* Botón hamburguesa (visible solo en móvil) */}
        <button
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen((s) => !s)}
          className="lg:hidden text-2xl p-2 mx-auto text-hcanewblue font-bold"
          type="button"
        >
          {isOpen ? '✕' : '☰'}
        </button>

        {/* Menú escritorio */}
        <nav className="hidden lg:flex flex-row items-center gap-4 ">
          {navItems.map((item) => {
            const isActive = item.path === pathname;
            const isSubMenu = Array.isArray(item.submenu);

            return (
              <div key={item.name} className="relative group">
                {isSubMenu ? (
                  <>
                    <div
                      className={`px-4 py-2 rounded-full text-sm lg:text-base cursor-pointer duration-300 select-none ${
                        isActive ? 'bg-hcaneworange' : 'hover:bg-hcaneworange'
                      }`}
                    >
                      {item.name}
                    </div>

                    <div
                      className="
                        absolute left-0 
                        opacity-0 group-hover:opacity-100 
                        mt-2 
                        w-56 
                        bg-hcanewblue 
                        rounded-md shadow-xl 
                        z-20 
                        transition-opacity duration-300
                      "
                    >
                      {item.submenu!.map((subItem) => (
                        <Link
                          key={subItem.path}
                          href={subItem.path}
                          className="block px-4 py-2 text-sm text-white hover:bg-hcaneworange"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.path!}
                    className={`px-4 py-2 rounded-full text-sm lg:text-base duration-300 cursor-pointer ${
                      isActive ? 'bg-hcaneworange' : 'hover:bg-hcaneworange'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            );
          })}
        </nav>
      </div>

      {/* Menú móvil (panel debajo del navbar) */}
      <div
        id="mobile-menu"
        className={`lg:hidden absolute left-0 right-0 top-full z-30 transition-all  rounded-xl mx-9 ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <div className="w-full bg-hcanewblue shadow-lg rounded-xl">
          <ul className="flex flex-col ">
            {navItems.map((item, index) => {
              const isActive = item.path === pathname;
              const isSubMenu = Array.isArray(item.submenu);

              return (
                <li key={item.name} className="border-b border-white/20">
                  {isSubMenu ? (
                    <>
                      <button
                        type="button"
                        onClick={() => setOpenSubMenu((cur) => (cur === index ? null : index))}
                        aria-expanded={openSubMenu === index}
                        aria-controls={`submenu-${index}`}
                        className={`w-full text-left px-4 py-3 flex justify-between items-center p-2 rounded-xl ${
                          isActive
                            ? 'bg-hcaneworange font-bold'
                            : 'hover:bg-hcaneworange text-white'
                        }`}
                      >
                        <span>{item.name}</span>
                        <span className="ml-2">{openSubMenu === index ? '▲' : '▼'}</span>
                      </button>

                      {openSubMenu === index && (
                        <div id={`submenu-${index}`} className="pl-6 bg-hcanewblue">
                          {item.submenu!.map((subItem) => (
                            <Link
                              key={subItem.path}
                              href={subItem.path}
                              onClick={() => {
                                setIsOpen(false);
                                setOpenSubMenu(null);
                              }}
                              className="block px-2 py-2 text-sm text-white hover:bg-hcaneworange "
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.path!}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-3 p-2 ${
                        isActive ? 'bg-hcaneworange font-bold' : 'hover:bg-hcaneworange text-white'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </header>
  );
}
