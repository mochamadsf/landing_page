import React from 'react'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const Header = () => {

  const [scrolled, setScrolled] = useState(false);

  const changeBgHeader = () => {
    console.log(window.scrollY);
    if (window.scrollY > 20) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }
  
  useEffect(() => {
    changeBgHeader()
    return () => {
      window.addEventListener('scroll', changeBgHeader)
    };
  });
  
  return (
    <header className={`flex justify-between items-center px-40 py-6 sticky z-50 top-0 ${scrolled ? "z-50 bg-gray-50 ease-in duration-300 border-b-2" : "bg-transparent"}`}>
          <div className='sm:flex sm:justify-center'>
          <Image
              className={styles.logo} 
              src="/logo.png"
              alt="Next.js Logo"
              width={200}
              height={78} priority />
          </div>
          
          <div className='menu w-2/5 justify-around flex items-center font-nunito font-light invisible sm:visible'>
            <Link href="#" className='text-gray-800'>Home</Link>
            <Link href="/#about" className='text-gray-800' scroll={false}>About</Link>
            <Link href="#services" className='text-gray-800'>Services</Link>
            <Link href="#contact" className='text-gray-800'>Contact</Link>
            <button className='shadow-lg bg-slate-700 text-white border-0 py-2 px-6 rounded-3xl hover:bg-slate-300 hover:text-black hover:border-slate-700'>Sign In</button>
          </div>
        </header>
  )
}

export default Header