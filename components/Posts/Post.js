import React from 'react'

const Post = ({title,body}) => {
    return (
        <div style={{width:"70%" ,textAlign:"center",padding:"10px",boxShadow:"2px 2px 5px rgba(0,0,0,0.3)" }}>
            <h1> Working {title}</h1>
            <p>{body}</p>
        </div>
    )
}

export default Post
