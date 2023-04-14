import { Avatar } from '@mui/material';
import React, { forwardRef } from 'react'
import "./Post.css";
import InputOption from '../InputOption/InputOption';
import { Comment, Send, Share, ThumbUpSharp } from '@mui/icons-material';

const Post = forwardRef( ({name, description, message, photoUrl}, ref)  => {
  return (
    <div ref={ref} className='post'>
        <div className="post__header">
            <Avatar src={photoUrl}>{name[0]}</Avatar>
            <div className="post__info">
                <h2 style={{fontSize:"15px"}}>{name}</h2>
                <p>{description}</p>
            </div>
        </div>

        <div className="post__body">
            <p>{message}</p>
        </div>

        <div className="post__buttons">
            <InputOption Icon={ThumbUpSharp} title='Like'/>
            <InputOption Icon={Comment} title='Comment'/>
            <InputOption Icon={Share} title='Share' />
            <InputOption Icon={Send} title='Send' />
        </div>
    </div>
  )
})

export default Post