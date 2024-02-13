import { useEffect, useState } from "react";
import Product from "../../../services/Product";
import SingleProduct from "./SingleProduct";
import styles from "../../../styles/ProductsStyle.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Products = () => {
  const [productList, setProductList] = useState([]);
  const [skip, setSkip] = useState(0);

  useEffect(() => {
    const getProductList = async () => {
      console.log(skip);
      let response = await Product.getProductList(skip);
      if (response.status === 200) {
        setProductList(response?.products);
      }
    };
    getProductList();
  }, [skip]);
  return (
    <div className={styles["products-container"]}>
      <div className={styles["title-container"]}>
        <p className={styles["title-style"]}>Featured Items</p>
        <div className={styles["icons-container"]}>
          <p
            onClick={() => {
              if (skip > 0) {
                setSkip((skip) => skip - 1);
              }
            }}
            className={styles[`single-icon`]}
          >
            <FontAwesomeIcon
              icon={faArrowLeft}
              style={{
                color: skip > 0 ? "#007bff" : "black",
                fontSize: "20px",
              }}
            />
          </p>
          <p
            onClick={() => setSkip((skip) => skip + 1)}
            className={styles[`single-icon right-arrow`]}
          >
            <FontAwesomeIcon
              icon={faArrowRight}
              style={{
                color: skip !== productList?.total / 4 ? "#007bff" : "black",
                fontSize: "20px",
              }}
            />
          </p>
        </div>
      </div>
      <div className={styles["product-grid-container"]}>
        {productList?.length > 0
          ? productList.map((product) => {
              return (
                <SingleProduct
                  key={product?.id}
                  title={product?.title}
                  productImage={product?.thumbnail}
                  price={product?.price}
                  stock={product?.stock}
                  rating={product?.rating}
                  discountPercentage={product?.discountPercentage}
                ></SingleProduct>
              );
            })
          : "No Product Found"}
      </div>
    </div>
  );
};

export default Products;
