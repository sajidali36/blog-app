import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div>HomePage
      <p className="mt-4"><Link to="/posts">Posts page</Link> </p>
      <p className="mt-4"><Link to="/postsform">Posts form</Link> </p>
    </div>
  )
}

export default HomePage
