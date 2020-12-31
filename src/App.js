import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Header } from "./components/header";
import { ProductList } from "./components/product-list";
import { useServices } from "./services";
import { setProducts } from "./redux";
import "./styles.css";



export default function App()
{
 const { cart, wishlist, products } = useSelector(
   ({ cart: { cart }, wishlist: { wishlist }, products: { products } }) => ({
     cart,
     wishlist,
     products
   })
 );
 console.log(products);

  const dispatch = useDispatch();
const {productService} = useServices();

  const fetchData = useCallback(async () => {
    const response = await productService.getProducts();
    const json = await response.json()
    dispatch(setProducts(json));
  }, []);

  useEffect(() => {
    dispatch(setProducts());
  }, []);

  return (
    <div className="App">
        <h1>
      {products.length}
        </h1>
      <Header />
      <ProductList products={products} />
    </div>
  );
}
