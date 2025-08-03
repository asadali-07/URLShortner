"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='h-16 px-3 bg-purple-700 text-white flex flex-row justify-between items-center'>
      <div className='flex flex-row justify-center items-center gap-2'>
        <Link href={"/"}>
          <Image height={48} width={48} src='/links.webp' alt='Logo' />
        </Link>
      <div className='font-semibold text-2xl'>BitLinks</div>
      </div>
      <ul className='hidden md:flex flex-row gap-3 items-center'>
        <Link href={"/"}><li>Home</li></Link>
        <Link href={"/about"}><li>About</li></Link>
        <Link href={"/shorten"}><li>Shorten</li></Link>
        <Link href={"/contact"}><li>Contact Us</li></Link>
        <li className='flex flex-row gap-3'>
          <Link href={"/shorten"}>
            Try Now
          </Link>
          <Link href={"https://github.com/asadali-07/URLShortner"} target='_blank'>
            GitHub
          </Link>
        </li>
      </ul>
      <div className='md:hidden'>
        <button onClick={toggleMenu} className='text-white'>
          <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7'></path>
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <div className='absolute top-16 left-0 w-full bg-purple-200 backdrop-blur blur-0 text-white flex flex-col items-start p-3 md:hidden'>
          <Link href={"/"}><div className='py-2'>Home</div></Link>
          <Link href={"/about"}><div className='py-2'>About</div></Link>
          <Link href={"/shorten"}><div className='py-2'>Shorten</div></Link>
          <Link href={"/contact"}><div className='py-2'>Contact Us</div></Link>
          <div className='flex flex-col gap-3 mt-3'>
            <Link href={"/shorten"}>
              <button className='bg-purple-500 rounded-lg font-semibold px-3 py-1'>Try Now</button>
            </Link>
            <Link href={"/github"} target='_blank'>
              <button className='bg-purple-500 rounded-lg font-semibold px-3 py-1'>GitHub</button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
