import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '../components/Header';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex flex-col min-h-screen p-24 ${inter.className}`}
    >
      <Header />
      <div className="flex-grow">
        {/* Task list goes here */}
      </div>
    </main>
  )
}