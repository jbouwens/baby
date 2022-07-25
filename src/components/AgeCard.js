const AgeCard = ({ age, babySizes }) => {
  console.log("Card received", babySizes);
  return (
    <div className="ui card">
      <div className="image">
        <img src="/images/avatar2/large/kristy.png" />
      </div>
      <div className="content">
        <a className="header">Size at {age} Weeks</a>
        <div className="meta">
          <span className="date">filler text</span>
        </div>
        <div className="description">
          Your baby is the size of a {babySizes[0].description}
        </div>
      </div>
    </div>
  );
};

export default AgeCard;
