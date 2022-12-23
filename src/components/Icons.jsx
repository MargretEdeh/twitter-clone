import React, {useState} from 'react'

export default function Icons(props) {
  const [hover , setHover]= useState(false)
  return (
    <div>
        <div className='font-[roboto] '>
       {hover && <h1 className='absolute text-sm mt-8 text-center py-0 px-1 bg-slate-200 rounded-xl'>{props.modal}</h1>}
       <img onMouseEnter={()=> setHover(true)}
       onMouseLeave={()=> setHover(false)}
         className="hover:rounded-full p-1 hover:bg-slate-300"
             src={props.icon}
              />
</div>
    </div>
  )
}
