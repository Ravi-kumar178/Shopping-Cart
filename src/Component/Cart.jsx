import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { CartItem } from '../Component2/CartItem';


export const Cart = () => {

  const {cart} = useSelector( (state) => state);
  console.log(cart);

  const[totalAmount, setTotalAmount] = useState(0);

  useEffect(()=>{
    setTotalAmount(cart.reduce((acc,curr)=>(acc+curr.price),0));
  },[cart])

  return (
    <div className='w-6xl min-h-fit mx-auto py-20 '>
       {
        cart.length > 0 ? 
        (
          <div className='w-full px-10 sm:flex '>

            <div className='w-full grid grid-cols-1 gap-10'>
              {
                cart.map((item) => (
                   <CartItem item={item} key={item.id}/>
                ),[cart])
              }
            </div>

            <div className=" lg:-translate-x-56 md:-translate-x-40 sm:-translate-x-32 xs:-translate-x-20">

              <div className=' flex flex-col items-between gap-1'>
                <p className='text-gray-700 text-xl font-bold tracking-wide'>Your Cart</p>
                <p className='text-green-600 font-bold text-2xl uppercase'>Summary</p>

                <p className='text-gray-700 font-semibold'>Total Items: {cart.length}</p>
              </div>

              <div className='w-full flex flex-col gap-4 py-2'>
                <p className='w-[150%] text-gray-700 font-semibold'>Total Amount: <span className='text-green-600 font-semibold'>${totalAmount}</span></p>
                <button className='text-gray-700 font-semibold text-sm border-2 border-gray-700 rounded-full px-3 py-[2px] hover:bg-gray-700 hover:text-slate-100 transition-all duration-300 ease-in-out'>Check Out Now</button>
              </div>
            </div>

          </div>
        )
         : 
        (
         <div className='w-full flex flex-col gap-4 justify-center items-center'>
            <p className='text-gray-700 font-bold text-xl '>Cart is Empty!!!</p>

            <Link to={"/"}>
               <button className='text-gray-700 font-semibold text-sm border-2 border-gray-700 rounded-full px-3 py-[2px] hover:bg-gray-700 hover:text-slate-100 transition-all duration-300 ease-in-out'>Shop Now</button>
            </Link>
         </div>
         )
       }
    </div>
  )
}
