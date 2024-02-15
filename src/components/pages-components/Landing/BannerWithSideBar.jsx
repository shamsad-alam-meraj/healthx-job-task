import Banner from "./Banner";
import Sidebar from "./Sidebar";
import styles from "../../../styles/BannerWithSidebarStyle.module.css";

const BannerWithSidebar = () => {
  return (
    <div className={styles['banner-sidebar-container']}>
      <div className={styles["sidebar-container"]}>
        <Sidebar></Sidebar>
      </div>
      <div className={styles["banner-container"]}>
        <Banner></Banner>
      </div>
    </div>
  );
};

export default BannerWithSidebar;
