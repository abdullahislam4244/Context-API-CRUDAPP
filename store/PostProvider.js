import {useState,useEffect} from 'react';
import PostContext from './PostContext';

const PostProvider = ({children}) => {

    const [posts,setposts] = useState([]);
    const [loading,setloading] = useState(false);



    const fetchUpcomingItems =async () => {
       const url= 'https://jsonplaceholder.typicode.com/posts';
        const response = await fetch(url);

        const Jsondata = await response.json();
        const data = Jsondata
       
        return data.slice(0,10);
        }

    const handleUpcomingPosts = async () => {
    
        let data = await fetchUpcomingItems();
   
        await setposts([...data]);
        
        if(data.length > 0) {
       
        setloading(true);
        }
          

            
    }

    useEffect( () => {

      
        if(posts.length === 0) {
       
       handleUpcomingPosts();
        }
        
        
    }, [handleUpcomingPosts])

    const Providervalues = {
        posts,
        loading
    }

return (
    <PostContext.Provider value = {Providervalues}>
        {children}
    </PostContext.Provider>
)


}

export default PostProvider;