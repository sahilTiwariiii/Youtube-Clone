import React from 'react'
import "./Sidebar.css"
import HomeIcon from '@material-ui/icons/Home'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import WhatshortIcon from '@material-ui/icons/Whatshot'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAlt';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import SidebarRow from './SidebarRow'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <SidebarRow selected Icon={HomeIcon} title="Home" />
        <SidebarRow Icon={SubscriptionsIcon}  title="Trending" />
        <SidebarRow Icon={WhatshortIcon} title="Subscription" />
        <hr />
        <SidebarRow  Icon={VideoLibraryIcon} title="Library" />
        <SidebarRow  Icon={HistoryIcon} title="History" />
        <SidebarRow  Icon={OndemandVideoIcon} title="Your videos" />
        <SidebarRow  Icon={WatchLaterIcon} title="Watch Later" />
        <SidebarRow  Icon={ThumbUpAltOutlinedIcon} title="Liked videos" />
        <SidebarRow  Icon={ExpandMoreOutlinedIcon} title="Show More" />
    </div>
  )
}

export default Sidebar