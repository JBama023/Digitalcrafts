import House from "./components/House"

function App() {
  const couch = "Couch";
  const chair = "Chair";
  return (
    <div className="App">
      <h1>App JS</h1>
      <House chair={chair} couch={couch}/>
    </div>
  );
}

export default App;
