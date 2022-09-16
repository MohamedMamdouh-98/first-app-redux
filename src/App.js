import { useSelector, useDispatch } from "react-redux";
import "./App.css";
const App = () => {
  //create dispatch
  const dispatch = useDispatch();
  //get state form store
  const globalSelector = useSelector((state)=> state)
  // const counterState = useSelector((state) => state.value);
  // const toggleSelector = useSelector((state) => state.showCounter);

  const increase = () => {
    dispatch({ type: "increase", payload: 1 });
  };

  const decrease = () => {
    dispatch({ type: "decrease", payload: 1 });
  };
const toggleShowCounter = ()=>{
  dispatch({type: "hide-show"})
}
  return (
    <div className="App">
      <h1>Hello Redux Basic</h1>
      {globalSelector.showCounter && (
        <>
          <div className="counter">Counter: {globalSelector.value}</div>
          <div>
            <button className="btn" onClick={increase}>
              increase +
            </button>
            <button className="btn" onClick={decrease}>
              decrease -
            </button>
          </div>
        </>
      )}

      <div>
        <button className="btn" onClick={toggleShowCounter}>Hide/Show Counter Number</button>
      </div>
    </div>
  );
};

export default App;
