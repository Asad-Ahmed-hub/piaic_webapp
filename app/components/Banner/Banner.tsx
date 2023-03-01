import Image from 'next/image'
import React from 'react'
import PresidentImage from '../../../public/president.png'

const Banner = () => {
  return (
    <section className="  bg-gradient-to-tr from-emerald-900 via-emerald-800 to-emerald-700 dark:bg-dark-medium flex flex-col md:flex-row justify-center items-center px-6 md:px-10 space-x-4">
        <div className='w-2/2 md:w-1/2'>
            <Image src={PresidentImage} width={500 } height={500} alt='President Image' />
        </div>
        <div className='py-10 w-2/2 md:w-1/2'>
            <h1 className="relative max-w-xs md:max-w-2xl text-5xl md:text-6xl font-bold text-white">Presidential Initiative</h1>
            <h2 className="relative max-w-xs md:max-w-2xl text-xl md:text-2xl text-white">for Artificial Intelligence & Computing (PIAIC)</h2>
            <div className="heading-desc relative z-10 py-8 md:py-4 lg:py-8 text-white">
                <p className='text-justify'>In this brand-new type of curriculum, students will learn how to make money and boost exports in the classroom and will begin doing so within six months of the program beginning. It resembles a cross between a corporate venture and an educational project</p>
            </div>
            <button type="button" className="px-5 py-3 text-base font-medium text-center text-[#02645f] bg-white rounded hover:bg-white focus:ring-4 focus:outline-none focus:ring-white dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Start Your Journey</button>
        </div>

    </section>
  )
}

export default Banner