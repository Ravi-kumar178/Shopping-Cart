import React from 'react'
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { remove } from '../redux/slice/CartSlice';
import toast from 'react-hot-toast';

export const CartItem = ({item}) => {

    const dispatch = useDispatch();

    function removeFromCart(){
        dispatch(remove(item.id));
        toast.success("Item Removed");
    }

  return (
    <div className='md:w-[60%] sm:w-[75%] w-full border-b-2 pb-20 border-gray-700'>
        <div className='w-full flex flex-col justify-evenly gap-5 items-center'>
            <div className='w-[150px]'>
                <img src={item.image} alt='' loading='lazy'/>
            </div>
            <div className='w-[60%] flex flex-col gap-2 justify-center '>
                <p className='text-xl tracking-wide font-medium text-gray-700'>{item.title}</p>
                <p className='text-sm text-gray-400 tracking-wider '>{item.description}</p>

                <div className='flex justify-between items-center mx-2'>
                    <p className='text-green-600 font-bold'>${item.price}</p>

                    <div onClick={removeFromCart}
                     className='mr-6 bg-red-700 rounded-full p-1 text-white'
                    >
                        <MdDelete/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
