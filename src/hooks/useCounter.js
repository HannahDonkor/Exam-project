import { useState } from "react"


function useCounter () {
    const [count, setCount] = useState(0)
    const [show, setShow] = useState(false)
    const [customValue, setCustomValue] = useState()

//increases value by 1
function increaseCount(){
    setCount(prevValue => prevValue +1)

}

//decreases value by 1
function decreaseCount(){
    if (count===0){
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

return [count, increaseCount, decreaseCount, resetCount, setValueCount, show, handleInput,handleCustomValue]

};

export default useCounter;