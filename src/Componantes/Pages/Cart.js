import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import {removeitem} from '../../store/CartSlice'


const Cart = () => {
  const dispatch = useDispatch()
  const products = useSelector(state => state.cart)
  const handleRemove = (productId)  => {
    dispatch(removeitem(productId))

  }
  return (
    <div>
     <div>Cart</div>
     <div className='cartWrapper'>
     {
      products.map((products) => (
        <div className='cartCard'>
        <img src={products.image} alt='' />
        <h5>{products.title}</h5>
        <h5>{products.price}</h5>
        <button onClick={() => handleRemove(products.id)} className='btn'>Remove</button>
         </div>
      ))

     }

     </div>
    </div>
  )
}

export default Cart
