import React from 'react';
import Image from 'next/image'; // Pastikan Anda menggunakan Next.js untuk image optimization
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

const Login = () => {
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-between px-8 lg:px-20 bg-gray-100">
      {/* Form Area */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center w-full lg:w-1/2"
      >
        <div className="bg-blue-500 shadow-lg rounded-2xl px-8 py-10 w-full max-w-md">
          <h1 className="text-3xl font-bold mb-8 text-center text-white">Login</h1>
          <div className="space-y-6">
            <div>
              <label className="block text-white text-sm font-bold mb-2" htmlFor="username">
                Username
              </label>
              <input
                type="text"
                id="username"
                placeholder="Enter your username"
                className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div>
              <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
          </div>
          <button
            onClick={() => router.push('/dashboard')}
            className="mt-8 bg-white w-full hover:bg-gray-200 text-blue-500 font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline"
          >
            Login
          </button>
        </div>
      </motion.div>

      {/* Logo Area */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="hidden lg:flex lg:w-1/2 justify-center items-center"
      >
        <Image src="/hero.png" alt="Logo" width={608} height={608} className="w-full h-full object-cover" />
      </motion.div>
    </div>
  );
};

export default Login;
