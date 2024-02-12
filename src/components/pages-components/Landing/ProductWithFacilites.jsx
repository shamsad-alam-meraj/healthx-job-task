import Facilities from "./Facilites";
import styles from "../../../styles/ProductWithFacilitesStyle.module.css";
import Products from "./Products";

const ProductWithFacilites = () => {
  return (
    <div className={styles["product_facilites"]}>
      <div className={styles["facilities-container"]}>
        <Facilities></Facilities>
      </div>
      <div className={styles["products-container"]}>
        <Products></Products>
      </div>
    </div>
  );
};

export default ProductWithFacilites;
