import Image from 'next/image';
import ethosLogo from '@/assets/white-logo-shadow.svg';

export default function Home() {
  return (
    <div className="flex items-center justify-center w-full h-full ">
      <div className="text-start ">
        <Image
          src={ethosLogo}
          className="self-start w-10/12 "
          alt="Logo image"
        />
        <h4 className="ml-5 text-4xl text-white xs:text-5xl font-extralight">
          Welcome home
        </h4>
      </div>
    </div>
  );
}
