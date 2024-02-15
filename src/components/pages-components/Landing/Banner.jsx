import styles from "../../../styles/BannerStyle.module.css";
const Banner = () => {
  return (
    <div className={styles["banner-content"]}>
      <div className={styles["main-details-container"]}>
        <div className={styles["description-container"]}>
          <p className={styles["subheader-style"]}>
            Up to <span className={styles["percentage-style"]}>70%</span> off on
            Black Friday
          </p>
          <p className={styles["headline-style"]}>
            Trendy <span className={styles["fashion-style"]}>Fashion</span>
            <br /> Collection
          </p>
          <button className={styles["btn-style"]}>Buy Now</button>
        </div>
      </div>
      <div className={styles["image-container"]}>
        <img
          className={styles["image-style"]}
          src="/assets/images/banner.png"
          alt="banner"
        />
      </div>
    </div>
  );
};
export default Banner;
