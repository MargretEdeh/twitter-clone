import React, { useEffect, useState } from "react";
import Customize from "../assets/Customize.svg";
import Image from "../assets/Image.svg";
import retweet from '../assets/retweet.svg'
import like from '../assets/like.svg'
import share from '../assets/share.svg'
import Gif from "../assets/gif.svg";
import Stats from "../assets/stats.svg";
import Smiley from "../assets/smiley.svg";
import plus from "../assets/plus.svg";
import comment from '../assets/comment.svg'
import ProfilePic from "../components/ProfilePic";
import Post from "../components/Post";
import Icons from "../components/Icons";
import { database } from "../firebaseConfig";
import  {addDoc, collection, getDocs} from "firebase/firestore";
import { storage } from "../firebaseConfig";
import { ref , uploadBytes, listAll, getDownloadURL} from "firebase/storage";

export default function Home() {
  const [fileUpload, setFileupload]= useState(null)
  const [keydown, setKeydown]=useState(false)
  const [fileList, setFilelist]=useState([])
  const listRef=ref(storage, "/images")
  const Upload=()=>{
    if(fileUpload==null) return;
    const fileRef = ref(storage, `images/${Math.floor(Math.random() * 1000000000)}`)
    uploadBytes(fileRef, fileUpload).then(()=>{
      alert("Yahhh!!! uploaded")
    })
  }
   const addPost= async ()=>{
  await addDoc(postCollection,{text: newPost})
  setNewPost("")
  Upload()
   }
   const [newPost, setNewPost]=useState("")

  const [posts, setPost] = useState([]);
  const postCollection= collection(database, "posts")

  useEffect(()=>{
 listAll(listRef).then((res)=>{
  res.items.forEach((item)=>{
 getDownloadURL(item).then((url)=>{
  setFilelist((prev)=> [...prev, url])
 }
  )})
 })
  }, [])

  useEffect(()=>{
 const getPost= async ()=>{
  const data= await getDocs(postCollection)
  setPost(data.docs.map((doc)=>({...doc.data(), id: doc.id})))

 };
 getPost()
  },[])

  return (
    <div className="mt-1   ">
      <div className="flex py-4 px-8 justify-between w-auto sticky inset-0  bg-white border-r">
        <h1 className="font-semibold font-[roboto] ">Home</h1>
        <img src={Customize} />
      </div>
      <div className="py-5 h-auto px-8 shadow-md border border-t-0 border-l-0 flex   ">
        <ProfilePic />
        <div className="ml-3">
          <input
          onKeyDown={()=>{setKeydown(true)}}
         
            className="font-[roboto] outline-none "
            name="post"
            placeholder="What's happening ?"
            onChange={(e)=> {setNewPost(e.target.value)}}
          />
          <div className="flex items-center justify-between w-[640px]">
            <div className="flex my-10 items-center justify-between w-auto">
              <div className="relative h-full">
              <input onChange={(e)=>{ setFileupload(e.target.files[0])

              }} className=" absolute top-3 opacity-0 left-0 w-full h-full" placeholder="upload" type='file'/>
              <Icons icon={Image} modal="media" />
              </div>            
              <Icons icon={Gif} modal="gif" />
              <Icons icon={Stats} modal="stats" />
              <Icons icon={Smiley} modal="emoji" />
            </div>
            <div className="flex items-center justify-between">
              <img
                className="hover:rounded-full p-2 hover:bg-slate-300"
                src={plus}
              />
             {!keydown && 
              <button onClick={Upload} className="bg-sky-200 ml-1 py-2 px-4 rounded-[100px] text-white font-[roboto] ">
              Tweet
            </button>
             }
              { keydown &&
              <button onClick={addPost} className="bg-blue-500 font-semibold ml-1 py-2 px-4 rounded-[100px] text-white font-[roboto] ">
                Tweet
              </button>}
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-y-scroll scrollbar-hide my-1 p-8 border-r border-t">
      { posts.map((post, index)=>{
        const first = index[0]
        return(
          <div className="py-4 p-5 hover:bg-slate-300">
        <Post name={post.name} user={post.user} text={post.text}/>
        <div className="w-[600px] h-[400px] mt-6  ">
            <img className=' rounded-xl max-w-full h-[350px] ml-40' src={fileList[index]} />
            <div className='flex m-4 ml-44 items-baseline justify-between pr-14 '>
        <img className=' relative z-10' src={comment}/>
        <img src={retweet}/>
        <img src={like}/>
        <img src={share}/>
        </div>
          </div>
        {/* {fileList.map((url)=>{
        return(
          <div className="w-[600px] h-[400px] mt-6  ">
            <img className=' rounded-xl max-w-full h-[350px] ml-40' src={url} />
            <div className='flex m-4 items-baseline justify-between pr-14 '>
        <img className=' relative z-10' src={comment}/>
        <img src={retweet}/>
        <img src={like}/>
        <img src={share}/>
        </div>
          </div>
        )
      })}        */}
     </div>
     ) })}
      </div>
{/* <img src={fileList[2]}/> */}

    </div>
  );
}

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

      // {fileList.map((url)=>{
      //   return(
      //     <div>
      //       <img className=' rounded-xl ' src={url} />
      //       <div className='flex m-4 items-baseline justify-between pr-14 '>
      //   <img className=' relative z-10' src={comment}/>
      //   </div>
      //     </div>
      //   )
      // })}
       {/* {fileList.map((url)=>{
        return(
          <div>
            <img className=' rounded-xl ' src={url} />
            <div className='flex m-4 items-baseline justify-between pr-14 '>
        <img className=' relative z-10' src={comment}/>
        </div>
          </div>
        )
      })} */}