import  { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { db} from "../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { blogCollectionref } from '../lib/firestore.collecton';

const PostDetais = async () => {

     const [data,setData] = useState({})
    const {id} =useParams();
    // const [ids,setIds]= useState(id);
    console.log(data.title)
        

    useEffect(() => {
      const fetchData = async () => {
        const docRef = doc(db, "blog", id);
        const docSnap = await getDoc(docRef);
        
        
        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data());
          setData(docSnap.data());
        } else {
          // docSnap.data() will be undefined in this case
          console.log("No such document!");
        }
        
      };
      fetchData();
    },[id]);
 

    
     
   
    
    


  return (
    <div>{data.title}</div>
  )
}

export default PostDetais