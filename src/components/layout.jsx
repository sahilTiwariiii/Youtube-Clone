import React from 'react'
import  Sidebar from '../components/Sidebar'
import  RecommendedVideos from '../components/RecommendedVideos'
const Layout = () => {
  return (
    <>
        <div className="app__page">
      <Sidebar/>
      <RecommendedVideos/>
      </div>
    </>
  )
}

export default Layout