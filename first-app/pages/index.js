import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='w-full flex justify-center'>
      <h1 className='font-mono hover:font-serif text-lg tracking-widest text-red-300 p-10'>Hello</h1>
    </div>
  )
}
