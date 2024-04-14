import React from 'react'
import { useState } from 'react'
function Counter() {

    let [counter, setcounter] = useState(0)
  let as = document.getElementById('aa')
  if (counter > 20 ) {
setcounter(20)
  }
  else if (counter<0){
setcounter(0)
  }
      const addhandle = () => {
          setcounter(counter + 1)
      }
  
    let removehandle = () => {
        setcounter(counter - 1)
    }
    let resethandle = () => {
        setcounter(0)
    }
    return (
        <div>
            <div>{counter}</div>
            <button id='aa' onClick={addhandle}>add</button>
            <button onClick={removehandle}>remove</button>
            <button onClick={resethandle}>reset</button>

        </div>
    )
}

export default Counter