"use client";
import { useState } from "react";
import axios from 'axios';
import Link from "next/link";

import { useRouter } from 'next/navigation';


export default function LoginPage() {
    const router = useRouter();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        const data = {
            email: username,
            password: password,
        };

        axios.post('http://172.104.158.134:8081/api/v1/auth/reset-password', data)
            .then(function (response) {

                console.log(response.data);
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('user', response.data);

                // After a successful API call, navigate to the dashboard
                router.push('/dashboard');

            })
            .catch(function (error) {
                console.log(error);
                alert('Invalid credentials!');
            });
    }

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
                        Reset Password
                    </h2>
                </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form onSubmit={handleSubmit} className="space-y-6" action="#" method="POST">
                            <div>
                                <label htmlFor="username" className="block text-sm font-medium leading-6 text-white">
                                    Email
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="username"
                                        name="username"
                                        type="text"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        required
                                        style={{textAlign: 'center'}}
                                        className="rounded-full w-full  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>


                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password"
                                           className="rounded-full text-sm font-medium leading-6 text-white">
                                        New Password
                                    </label>

                                </div>
                                <div className="mt-2">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        style={{textAlign: 'center'}}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        className="rounded-full w-full  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>



                            <div>
                                <button
                                    type="submit"
                                    className="rounded-full flex w-full justify-center bg-sky-300 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                                >
                                    Reset
                                </button>

                            </div>
                        </form>

                        <p className="mt-10 text-center text-sm text-white">
                            
                            <Link href="/" className="font-semibold leading-6 text-sky-300 hover:text-sky-200">
                                Forgot password?
                            </Link>
                        </p>
                        <p className="mt-2 text-center text-sm text-white">
                            New to the system?{' '}
                            <Link href="/" className="font-semibold leading-6 text-sky-300 hover:text-sky-200">
                                register
                            </Link>
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}
