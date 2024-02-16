/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../../styles/ProductsStyle.module.css";
import { Rating } from "react-simple-star-rating";
import {
  faBagShopping,
  faEye,
  faRetweet,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { productAddToCart } from "../../../helpers/shoppingCart";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../../redux/Container/cartSlice";
import { useState } from "react";
import Modal from "../../share-components/Modal";

const SingleProduct = ({
  title,
  productImage,
  price,
  stock,
  rating,
  discountPercentage,
  product,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [productDetails, setProducDetails] = useState({});
  const selectedProduct = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const productSelect = selectedProduct.find((pro) => pro.id === product.id);
  const onClose = () => {
    setIsOpen(false);
  };
  return (
    <div className={styles["product-container"]}>
      <div className={styles["image-container"]}>
        <img className={styles["image-style"]} src={productImage} alt="" />
      </div>
      <div className={styles["show-percentage"]}>
        {"-"}
        {discountPercentage}%
      </div>
      <div className={styles[`cart-container`]}>
        <div
          onClick={() => {
            if (productAddToCart(product)) {
              dispatch(addToCart(product));
            } else {
              dispatch(removeFromCart(product));
            }
          }}
          className={
            productSelect?.id === product?.id
              ? styles["cart-item-selected"]
              : styles["cart-item"]
          }
        >
          <FontAwesomeIcon
            icon={faBagShopping}
            style={{
              color: productSelect?.id === product?.id ? "white" : "black",
              fontSize: "15px",
            }}
          />
        </div>
        <div className={styles["cart-item"]}>
          <FontAwesomeIcon
            icon={faHeart}
            style={{ color: "black", fontSize: "15px" }}
          />
        </div>
        <div className={styles["cart-item"]}>
          <FontAwesomeIcon
            icon={faRetweet}
            style={{ color: "black", fontSize: "15px" }}
          />
        </div>
        <div
          onClick={() => {
            setProducDetails(product);
            setIsOpen(true);
          }}
          className={styles["cart-item"]}
        >
          <FontAwesomeIcon
            icon={faEye}
            style={{ color: "black", fontSize: "15px" }}
          />
        </div>
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
          <p className={styles["original-price"]}>{price}</p>
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={onClose} productDetails={productDetails}/>
    </div>
  );
};
export default SingleProduct;



