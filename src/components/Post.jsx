import React from 'react'
import ProfilePic from './ProfilePic'
import verified from '../assets/verified.svg'
import comment from '../assets/comment.svg'
import retweet from '../assets/retweet.svg'
import like from '../assets/like.svg'
import share from '../assets/share.svg'

function Post(props) {
  return (
    <div className='flex'>
        <ProfilePic/>
        <div className=' font-[roboto] ml-5 '>
            <h1 className='flex items-center font-bold'>Margret Edeh <span><img className='ml-2' src={verified}/> </span> <span className='text-slate-400 font-normal ml-2'>{props.user} </span></h1>
            <h1 className='font-normal my-3'>{props.text} </h1>
            {/* <img className=' rounded-xl ' src={props.pic} />
            <div className='flex m-4 items-baseline justify-between pr-14 '>
        <img className=' relative z-10' src={comment}/>
        <img src={retweet}/>
        <img src={like}/>
        <img src={share}/>
        </div>       */}
        </div>
      
    </div>
  )
}

export default Post


{/* {fileList.map((url)=>{
        return(
          <div className="w-[600px] h-[400px] mt-96  ">
            <img className=' rounded-xl max-w-full h-[350px] ' src={url} />
            <div className='flex m-4 items-baseline justify-between pr-14 '>
        <img className=' relative z-10' src={comment}/>
        <img src={retweet}/>
        <img src={like}/>
        <img src={share}/>
        </div>
          </div>
        )
      })} */}