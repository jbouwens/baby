import Card from "react-bootstrap/Card";

const AgeCard = ({ age, babySizes }) => {
  console.log("Card received", babySizes);
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="/images/avatar2/large/blah.png" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Your baby is the size of a {babySizes[0].description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default AgeCard;
