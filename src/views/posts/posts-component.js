import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPosts } from './posts-actions';

const Posts = () => {
    const dispatch = useDispatch();
    const { isLoadind, posts } = useSelector(state => state.posts)
    useEffect(() => {
        dispatch(getPosts());
        console.log(posts)
    }, []);

    return (
        <div>
            {isLoadind ?
                <h1>loading</h1> : <h3>pppposts</h3>}
        </div>
    )
}

export default Posts
