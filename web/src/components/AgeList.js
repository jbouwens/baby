import { CardGroup, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AgeCard from "./AgeCard";

const AgeList = ({ ages, allBabySizes }) => {
  return (
    <div class="card-columns">
      <Row xs="1" md="3">
        {ages.map((x) => (
          <AgeCard
            age={x.age}
            i={Math.floor(Math.random() * allBabySizes[x.age].length)}
            babySizes={allBabySizes[x.age]}
          ></AgeCard>
        ))}
      </Row>
    </div>
  );
};

export default AgeList;
