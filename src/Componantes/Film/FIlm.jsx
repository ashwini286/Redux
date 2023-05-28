import React from 'react'
import { useDispatch , useSelector } from 'react-redux'
import {fetchFilm , setLoading} from './FilmSlice'




function FIlm() {
    const dispatch = useDispatch()
    const Films = useSelector((state) => state.film)
    console.log("state",Films)

function fetchAllProduct(){
    dispatch(setLoading(!Films.isLoading))
    dispatch(fetchFilm())
}



    if(Films.isLoading){
        return<h1>Loading ...</h1>
    }
  return (
    <div>
      <button onClick={fetchAllProduct}>Fatch List
    </button>
    {
        Films.film.map((f) => {
            return (
                <>
                <img  src={f.Poster} alt='img'/>
                <li>{f.Title}</li>
                </>
            )
        })
    }
    </div>
  )
}

export default FIlm
