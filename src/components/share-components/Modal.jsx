/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../styles/ModalStyle.module.css";
import styles2 from "../../styles/ProductsStyle.module.css";
import { faX } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Rating } from "react-simple-star-rating";
const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
};

const Modal = ({ isOpen, onClose, productDetails }) => {
  const closeModal = () => {
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className={styles["modal-overlay"]} onClick={closeModal}>
          <div className={styles["modal"]} onClick={(e) => e.stopPropagation()}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <p style={{ fontWeight: 700 }}>{productDetails?.title}</p>
              <button className={styles["modal-close"]} onClick={closeModal}>
                <FontAwesomeIcon
                  icon={faX}
                  style={{ color: "black", fontSize: "20px" }}
                />
              </button>
            </div>
            <div className="slider-container">
              <Slider {...settings}>
                {productDetails?.images?.map((image, index) => (
                  <div key={index}>
                    <img
                      style={{
                        margin: "auto",
                        height: "200px",
                        width: "300px",
                      }}
                      src={image}
                      alt="banner"
                    />
                  </div>
                ))}
              </Slider>
            </div>
            <div
              style={{ marginTop: "50px" }}
              className={styles2["description-section"]}
            >
              <p className={styles2["product-title"]}>
                {productDetails?.title}-{productDetails?.brand}
              </p>
              {/* rating & stock section  */}
              <div className={styles["rating-section"]}>
                <p className={styles2["rating-stock-style"]}>
                  <Rating
                    readonly={true}
                    initialValue={productDetails?.rating}
                    size={14}
                  />
                  <span style={{ marginLeft: 2 }}>
                    ({productDetails?.stock})
                  </span>
                </p>
                <p style={{ fontSize: 14 }}>
                  {productDetails?.stock > 0 ? (
                    <span className={styles2["stock-available"]}>
                      Stock Available
                    </span>
                  ) : (
                    "Stock out"
                  )}
                </p>
              </div>
              {/* price section  */}
              <div className={styles2["price-section"]}>
                <p className={styles2["discounted-price"]}>
                  $
                  {(
                    productDetails?.price -
                    (productDetails?.price *
                      productDetails?.discountPercentage) /
                      100
                  ).toFixed(2)}
                </p>
                <p className={styles2["original-price"]}>
                  {productDetails?.price}
                </p>
              </div>
            </div>
            <div style={{ marginTop: "0px" }}>
              <p>{productDetails?.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
