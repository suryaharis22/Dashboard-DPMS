import { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { FaSort, FaSortDown, FaSortUp } from 'react-icons/fa';
import { HiDotsHorizontal } from 'react-icons/hi';

const DataTable = () => {
    const [data, setData] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortConfig, setSortConfig] = useState({ key: 'usage', direction: 'desc' });
    const [currentPage, setCurrentPage] = useState(1);
    const [entriesPerPage, setEntriesPerPage] = useState(10);
    const [statusFilter, setStatusFilter] = useState('All');
    const [selectedItems, setSelectedItems] = useState([]);

    const fetchData = useCallback(async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/items', {
                params: {
                    page: currentPage,
                    limit: entriesPerPage,
                    sortBy: sortConfig.key,
                    order: sortConfig.direction,
                    search: searchTerm,
                    status: statusFilter !== 'All' ? statusFilter : undefined,
                },
            });
            setData(response.data.items);
            setTotalPages(response.data.totalPages);
        } catch (error) {
            console.error("Error fetching data", error);
        }
    }, [currentPage, entriesPerPage, sortConfig, searchTerm, statusFilter]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const handleSort = (key) => {
        setSortConfig((prevConfig) => ({
            key,
            direction: prevConfig.key === key && prevConfig.direction === 'asc' ? 'desc' : 'asc',
        }));
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
        setCurrentPage(1); // Reset page to 1 when search term changes
    };

    const handleStatusFilterChange = (event) => {
        setStatusFilter(event.target.value);
        setCurrentPage(1); // Reset page to 1 when filter changes
    };

    const handleSelectAll = (event) => {
        if (event.target.checked) {
            setSelectedItems(data.map((item) => item.id));
        } else {
            setSelectedItems([]);
        }
    };

    const handleSelectItem = (id) => {
        setSelectedItems((prevSelected) =>
            prevSelected.includes(id) ? prevSelected.filter((itemId) => itemId !== id) : [...prevSelected, id]
        );

    };

    const isAllSelected = data.length > 0 && selectedItems.length === data.length;

    return (
        <div className="p-4">
            <div className="flex items-center justify-between mb-4">
                <input
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="p-2 border rounded"
                />

                <select
                    value={statusFilter}
                    onChange={handleStatusFilterChange}
                    className="p-2 border rounded"
                >
                    <option value="All">All Status</option>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                </select>

                <select
                    value={entriesPerPage}
                    onChange={(e) => setEntriesPerPage(Number(e.target.value))}
                    className="p-2 border rounded"
                >
                    <option value={10}>10 entries</option>
                    <option value={20}>20 entries</option>
                    <option value={30}>30 entries</option>
                </select>
            </div>

            <table className="min-w-full bg-white border rounded shadow">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="py-2">
                            <input
                                type="checkbox"
                                checked={isAllSelected}
                                onChange={handleSelectAll}
                                className='mx-2'
                            />
                        </th>
                        <th className="text-left py-2 cursor-pointer" onClick={() => handleSort('msisdn')}>

                            Msisdn
                            {sortConfig.key === 'msisdn' ? (
                                sortConfig.direction === 'asc' ? (
                                    <FaSortUp className="inline ml-1" />
                                ) : (
                                    <FaSortDown className="inline ml-1" />
                                )
                            ) : (
                                <FaSort className="inline ml-1" />
                            )}
                        </th>
                        <th className="py-2 cursor-pointer" onClick={() => handleSort('status')}>
                            Status
                            {sortConfig.key === 'status' ? (
                                sortConfig.direction === 'asc' ? (
                                    <FaSortUp className="inline ml-1" />
                                ) : (
                                    <FaSortDown className="inline ml-1" />
                                )
                            ) : (
                                <FaSort className="inline ml-1" />
                            )}
                        </th>
                        <th className="py-2 cursor-pointer" onClick={() => handleSort('usage')}>
                            Usage
                            {sortConfig.key === 'usage' ? (
                                sortConfig.direction === 'asc' ? (
                                    <FaSortUp className="inline ml-1" />
                                ) : (
                                    <FaSortDown className="inline ml-1" />
                                )
                            ) : (
                                <FaSort className="inline ml-1" />
                            )}
                        </th>
                        <th className="px-4 py-2">Info Lainnya</th>
                        <th className="px-4 py-2">Action</th>
                    </tr>
                </thead>

                <tbody>
                    {data.map((item) => (
                        <tr key={item.id} className="text-center px-4 border-t">
                            <td className="py-2">
                                <input
                                    type="checkbox"
                                    checked={selectedItems.includes(item.id)}
                                    onChange={() => handleSelectItem(item.id)}
                                    className='mx-2'
                                />
                            </td>
                            <td className="text-left py-2">

                                {item.msisdn}
                            </td>
                            <td className=" py-2">{item.status}</td>
                            <td className=" py-2">{item.usage}</td>
                            <td className=" py-2">{item.info}</td>
                            <td className=" py-2 relative">
                                <div className="relative group">
                                    <HiDotsHorizontal className="cursor-pointer" />
                                    <div className="absolute hidden group-hover:flex flex-col bg-white border rounded shadow-lg p-2 right-0">
                                        <button className="px-2 py-1 hover:bg-gray-200">Detail</button>
                                        <button className="px-2 py-1 hover:bg-gray-200">Edit</button>
                                        <button className="px-2 py-1 hover:bg-gray-200">Delete</button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <nav aria-label="Page navigation" className="flex justify-center mt-4">
                <ul className="inline-flex -space-x-px text-sm">
                    <li>
                        <button
                            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            className="px-3 py-1 border rounded-l"
                        >
                            Previous
                        </button>
                    </li>
                    {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                        <li key={page}>
                            <button
                                onClick={() => setCurrentPage(page)}
                                className={`px-3 py-1 border ${currentPage === page ? 'bg-blue-600 text-white' : 'bg-white'
                                    }`}
                            >
                                {page}
                            </button>
                        </li>
                    ))}
                    <li>
                        <button
                            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                            className="px-3 py-1 border rounded-r"
                        >
                            Next
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default DataTable;
