
import { useState, useEffect } from "react";
import axios from 'axios';


import Post from "./Post";
export default function PostListing() {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/comments', { withCredentials: true })
            .then(response => setComments(response.data));
        console.log("got the comments")
    }, [])
    return (
        <div className='bg-reddit_dark'>
            {comments.map(comment => (
                <Post {...comment} />
            ))}
        </div>
    )
}
