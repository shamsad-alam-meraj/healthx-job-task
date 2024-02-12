import { baseUrl } from "config/apiUrl";
import SuperFetch from "../config/SuperFetch";

const Product = {
  productList: () => {
    return SuperFetch(`${baseUrl.product}/products`);
  },
};

export default Product;
