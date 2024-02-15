import SubBannerContent from "../components/pages-components/Landing/SubHeaderContent";
import HeaderNavigation from "../components/share-components/HeaderNavigation";
import ProductWithFacilites from "../components/pages-components/Landing/ProductWithFacilites";
import Offers from "../components/pages-components/Landing/Offers";
import BannerWithSidebar from "../components/pages-components/Landing/BannerWithSideBar";

const LandingPage = () => {
  return (
    <>
      <HeaderNavigation />
      <SubBannerContent />
      <BannerWithSidebar/>
      <Offers/>
      <ProductWithFacilites />
    </>
  );
};

export default LandingPage;
