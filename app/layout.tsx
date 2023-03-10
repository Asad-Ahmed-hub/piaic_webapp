"use client"
import Footer from './components/Footer/Footer';
import NavMenu from './components/NavMenu/NavMenu';
import './globals.css'
import { ThemeProvider } from 'next-themes';
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <ThemeProvider enableSystem={true} attribute="class">
      <body className='bg-white-semidark'>
      <NavMenu />
        {children}
        <Footer />
      </body>
      </ThemeProvider>
    </html>
  )
}
