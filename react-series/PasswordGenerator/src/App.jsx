import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
let [length , setlength] = useState(8);
let [Numallow , setNumallow] = useState(false);
let [Charallow , setCharallow] = useState(false);
let [password , setpassword] = useState("");
// useRef hook  
let passwordGenerator = useCallback(()=>{
  let pass = "";
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(Numallow) str += "0123456789"
  if(Charallow  ) str += "!@#$%&)*_{"
  for (let i = 1;i <=length;i++) {
    let char = Math.floor(Math.random() * str.length +1)
    pass += str.charAt(char)
  }
  setpassword(pass)
}
,[length,Numallow,Charallow,setpassword])

let passwordRef = useRef(null)
// useCallback hook
let copy_clipboard = useCallback(() => {
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0,4);
  //copy clipboard syntax
  window.navigator.clipboard.writeText(password)}
,[password])

// useEffective hook
 useEffect(()=>{
  passwordGenerator()
 },[length,Numallow,Charallow,passwordGenerator])
 return (
  <div className="w-full max-w-lg mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500 align-center">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}    
        />
        <button
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        
    </div>
    
    <div className='flex text-sm gap-x-3'>
    
      <div className='flex items-center gap-x-1'>
        <input 
       onClick={copy_clipboard()}
       type='range'
        min={8}
        max={20}
        value={length}
        className='cursor-pointer'
        onChange={(e)=>{setlength(e.target.value)}}
        />
          <label>Length: {length}</label>
      </div>
    
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={Numallow}
          id='Numinput'
          onChange={()=>{setNumallow((pre)=> !pre)}}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
    
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={Charallow}
              id='charinput'
              onChange={()=>{setCharallow((pre)=> !pre)}}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    
    </div>
</div>
    
)
}

export default App
