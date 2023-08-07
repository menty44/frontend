import Link from "next/link";

export default function HomePage() {
    return (

        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 my-page">

            <div className="grid gap-4 grid-cols-2">

                <div>
                    <div className="mt-10 w-full">
                        <div>
                            <img
                                className="pl-56 "
                                src="https://blaqueyard.com/pp.png"
                                alt="ethos"
                            />
                        </div>


                    </div>

                    <div className="mt-10 w-full">
                        <div className="pt-8 pl-56">
                            <label className="text-3xl text-white">
                                Welcome to your Virtual ancestral home, a place where you can be present & grow together
                            </label>
                        </div>
                    </div>
                </div>


                <div>
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">

                        <h2 style={{ fontFamily: 'Ubuntu, sans-serif' }} className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
                            Register
                        </h2>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6" action="#" method="POST">
                            <div>
                                <label htmlFor="username" className="block text-sm font-medium leading-6 text-white">
                                    UserName
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="username"
                                        name="username"
                                        type="text"
                                        required
                                        className=" w-full rounded-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                                    Email Address
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="username"
                                        name="email"
                                        type="email"
                                        required
                                        className="w-full rounded-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password"
                                           className="block text-sm font-medium leading-6 text-white">
                                        Password
                                    </label>

                                </div>
                                <div className="mt-2">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        required
                                        className=" w-full rounded-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="confirmpassword"
                                           className="block text-sm font-medium leading-6 text-white">
                                        Confirm Password
                                    </label>

                                </div>
                                <div className="mt-2">
                                    <input
                                        id="confirmpassword"
                                        name="confirmpassword"
                                        type="password"
                                        required
                                        className="rounded-full w-full rounded-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="rounded-full flex w-full justify-center bg-sky-300 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                                >
                                    Register
                                </button>
                            </div>
                        </form>

                        <p className="mt-10 text-center text-sm text-white">
                            Already have an account?{' '}
                            <Link href="/login" className="font-semibold leading-6 text-sky-300 hover:text-sky-200">
                                signin
                            </Link>
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}
