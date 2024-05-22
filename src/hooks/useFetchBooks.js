import { useState, useEffect } from 'react';

const useFetchBooks = (url) => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url);
            const data = await response.json();
            setBooks(data);
        };
        fetchData();
    }, [url]);

    return books;
};

export default useFetchBooks;
