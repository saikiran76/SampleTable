const UserData = ({books}) => {
    const reading_logs = books.reading_log_entries;
    //reading_log_entries
    console.log("common man", reading_logs)
    return (
        <>
            {
                reading_logs.map((log) => {
                    const {title, first_publish_year, cover_id, cover_edition_key} = log.work;

                    return (
                        <tr key={cover_id}>
                            <td className="border-purple-800 p-6 text-base leading-relaxed">{cover_id}</td>
                            <td className="border-purple-800 p-6 text-base leading-relaxed">{title}</td>
                            <td className="border-purple-800 p-6 text-base leading-relaxed">{first_publish_year}</td>
                            <td className="border-purple-800 p-6 text-base leading-relaxed">{cover_edition_key}</td>
                        </tr>
                    )
                })

            }
        </>
    )
}
export default UserData;