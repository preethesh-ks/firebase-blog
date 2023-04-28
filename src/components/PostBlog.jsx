import React,{useEffect, useState} from 'react'
import { doc,  addDoc } from "firebase/firestore"; 
import { blogCollectionref } from "../lib/firestore.collecton";
import { Navigate, useNavigate } from 'react-router-dom';

const PostBlog = () => {
    const navigate= useNavigate();
    const [title,setTitle]=useState('');
    const [body,setBody] = useState('');
    const [author,setAuthor]= useState('');
    const Addblog = async (e)=>{

        e.preventDefault();
        if (title === "") {
          return;
        }
        await addDoc(blogCollectionref, {
          title: title,
          body: body,
          author: author,
        });
        navigate('/')
    }   
    const valid = async ()=>{
        if(title,body,author == ''){
            alert("enter details")
        }else{
           navigate('/')
        }
    }
    
  return (
    <div>
      <h4>add post</h4>
      <form action="" onSubmit={Addblog}>
        <input
          type="text"
          name=""
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          name=""
          id="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <input
          type="text"
          name=""
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button type="submit">Add post</button>
      </form>
    </div>
  );
}

export default PostBlog