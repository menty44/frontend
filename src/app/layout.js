import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ethos',
  description: 'Social family tree',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full bg-white">
      <body className="h-full" >{children}</body>
    </html>
  )
}
