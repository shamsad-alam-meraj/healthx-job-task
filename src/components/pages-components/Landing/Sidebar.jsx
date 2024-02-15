import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../../styles/SidebarStyle.module.css";
import { faAngleRight, faPlus } from "@fortawesome/free-solid-svg-icons";
const Sidebar = () => {
  return (
    <div className={styles["sidebar-container"]}>
      <li className={styles["first-item"]}>
        <span>Fashion Collection</span>
        <span>
          <FontAwesomeIcon
            icon={faAngleRight}
            style={{ color: "#007bff", fontSize: "14px", fontWeight: "bold" }}
          />
        </span>
      </li>
      <li className={styles["list-item"]}>
        Electronic Items
        <span>
          <FontAwesomeIcon
            icon={faAngleRight}
            style={{ color: "black", fontSize: "14px" }}
          />
        </span>
      </li>
      <li className={styles["list-item"]}>
        Home Applicance
        <span>
          <FontAwesomeIcon
            icon={faAngleRight}
            style={{ color: "black", fontSize: "14px" }}
          />
        </span>
      </li>
      <li className={styles["list-item"]}>
        Kitchen Items
        <span>
          <FontAwesomeIcon
            icon={faAngleRight}
            style={{ color: "black", fontSize: "14px" }}
          />
        </span>
      </li>
      <li className={styles["list-item"]}>
        Furniture
        <span>
          <FontAwesomeIcon
            icon={faAngleRight}
            style={{ color: "black", fontSize: "14px" }}
          />
        </span>
      </li>
      <li className={styles["list-item"]}>
        Food
        <span>
          <FontAwesomeIcon
            icon={faAngleRight}
            style={{ color: "black", fontSize: "14px" }}
          />
        </span>
      </li>
      <li className={styles["list-item"]}>
        Gadgets
        <span>
          <FontAwesomeIcon
            icon={faAngleRight}
            style={{ color: "black", fontSize: "14px" }}
          />
        </span>
      </li>
      <li className={styles["list-item"]}>
        Toys and Games
        <span>
          <FontAwesomeIcon
            icon={faAngleRight}
            style={{ color: "black", fontSize: "14px" }}
          />
        </span>
      </li>
      <li className={styles["list-item"]}>
        Health & Beauty
        <span>
          <FontAwesomeIcon
            icon={faAngleRight}
            style={{ color: "black", fontSize: "14px" }}
          />
        </span>
      </li>
      <li className={styles["last-item"]}>
        View All Categories
        <span>
          <FontAwesomeIcon
            icon={faPlus}
            style={{ color: "#007bff", fontSize: "14px" }}
          />
        </span>
      </li>
    </div>
  );
};

export default Sidebar;
