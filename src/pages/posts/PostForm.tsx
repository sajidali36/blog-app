import React, { useState, useEffect } from 'react';
import { Post } from '../../Types';
import { useNavigate } from 'react-router-dom';

interface Props {
  initialPost?: Post;
  onSave: (post: Post) => void;
}

const PostForm: React.FC<Props> = ({ initialPost, onSave }) => {
  const uid = localStorage.getItem('currentUserId');
  const [post, setPost] = useState<Post>(initialPost || { id: 0, title: '', body: '', userId: uid });
  const navigate = useNavigate();

  useEffect(() => {
    if (initialPost) setPost(initialPost);
  }, [initialPost]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(post);
    navigate("/posts");
  };

  return (
    <form className="w-50 mx-auto mt-5" onSubmit={handleSubmit}>
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
