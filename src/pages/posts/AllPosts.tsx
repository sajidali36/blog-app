import { Link, useNavigate } from "react-router-dom"
import { Post } from "../../Types";
import React from 'react';

interface Props {
  posts: Post[];
}

const AllPosts: React.FC<Props> = ({ posts }) => {
  const navigate = useNavigate();

  if (posts.length === 0) {
    return <div className="w-50 mx-auto mt-5">
      Posts does not exist.
      <Link to="/" className="ml-4"> Main Page</Link>
    </div>;
  }

  return (
    <div className="w-50 mx-auto">
      <button className="btn btn-secondary my-3" onClick={() => navigate(-1)}>Go Back</button>
      {posts.map((post) => (
        <div className="mt-3" key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <button className="btn btn-info mx-2 mt-4"><Link to={`/post/${post.id}`} className="text-decoration-none text-white">View Post</Link></button>
        </div>
      ))}
      <div className="mt-4">
        <Link to="/" > Main Page</Link>
      </div>
    </div>
  )
}

export default AllPosts
