import React from 'react';
import { Post } from '../../Types';
import { Link } from 'react-router-dom';

interface Props {
  posts: Post[];
  onDelete: (postId: number) => void;
  onEdit: (post: Post) => void;
}

const PostsList: React.FC<Props> = ({ posts, onDelete, onEdit }) => {
  if (posts.length === 0) {
    return <div className="w-50 mx-auto mt-5">
      Posts does not exist.
      <Link to="/" className="ml-4"> Main Page</Link>
    </div>;
  }
  const uid = localStorage.getItem('currentUserId');
  const filterPosts = posts.filter((post) => post.userId === uid);

  return (
    <div className="w-50 mx-auto">
      <button className="btn btn-success my-4"><Link to="/postsform" className="text-decoration-none text-white">Create Post</Link></button><br />
      {filterPosts.map((post) => (
        <div className="mt-3" key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <button className="btn btn-info mx-2 mt-4" onClick={() => onEdit(post)}>Edit</button>
          <button className="btn btn-danger mt-4" onClick={() => onDelete(post.id)}>Delete</button>
        </div>
      ))}
      <div className="mt-4">
        <Link to="/" > Main Page</Link>
      </div>
    </div>
  );
};

export default PostsList;
