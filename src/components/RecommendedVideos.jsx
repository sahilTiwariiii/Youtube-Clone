import React from 'react'
import "./RecommendedVideos.css"
import VideoCard from './VideoCard'
const RecommendedVideos = () => {
  return (
    <div className='recommendedVideos' >
        <h2>Recommended</h2>
        <div className="recommendedVideos__videos">
            <VideoCard 
            title="Mrbeast closed the mouth"
            views="2.3M Views"
            timestamp="3 days ago"
            channelImage="https://1000logos.net/wp-content/uploads/2023/08/MrBeast-Logo.png"
            channel="MrBeast"
            image="https://d3dbooq5a0yc71.cloudfront.net/2023/09/MrBeast-mouth-closed.jpg"
            />
            
            <VideoCard 
            title="I Spent 7 Days Buried Alive"
            views="6.3M Views"
            timestamp="6 days ago"
            channelImage="https://1000logos.net/wp-content/uploads/2023/08/MrBeast-Logo.png"
            channel="MrBeast"
            image="https://pbs.twimg.com/media/FC3208aXsAMjNpn.jpg:large"
            />
            
            <VideoCard 
            title="Airplane ✈️ - Drone Mode"
            views="3.3M Views"
            timestamp="18 hours"
            channelImage="https://i.pinimg.com/564x/d5/fb/96/d5fb96144daf265a7e6698ecad16e1cc.jpg"
            channel="MR.INDIAN HACKER"
            image="https://i.ytimg.com/vi/9bGv2UEDOEQ/maxresdefault.jpg"
            />
            
            <VideoCard 
            title="We Launch 1000 - 100% Real"
            views="35M Views"
            timestamp="3 days ago"
            channelImage="https://i.pinimg.com/564x/d5/fb/96/d5fb96144daf265a7e6698ecad16e1cc.jpg"
            channel="MR.INDIAN HACKER"
            image="https://i.ytimg.com/vi/OJkAcqE0_O8/maxresdefault.jpg"
            />
            
            <VideoCard 
            title="The Resume That Got Me Into Google"
            views="2.3M Views"
            timestamp="3 days ago"
            channelImage="https://yt3.ggpht.com/h_5EX_GD2dB4Ti3cQbQ1BjGkm_M-EN_z_mWSw7KG-kYzswbULF5bTogzGRm-KcawIqiXgcnJiOM=s176-c-k-c0x00ffffff-no-rj-mo"
            channel="Power Couple"
            image="https://i.ytimg.com/vi/5uhmS8nzxM4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBr8Wdr9SwjE67sr_jCuz9IXDFzxQ"
            />
            
            <VideoCard 
            title="FASTEST Coding Get a Job"
            views="2.3M Views"
            timestamp="3 days ago"
            channelImage="https://yt3.ggpht.com/h_5EX_GD2dB4Ti3cQbQ1BjGkm_M-EN_z_mWSw7KG-kYzswbULF5bTogzGRm-KcawIqiXgcnJiOM=s176-c-k-c0x00ffffff-no-rj-mo"
            channel="Power Couple"
            image="https://i.ytimg.com/vi/79pKwdiqcwI/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDvsSwwKwNJZT8DkWx4XZsbrxz1kw"
            />
            
        </div>
    </div>
  )
}

export default RecommendedVideos