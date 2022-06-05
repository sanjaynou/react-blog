import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from "react"
import axios from 'axios'

export default function UserDetails() {
    const params = useParams();
    const [posts, setPosts] = useState([])
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch(`https://reqres.in/api/users/${params.id}`)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setPosts(result.data);
                    console.log(result);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [params.id])
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div>
                <h1>Name : {posts.first_name} {posts.last_name}</h1>
                <h3>Email : {posts.email}</h3>
                <h1><img src={posts.avatar} alt="Avatar"></img></h1>
            </div>
        )
    }
}
