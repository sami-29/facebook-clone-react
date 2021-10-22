import React from "react";
import Post from "./extra/Post";

const Posts = (props) => {
    const posts = props.posts
    return (
        <div className="posts-container">
            <Post
                post = {posts[0]}
            ></Post>
            <Post
                post = {posts[1]}
            ></Post>
        </div>
    )
}
export default Posts