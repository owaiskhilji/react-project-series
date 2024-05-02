// kahi Hooks optional argument nh lete lekin custom Hook ko argument dena ho ta h
// Hook k ander api store kr wana h api fetch to call ho skti mgr me ye chata ho jb mera custom hook load ho tb ho api call ho to is ek (useeffect)ka hook hota h
import { useEffect, useState } from "react";

function Usecustominfo(currency){
let [data ,setdata] = useState({})
    useEffect(()=>{
    fetch(`https://api.currencyfreaks.com/v2.0/rates/latest?apikey=b5c7c62b6c84466cb5e40273ae0953b2&base=${currency}`)
.then((res) => res. json())
.then((res) => setdata(res[currency]))
},
[currency])
// console.log("this is data >>>",data)
return data
}

export default Usecustominfo;


//https://v6.exchangerate-api.com/v6/160d9ce515cc317df9bf2121/latest/USD    

// https://api.currencyfreaks.com/v2.0/rates/latest?apikey=b5c7c62b6c84466cb5e40273ae0953b2&base=USD