import logo from "./logo.svg";
import "./App.css";
import AgeForm from "./components/AgeForm";
import { useState } from "react";
import AgeList from "./components/AgeList";

function App() {
  // here we create an array state to store the contact form data
  const [ages, updateAges] = useState([]);

  const addAge = (age) => {
    updateAges([...ages, age]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <AgeForm addAge={addAge}></AgeForm>
      <AgeList ages={ages}></AgeList>
    </div>
  );
}

export default App;
