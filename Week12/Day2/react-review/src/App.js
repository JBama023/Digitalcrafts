import { useState } from "react"
import StudentContainer from "./components/StudentContainer"

const data = [
  { name: "Jose" },
  { name: "Britt" },
  { name: "Matt" },
  { name: "Dustin" },
  { name: "Justin" },
  { name: "Kayla" },
  { name: "Deanna" },
  { name: "Cameron" },
  { name: "Tim" },
  { name: "Ron" },
  { name: "Jamie" },
  { name: "Brande" },
  { name: "Jordan" },
  { name: "Xavier" },
  { name: "Pamela" },
  { name: "Jenny" },
]

function App() {
  // const [students, getStudents] = useState(data)
  
  // state is where we can hold/store data
  // we store state in functional components using hooks
  //the process of passing state to another component 
  //is called props.
  return (
    <div className="App">
      <h1>App.js</h1>
      <h3>Data Starts Here</h3>
      <StudentContainer />
    </div>
  );
}

export default App;