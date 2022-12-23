import React from 'react'
import dropdown from '../assets/dropdown.svg'

export default function Trends(props) {
  return (
      <div className='border-b'>
      <div className='py-4 pb-7  mx-4'>
        <p className='flex text-xs text-slate-300  justify-between '>{props.sub}  <img className='cursor-pointer' src={dropdown}/> </p>
        <h1 className='text-base text-slate-800'>{props.tag} </h1>
        <h1 className='text-slate-300 text-base'>{props.tweets} </h1>
      </div>
      </div>
  )
}
