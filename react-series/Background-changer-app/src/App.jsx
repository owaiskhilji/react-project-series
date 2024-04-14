import { useState } from 'react';
import './App.css';

function App() {
  let [color,setcolor] = useState("yellow")
  return (
<div className='main'
style={{backgroundColor : color}}>
  <div className=''>
  <button onClick={() => setcolor('blue')}>BLUE</button>
  <button onClick={() => setcolor('green')}>BLUE</button>
  <button onClick={() => setcolor('red')}>BLUE</button>
</div>
</div>

  );
}

export default App;
