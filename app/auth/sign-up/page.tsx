import UserSignUpAuthForm from '@/components/auth/signup/UserSignUpAuthForm';
import Image from 'next/image';

import linksSignImg from '@/assets/links-img-update.svg';
import ethosLogo from '@/assets/white-logo-shadow.svg';
import Link from 'next/link';

const SignUp = () => {
  return (
    <div className="z-0 flex flex-wrap items-center justify-between w-11/12 h-full m-auto space-y-6 md:w-3/4 lg:w-11/12 md:justify-between lg:h-full lg:gap-0">
      <div className="z-10 flex flex-col items-center justify-center w-full gap-6 px-1 mt-12 space-y-8 text-left lg:mt-0 lg:w-1/2 lg:gap-4 lg:px-0">
        <Image
          src={ethosLogo}
          className="self-start w-5/12 md:px-8 lg:px-14"
          alt="Logo image"
        />
        <Image
          src={linksSignImg}
          className="w-full mx-0 md:px-8 lg:w-12/12 lg:px-14"
          alt="Link image"
        />
        <p className="w-full px-2 py-2 text-xl text-white rounded-md md:text-md lg:px-14 lg:text-2xl xl:text-3xl">
          Welcome to your Virtual ancestral home, a place where you can be
          present & grow together
        </p>
      </div>
      <div className="flex flex-col items-center w-full px-8 md:items-end lg:mt-0 lg:w-6/12 xl:w-5/12 lg:justify-end lg:px-10">
        <div className="flex flex-col w-full rounded-3xl md:w-10/12 md:items-center space-y-7">
          <p className="mt-10 text-2xl font-bold leading-9 tracking-tight text-center text-white">
            Sign up
          </p>
          <UserSignUpAuthForm />
          <p className="mt-1 text-sm text-center text-white">
            Already have an account?{' '}
            <Link
              href="/auth/sign-in"
              className="font-semibold leading-6 text-sky-300 hover:text-sky-200"
            >
              signin
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
