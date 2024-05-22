import { useState, useEffect } from "react";
import UserData from "./Data";
// import { API } from "../constants";

const API = "https://openlibrary.org/people/mekBot/books/want-to-read.json";

const Table = () =>{
    const [books, setBooks] = useState([]);

    const fetchData = async()=>{
        const response = await fetch(API);
        const data = await response.json();
        console.log(data)
        setBooks(data);
        console.log(books)
    }

    useEffect(()=>{
        fetchData();
    }, [])


    return(
        <>
        <table className="mx-auto rounded-2xl border-hidden bg-transparent shadow border-black border overflow-hidden max-w-screen-lg font-poppins">
            <thead className="text-xl bg-purple-800 text-white">
                <tr>
                    <th className="border-purple-800 p-6 leading-relaxed">cover_id</th>
                    <th className="border-purple-800 p-6 leading-relaxed">title</th>
                    <th className="border-purple-800 p-6 leading-relaxed">first_publish_year</th>
                    <th className="border-purple-800 p-6 leading-relaxed">cover_edition_key</th>
                </tr>
            </thead>
            <tbody>

                <UserData books={books}/>

            </tbody>
        </table>
        </>
    )
}

export default Table;