import React ,{useState} from 'react';

const Counter = () => {

    const [count,setCount]=useState(0);
    const [factor,setfactor]=useState(1);

    function incrementCount(){
        setCount(count+factor)
    }
    function decrementCount(){
        setCount(count-factor)
    }
    function incrementFactor(){
        setfactor(factor+1)
    }
    function decrementFactor(){
        setfactor(factor-1)
    }

  return (
    <div>
        <h1>Counter:{count}</h1>
        <button onClick={incrementCount}>Increment</button>
        <button onClick={decrementCount}>decrement</button>
        <h1>Set my factor: {factor}</h1>
        <button onClick={incrementFactor}>IncrementFactor</button>
        <button onClick={decrementFactor}>decrementFactor</button>
    </div>
  )
}

export default Counter;