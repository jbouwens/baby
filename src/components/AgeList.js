import AgeCard from "./AgeCard";

const AgeList = ({ ages, allBabySizes }) => {
  return (
    <div>
      {ages.map((x) => (
        <AgeCard age={x.age} babySizes={allBabySizes[x.age]}></AgeCard>
      ))}
    </div>
  );
};

export default AgeList;
