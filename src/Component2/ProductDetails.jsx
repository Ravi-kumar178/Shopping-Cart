import React, { useCallback, useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom'
import { Spinner } from './Spinner';
import { useDispatch, useSelector } from 'react-redux';
import { add,remove } from '../redux/slice/CartSlice';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';

const ProductDetails = () => {

    const[item,setItem] = useState(null);
    const[loading,setLoading] = useState(false);

   // const navigate = useNavigate("/");

    const {cart} = useSelector((state)=>state);
    const dispatch = useDispatch();

    function removeFromCart(){
        dispatch(remove(item.id));
        toast.error("Items removed");
      }
    
      function addToCart(){
        dispatch(add(item));
        toast.success("Items Added");
        //navigate("/");
      }
 
    const {id} = useParams();
    console.log("id: ",id);

    const details = useCallback(async () => {
        setLoading(true);
        try {
          const res = await fetch(`https://fakestoreapi.com/products/${id}`);
          const data = await res.json();
          console.log(data);
          setItem(data);
        } catch (error) {
          console.log("error in details: ", error);
        } finally {
          setLoading(false);
        }
    }, [id]);


    useEffect(()=>{
        details();
    },[details]);

    console.log("Item detailing: ",item);

  return (
    <div className='max-w-6xl mx-auto'>
      {
        loading?
        (<div>
            <Spinner/>
        </div>):
        (
            item && (
                <div className='my-10 w-[95%] mx-auto flex flex-col md:flex-row justify-center items-center  md:items-start'>
                    {/* image , category , rating */}
                    <div className='w-[100%] mx-auto flex flex-col gap-2'>
                        <motion.div
                        initial={{ opacity: 0, x: '-10%', y: '-10%' }}
                        animate={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                        className='w-80'>
                            <img src={item.image} alt='' loading='lazy'/>
                        </motion.div>
                        <div className='w-80 flex justify-between items-center'>
                            <p className='text-xl font-semibold text-gray-700'>Sales: <span className='font-bold text-[#186301]'>{item.rating.count}</span></p>
                            <p className='text-xl font-semibold text-gray-700'>rating: <span className='font-bold text-[#186301]'>{item.rating.rate}/5</span></p>
                        </div>
                    </div>
                    <div className='w-[100%] mt-20 flex flex-col gap-4 '>
                        {/* title */}
                        <h1 className='font-bold text-3xl text-gray-700'>{item.title}</h1>
                        <p className='text-xl font-semibold text-gray-700'>Category: <span className='font-bold'>{item.category}</span></p>
                        {/* description */}
                        <p className='text-gray-400 text-lg'>{item.description}</p>
                        {/* price , add to cart */}
                        <div className='w-full flex justify-between items-center'>
                            <p className='text-xl font-semibold text-gray-700'>Price: <span className='text-green-600 font-bold'>${item.price}</span></p>
                            <div>
                                {
                                    cart.some((i)=>(i.id === item.id)) ?
                                    (
                                    <button onClick={removeFromCart}
                                    className='text-gray-700 font-semibold  border-2 border-gray-700 rounded-full px-3 py-[2px] hover:bg-gray-700 hover:text-slate-100 transition-all duration-300 ease-in-out'
                                    >Remove Item</button>
                                    )
                                    :
                                    (
                                    <button onClick={addToCart} 
                                        className='text-gray-700 font-semibold  border-2 border-gray-700 rounded-full px-3 py-[2px] hover:bg-gray-700 hover:text-slate-100 transition-all duration-300 ease-in-out'
                                    >Add to Cart</button>
                                    )
                                }
                            </div>
                        </div>

                    </div>
                </div>
            )
            
            
        )
      }
    </div>
  )
}

export default ProductDetails