import React, { useEffect, useState } from 'react'
import './Film.css'
import { useDispatch , useSelector } from 'react-redux'
import { addItem } from '../../store/CartSlice'
import {STATUSES, fetchProduct} from '../../store/ProductSlice'


const Film = () => {
    const dispatch = useDispatch();

     const { data: Films , status } = useSelector((state) => state.product) 
    // const [Films,setFilms] = useState([])
    useEffect(() => {
        dispatch(fetchProduct()); 

        // const fetchFilm = async() => {
        //     const res = await fetch('https://fakestoreapi.com/products')

        //     const data = await res.json();
        //     console.log(data)
        //     setFilms(data)
        // };
        // fetchFilm()


    },[]);


    const handleAdd = (film) => {
        dispatch(addItem(film));

    };

    if(status === STATUSES.LOADING){
      return <h2>Loading ...</h2>
    }

    if(status === STATUSES.ERROR){
      return <h2>SOmeThing Wants Wrong.....</h2>
    }

    
  return (
    <div className='FilmsWrapper'>
    {
        Films.map((film) => (
            <div className='card' key={film.id}>
            <img src={film.image} alt=" "/>
            <h4>{film.title}</h4>
            <h5>{film.price}</h5>
            <button onClick={() => handleAdd(film)} className='btn'>Add to Cart</button> 
            
            
             </div>

        ))
    }
      
    </div>
  )
}

export default Film
