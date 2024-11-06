import { IoSearch } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import DataTable from "@/components/Table";

const Dashboard = () => {
    return (
        <>
            <h2
                className="text-2xl font-bold mb-4"
            >
                Status
            </h2>

            <div
                className="overflow-x-auto"
            >
                <DataTable />
            </div>
        </>
    );
};

export default Dashboard;
