import { useState } from 'react';
import './App.css'

function App() {
  const [name, setName] = useState("KP");

  function clickMe() {
    setName("kubi");
    console.log("clicked");
  }
  return (
    <>

      <h1>Hello {name}</h1>
      <button onClick={clickMe}>click me</button>
      
    </>
  );
}

export default App;
