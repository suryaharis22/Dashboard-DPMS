import { IoSearch } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import DataTable from "@/components/Table";
import { motion } from 'framer-motion';

const Dashboard = () => {
    return (
        <>
            <motion.h2
                className="text-2xl font-bold mb-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
            >
                Status
            </motion.h2>

            <motion.div
                className="overflow-x-auto"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
            >
                <DataTable />
            </motion.div>
        </>
    );
};

export default Dashboard;
