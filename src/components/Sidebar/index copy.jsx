// components/Dashboard/Sidebar.js
import Image from 'next/image';
import Link from 'next/link';
import { FaHome, FaTable, FaCog, FaBars } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {

    return (
        <>
            {/* <button
                className=" fixed top-1/2 left-0 w-6 h-10 bg-primary text-white hover:bg-blue-500 hover:shadow-[inset_0px_0px_25px_10px_#2563eb] rounded-r-full transition duration-200  flex items-center justify-center"
                onClick={() => setSidebarOpen(!sidebarOpen)}
            >
                {sidebarOpen ? <IoIosArrowBack /> : <IoIosArrowForward />}
            </button> */}

            <aside className={`w-[345px] py-4 bg-primary text-white ${sidebarOpen ? 'block' : 'hidden'} lg:block relative`}>

                <button onClick={() => setSidebarOpen(!sidebarOpen)} className=" absolute top-5 left-5 lg:hidden p-2 text-white rounded bg-primary hover:bg-gray-300 hover:text-black">
                    <FaBars />
                </button>
                {/* <button
                    className="fixed top-2 lg:hidden left-[285px] transform -translate-x-1/2 p-2 bg-primary text-white hover:bg-blue-500 hover:shadow-[inset_0px_0px_25px_10px_#2563eb] rounded-full transition duration-200 w-10 h-10 flex items-center justify-center"
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                    <IoIosArrowBack />
                </button> */}
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
                    <Link href="#" className="flex items-center h-[64px] pl-4 rounded-l-full hover:bg-blue-600 transition duration-200">
                        <FaHome className="mr-2" /> Home
                    </Link>
                    <Link href="#" className="flex items-center h-[64px] pl-4 rounded-l-full hover:bg-blue-600 transition duration-200">
                        <FaTable className="mr-2" /> Table
                    </Link>
                    <Link href="#" className="flex items-center h-[64px] pl-4 rounded-l-full hover:bg-blue-600 transition duration-200">
                        <FaCog className="mr-2" /> Settings
                    </Link>
                </nav>
                {/* <div className="flex justify-center items-center px-[46px] mt-[35px]">
                    <button
                        className=" bg-blue-600 hover:bg-blue-500 hover:shadow-[inset_0px_0px_25px_10px_#2563eb] rounded-full transition duration-200 w-10 h-10 flex items-center justify-center"
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                    >
                        <IoIosArrowBack />
                    </button>
                </div> */}

                {/* <button
                    className="fixed bottom-1/4 lg:hidden left-[305px] transform -translate-x-1/2 p-2 bg-primary text-white hover:bg-blue-500 hover:shadow-[inset_0px_0px_25px_10px_#2563eb] rounded-full transition duration-200 w-10 h-10 flex items-center justify-center"
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                    <IoIosArrowBack />
                </button> */}
            </aside>
        </>
    );
}
