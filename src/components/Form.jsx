import { getDocs, doc } from "firebase/firestore";
import  { useEffect,useState } from 'react'
import { blogCollectionref } from '../lib/firestore.collecton';
import { useNavigate } from "react-router-dom";

const Form = () => {
    const navigate =useNavigate();
     const [blogs,setBlogs] = useState([]);
     const [id,setId]= useState()
        console.log(blogs);
        useEffect(() => {
          getdata();
        }, []);
    const getdata= async ()=>{
        try {
            const recievedData = await getDocs(blogCollectionref);
            // console.log(recievedData);
            const record= recievedData.docs.map(doc =>({
                data:doc.data(),
                id:doc.id
            }
            ))
            setBlogs(record)
        } catch (error) {
            console.log(error.message);
        }
    }
    const nextpage = (id) =>{
            setId(id)
        navigate(`/posts/${id}`);}
    
  return (
    <div>
      <div className="grid">
        
          {blogs.map((blog) => {
                const {id,title,body} = blog;
                console.log(id)
            return(
                     <div key={blog.id} className="card" onClick={() => nextpage(id)}>
                    {blog.id}:{blog.data.title} : {blog.data.body}
           
            </div>
            )
               
            })};
          
        
      </div>
      <button onClick={() => navigate("/posts")}>add new post</button>
    </div>
  );
}

export default Form