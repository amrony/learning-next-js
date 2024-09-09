// fetch

import Link from "next/link";

const fetchListOfUser = async() => {
    try {
        const apiResponse = await fetch('https://dummyjson.com/users');
        const result = await apiResponse.json();

        return result.users;
    } catch (error) {
        throw new Error(error);
    }
}

const ServerSideDataFetching = async() => {
    const listOfUsers = await fetchListOfUser();

    return (
        <div className="p-10">
            <h1>Server side data fetching : User List Page</h1>
            <ul>
                {
                    listOfUsers && listOfUsers.length > 0 ?
                    listOfUsers.map((user) => (
                        <Link href={`/server-data-fetch/${user.id}`}><li className="mt-5 cursor-pointer">{user.firstName}</li></Link>
                    ))  
                    : null
                
                }
            </ul>
        </div>
    )
}

export default ServerSideDataFetching