import axios from "axios"
import Card from "../components/Card"
import { useState,useEffect } from "react"
function Home() {
    const [data,setData] = useState([])
    useEffect(()=>{
        const fetchData = async()=>{
            try {
                const res = await axios.get("https://fakestoreapi.com/products?limit=8")
                setData(res.data)
            } catch (error) {
                console.log("Error:",error)
            }
        }
        fetchData();
    })
  return (
    <>
        <div style={{backgroundImage:"url('slide_02.jpg')"}} className='bg-secondary bg-center bg-cover bg-no-repeat lg:bg-contain h-screen flex items-center px-4 lg:px-40 font-jost'>
            <div>
                <h3 className='text-xl font-bold'>New Collection</h3>
                <h1 className='text-6xl lg:text-7xl font-bold'>Luxury Without <br />Labels</h1>
                <p className='mt-2 mb-4'>Explore new-in product and best sellers</p>
                <button className='py-2 px-8 bg-primary text-white'>View Collection</button>
            </div>
        </div>

        <div className='max-w-[90%] lg:max-w-5xl mx-auto my-20 font-jost'>
            <h1 className='text-center text-3xl font-bold'>Best Sellers</h1>
            <p className='text-center'>Explore our best seller products</p>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10'>
                {
                    data.map(item=>(
                         <Card key={item.id} data={item}/>
                    ))
                }
               
               
            </div>
        </div>
    </>
  )
}

export default Home