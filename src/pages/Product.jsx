
import Card from '../components/Card'
import useGetAllProduct from '../hooks/useGetAllProduct'
function Product() {
  const {data,isLoading} = useGetAllProduct();
  return (
    <>
      {
        isLoading ==true &&(
          <div className='flex justify-center items-center my-10'>
            <div className='border-gray-300 w-8 h-8 rounded-full animate-spin border-4 border-t-gray-600'></div>
          </div>
        )
      }
      <div className='max-w-[90%] lg:max-w-5xl mx-auto my-10 font-jost'>
          <h1 className='text-center text-3xl uppercase mb-7'>All Products</h1>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
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

export default Product