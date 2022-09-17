import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logIn } from "../store/authSlice";
import { decrement, increment } from "../store/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const auth = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Hello Redux Basic</h1>
      {auth && (
        <>
          <div className="counter">Counter: {count}</div>
          <div>
            <button className="btn" onClick={() => dispatch(increment(5))}>
              increase +
            </button>
            <button className="btn" onClick={() => dispatch(decrement(2))}>
              decrease -
            </button>
          </div>
        </>
      )}

      <div>
        <button className="btn" onClick={() => dispatch(logIn())}>
          {auth ? "logout" : "logIn"}
        </button>
      </div>
    </div>
  );
};

export default Counter;
