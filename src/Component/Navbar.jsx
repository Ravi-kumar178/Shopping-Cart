import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const Navbar = () => {

  const {cart} = useSelector((state)=>state);

  return (
    <div className=' w-full bg-slate-900 py-3'>
        <div className='max-w-7xl   mx-auto flex justify-between items-center'>
            
            <Link to={"/"}>
                <div className='ml-3'>
                    <img src='../logo.png' width={173} alt='logo' loading='lazy'/>
                </div>
            </Link>

            <div className=' pr-8 text-slate-100 font-medium flex gap-6 items-center text-lg'>
                <Link to={"/"}>
                  <p>Home</p>
                </Link>
                
                <Link to={"/cart"}>
                  <div className='relative '>
                    <FaShoppingCart size={24}/>
                    <span className='absolute -top-4 -right-1 animate-bounce font-semibold bg-green-600 w-[15px] text-center rounded-full text-xs'>{cart.length}</span>
                  </div>
                </Link>
            </div>
        </div>
    </div>
  )
}
