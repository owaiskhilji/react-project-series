import React, { useState } from 'react'
import { db,collection,addDoc } from '../Cobfig/Firebase'

export default function Formget() {
  let [name,setname] = useState('')
  let [position,setposition] = useState('')
  let [supervaiser,setsupervaiser] = useState('')
// console.log(supervaiser)   

async function handle(event) {
  event.preventDefault();

  const docRef = await addDoc(collection(db, "Form"), {
  name:name,
  position: position,
  supervaiser: supervaiser
});
console.log("Document written with ID: ", docRef.id);


}
return (
    <div>
      <form onSubmit={handle}>
<label >
  Name :
    <input type="text" onChange={(e)=>setname(e.target.value)} />
</label>
<br /> <br />
<label >
  Position :
    <input type="text" onChange={(e)=>setposition(e.target.value)}/>
  </label>
  <br /> <br />
  <label >
 Supervaiser :
   <select onChange={(e)=>setsupervaiser(e.target.value)}>
   <option selected disabled  value="select">select</option>
   <option value="1st">1st</option>
   <option value="2nd">2nd</option>
   <option value="3rd">3rd</option>
    </select>
    </label>
    <br /> <br />        
    <button type='submit'>submit</button>
      </form>

    </div>
  )
}
