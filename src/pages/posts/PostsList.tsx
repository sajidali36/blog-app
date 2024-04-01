import React from 'react';
import { Post } from '../../Types';

interface Props {
  posts: Post[];
  onDelete: (postId: number) => void;
  onEdit: (post: Post) => void;
}

const PostsList: React.FC<Props> = ({ posts, onDelete, onEdit }) => {
  return (
    <div className="w-50 mx-auto">
      {posts.map((post) => (
        <div className="mt-3" key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <button className="btn btn-info mx-2" onClick={() => onEdit(post)}>Edit</button>
          <button className="btn btn-danger" onClick={() => onDelete(post.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default PostsList;
