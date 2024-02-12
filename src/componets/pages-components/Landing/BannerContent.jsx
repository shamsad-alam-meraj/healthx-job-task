import SubHeader from "../../share-components/SubHeader";
import Banner from "./Banner";
import styles from "../../../styles/BannerContentStyle.module.css";

const BannerContent = () => {
  return (
    <div className={styles["banner-content"]}>
      <SubHeader />
      <Banner />
    </div>
  );
};

export default BannerContent;
