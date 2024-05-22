import { useState,useMemo } from "react";
import UserData from "./Data";
import useFetchBooks from "../hooks/useFetchBooks";
import { RiArrowDropUpFill } from "react-icons/ri";
import { API } from "../constants";


const Table = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage, setRecordsPerPage] = useState(10);
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

    const books = useFetchBooks(API);

    const sortedBooks = useMemo(() => {
        if (!books.reading_log_entries) return [];
        let sortableBooks = [...books.reading_log_entries];
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
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    }

    const handlePageChange = (page) => {
        setCurrentPage(page);
    }

    const handleRecordsPerPageChange = (event) => {
        setRecordsPerPage(Number(event.target.value));
        setCurrentPage(1); 
    }

    const paginatedBooks = sortedBooks.slice(
        (currentPage - 1) * recordsPerPage,
        currentPage * recordsPerPage
    );

    const totalPages = Math.ceil(sortedBooks.length / recordsPerPage);

    return (
        <>
            <div className="flex justify-between items-center my-6">
                <div>
                    Records per page:
                    <select className="cursor-pointer" value={recordsPerPage} onChange={handleRecordsPerPageChange}>
                        <option className="cursor-pointer p-2" value={10}>10</option>
                        <option className="cursor-pointer p-2" value={50}>50</option>
                        <option className="cursor-pointer p-2" value={100}>100</option>
                    </select>
                </div>
                <div>
                    Page:
                    {[...Array(totalPages)].map((_, index) => (
                        <button
                            key={index}
                            className={`mx-1 px-3 py-1 ${index + 1 === currentPage ? 'bg-purple-800 text-white' : 'bg-white text-purple-800'}`}
                            onClick={() => handlePageChange(index + 1)}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>
            <table className="mx-auto rounded-2xl border-hidden bg-transparent shadow border-black border overflow-hidden max-w-screen-lg font-poppins">
                <thead className="text-xl bg-purple-800 text-white">
                    <tr>
                        <th className="border-purple-800 p-6 leading-relaxed" >cover_id</th>
                        <th className="border-purple-800 p-6 leading-relaxed flex items-center gap-[3em]" onClick={() => handleSort('title')}>title<span className="text-white cursor-pointer text-xl" onClick={() => handleSort('title')}><RiArrowDropUpFill /></span></th>
                        <th className="border-purple-800 p-6 leading-relaxed" onClick={() => handleSort('first_publish_year')}>first_publish_year</th>
                        <th className="border-purple-800 p-6 leading-relaxed" onClick={() => handleSort('cover_edition_key')}>cover_edition_key</th>
                    </tr>
                </thead>
                <tbody>
                    <UserData books={{ reading_log_entries: paginatedBooks }} />
                </tbody>
            </table>
        </>
    );
}

export default Table;