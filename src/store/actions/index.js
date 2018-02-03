import cart from "./cart";
import products from "./products";
import user from "./user";
import product from "./product";

export default {
  ...cart,
  ...products,
  ...user,
  ...product
};