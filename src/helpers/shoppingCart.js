export function shoppingListItem() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}
export function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function checkItem(item) {
  return shoppingListItem().filter((element) => element.id === item.id);
}

export function productAddToCart(product) {
  if (checkItem(product).length === 0) {
    const cart = shoppingListItem();
    cart.push(product);
    saveCart(cart);
    return true;
  } else {
    const cart = shoppingListItem();
    let newCart = cart.filter((cartProduct) => cartProduct.id !== product.id);
    saveCart(newCart);
    return false;
  }
}

export function cartTotalAmount() {
  let amount = 0;
  shoppingListItem().forEach((product) => {
    amount = amount + parseFloat(product.price);
  });
  return amount;
}
