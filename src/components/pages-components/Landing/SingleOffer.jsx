/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../../styles/OfferStyle.module.css";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
const SingleOffer = ({
  offerName,
  imageSrc,
  offerAmount,
  buttonLabel,
  type,
  index,
}) => {
  console.log(index);
  return (
    <div className={styles["offer-container"]}>
      <div className={styles["description-container"]}>
        <p className={styles["name-style"]}>{offerName}</p>
        <p className={styles["headline-style"]}>{offerAmount}</p>
        {/* {index / 2 === 0 ? (
          <div className={styles["even-ring"]}></div>
        ) : (
          <div className={styles["odd-ring"]}></div>
        )} */}
        <button className={styles["btn-style"]}>
          {type === "buy" && (
            <span className={styles["icon-style"]}>
              <FontAwesomeIcon
                icon={faBagShopping}
                style={{
                  color: "red",
                  fontSize: "15px",
                }}
              />
            </span>
          )}
          <span className={styles["btn-label-style"]}>{buttonLabel}</span>
        </button>
      </div>
      <div className={styles["image-container"]}>
        <img className={styles["image-style"]} src={imageSrc} alt="image" />
      </div>
    </div>
  );
};
export default SingleOffer;
