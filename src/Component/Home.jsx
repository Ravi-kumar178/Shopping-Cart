import React, { useEffect, useState } from 'react'
import { ProductItem } from '../Component2/ProductItem';
import { Spinner } from '../Component2/Spinner';

const API_KEY = "https://fakestoreapi.com/products";
console.log(API_KEY);
export const Home = () => {

    const[loading, setLoading] = useState(false);
    const[items, setItems] = useState([]);

    async function fetchItems(){
        setLoading(true);

        try{

            const res = await fetch(API_KEY);
            const data = await res.json();
            console.log(data);
            setItems(data);

        }

        catch(err){
            console.log("Something went wrong");
            setItems([])
        }
        setLoading(false);    
    }

    useEffect(()=>{
        fetchItems()
    },[]);

  return (
    <div className='max-w-6xl mx-auto'>
        <div>
            {
                loading?
                (<div>
                    <Spinner/>
                </div>)
                :
                (
                    <div className='w-full h-full mx-auto'>
                        {
                            items.length > 0 ? 
                            (
                             <div className='w-full h-full py-8 pt-24 mx-auto grid  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-14'>
                                {
                                    items.map((item)=>(
                                        <ProductItem key={item.id} item={item}/>
                                    ))
                                }
                             </div>   
                            ):
                            (
                            <div>
                                <p>Not Available!!!</p>
                            </div>)
                        }
                    </div>  
                )
            }
        </div>
    </div>
  )
}
