import React from "react";

const LoginForm = ({ onSwitch }) => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Sign in to your account
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600">
  Or{" "}
  <button
    type="button"
    onClick={onSwitch}
    className="font-medium text-blue-600 hover:text-blue-500"
  >
    create an account
  </button>
</p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form className="space-y-6" action="#" method="POST">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email address
                            </label>
                            <div className="mt-1">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    placeholder="Enter your email address"
                                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <div className="mt-1">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    placeholder="Enter your password"
                                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember_me"
                                    name="remember_me"
                                    type="checkbox"
                                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                />
                                <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                                    Remember me
                                </label>
                            </div>
                            <div className="text-sm">
                                <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                                    Forgot your password?
                                </a>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>

                    <div className="mt-6 ">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300" />
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-gray-100 text-gray-500">
                                    Or continue with
                                </span>
                            </div>
                        </div>

                        <div className="mt-6 gap-3 flex items-center justify-between">
                            <div>
                                <a
                                    href="#"
                                    className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                                >
                                    <img
                                        className="h-5 w-5"
                                        src="https://www.svgrepo.com/show/512120/facebook-176.svg"
                                        alt="Facebook"
                                    />
                                </a>
                            </div>
                             <div>
                                <a
                                    href="#"
                                    className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                                >
                                    <img
                                        className="h-5 w-8"
                                        src="data:image/png;base64,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"
                                        alt="Facebook"
                                    />
                                </a>
                            </div>
                            <div>
                                <a
                                    href="#"
                                    className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                                >
                                    <img
                                        className="h-6 w-6"
                                        src="https://www.svgrepo.com/show/506498/google.svg"
                                        alt="Google"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
