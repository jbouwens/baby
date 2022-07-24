import AgeCard from "./AgeCard";

const AgeList = ({ ages }) => {
  return (
    <div>
      {ages.map((x) => (
        <AgeCard age={x.age}></AgeCard>
      ))}
    </div>
  );
};

export default AgeList;
