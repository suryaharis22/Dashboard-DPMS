import { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { FaCaretDown, FaEye, FaPen, FaPlus, FaSort, FaSortDown, FaSortUp, FaTrash } from 'react-icons/fa';
import { HiDotsHorizontal } from 'react-icons/hi';
import { IoSearch } from 'react-icons/io5';

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
            const response = await axios.get('/api/items', {
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
                <div className="relative w-[350px]">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                        <IoSearch />

                    </div>
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        id="input-group-1"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full h-[60px] ps-10 p-2.5  "
                        placeholder="Search" />
                </div>



                <div className="flex justify-center">
                    <div className="flex items-center gap-2 font-[400]">
                        <div className="relative w-[207px]  flex justify-center items-center text-center">
                            <select
                                value={statusFilter}
                                onChange={handleStatusFilterChange}
                                className="appearance-none  w-full h-[60px] flex justify-center items-center text-center border-solid border-2 border-black rounded-full pl-4 pr-10"
                            >
                                <option value="All">Newest</option>
                                <option value="Aktif">Aktif</option>
                                <option value="Non Aktif">Non Aktif</option>
                            </select>
                            <FaCaretDown className="absolute right-14 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                        </div>
                        <button className="flex justify-center bg-primary text-white items-center gap-2 w-[207px] h-[60px] border-solid border-2 border-black rounded-full">
                            <FaPlus />
                            <span>New MSISDN</span>
                        </button>
                    </div>
                </div>



            </div>

            <table className="min-w-full bg-white border rounded shadow text-primary">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="py-2">
                            <input
                                type="checkbox"
                                checked={isAllSelected}
                                onChange={handleSelectAll}
                                className="mx-2"
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
                        <tr key={item.id}
                            className={`text-center border-t ${selectedItems.includes(item.id) ? 'border-l-4 border-l-primary' : ''}`}
                        >
                            <td className="py-4 h-16">
                                <input
                                    type="checkbox"
                                    checked={selectedItems.includes(item.id)}
                                    onChange={() => handleSelectItem(item.id)}
                                    className="mx-2"
                                />
                            </td>
                            <td className="text-left font-semibold  py-4 h-16">{item.msisdn}</td>
                            <td className="px-4 py-4 h-16">
                                <div className={`flex justify-center items-center py-2 text-white rounded-2xl ${item.status === 'Aktif' ? 'bg-success' : 'bg-danger'}`}>{item.status}</div>
                            </td>
                            <td className="px-4 py-4 h-16">{item.usage}</td>
                            <td className="px-4 py-4 h-16">{item.info}</td>
                            <td className="relative px-4 py-4 h-16 flex justify-center">
                                <div className="flex justify-center items-center group text-center w-10">
                                    <HiDotsHorizontal className="cursor-pointer" size={20} />
                                    <div className="absolute left-0 bottom-0 hidden group-hover:flex bg-white border rounded shadow-lg p-2">
                                        <button className="px-4 py-2 text-sm text-primary hover:bg-primary hover:text-white w-full text-left rounded-md">
                                            <FaEye />
                                        </button>
                                        <button className="px-4 py-2 text-sm text-warning hover:bg-warning hover:text-white w-full text-left rounded-md">
                                            <FaPen />
                                        </button>
                                        <button className="px-4 py-2 text-sm text-danger hover:bg-danger hover:text-white w-full text-left rounded-md">
                                            <FaTrash />
                                        </button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="flex justify-between items-center mb-4 mt-2">
                <div className="flex items-center space-x-2">
                    <span>Show</span>
                    <select
                        value={entriesPerPage}
                        onChange={(e) => setEntriesPerPage(Number(e.target.value))}
                        className="p-2 border rounded"
                    >
                        <option value={10}>10</option>
                        <option value={20}>20</option>
                        <option value={30}>30</option>
                    </select>
                </div>

                <nav aria-label="Page navigation" className="flex justify-center">
                    <ul className="inline-flex -space-x-px text-md">
                        <li>
                            <button
                                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                                disabled={currentPage === 1}
                                className="px-3 py-1 border rounded-l-md bg-white hover:bg-gray-200 disabled:opacity-50"
                            >
                                Previous
                            </button>
                        </li>
                        {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                            <li key={page}>
                                <button
                                    onClick={() => setCurrentPage(page)}
                                    className={`px-3 py-1 border rounded-full ${currentPage === page ? 'bg-blue-600 text-white' : 'bg-white hover:bg-gray-200'}`}
                                >
                                    {page}
                                </button>
                            </li>
                        ))}
                        <li>
                            <button
                                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                                disabled={currentPage === totalPages}
                                className="px-3 py-1 border rounded-r-md bg-white hover:bg-gray-200 disabled:opacity-50"
                            >
                                Next
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>

        </div>
    );
};

export default DataTable;
