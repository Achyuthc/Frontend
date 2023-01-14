
import { useEffect,useState } from 'react'
import { supabase } from './client'



function Post() {
    const [posts,setPosts]=useState([]);
    const [post,setPost]=useState({id:null,created_at:""});

    const {userId,title,text,createdAt,tags,images,updatedAt} =post;
    const {tag,setTag}=useState("");
    const {image,setImage}=useState();

    useEffect(()=>{
        fetchPosts();
        console.log("fected")
    },[])



    async function fetchPosts() {
        const {data} =await supabase
        .from('posts')
        .select('*');
        
        setPosts(data);
        console.log("hi")
        console.log(data);
    }
    async function createPost() {
        await supabase
        .from("posts")
        .insert(post)
        .single();
        setPost({userId:1,title:"",text:"",createdAt:"",tags:[],images:[], updatedAt:""})
        fetchPosts();
        
        setTag("");
        setImage("");

    }
    
  return (
    <div className='post'>
        {/*<input type="number" placeholder='userId' value={userId} onChange={e=>setPost({...post,userId:e.target.value})}  />
        <input type="text"   placeholder='title' value={title} onChange={e=>setPost({...post,title:e.target.value})}  />
        <input type="text" placeholder='text' value={text} onChange={e=>setPost({...post,text:e.target.value})}  />
        <input type="date" placeholder='createdAt' value={createdAt} onChange={e=>setPost({...post,createdAt:e.target.value})}  />
        <input type="text" placeholder='tag' value={tag} onChange={e=>{setTag(e.target.value);tags.push(tag); setPost(post)}}  />
        <input type="text" placeholder='image' value={image} onChange={e=>{setImage(e.target.value);images.push(image);setPost(post)}}  />
        <input type="date" placeholder='updatedAt' value={createdAt} onChange={e=>setPost({...post,updatedAt:e.target.value})}  />
        <button onClick={createPost}>Create Post</button>
  */}
    <h1>{posts.length}</h1>
        {
            posts.map(p=>(
                <div key={p.postId} >
                    <ul>
                        <li>{p.title}</li>
                        <li>{p.text}</li>
                        <li>{p.createdAt}</li>
                        <li>{p.tags[0]}</li>
                        <li>{p.images[0]}</li>
                        
                    </ul>
                </div>

            ))
        }

    </div>
  )
}

export default Post

