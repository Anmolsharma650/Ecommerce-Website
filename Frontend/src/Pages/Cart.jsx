import React from 'react'
import { useCart } from '../Context/CartContext'
import Lottie from 'lottie-react'
import empty from '../assets/empty.json'
import { FaRegTrashAlt } from 'react-icons/fa'

function Cart() {
  const { CartItem } = useCart()

  return (
    <div className='mt-10 max-w-6xl mx-auto mb-5'>
      {
        CartItem.length > 0 ? (
          <div >
            <h1 className='font-bold text-2xl'> My Cart ({CartItem.length})</h1>
            <div>
              <div>
                {CartItem.map((item, index) => {
                  return <div key={index}
                    className='bg-gray-100 p-5 flex items-center
                     justify-between mt-3 w-full rounded-md'
                  >
                    <div className='flex items-center gap-10'>
                      <img src={item.thumbnail} alt={item.title} className='w-15 h-15 rounded-md' />
                      <div>
                        <h1 className='w-[300px] line-clamp-2'>{item.title}</h1>
                        <p className=' text-red-500 font-semibold text-lg'>${item.price}</p>
                      </div>
                    </div>
                    <div className='bg-red-500 text-white flex gap-4 p-2 rounded-md font-bold text-xl'>
                      <button className=' cursor-pointer'>-</button>
                      <span>1</span>
                      <button className=' cursor-pointer'>+</button>
                    </div>
                    <span className='hover:bg-white/60 transition-all rounded-md p-3 hover:shadow-2xl'>
                      <FaRegTrashAlt className='text-red-500 text-2xl cursor-pointer'/>
                    </span>
                  </div>

                })}
              </div>
            </div>
          </div>
        ) : (
          <div className='flex justify-center items-center h-[400px]'>
            <Lottie animationData={empty} className='w-40 sm:w-52 md:w-64' />
          </div>
        )
      }
    </div>
  )
}

export default Cart
