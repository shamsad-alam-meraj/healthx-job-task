import BannerContent from "../components/pages-components/Landing/SubHeaderContent";
import HeaderNavigation from "../components/share-components/HeaderNavigation";
import ProductWithFacilites from "../components/pages-components/Landing/ProductWithFacilites";
import Offers from "../components/pages-components/Landing/Offers";

const LandingPage = () => {
  return (
    <>
      <HeaderNavigation />
      <BannerContent />
      <Offers/>
      <ProductWithFacilites />
    </>
  );
};

export default LandingPage;
