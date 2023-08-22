import Providers from '@/components/Providers';
import { Toaster } from '@/components/ui/toaster';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import mainBg from '@/assets/soonbg-min.jpg';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ethos',
  description: 'Preserve your Family history, be present & grow together.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-white">
      <body className={`${inter.className} h-full px-0 mx-0`}>
        <Providers>
          <Image
            objectFit="cover"
            className="fixed h-full"
            src={mainBg}
            alt=""
          />
          <div className="flex justify-center">
            <div className=" relative inset-0 z-0 flex w-full justify-between h-auto border-none  bg-gray-700 bg-opacity-20 bg-clip-padding py-12 backdrop-blur-lg backdrop-filter md:w-[90%] min-h-screen  lg:pt-0 lg:backdrop-blur-2xl">
              {children}
            </div>
          </div>

          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
