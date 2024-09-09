
const fetchUserDetails = async (id) => {
    try {
        const apiResponse = await fetch(`https://dummyjson.com/users/${id}`);
        const result = await apiResponse.json();
        return result;
    } catch (error) {
        throw new Error(error);
    }
}

const  UserDetails = async({params}) => {
    const userDetails = await fetchUserDetails(params.details); 
    return (
        <div className="p-20">
            <h1>This is user details page</h1>
            <p>{userDetails?.firstname} {userDetails?.lastname}</p>
            <p>{userDetails?.age}</p>
            <p>{userDetails?.email}</p>
            <p>{userDetails?.phone}</p>
            <p>{userDetails?.birthDate}</p>
        </div>
    )
}

export default UserDetails