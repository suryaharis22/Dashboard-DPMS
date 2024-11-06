import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaHome, FaCog, FaBars } from 'react-icons/fa';
import { motion } from 'framer-motion';
export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
    const router = useRouter();
    const itemVariants = {
        hover: { scale: 1.1, backgroundColor: "#FFFFFF", color: "#1E3A8A" }, // warna sesuai `hover:bg-white` dan `hover:text-primary`
        tap: { scale: 0.95 }
    };

    return (
        <motion.aside
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.7 }}
            className={`w-[345px] py-4 bg-primary text-white ${sidebarOpen ? 'block' : 'hidden'} lg:block relative z-20`}
        >
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="absolute top-5 left-5 lg:hidden p-2 text-white rounded bg-primary hover:bg-gray-300 hover:text-black">
                <FaBars />
            </button>

            <div className="flex justify-center items-center px-[46px] mt-[35px]">
                <div className="font-bold text-lg w-[215px] h-[75px] items-center">
                    <Image
                        className="p-4 object-cover"
                        src="/Logo.png"
                        alt="Logo"
                        width={215}
                        height={75}
                        priority
                    />
                </div>
            </div>

            <div className="flex justify-center items-center px-[46px]">
                <div className="flex-grow border-t border-white"></div>
                <span className="mx-2 text-[15px] font-[275px] text-white">by Grabpay</span>
                <div className="flex-grow border-t border-white"></div>
            </div>

            <nav className="flex flex-col space-y-2 pl-[46px] py-4 text-[18px]">
                <Link href="/dashboard">
                    <motion.div
                        variants={itemVariants}
                        whileHover="hover"
                        whileTap="tap"
                        className={`flex items-center h-[64px] pl-4 rounded-l-full transition duration-200 ${router.pathname === '/dashboard' ? 'bg-white text-primary' : ''}`}
                    >
                        <FaHome className="mr-2" /> Dashboard
                    </motion.div>
                </Link>
                <Link href="/settings">
                    <motion.div
                        variants={itemVariants}
                        whileHover="hover"
                        whileTap="tap"
                        className={`flex items-center h-[64px] pl-4 rounded-l-full transition duration-200 ${router.pathname === '/settings' ? 'bg-white text-primary' : ''}`}
                    >
                        <FaCog className="mr-2" /> Settings
                    </motion.div>
                </Link>

            </nav>
        </motion.aside>
    );
}
