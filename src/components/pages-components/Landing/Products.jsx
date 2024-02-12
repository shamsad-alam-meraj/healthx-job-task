import { useEffect, useState } from "react";
import Product from "../../../services/Product";
import SingleProduct from "./SingleProduct";

const Products = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const getProductList = async () => {
      let response = await Product.getProductList();
      if (response.status === 200) {
        setProductList(response?.products);
      }
    };
    getProductList();
  }, []);
  return (
    <div>
      {productList?.length > 0
        ? productList.map((product) => {
            return (
              <SingleProduct
                key={product?.id}
                title={product?.description}
                productImage={product?.images[0]}
                price={product?.price}
                stock={product?.stock}
                rating={product?.rating}
                discountPercentage={product?.discountPercentage}
              ></SingleProduct>
            );
          })
        : "No Product Found"}
    </div>
  );
};

export default Products;
