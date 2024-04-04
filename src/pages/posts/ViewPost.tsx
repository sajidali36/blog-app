import React, { useState } from 'react'
import { Post } from '../../Types';
import { Link, useNavigate, useParams } from 'react-router-dom';
import CommentPage from '../comments/CommentPage';
import { Comment } from '../../Types';

interface Props {
  posts: Post[];
  comments: Comment[];
  setCommentsState: React.Dispatch<React.SetStateAction<Comment[]>>;
}

const ViewPost: React.FC<Props> = ({ posts, comments, setCommentsState }) => {
  const navigate = useNavigate();
  const { postId } = useParams();
  const post = posts.find((post: any) => post.id == postId);

  if (!post) return <div>Post does not exist</div>;

  return (
    <div className="w-50 mx-auto">
      <button className="btn btn-secondary my-3" onClick={() => navigate(-1)}>Go Back</button>
      <div className="mt-3" key={post.id}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <CommentPage postId={post.id} comments={comments} setCommentsState={setCommentsState} />
      </div>
      <Link to="/"> Main Page</Link>
    </div>
  )
}

export default ViewPost;
