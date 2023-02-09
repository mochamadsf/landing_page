import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <section id='about' className='flex justify-around items-center py-44 mb-40 w-4/5 m-auto after:bg-aboutImage after:absolute after:left-20 after:top-95p after:bg-no-repeat after:bg-cover after:w-2/4 after:h-80p after:-z-10'>
        <Image 
          src="/about_1.png.webp"
          alt="about"
          width={650}
          height={600}
          priority='lazy'
        />
        <div className='ml-20'>
          <span className='bg-transparent border-2 border-slate-300 text-slate-600 py-2 px-6 rounded-3xl'>About</span>
          <div className='mt-6 whitespace-pre-wrap'>
            <h1 className='text-slate-800 font-semibold text-4xl mt-1 mb-4'>Why Our Agency?</h1>
            <p className='text-slate-500 text-sm pb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi doloribus vero, quibusdam animi magnam, non accusantium dignissimos consequatur</p>
            <p className='text-slate-500 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ipsum quisquam natus blanditiis earum error, ullam reiciendis expedita, numquam velit modi veniam dicta in a, optio voluptatibus consectetur pariatur sapiente.</p>
            <ul className='list-decimal ml-4 mt-2 text-slate-500 text-sm'>
              <li>Terpercaya</li>
              <li>Amanah</li>
              <li>Jujur</li>
              <li>Naon deui?</li>
            </ul>
            <button type="button" data-mdb-ripple="true" data-mdb-ripple-color="light" className="mt-6 inline-block px-6 py-2.5 bg-slate-700 text-white font-medium text-xs leading-tight uppercase rounded-3xl shadow-md hover:bg-slate-300 hover:text-black hover:shadow-lg focus:bg-slate-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-700 active:shadow-lg transition duration-150 ease-in-out">More</button>
          </div>
        </div>
      </section>
  )
}

export default About