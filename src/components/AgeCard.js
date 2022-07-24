const AgeCard = ({ age }) => {
  return (
    <div className="ui card">
      <div className="image">
        <img src="/images/avatar2/large/kristy.png" />
      </div>
      <div className="content">
        <a className="header">Size at {age} Weeks</a>
        <div className="meta">
          <span className="date">Filler Text</span>
        </div>
        <div className="description">Description of the Size!</div>
      </div>
    </div>
  );
};

export default AgeCard;
