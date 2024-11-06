import { FaBell, FaCog, FaUser, FaBars } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Header = ({ sidebarOpen, setSidebarOpen }) => {
    return (
        <motion.header
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white shadow p-4 flex justify-between items-center"
        >
            <motion.button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className={`p-2 rounded bg-gray-200 hover:bg-gray-300 ${sidebarOpen ? 'hidden' : 'lg:hidden'}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <FaBars />
            </motion.button>
            <motion.h1
                className="text-xl font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                Dashboard
            </motion.h1>
            <div className="flex items-center space-x-4">
                <motion.button
                    className="relative p-2 hover:bg-gray-200 rounded"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <FaBell />
                    <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">3</span>
                </motion.button>
                <motion.button
                    className="p-2 hover:bg-gray-200 rounded"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <FaCog />
                </motion.button>
                <motion.button
                    className="p-2 hover:bg-gray-200 rounded"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <FaUser />
                </motion.button>
            </div>
        </motion.header>
    );
};

export default Header;
