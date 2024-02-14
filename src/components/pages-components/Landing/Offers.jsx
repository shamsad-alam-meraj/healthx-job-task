import { offers } from "../../../data/offers";
import styles from "../../../styles/OfferStyle.module.css";
import SingleOffer from "./SingleOffer";
const Offers = () => {
  const offerList = offers;
  return (
    <div className={styles["offers-container"]}>
      {offerList?.length > 0 &&
        offerList.map((offer, index) => {
          return (
            <SingleOffer
              index={index}
              key={offer?.id}
              offerName={offer.offerName}
              imageSrc={offer.src}
              title={offer.title}
              offerAmount={offer.offerAmount}
              buttonLabel={offer.buttonLabel}
              type={offer.type}
            />
          );
        })}
    </div>
  );
};
export default Offers;
