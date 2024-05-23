// import { useEffect, useState } from "react"
// import 

// const Search = () =>{
//     const [search, setSearch] = useState("")
//     const fetchSearch = async() =>{
//         const URL = "http://openlibrary.org/search.json?author=";
//         const response = await fetch(`${URL}${search}`)
//         const data = await response.json()
//         console.log(data)
//     }

//     useEffect(()=>{
//         fetchSearch()
//     }, [search])

//     return(
//         <input 
//         placeholder="ex: JK Rowling"
//         className="bg-purple-800 border-2 border-purple-800 text-white px-4 py-3 rounded-lg"
//         value={search}
//         onChange={(e)=>setSearch(e.target.value)}/>
//     )
// }

// export default Search;