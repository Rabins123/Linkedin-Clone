import { Avatar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import './Sidebar.css'

function Sidebar() {
  const user = useSelector(selectUser);

  const topics = ['reactjs','competitiveprogramming','programming','softwareengineering','web3','blockchain'];
  const recentItems = topics.map(topic=>{
    return(
      <div className="sidebar__recentItem">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
      </div>
    )
  })

  return (
    <div className='sidebar'>
      <div className="sidebar__top">
        <img src="https://wallpaperaccess.com/full/349649.jpg" 
        alt="" 
        />
        <Avatar src={user.photoUrl} className='sidebar__avatar'>{user.email[0]}</Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statnumber">
            1,290
          </p>
        </div>
        <div className="sidebar__stat">
        <p>Views on Posts</p>
          <p className="sidebar__statnumber">
            2,230
          </p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
          {recentItems}
      </div>
    </div>
  )
}

export default Sidebar
