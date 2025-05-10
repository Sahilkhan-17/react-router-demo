import React, { useEffect, useState } from "react"
import { useLoaderData} from "react-router-dom"

export default function Github() {
    const data = useLoaderData();

    // doing this using loader 
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/SahilKhan-17')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //             setData(data);
    //         })
    // }, [])

    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-700 text-white m-4 text-3xl ">
                <img src={data.avatar_url} alt="Sahil" width={300} className="w-64 h-64 rounded-lg mb-4" />
                <h4>Github Name : {data.name} </h4>
                <h4>Github Followers : {data.followers} </h4>
            </div>

        </>

    )
}

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/SahilKhan-17')
    return response.json();
}

