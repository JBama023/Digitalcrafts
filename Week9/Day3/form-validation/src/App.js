import { useState } from "react"
import Form from "./components/Form"
// useState is hook

function App() {
  const [counter,setCounter] = useState(0)
  const [userName, setUserName] = useState("")

  return (
    <div className="App">
      {/* <h1>form validation</h1>
      
      <p>User is {userName}</p>
      <input onChange={(e) => console.log(e.target.value)} type="text" placeholder="type a username here" />
      <button onChange={()=>setUserName("Jamie")}>change user to Jamie</button>
      <p>Counter is: {counter}</p>
      
      <button onClick={()=>setCounter(counter + 1)}>Add</button>
      <button onClick={()=>setCounter(counter - 1)}>Subtract</button>
      <form action="">
        <input type="text" />
        <input type="text" />
        <input type="button" value="Send" />
      </form>
       */}
      <Form />
    </div>
  );
}

export default App;
