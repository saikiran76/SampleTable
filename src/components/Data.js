const UserData = ({ books }) => {
    const reading_logs = books || [];
    return (
        <>
            {reading_logs.map((log) => {
                const { title, first_publish_year, cover_id, cover_edition_key, author_names } = log.work;
                return (
                    <tr key={cover_id}>
                        <td className="border-purple-800 p-6 text-base leading-relaxed">{cover_id}</td>
                        <td className="border-purple-800 p-6 text-base leading-relaxed">{title}</td>
                        <td className="border-purple-800 p-6 text-base leading-relaxed">{first_publish_year}</td>
                        <td className="border-purple-800 p-6 text-base leading-relaxed">{cover_edition_key}</td>
                        <td className="border-purple-800 p-6 text-base leading-relaxed">{author_names}</td>
                    </tr>
                );
            })}
        </>
    );
}
export default UserData;