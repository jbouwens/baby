import "./App.css";
import AgeForm from "./components/AgeForm";
import { useState } from "react";
import AgeList from "./components/AgeList";
import useBabySizes from "./components/useBabySizes";

function App() {
  const allBabySizes = useBabySizes();
  // here we create an array state to store the contact form data
  const [ages, updateAges] = useState([]);

  const addAge = (age) => {
    updateAges([...ages, age]);
  };

  return (
    <div className="App">
      <header></header>
      <AgeForm addAge={addAge}></AgeForm>
      <AgeList ages={ages} allBabySizes={allBabySizes}></AgeList>
    </div>
  );
}

export default App;
