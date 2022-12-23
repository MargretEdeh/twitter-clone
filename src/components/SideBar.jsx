import React from 'react'
import { NavLink } from 'react-router-dom'


export default function SideBar(props) {
  return (
    <div>
        <li className='list-none' ><NavLink className='flex items-center ml-12 mr-16 hover:bg-slate-300 rounded-3xl py-1 px-1 font-normal font-[roboto] text-xl  ' to={props.path}>
             <img className='m-3   ' src={props.img} /> {props.name}
          </NavLink> </li>
    </div>
  )
}





// <li><NavLink className='flex' to='/explore'>
//         <img src={Hashtag} />
//             Explore
//             </NavLink> </li>
//         <li><NavLink className='flex' to='/notification'>
//         <img src={Notification} />
//             Notification
//             </NavLink> </li>
//         <li><NavLink className='flex' to='/messages'>
//         <img src={Message} />
//             Messages
//             </NavLink> </li>
//         <li><NavLink  className='flex' to='/bookmarks'>
//         <img src={Bookmark} />
//             Bookmarks
//             </NavLink> </li>
//         <li><NavLink className='flex' to='lists'>
//         <img src={List} />
//             List
//             </NavLink> </li>
//         <li><NavLink className='flex' to='profile'>
//         {/* <img src={} /> */}
//             Profile
//             </NavLink> </li>
//         <li><NavLink className='flex' to='more'>
//         <img src={More} />
//             More
//             </NavLink> </li>