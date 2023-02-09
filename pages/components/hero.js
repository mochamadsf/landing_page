import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className='flex justify-around items-center w-5/6 m-auto mt-20 after:absolute after:-right-48 after:-top-14 after:bg-heroImage after:bg-no-repeat after:bg-cover after:w-4/6 after:h-90/1 after:-z-10'>
          <div className='whitespace-pre-wrap w-2/5'>
            <h1 className='text-slate-800 font-bold text-4xl'>Expert All Tech Stack</h1>
            <h1 className='text-slate-600 font-semibold text-3xl mt-1 mb-4'>We serve with love</h1>
            <span className='text-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dicta sapiente exercitationem delectus, odio inventore tenetur earum cum alias, cumque reiciendis unde error facilis animi blanditiis.</span>
            <button type="button" className="mt-6 inline-block px-6 py-2.5 bg-slate-700 text-white font-medium text-xs leading-tight uppercase rounded-3xl shadow-md hover:bg-slate-300 hover:text-black hover:shadow-lg focus:bg-slate-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-700 active:shadow-lg transition duration-150 ease-in-out">Click me</button>
            </div>
          <div>
            <Image
            src="/hero_1.png.webp"
            alt="Muqadimmah"
            width={600}
            height={550}
            priority='lazy'
            />
          </div>
        </section>
  )
}

export default Hero