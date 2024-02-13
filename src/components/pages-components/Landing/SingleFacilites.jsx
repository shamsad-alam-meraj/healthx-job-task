import styles from "../../../styles/FacilitesStyle.module.css"
// eslint-disable-next-line react/prop-types
const SingleFacilities = ({ imageSrc, title, subtitle }) => {
  console.log(imageSrc);
  return (
    <div className={styles["facility-container"]}>
      <div className={styles['image-container']}>
        <img className={styles['image-style']} src={imageSrc} alt="image" />
      </div>
      <div className={styles['description-container']}>
        <p className={styles['title-style']}>{title}</p>
        <p className={styles['subtitle-style']}>{subtitle}</p>
      </div>
    </div>
  );
};

export default SingleFacilities;
