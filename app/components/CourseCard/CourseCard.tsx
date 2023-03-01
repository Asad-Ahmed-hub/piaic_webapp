import { CourseType } from '@/course'
import Link from 'next/link'
import React from 'react'

const CourseCard = ({title, short_description, id, full_description}: CourseType) => {
  return (
    <Link href={`/Course/${title}`}>
    <div  className='w-full bg-white hover:bg-gradient-to-tr hover:from-emerald-900 hover:via-emerald-800 hover:to-emerald-700 text-black hover:text-white flex flex-col justify-center items-center drop-shadow-2xl h-80 rounded-xl overflow-hidden  group transform transition ease-out duration-150 hover:scale-105'>
        <h2 className='text-xl md:text-2xl font-bold text-center'>{title}</h2>
        <p className='text-center px-2 py-4 text-base md:text-lg'>{short_description}</p>
    </div>
    </Link>
  )
}

export default CourseCard