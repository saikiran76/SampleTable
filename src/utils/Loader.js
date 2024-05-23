export const Loader = () =>{
    return(
        <div className="flex justify-center ml-[4em] items-center h-screen">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-
            purple-800 flex flex-col"></div>
                <h1 className="text-3xl font-bold text-purple-800">Loading...</h1>
            <div className="animate-pulse h-16 w-16 rounded-full bg-purple-800"></div>
        </div>

    )
}

