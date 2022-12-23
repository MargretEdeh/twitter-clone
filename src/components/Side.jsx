import React, {useState, useEffect} from 'react'
import SideBar from './SideBar'
import HomeIcon from '../assets//HomeIcon.svg'
import Hashtag from '../assets/Hashtag.svg'
import Bookmark from '../assets/Bookmark.svg'
import List from '../assets/List.svg'
import More from '../assets/More.svg'
import Message from '../assets/Message.svg'
import Notification from '../assets/Notification.svg'
import twitterLogo from '../assets/twitterLogo.svg'

// import { list } from 'postcss'

export default function Side() {
  
  return (
    <div className='font-semibold  h-screen ml-28 ' >
        <img className='w-10 ml-14 my-8 ' src={twitterLogo} alt='twitter' />
        <SideBar path='/' img={HomeIcon} name="Home" />
        <SideBar path='/explore' img={Hashtag} name="Explore" />
        <SideBar path='/notification' img={Notification} name="Notifications" />
        <SideBar path='/message' img={Message} name="Messages" />
        <SideBar path='/bookmark' img={Bookmark} name="Bookmarks" />
        <SideBar path='/list' img={List} name="List" />
        <SideBar path='/profile' img={HomeIcon} name="Profile" />
        <SideBar path='/more' img={More} name="More" />
        <button className=' bg-blue-500 ml-12 my-2 py-3 px-16 rounded-[100px] hover:bg-blue-600 font-bold text-white font-[roboto]  '>Tweet</button>

      
    </div>
  )
}
