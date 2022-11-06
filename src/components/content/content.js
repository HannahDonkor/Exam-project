import React, {useState} from 'react'
import './content.css';

const Content = () => {
const [count, setCount] = useState(0)
const [show, setShow] = useState(false)
const [customValue, setCustomValue] = useState()


//increases value by 1
    function increaseCount(){
        setCount(prevValue => prevValue +1)
    
    }

//decreases value by 1
    function decreaseCount(){
        if (count==0){
            return
        }
        setCount(prevValue => prevValue -1)

    }

//sets to default value
    function resetCount(){
        setCount(prevValue => prevValue *0)
        
    }

//shows the pop-up
    function setValueCount(){
        setShow (true)
    }

//to input desired figures for custom value
    function handleInput(event){
        setCustomValue (event.target.value)
    }

 //set custom value to counter for pop-up to disappear   
    function handleCustomValue (){
        setCount (customValue)
        setShow (false)
    }


  return (
    <div>
        <div className='bio'>
            <h2>The complete counter for things that matter to you.</h2>

        </div>
        <div className='timer'>{count}</div>
        <div className='buttons-container'>
            <button className='btn' onClick={increaseCount}>Increment</button>
            <button className='btn'onClick={decreaseCount}>Decrement</button>
            <button className='btn'onClick={resetCount}>Reset</button>
            <button className='btn'onClick={setValueCount}>setValue</button>
        </div>
        <div className={show ? 'active' : 'pop-up'}>
            <input onChange={handleInput}/>
            <button onClick={handleCustomValue}>
                Ok
            </button>
        </div>

    </div>
    
    
  )

}

export default Content