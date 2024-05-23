import { useState, useEffect } from 'react';

const useFetchBooks = (url) => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url);
            const data = await response.json();
            setBooks(data);
        };
        fetchData();
        setTimeout(() => {
            setLoading(false)
        }, 5000);
        
    }, [url]);

    return {loading, books};
};

export default useFetchBooks;




