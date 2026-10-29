import { useState,useEffect } from "react";
import axios from "axios";

function useGetOneProduct(id) {
    
    const [data,setData] = useState([])
    const [isLoading,setIsLoading] = useState(true)
  useEffect(()=>{
    const fetchData = async()=>{
      try {
        const res = await axios.get(`https://fakestoreapi.com/products/${id}`)
        setData(res.data)
      } catch (error) {
        console.log("Error:",error)
      }finally{
        setIsLoading(false)
      }
    }
    fetchData();
  },[id])
  return {
        data,
        isLoading
  }
}

export default useGetOneProduct