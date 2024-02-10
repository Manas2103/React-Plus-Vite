import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'
import parse from "html-react-parser";

function PostCard({$id, title, featuredImage, content}) {
    
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-900 rounded-xl p-3'>
            <div className='w-full justify-center mb-4'>
                <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
                className='rounded-xl' />

            </div>
            <div className='bg-gray-500 rounded-lg p-2'>
              <h2
              className='font-bold text-2xl text-white text-center'
              >{title}</h2>

              <p className='text-white p-4'>{parse(content)}</p>
            </div>

        </div>
    </Link>
  )
}


export default PostCard