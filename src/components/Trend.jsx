import React from 'react'
import search from "../assets/search.svg"
import Trends from './Trends'

export default function Trend() {
  return (
    <div className=' ml-7 mt-9 w-auto h-screen sticky inset-0'>
       <div className='flex items-center justify-evenly   bg-slate-200 rounded-[100px]  p-3 w-[280px] '>
       <img className='cursor-pointer' src={search} />
    <input className='bg-slate-200 outline-none ' name='search' placeholder="Search twitter" />
       </div>
       <div className='bg-slate-100 mt-4  rounded-lg pt-4'>
        <h1 className='mx-3  font-[roboto]  font-semibold text-slate-800'>Trends for you</h1>
       <Trends sub='Trending' tag='#FrontEndDevelopers' tweets='556k Tweets' />
       <Trends sub='Trending' tag='#FrontEndDevelopers' tweets='556k Tweets' />
       <Trends sub='Trending' tag='#FrontEndDevelopers' tweets='556k Tweets' />
       <Trends sub='Trending' tag='#FrontEndDevelopers' tweets='556k Tweets' />
       <Trends sub='Trending' tag='#FrontEndDevelopers' tweets='556k Tweets' />
       </div>
    </div>
  )
}
