import Card from "react-bootstrap/Card";
import useFetchWikipediaImage from "../hooks/ImageHooks";

const BabyImage = ({ query }) => {
  const {data} = useFetchWikipediaImage(query);
  const flat = flatten(data);

  return <Card.Img variant="top" src={flat["source"]} />;
};

export default BabyImage;

// todo: try not to do any looping
const flatten = (ob) => {
  let result = {};
  for (const i in ob) {
    if (typeof ob[i] === "object" && !Array.isArray(ob[i])) {
      const temp = flatten(ob[i]);
      for (const j in temp) {
        result[j] = temp[j];
      }
    } else {
      result[i] = ob[i];
    }
  }
  return result;
};
