'use client'

import Link from "next/link";
import { useEffect, useState } from "react"

//useEffect hook
//ser, useSwr hook
//with loading state

const ClientSideDataFetching = () => {
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);

    const fetchListOfUsers = async() => {
        try {
            setLoading(true);
            const apiResponse = await fetch('https://dummyjson.com/users');
            const result = await apiResponse.json();

            if(result?.users){
                setUsers(result.users);
                setLoading(false);
            }
           
        } catch (error) {
            console.log(error);
            setUsers([]);
            setLoading(false);
        }
    }

    useEffect(()=>{
        fetchListOfUsers();
    },[]);

    if(loading) 
        return (
            <h3 className="font-extrabold text-3xl">Loading users ! Please Wait</h3>
        );

    return (
        <div className="p-20">
            <h1>Client side data fetching</h1>
            <ul>
                {
                    users && users.length > 0 ?
                    users.map((user) => (
                        <Link href={`/client-data-fetch/${user.id}`}><li className="mt-5 cursor-pointer">{user.firstName}</li></Link>
                    ))  
                    : null
                
                }
            </ul>
        </div>
    )
}

export default ClientSideDataFetching