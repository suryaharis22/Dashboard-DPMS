// pages/dashboard.js
import { IoSearch } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import DataTable from "@/components/Table";


const Dashboard = () => {
    const data = [
        { msisdn: '081234567890', status: 'Active', usage: '500MB', info: 'Last updated 1 hour ago' },
        { msisdn: '081234567891', status: 'Inactive', usage: '1GB', info: 'Last updated 2 hours ago' },
        { msisdn: '081234567892', status: 'Active', usage: '200MB', info: 'Last updated 3 hours ago' },
        // Add more dummy data as needed
    ];

    return (
        <>
            <h2 className="text-2xl font-bold mb-4">Status</h2>

            {/* <div className="flex justify-between items-center py-[40px]">
                <div className="relative w-[350px]">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                        <IoSearch />

                    </div>
                    <input type="text" id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full h-[60px] ps-10 p-2.5  " placeholder="Search here..." />
                </div>
                <div className="flex items-center gap-2 font-[400]">
                    <button className="flex justify-center items-center gap-2 w-[207px] h-[60px] border-solid border-2 border-black rounded-full">
                        <span>Newest</span>
                        <FaCaretDown />
                    </button>
                    <button className="flex justify-center bg-primary text-white items-center gap-2 w-[207px] h-[60px] border-solid border-2 border-black rounded-full">
                        <FaPlus />
                        <span>New MSISDN</span>
                    </button>
                </div>
            </div> */}


            <div className="overflow-x-auto">
                <DataTable />
                {/* <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b">MSISDN</th>
                            <th className="py-2 px-4 border-b">Status</th>
                            <th className="py-2 px-4 border-b">Usage</th>
                            <th className="py-2 px-4 border-b">Info Lainnya</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index} className="hover:bg-gray-100">
                                <td className="py-2 px-4 border-b">{item.msisdn}</td>
                                <td className="py-2 px-4 border-b">{item.status}</td>
                                <td className="py-2 px-4 border-b">{item.usage}</td>
                                <td className="py-2 px-4 border-b">{item.info}</td>
                            </tr>
                        ))}
                    </tbody>
                </table> */}
            </div>

        </>
    );
};

export default Dashboard;
