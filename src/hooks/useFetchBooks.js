// // import { useState, useEffect } from 'react';

// // const useFetchBooks = (url) => {
// //     const [books, setBooks] = useState([]);

// //     useEffect(() => {
// //         const fetchData = async () => {
// //             const response = await fetch(url);
// //             const data = await response.json();
// //             setBooks(data);
// //         };
// //         fetchData();
// //     }, [url]);

// //     return books;
// // };

// // export default useFetchBooks;

// import { useState, useEffect } from 'react';

// const useFetchBooks = (url) => {
//     const [books, setBooks] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             const response = await fetch(url);
//             const data = await response.json();
//             const formattedData = data.docs.map(book => ({
//                 cover_id: book.cover_edition_key,
//                 title: book.title,
//                 first_publish_year: book.first_publish_year,
//                 ratings_average: book.ratings_average || 'N/A',
//                 author_name: book.author_name ? book.author_name.join(', ') : 'N/A',
//                 subject: book.subject ? book.subject.join(', ') : 'N/A',
//                 author_birth_date: book.author_birth_date || 'N/A',
//                 author_top_work: book.author_top_work || 'N/A',
//             }));
//             setBooks(formattedData);
//             console.log(books)
//         };
//         fetchData();
//     }, [url]);

//     return books;
// };

// export default useFetchBooks;

import {useState, useEffect} from 'react';
import { useCallback } from 'react';
const URL = "http://openlibrary.org/search.json?title=";


export const useFetchBooks = () => {
    const [searchTerm, setSearchTerm] = useState("The Liberation of Sita");
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [resultTitle, setResultTitle] = useState("");

    const fetchBooks = useCallback(async () => {
        setLoading(true);
        try {
            const response = await fetch(`${URL}${searchTerm}`);
            const data = await response.json();
            console.log("Initial Data", data);
            const {
                docs
            } = data;
            console.log(docs);

            if (docs) {
                const newBooks = docs.map((bookSingle) => {
                    const {
                        key,
                        author_name,
                        cover_i,
                        edition_count,
                        first_publish_year,
                        title
                    } = bookSingle;

                    return {
                        id: key,
                        author: author_name,
                        cover_id: cover_i,
                        edition_count: edition_count,
                        first_publish_year: first_publish_year,
                        title: title
                    };
                });

                setBooks(newBooks);

                if (newBooks.length > 1) {
                    setResultTitle("Your Search Result");
                } else {
                    setResultTitle("No Search Result Found!");
                }
            } else {
                setBooks([]);
                setResultTitle("No Search Result Found!");
            }
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }

        return books;
    }, [searchTerm]);

    useEffect(() => {
        fetchBooks();
    }, [searchTerm, fetchBooks]);

};





