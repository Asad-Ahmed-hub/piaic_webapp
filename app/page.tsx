import Image from 'next/image'
import { Inter } from 'next/font/google'
import Banner from './components/Banner/Banner'
import Courses from './components/Courses/Courses'
import AboutUs from './components/AboutUs/AboutUs'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Banner />
    <AboutUs />
    <Courses />
    </>
  )
}
