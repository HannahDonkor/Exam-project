import React, {useState} from 'react'
import './content.css';
import useCounter from '../../hooks/useCounter';

const Content = () => {
    const[count, increaseCount, decreaseCount, resetCount, setValueCount, show, handleInput,handleCustomValue] = useCounter()


  return (
    <div className='main'>
        <div className='bio'>
            {/* <h2>The complete counter for things that matter to you.</h2> */}

        </div>
        <div className='timer'>{count}</div>
        <div className='buttons-container'>
            <button className='btn' onClick={increaseCount}>Increase</button>
            <button className='btn'onClick={decreaseCount}>Decrease</button>
            <button className='btn'onClick={resetCount}>Reset</button>
            <button className='btn'onClick={setValueCount}>Set Score</button>
        </div>
        <div className={show ? 'active' : 'pop-up'}>
            <input type="number" onChange={handleInput}/>
            <button onClick={handleCustomValue}>
                Ok
            </button>
        </div>

    </div>
    
    
  )

}

export default Content