import { FaBell, FaCog, FaUser, FaBars } from 'react-icons/fa';

const Header = ({ sidebarOpen, setSidebarOpen }) => {
    return (
        <header
            className="bg-white shadow p-4 flex justify-between items-center"
        >
            <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className={`p-2 rounded bg-gray-200 hover:bg-gray-300 ${sidebarOpen ? 'hidden' : 'lg:hidden'}`}

            >
                <FaBars />
            </button>
            <h1
                className="text-xl font-bold"

            >
                Dashboard
            </h1>
            <div className="flex items-center space-x-4">
                <button
                    className="relative p-2 hover:bg-gray-200 rounded"

                >
                    <FaBell />
                    <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">3</span>
                </button>
                <button
                    className="p-2 hover:bg-gray-200 rounded"

                >
                    <FaCog />
                </button>
                <button
                    className="p-2 hover:bg-gray-200 rounded"

                >
                    <FaUser />
                </button>
            </div>
        </header>
    );
};

export default Header;
