import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Post from './Post';

const List = ({ postChange, setPostChange }) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const {data} = await axios.get('http://localhost:5000');
            setPosts(data);
        };
        fetchPosts();
    }, [postChange]);

    return (
        <div className='list'>
            {posts.map((post, id) => {
                return <Post key={id} post={post} setPostChange={setPostChange}/>
            })}
        </div>
    );
};

export default List;