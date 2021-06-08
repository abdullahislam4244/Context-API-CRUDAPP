import React,{useContext} from 'react'
import PostContext from '../../store/PostContext';
import Post from './Post';
const Postlists = () => {

    const posts = useContext(PostContext);
   
    const renderPosts = () => {
         if(posts.loading === false) {
             return <h1>Loading</h1>
         }
         let jsonPosts = posts.posts.map(post=> {
             
            return <Post key={post.id} title={post.title} body={post.body}/>
         })
         return jsonPosts;
    }
    return (
        <div style={{display:"flex" , flexDirection:"column",alignItems:"center"}}>
            
   {renderPosts()}

        </div>
    )
}

export default Postlists


