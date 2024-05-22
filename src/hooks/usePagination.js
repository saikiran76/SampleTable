import { useState } from 'react';

const usePagination = (items, recordsPerPage) => {
    const [currentPage, setCurrentPage] = useState(1);

    const paginatedItems = items.slice(
        (currentPage - 1) * recordsPerPage,
        currentPage * recordsPerPage
    );

    const totalPages = Math.ceil(items.length / recordsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return { paginatedItems, currentPage, totalPages, handlePageChange, setCurrentPage };
};

export default usePagination;
