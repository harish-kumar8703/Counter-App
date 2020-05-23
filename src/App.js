import React ,{useState} from "react"
import "./App.css"

const App=()=>{
  const [count,setCount]=useState(0);

  return(
<div className="App">
<header>
<h1> COUNTER APP
</h1></header>

<h2 className="font-weight-light">Current value of count {count}</h2>
<button    onClick={()=>setCount(0)}   className="btn btn-danger">Reset Counter</button>
<p></p>
<button  onClick={()=>setCount(count+1)}  className="btn btn-success">Increase Counter</button>
<p></p>
<button  onClick={()=>count>0?(setCount(count-1)):""}  className="btn btn-success">Decrease Counter</button>

</div>
  )
}


export default App;