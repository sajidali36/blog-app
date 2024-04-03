import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './routes/ProtectedRoute';
import PostsList from './pages/posts/PostsList';
import { Post } from './Types';
import PostForm from './pages/posts/PostForm';
import AllPosts from './pages/posts/AllPosts';
import ViewPost from './pages/posts/ViewPost';
import { Comment } from './Types';

function App() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<Post[]>([]);
  const [editingPost, setEditingPost] = useState<Post | undefined>(undefined);

  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();

      const adaptedPosts = data.map((post: any) => ({ ...post }));
      setPosts(adaptedPosts);
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    const fetchComments = async () => {
      const allComments = [];

      for (const currentPost of posts) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${currentPost.id}/comments`);
        const data = await response.json();

        const adaptedComments = data.map((comment: any) => ({ ...comment }));
        allComments.push(...adaptedComments);
      };

      setComments(allComments);
    };

    fetchComments();
  }, []);


  const savePost = (post: Post) => {
    if (post.id) {
      setPosts(posts.map((p) => (p.id === post.id ? post : p)));
    } else {
      const newPost = { ...post, id: Date.now() };
      setPosts([...posts, newPost]);
    }
    setEditingPost(undefined);
  };

  const deletePost = (postId: number) => {
    setPosts(posts.filter((post) => post.id !== postId));
  };

  const editPost = (post: Post) => {
    setEditingPost(post);
    navigate("/postsform");
  };
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/postsform" element={<PostForm initialPost={editingPost} onSave={savePost} />} />
          <Route path="/posts" element={<PostsList posts={posts} onDelete={deletePost} onEdit={editPost} />} />
          <Route path="/allposts" element={<AllPosts posts={posts} />} />
          <Route path="/post/:postId" element={<ViewPost posts={posts} comments={comments} setCommentsState={setComments} />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
