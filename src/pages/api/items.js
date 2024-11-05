const data = [
    { id: 1, msisdn: '081234567890', status: 'Aktif', usage: '500MB', info: 'Last updated 1 hour ago' },
    { id: 2, msisdn: '081234567891', status: 'Non Aktif', usage: '1GB', info: 'Last updated 2 hours ago' },
    { id: 3, msisdn: '081234567892', status: 'Aktif', usage: '200MB', info: 'Last updated 3 hours ago' },
    { id: 4, msisdn: '081234567893', status: 'Aktif', usage: '300MB', info: 'Last updated 4 hours ago' },
    { id: 5, msisdn: '081234567894', status: 'Non Aktif', usage: '700MB', info: 'Last updated 5 hours ago' },
    { id: 6, msisdn: '081234567895', status: 'Aktif', usage: '1.2GB', info: 'Last updated 6 hours ago' },
    { id: 7, msisdn: '081234567896', status: 'Non Aktif', usage: '400MB', info: 'Last updated 7 hours ago' },
    { id: 8, msisdn: '081234567897', status: 'Aktif', usage: '600MB', info: 'Last updated 8 hours ago' },
    { id: 9, msisdn: '081234567898', status: 'Non Aktif', usage: '900MB', info: 'Last updated 9 hours ago' },
    { id: 10, msisdn: '081234567899', status: 'Aktif', usage: '2GB', info: 'Last updated 10 hours ago' },
    { id: 11, msisdn: '081234567800', status: 'Non Aktif', usage: '1.5GB', info: 'Last updated 11 hours ago' },
    { id: 12, msisdn: '081234567801', status: 'Aktif', usage: '800MB', info: 'Last updated 12 hours ago' },
    { id: 13, msisdn: '081234567802', status: 'Non Aktif', usage: '300MB', info: 'Last updated 13 hours ago' },
    { id: 14, msisdn: '081234567803', status: 'Aktif', usage: '1GB', info: 'Last updated 14 hours ago' },
    { id: 15, msisdn: '081234567804', status: 'Non Aktif', usage: '500MB', info: 'Last updated 15 hours ago' },
    { id: 16, msisdn: '081234567805', status: 'Aktif', usage: '700MB', info: 'Last updated 16 hours ago' },
    { id: 17, msisdn: '081234567806', status: 'Non Aktif', usage: '1.1GB', info: 'Last updated 17 hours ago' },
    { id: 18, msisdn: '081234567807', status: 'Aktif', usage: '900MB', info: 'Last updated 18 hours ago' },
    { id: 19, msisdn: '081234567808', status: 'Non Aktif', usage: '600MB', info: 'Last updated 19 hours ago' },
];

export default function handler(req, res) {
    const { page = 1, limit = 10, sortBy = 'id', order = 'asc', search = '', status } = req.query;

    let filteredData = data;

    if (status) {
        filteredData = filteredData.filter(item => item.status === status);
    }

    if (search) {
        const searchRegex = new RegExp(search, 'i');
        filteredData = filteredData.filter(item => searchRegex.test(item.msisdn) || searchRegex.test(item.info) || searchRegex.test(item.usage));
    }

    const sortOrder = order === 'asc' ? 1 : -1;
    filteredData = filteredData.sort((a, b) => {
        if (a[sortBy] < b[sortBy]) return -sortOrder;
        if (a[sortBy] > b[sortBy]) return sortOrder;
        return 0;
    });

    const totalItems = filteredData.length;
    const paginatedData = filteredData.slice((page - 1) * limit, page * limit);

    res.status(200).json({
        items: paginatedData,
        totalItems,
        totalPages: Math.ceil(totalItems / limit),
        currentPage: parseInt(page),
    });
}
