export function shoppingListItem() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}
export function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}
export function cartPlus(cartProduct) {
  const cart = shoppingListItem();
  cart.forEach((product) => {
    if (product.id === cartProduct.id) {
      product.quantity = ++cartProduct.quantity;
      saveCart(cart);
    }
  });
}
export function setQuantity(cartProduct, quantity) {
  const cart = shoppingListItem();
  cart.forEach((product) => {
    if (product.id === cartProduct.id) {
      product.quantity = quantity;
      //console.log(++product.qyt);
      saveCart(cart);
      //
    }
  });
}
// export function cartMinus(cartProduct) {
//   const cart = shoppingListItem();
//   cart.forEach((product) => {
//     if (product.id === cartProduct.id) {
//       product.quantity = --cartProduct.quantity;
//       //console.log(++product.qyt);
//       saveCart(cart);
//       //
//     }
//   });
// }
function checkItem(item) {
  return shoppingListItem().filter((element) => element.id === item.id);
}

export function productAddToCart(product, quantity, selectedQty) {
  if (checkItem(product).length === 0) {
    let itemFormate = addCartFormate(product, selectedQty);
    const cart = shoppingListItem();
    cart.push(itemFormate);
    saveCart(cart);
    return true;
  } else {
    return false;
  }
}

export function removeCartProduct(item) {
  const product = shoppingListItem().filter(
    (element) => element.id !== item.id
  );
  saveCart(product);
}

export function cartTotalAmount() {
  let amount = 0;
  shoppingListItem().forEach((product) => {
    amount = amount + parseFloat(product.price) * parseFloat(product.quantity);
  });
  return amount;
}
export function addCartFormate(item) {
  return {
    ...item,
  };
}
