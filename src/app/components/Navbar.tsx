'use client';

/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
// import Sidbar from './sidbar';

const routes = [
  // {
  //   name: 'Home',
  // },
  {
    name: 'About',
  },
  
]

const Navbar = () => {
  const [lang, setLang] = useState('en')

  return (
    <div className={`  flex items-center   py-3  px-5 xl:px-0  justify-between font-Lora   text-xl container mx-auto max-w-6xl border-b border-slate-300  `}>
        <div className="flex items-center  gap-2 ">
          <img src="./logo.png" alt="Logo" className='w-9 cursor-pointer ' onClick={() => {
            window.location.href = "./" }} />
            {/* <h1 className='text-[#1f8598] flex text-2xl'>Saa<h1 className='text-[#ed8972]'>ed</h1></h1> */}
        </div>

        <ul className='md:flex justify-center items-center font-semibold gap-10 hidden '>
        {
          routes.map((route, index) => (
            <li key={index} className='cursor-pointer hover:text-[#1f8598] hover:border-b-2 border-[#1f8598] transition duration-300 '>{route.name}</li>
          ))
        }
         { lang === 'en' ?
          <img src="./ar.png" alt='Language' className='w-8 cursor-pointer'
          onClick={() => setLang('ar')} />
          
          :
          <img src="./en.png" alt='Language' className='w-8 cursor-pointer'
          onClick={() => setLang('en')}
           />
          }
           {/* <button 
          className='bg-black text-white px-4 py-1 rounded-full hover:bg-slate-300 hover:text-black transition duration-300'
          >Contact us</button> */}
        </ul>
        <div className='md:hidden'>
          {/* <Sidbar  /> */}
        </div>



    </div>
  )
}

export default Navbar