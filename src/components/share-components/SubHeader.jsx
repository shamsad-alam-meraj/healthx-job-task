import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../styles/SubHeaderStyle.module.css";
import { setShowDrawer } from "../../redux/Container/headerSlice";

const SubHeader = () => {
  const showDrawer = useSelector((state) => state.header.showDrawer);
  const dispatch = useDispatch();

  return (
    <div className={styles["drawer-container"]}>
      <div className={styles["main-container"]}>
        <div
          onClick={() => {
            dispatch(setShowDrawer(!showDrawer));
          }}
          className={styles["menu-container"]}
        >
          <FontAwesomeIcon
            icon={faBars}
            style={{ color: "white", fontSize: "30px" }}
          />
          <h6 className={styles["menu-label"]}>Browse Categories</h6>
        </div>
        <div className={styles["other-menu-container"]}>
          <div className={styles["list-item"]}>Home</div>
          <div className={styles["list-item"]}>Products</div>
          <div className={styles["list-item"]}>Categories</div>
          <div className={styles["list-item"]}>Pages</div>
          <div className={styles["list-item"]}>Campaign</div>
          <div className={styles["list-item"]}>Offer</div>
          <div className={styles["list-item"]}>Blog</div>
          <div className={styles["list-item"]}>Review</div>
          <div className={styles["list-item"]}>Flash Sale</div>
          <div className={styles["list-item"]}>Contact Us</div>
        </div>
      </div>
      
    </div>
  );
};

export default SubHeader;
