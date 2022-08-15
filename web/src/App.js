import "./App.css";
import AgeForm from "./components/AgeForm";
import { useState } from "react";
import AgeList from "./components/AgeList";
import useBabySizes from "./components/useBabySizes";
import { Button, Container } from "react-bootstrap";

function App() {
  const allBabySizes = useBabySizes();

  const [ages, updateAges] = useState([]);

  const addAge = (age) => {
    updateAges([...ages, age]);
  };

  return (
    <Container className="container">
      <AgeForm addAge={addAge}></AgeForm>
      <AgeList ages={[...ages].reverse()} allBabySizes={allBabySizes}></AgeList>
      <footer class="page-footer font-small">
        <div class="text-center py-3">
          <a target="_blank" href="https://github.com/jbouwens/baby">
            Github
          </a>
        </div>
      </footer>
    </Container>
  );
}

export default App;
