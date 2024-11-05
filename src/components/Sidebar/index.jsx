// components/Dashboard/Sidebar.js
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaHome, FaTable, FaCog, FaBars } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
    const router = useRouter();
    console.log(router.pathname);


    return (

        <aside className={`w-[345px] py-4 bg-primary text-white ${sidebarOpen ? 'block' : 'hidden'} lg:block relative`}>
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className=" absolute top-5 left-5 lg:hidden p-2 text-white rounded bg-primary hover:bg-gray-300 hover:text-black">
                <FaBars />
            </button>

            <div className="flex justify-center items-center px-[46px] mt-[35px]">
                <div className=" font-bold text-lg w-[215px] h-[75px] items-center">
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
                <Link href="/dashboard" className={`flex items-center h-[64px] pl-4 rounded-l-full hover:bg-white hover:text-primary transition duration-200 ${router.pathname === '/dashboard' ? 'bg-white text-primary' : ''}`}>
                    <FaHome className="mr-2" /> Dashboard
                </Link>
                {/* <Link href="#" className="flex items-center h-[64px] pl-4 rounded-l-full hover:bg-blue-600 transition duration-200">
                    <FaTable className="mr-2" /> Table
                </Link> */}
                <Link href="#" className="flex items-center h-[64px] pl-4 rounded-l-full hover:bg-blue-600 transition duration-200">
                    <FaCog className="mr-2" /> Settings
                </Link>
            </nav>
        </aside>

    );
}
