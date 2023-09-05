import Image from 'next/image';

import linksSignImg from '@/assets/links-img-update.svg';
import ethosLogo from '@/assets/white-logo-shadow.svg';
import UserSignInAuthForm from '@/components/auth/signin/UserSignInAuthForm';
import Link from 'next/link';

const SignIn = () => {
  return (
    <>
      <div className="z-0 flex flex-wrap items-center justify-between w-11/12 h-full m-auto space-y-6 md:w-3/4 lg:w-full md:justify-between lg:h-full lg:gap-0">
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
          <p className="w-full px-2 py-2 text-2xl text-white rounded-md md:text-md lg:px-14 lg:text-3xl">
            Welcome to your Virtual ancestral home, A place where you can be
            present & grow together
          </p>
        </div>
        <div className="flex flex-col items-center w-full px-8 md:items-end lg:mt-0 lg:w-5/12 lg:justify-end lg:px-10">
          <div className="flex flex-col w-full rounded-3xl md:w-10/12 md:items-center space-y-7">
            <p className="mt-10 text-2xl font-bold leading-9 tracking-tight text-center text-white">
              Login
            </p>
            <UserSignInAuthForm />
            <p className="mt-10 text-sm text-center text-white">
              <Link
                href="/auth/reset"
                className="font-semibold leading-6 text-sky-300 hover:text-sky-200"
              >
                Forgot password?
              </Link>
            </p>
            <p className="mt-2 text-sm text-center text-white">
              New to the system?{' '}
              <Link
                href="/auth/sign-up"
                className="font-semibold leading-6 text-sky-300 hover:text-sky-200"
              >
                register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
