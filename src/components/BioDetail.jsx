import CloseButton from "./CloseButton";

const BioDetail = (props) => {
  const { img, alt, name, title, bio, index } = props;
  const closeModal = () => {};
  return (
    <div className="bio-detail_wrapper">
      <div className="bio-detail_screen"></div>
      <div className="bio-detail_content">
        <h1>{name}</h1>
        <h2>{title}</h2>
        <p>{bio}</p>
        <img src={img} alt={alt} />
        <CloseButton index={index} closeModal={closeModal} />
      </div>
    </div>
  );
};

export default BioDetail;
