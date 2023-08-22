import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import signUpBg from '@/assets/soonbg-min.jpg';
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
    <div className={`${inter.className} h-full`}>
      <Image objectFit="cover" className="fixed h-full" src={signUpBg} alt="" />
      <div className="flex justify-center">
        <div className="relative inset-0 z-0 flex justify-between w-full h-auto min-h-screen py-12 bg-gray-700 border-none  bg-opacity-20 bg-clip-padding backdrop-blur-lg backdrop-filter lg:pt-0 lg:backdrop-blur-2xl">
          {children}
        </div>
      </div>
    </div>
  );
}
