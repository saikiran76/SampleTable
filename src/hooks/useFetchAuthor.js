import { useEffect, useState } from "react"

export const useFetchAuthor = (url) =>{
    const [author, setAuthor] = useState([]);

    useEffect(()=>{
        const fetchData = async () => {
            const response = await fetch(url)
            const data = await response.json()
            setAuthor(data)
        }
        fetchData()

    }, [url])

    return author;
}

