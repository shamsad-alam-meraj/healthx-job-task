import { faAngleDown, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../styles/SubHeaderStyle.module.css";
import { setShowDrawer } from "../../redux/Container/headerSlice";

const SubHeader = () => {
  const showDrawer = useSelector((state) => state.header.showDrawer);
  const dispatch = useDispatch();

  return (
    <div className={styles["main-container"]}>
      <div
        onClick={() => {
          dispatch(setShowDrawer(!showDrawer));
        }}
        className={styles["menu-container"]}
      >
        <FontAwesomeIcon
          icon={faBars}
          style={{ color: "white", fontSize: "20px" }}
        />
        <p className={styles["menu-label"]}>Browse Categories</p>
      </div>
      <div className={styles["other-menu-container"]}>
        <p className={styles["list-item"]}>Home</p>
        <p className={styles["list-item"]}>
          Products
          <span className={styles["angle-design"]}>
            <FontAwesomeIcon
              icon={faAngleDown}
              style={{ color: "white", fontSize: "12px" }}
            />
          </span>
        </p>
        <p className={styles["list-item"]}>
          Categories
          <span className={styles["angle-design"]}>
            <FontAwesomeIcon
              icon={faAngleDown}
              style={{ color: "white", fontSize: "12px" }}
            />
          </span>
        </p>
        <p className={styles["list-item"]}>
          Pages
          <span className={styles["angle-design"]}>
            <FontAwesomeIcon
              icon={faAngleDown}
              style={{ color: "white", fontSize: "12px" }}
            />
          </span>
        </p>
        <p className={styles["list-item"]}>Campaign</p>
        <p className={styles["list-item"]}>Offer</p>
        <p className={styles["list-item"]}>Blog</p>
        <p className={styles["list-item"]}>Review</p>
        <p className={styles["list-item"]}>Flash Sale</p>
        <p className={styles["list-item"]}>Contact Us</p>
      </div>
    </div>
  );
};

export default SubHeader;
