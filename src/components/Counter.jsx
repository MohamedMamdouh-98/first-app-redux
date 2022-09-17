import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../store/counterSlice'


const Counter = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()  
  return (
    <div>
      <h1>Hello Redux Basic</h1>
        <>
          <div className="counter">Counter: {count}</div>
          <div>
            <button className="btn" onClick={() => dispatch(increment())}>
              increase +
            </button>
            <button className="btn" onClick={() => dispatch(decrement())}>
              decrease -
            </button>
          </div>
        </>

      <div>
        <button className="btn">Hide/Show Counter Number</button>
      </div>
    </div>
  );
}

export default Counter