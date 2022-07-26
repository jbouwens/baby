import AgeCard from "./AgeCard";

const AgeList = ({ ages, allBabySizes }) => {
  return (
    <div>
      {ages.map((x) => (
        <AgeCard
          age={x.age}
          i={Math.floor(Math.random() * allBabySizes[x.age].length)}
          babySizes={allBabySizes[x.age]}
        ></AgeCard>
      ))}
    </div>
  );
};

export default AgeList;
