import { Link, useParams } from 'react-router-dom'
import useGetOneProduct from '../hooks/useGetOneProduct'
function ProductDetail() {
    const {id} = useParams();
   const {data,isLoading} = useGetOneProduct(id)
  return (
    <>
        {
            isLoading==true &&(
                <div className='flex justify-center items-center my-10'>
                    <div className='border-gray-300 w-8 h-8 rounded-full animate-spin border-4 border-t-gray-600'></div>
                </div>
            )
        }

        {
            isLoading==false &&(
                 <div>

                    <div className='bg-gray-100 py-2 font-jost'>
                        <div className='flex items-center gap-1 max-w-[90%] lg:max-w-5xl mx-auto text-sm'>
                            <Link>Home</Link>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>

                            <Link>Product</Link>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                            <p className='font-bold'>{data.title}</p>
                        </div>
                    </div>

                    <div className=' max-w-[90%] lg:max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 my-10 font-jost'>
                        <figure className='border border-gray-600 p-2'>
                            <img className='w-full h-full object-cover' src={data.image} alt="" />
                        </figure>
                        <div>
                            <h3 className='text-lg uppercase'>men's clothing</h3>
                            <h1 className='text-3xl font-bold'>{data.title}</h1>
                            <p className='text-2xl text-red-600 font-bold mt-2'>{data.price}$</p>

                            <div className='flex flex-col lg:flex-row items-start lg:items-center gap-4 my-8'>
                                <div className='border border-gray-300 py-2 w-32 flex items-center justify-evenly'>
                                    <button>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                        </svg>

                                    </button>
                                    <button>1</button>
                                    <button>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                        </svg>

                                    </button>
                                </div>

                                <div>
                                    <button className='py-2 px-8 bg-primary text-white'>Add to cart</button>
                                </div>
                                <div>
                                    <button className='py-2 px-8 bg-yellow-600 text-white hover:bg-yellow-500'>Pay now</button>
                                </div>
                            </div>

                            <hr className='text-gray-300'/>

                            <p className='text-gray-500 mt-4'>{data.description}</p>
                        </div>
                    </div>
                </div>
            )
        }
       
    
    </>
  )
}

export default ProductDetail