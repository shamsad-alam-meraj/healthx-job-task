import { facilities } from "../../../data/facilites";
import SingleFacilities from "./SingleFacilites";
import styles from "../../../styles/FacilitesStyle.module.css";

const Facilities = () => {
  const facilitiesList = facilities;
  return (
    <div className={styles["facilities-container"]}>
      {facilitiesList?.length > 0 &&
        facilitiesList.map((facility) => {
          return (
            <SingleFacilities
              key={facility?.id}
              imageSrc={facility.imageSrc}
              title={facility.title}
              subtitle={facility.subtitle}
            />
          );
        })}
    </div>
  );
};
export default Facilities;
