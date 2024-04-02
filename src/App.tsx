import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './routes/ProtectedRoute';
import User from './components/User';
import PostsList from './pages/posts/PostsList';
import { Post } from './Types';
import PostForm from './pages/posts/PostForm';

function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [editingPost, setEditingPost] = useState<Post | undefined>(undefined);

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
  };
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/users" element={<User />} />
            <Route path="/postsform" element={<PostForm initialPost={editingPost} onSave={savePost} />} />
            <Route path="/posts" element={<PostsList posts={posts} onDelete={deletePost} onEdit={editPost} />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
