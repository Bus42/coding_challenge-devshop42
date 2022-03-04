const BioCard = (props) => {
  const { img, alt, name, position } = props;
  return (
    <div className="bio-card_wrapper">
      <img src={img} alt={alt} />
      <h2>{name}</h2>
      <h3>{position}</h3>
      <span className="bio-link">View Bio</span>
    </div>
  );
};

export default BioCard;
