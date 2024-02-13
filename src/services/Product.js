import SuperFetch from "../config/SuperFetch";
import { baseUrl } from "../config/apiUrl";

const Product = {
  getProductList: (skip = 0, limit = 4) => {
    return SuperFetch(
      `${baseUrl.product}/products?skip=${skip}&limit=${limit}`
    );
  },
};

export default Product;
