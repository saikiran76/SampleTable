import React from 'react';

const Pagination = ({ totalPages, currentPage, handlePageChange }) => {
    return (
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
    );
};

export default Pagination;
