import SuperFetch from "../config/SuperFetch";
import { baseUrl } from "../config/apiUrl";

const Product = {
  getProductList: () => {
    return SuperFetch(`${baseUrl.product}/products`);
  },
};

export default Product;
