// eslint-disable-next-line react/prop-types
const SingleFacilities = ({ imageSrc, title, subtitle }) => {
  console.log(imageSrc);
  return (
    <div>
      <div>
        <img src={imageSrc} alt="image" />
      </div>
      <div>
        <h6>{title}</h6>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default SingleFacilities;
