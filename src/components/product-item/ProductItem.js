import React from "react";

export const ProductItem = ({
  isAddedToWishlist,
  isAddedToCart,
  onAddToCart,
  onAddToWishList,
  product,
  product: { id, title, price, description }
}) => {
  return (
    <div key={product.id}>
      <h5>{id}</h5>
      <h5>{title}</h5>
      <h5>{price}</h5>
      <h5>{description}</h5>
      <button
      style={{ background: isAddedToCart ? "red" : "green"}}
      onClick={() => onAddToCart(product)}> {isAddedToCart ? "remove from cart" : "add to cart"}
      </button>
      <button
        style={{ background: isAddedToWishlist ? "red" : "green" }}
        onClick={() => onAddToWishList(product)}
      >
        {isAddedToWishlist ? "remove from wishlist" : "add to wishlist"}
      </button>
      <hr />
    </div>
  );
};
