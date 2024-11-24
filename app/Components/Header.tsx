'use client'
import { useState } from 'react'
import Image from 'next/image'
import Navbar from './Navbar'
import Link from 'next/link'

export default function Header () {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <header className="container mx-auto">
      <div className="flex flex-wrap justify-between items-center p-4">
        <Link href="/">
          <Image
            src="/logo-hce-2.png"
            alt="Logo Healthy Cities Ecuador"
            width={200}
            height={154}
            priority
          ></Image>
        </Link>
        <div className="flex">
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center ml-2 p-2 w-10 h-10 justify-center text-sm text-hcadarkblue rounded-lg lg:hidden hover:bg-tertiary focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
            onClick={() => { setIsOpen(!isOpen) }}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeWidth={2}
                strokeLinejoin="round"
                strokeLinecap="round"
                stroke="currentColor"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        {isOpen
          ? (
            <div
              className="items-center justify-between hidden w-full lg:flex md:w-auto md:order-1"
              id="navbar-sticky"
            >
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
                <li>
                  <Navbar />
                </li>
              </ul>
            </div>
            )
          : (
            <div
              className="items-center justify-between w-full md:flex md:w-auto md:order-1"
              id="navbar-sticky"
            >
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
                <li>
                  <Navbar />
                </li>
              </ul>
            </div>
            )}
      </div>
    </header>
  )
}
