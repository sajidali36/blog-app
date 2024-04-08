import React, { useState, useEffect } from 'react';
import { Post } from '../../Types';
import { useNavigate } from 'react-router-dom';
import { savePost } from './../../features/PostsSlice';
import { useDispatch, useSelector } from 'react-redux';

interface Props {
  initialPost?: Post;
}

const PostForm: React.FC<Props> = ({ initialPost }) => {
  const uid = localStorage.getItem('currentUserId');
  const [post, setPost] = useState<Post>(initialPost || { id: 0, title: '', body: '', userId: uid });
  const navigate = useNavigate();
  const dispatch = useDispatch();


  useEffect(() => {
    if (initialPost) setPost(initialPost);
  }, [initialPost]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(savePost(post));
    navigate("/posts");
  };

  return (
    <form className="w-50 mx-auto mt-5" onSubmit={handleSubmit}>
      <button className="btn btn-secondary mb-3" onClick={() => navigate(-1)}>Go Back</button>
      <div className="mb-3">
        <label className="Htmlm-label">Title</label>
        <input type="text" className="form-control" name="title" value={post.title} onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label className="form-label">Content</label>
        <textarea name="body" className="form-control h-50" value={post.body} onChange={handleChange} required />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default PostForm;
