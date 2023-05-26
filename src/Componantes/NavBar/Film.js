import React, { useEffect, useState } from 'react'
import './Film.css'
import { useDispatch } from 'react-redux'
import { addItem } from '../../store/CartSlice'

const Film = () => {
    const dispatch = useDispatch();


    const [Films,setFilms] = useState([])
    useEffect(() => {
        const fetchFilm = async() => {
            const res = await fetch('https://fakestoreapi.com/products')

            const data = await res.json();
            console.log(data)
            setFilms(data)
        };
        fetchFilm()


    },[]);


    const handleAdd = (film) => {
        dispatch(addItem(film));

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
