import React, { useState } from 'react';
import useFetchBooks from '../hooks/useFetchBooks';
import useSortBooks from '../hooks/useSorter';
import usePagination from '../hooks/usePagination';
import Pagination from './Pagination';
import UserData from './Data';
import { RiArrowDropUpFill } from "react-icons/ri";
import { API } from '../utils/constants';
import { Loader } from '../utils/Loader';
import { FaSearch } from "react-icons/fa";


const Table = () => {
    const [recordsPerPage, setRecordsPerPage] = useState(10);
    const {loading, books} = useFetchBooks(API);
    const { sortedBooks, handleSort } = useSortBooks(books);
    
    const [searchQuery, setSearchQuery] = useState("");

    const filteredBooks = sortedBooks.filter(book => {
        const authorNames = Array.isArray(book.work.author_names)
            ? book.work.author_names.join(' ')
            : book.work.author_names;
        return authorNames.toLowerCase().includes(searchQuery.toLowerCase());
    });

    const { paginatedItems, currentPage, totalPages, handlePageChange, setCurrentPage } = usePagination(filteredBooks, recordsPerPage);

    return (
        <>
            <div className="flex justify-between items-center my-4">
                <div>
                    Records per page:
                    <select value={recordsPerPage} onChange={e => { setRecordsPerPage(Number(e.target.value)); setCurrentPage(1); }}>
                        <option value={10}>10</option>
                        <option value={50}>50</option>
                        <option value={100}>100</option>
                    </select>
                </div>
                <div className='flex items-center'>
                    Search by author <span className='m-1'><FaSearch/></span>
                    <input
                        type="text"
                        className='p-2 border-violet-500 border-r border-l border-t border-b rounded-md m-2'
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                        placeholder={`Search`}
                    />
                </div>
                <Pagination totalPages={totalPages} currentPage={currentPage} handlePageChange={handlePageChange} />
            </div>
            <table className="mx-auto rounded-2xl border-hidden bg-transparent shadow border-black border overflow-hidden max-w-screen-lg font-poppins">
                <thead className="text-xl bg-purple-800 text-white">
                    <tr>
                        {['cover_id', 'title', 'first_publish_year', 'cover_edition_key', 'author_names'].map(key => (
                            <th
                                key={key}
                                className={`border-purple-800 p-6 leading-relaxed cursor-pointer ${key === 'title' && 'flex items-center'}`}
                                onClick={() => handleSort(key)}
                            >
                                {key}
                                {key === "title" && <RiArrowDropUpFill/>}
                                {/* {key === "author_names" && key.map((item)=>(<p>{item}</p>)) } */}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {loading && <Loader />}
                    <UserData books={paginatedItems} />
                </tbody>
            </table>
        </>
    );
}

export default Table;
