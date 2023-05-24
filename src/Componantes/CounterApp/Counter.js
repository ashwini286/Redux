import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { increment , decrement } from "../../Redux/Counter/counterSlice";
export default function Counter() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch()


  return (
    <>
      <h1>Counter</h1>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <h3>{count}</h3>
    </>
  )
}
