import React from 'react'
import { Link } from 'react-router-dom'
import SideBar from '../components/SideBar'

const HomePage = () => {
  return (
    <div>HomePage
      <SideBar />
      <p className="mt-4"><Link to="/posts">User Posts</Link> </p>
      <p className="mt-4"><Link to="/postsform">Create Post</Link> </p>
      <p className="mt-4"><Link to="/allposts">All Posts</Link> </p>
    </div>
  )
}

export default HomePage
