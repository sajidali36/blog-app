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
import NavBar from './components/NavBar';
import { store } from './store';
import { Provider } from 'react-redux';

function App() {
  const navigate = useNavigate();
  const [editingPost, setEditingPost] = useState<Post | undefined>(undefined);

  const [comments, setComments] = useState<Comment[]>([]);

  // useEffect(() => {
  //   const fetchComments = async () => {
  //     const allComments = [];

  //     for (const currentPost of posts) {
  //       const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${currentPost.id}/comments`);
  //       const data = await response.json();

  //       const adaptedComments = data.map((comment: any) => ({ ...comment }));
  //       allComments.push(...adaptedComments);
  //     };

  //     setComments(allComments);
  //   };

  //   fetchComments();
  // }, []);

  const editPost = (post: Post) => {
    navigate("/postsform");
  };
  return (
    <>
      <Provider store={store}>
        <NavBar />
        <AuthProvider>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/postsform" element={<PostForm initialPost={editingPost} />} />
              <Route path="/posts" element={<PostsList onEdit={editPost} />} />
              <Route path="/allposts" element={<AllPosts />} />
              <Route path="/post/:postId" element={<ViewPost comments={comments} setCommentsState={setComments} />} />
            </Route>
          </Routes>
        </AuthProvider>
      </Provider>
    </>
  );
}

export default App;
