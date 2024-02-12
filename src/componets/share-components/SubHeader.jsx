import { faBars } from "@fortawesome/free-solid-svg-icons";
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
          style={{ color: "white", fontSize: "30px" }}
        />
      </div>
      <ul className={`${showDrawer ? styles["other-menu-container"] : ""}`}>
        {/* Your list items */}
      </ul>
    </div>
  );
};

export default SubHeader;
