import React from 'react'
import CourseCard from '../CourseCard/CourseCard'
import coursesList, {CourseType} from '../../../course';
const Courses = () => {
  return (
    <div className='bg-gray-100 flex flex-col  justify-center items-center py-12 px-8 md:px-10'>
        <h1 className='text-5xl font-bold'>Our Courses</h1>
        <div className='w-full grid gap-6 grid-cols-1 md:grid-cols-3 place-items-center content-center place-content-center my-10'>
        {coursesList.map((item, index)  => (
        <CourseCard key={item.id}  title={item.title} short_description={item.short_description}  id={item.id} full_description={item.full_description}/>
        ))}


        </div>
      

    </div>
  )
}

export default Courses