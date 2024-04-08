import React, { useState } from 'react'
import { Post } from '../../Types';
import { Link, useNavigate, useParams } from 'react-router-dom';
import CommentPage from '../comments/CommentPage';
import { Comment } from '../../Types';
import { useDispatch, useSelector } from 'react-redux';

interface Props {
  comments: Comment[];
  setCommentsState: React.Dispatch<React.SetStateAction<Comment[]>>;
}

const ViewPost: React.FC<Props> = ({ comments, setCommentsState }) => {
  const dispatch = useDispatch();
  const posts: Post[] = useSelector((state: any) => state.posts.posts);
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
