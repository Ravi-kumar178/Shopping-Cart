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
            const data = res.json();
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
    <div>
        <div>
            {
                loading?
                (<div>
                    <Spinner/>
                </div>)
                :
                (
                    <div>
                        {
                            items.length > 0 ? 
                            (
                             <div>
                                {
                                    items.map((item)=>(
                                        <ProductItem/>
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
