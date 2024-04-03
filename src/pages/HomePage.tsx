import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SideBar from '../components/SideBar'

const HomePage = () => {
  const navigate = useNavigate();

  function logout() {
    localStorage.setItem('isAuthenticated', 'false');
    localStorage.removeItem('currentUserId');
    localStorage.removeItem('currentUserName');
    localStorage.removeItem('currentUserEmail');
    navigate("/login");
  }


  return (
    <div className="mt-4 mx-5">HomePage
      {/* <SideBar /> */}
      <p className="mt-4"><Link to="/postsform">Create Post</Link> </p>
      <p className="mt-4"><Link to="/posts">User Posts</Link> </p>
      <p className="mt-4"><Link to="/allposts">All Posts</Link> </p>
      <button className="btn btn-sm btn-danger ms-5 mt-5" onClick={() => logout()}>Logout</button>
    </div>
  )
}

export default HomePage
