import { useState, useMemo } from 'react';

const useSortBooks = (books) => {
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

    const sortedBooks = useMemo(() => {
        if (!books) return [];
        const sortableBooks = [...books.reading_log_entries];
        if (sortConfig.key) {
            sortableBooks.sort((a, b) => {
                const aValue = a.work[sortConfig.key];
                const bValue = b.work[sortConfig.key];
                if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
                if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
                return 0;
            });
        }
        return sortableBooks;
    }, [books, sortConfig]);

    const handleSort = (key) => {
        setSortConfig(prev => ({
            key,
            direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc'
        }));
    };

    return { sortedBooks, handleSort };
};

export default useSortBooks;
