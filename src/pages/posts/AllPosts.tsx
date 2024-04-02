import { Link } from "react-router-dom"
import { Post } from "../../Types";
import React from 'react';

interface Props {
  posts: Post[];
}

const AllPosts: React.FC<Props> = ({ posts }) => {
  if (posts.length === 0) {
    return <div className="w-50 mx-auto mt-5">
      Posts does not exist.
      <Link to="/" className="ml-4"> Main Page</Link>
    </div>;
  }

  return (
    <div className="w-50 mx-auto">
      {posts.map((post) => (
        <div className="mt-3" key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
      <Link to="/"> Main Page</Link>
    </div>
  )
}

export default AllPosts
