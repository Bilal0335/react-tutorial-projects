import React, { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
const Github = () => {
    const data = useLoaderData()

    // const [data, setData] = useState({})

    // useEffect(() => {
         
    // }, [])

    return (
        <div className="text-center text-3xl text-white p-7 bg-gray-500">
            Github Followers: {data.followers}
            <br />
            <img src={data.avatar_url} alt="GitHub Avatar" width={200} className="mx-auto mt-4 rounded-full shadow-lg" />
        </div>
    )
}

export default Github


export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Bilal0335')
    return response.json()
}