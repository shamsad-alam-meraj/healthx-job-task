/* eslint-disable react/prop-types */
import styles from "../../../styles/ProductsStyle.module.css";
import { Rating } from "react-simple-star-rating";

const SingleProduct = ({
  title,
  productImage,
  price,
  stock,
  rating,
  discountPercentage,
}) => {
  return (
    <div className={styles["product-container"]}>
      <div className={styles["image-container"]}>
        <img className={styles["image-style"]} src={productImage} alt="" />
      </div>
      {/* description section  */}
      <div className={styles["description-section"]}>
        <p className={styles["product-title"]}>{title}</p>
        {/* rating & stock section  */}
        <div className={styles["rating-section"]}>
          <p className={styles["rating-stock-style"]}>
            <Rating readonly={true} initialValue={rating} size={14} />
            <span style={{ marginLeft: 2 }}>({stock})</span>
          </p>
          <p style={{ fontSize: 14 }}>
            {stock > 0 ? (
              <span className={styles["stock-available"]}>Stock Available</span>
            ) : (
              "Stock out"
            )}
          </p>
        </div>
        {/* price section  */}
        <div className={styles["price-section"]}>
          <p className={styles["discounted-price"]}>
            ${(price - (price * discountPercentage) / 100).toFixed(2)}
          </p>
          <p className={styles['original-price']}>{price}</p>
        </div>
      </div>
    </div>
  );
};
export default SingleProduct;
