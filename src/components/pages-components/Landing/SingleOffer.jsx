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
}) => {
  return (
    <div className={styles["offer-container"]}>
      <div className={styles["description-container"]}>
        <p className={styles["name-container"]}>{offerName}</p>
        <p className={styles["headline-container"]}>{offerAmount}</p>
        <button className={styles["btn-style"]}>
          {type === "buy" && (
            <span className={styles['icon-style']}>
              <FontAwesomeIcon
                icon={faBagShopping}
                style={{
                  color: "red",
                  fontSize: "12px",
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
