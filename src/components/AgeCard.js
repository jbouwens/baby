import Card from "react-bootstrap/Card";
import BabyImage from "./BabyImage";

const AgeCard = ({ age, i, babySizes }) => {
  const description = babySizes[i].description;
  const query =
    babySizes[i].query ?? formatDescription(babySizes[i].description);

  return (
    <Card style={{ width: "18rem" }}>
      <BabyImage query={query} />
      <Card.Body>
        <Card.Title>{age} Weeks</Card.Title>
        <Card.Text>Your baby is the size of a {description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

const formatDescription = (description) => {
  const words = description.toLowerCase().split(" ");
  let result = words.join("_");
  return result.charAt(0).toUpperCase() + result.slice(1);
};

export default AgeCard;
