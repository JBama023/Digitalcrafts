import Neighborhood from "./components/Neighborhood/Neighborhood";
import Dealership from "./components/Dealership/Dealership";
import "./App.css"
import {useState} from "react"
function App() {
  const [mustang, setMustang] = useState("2021 Mustang Gt")
  // setMustang("Ford Pinto")
  return (
    <div className="box">
      <h1>App.js</h1>
      <Neighborhood mustang={mustang} />
      <Dealership mustang={mustang} />
    </div>
  );
}

export default App;

