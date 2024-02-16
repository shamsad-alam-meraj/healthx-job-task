export function favouriteListItem() {
  return JSON.parse(localStorage.getItem("favourite")) || [];
}
export function saveList(list) {
  localStorage.setItem("favourite", JSON.stringify(list));
}

function checkItem(item) {
  return favouriteListItem().filter((element) => element.id === item.id);
}

export function productAddToFavouriteList(product) {
  if (checkItem(product).length === 0) {
    const list = favouriteListItem();
    list.push(product);
    saveList(list);
    return true;
  } else {
    const list = favouriteListItem();
    let newList = list.filter(
      (listedProduct) => listedProduct.id !== product.id
    );
    saveList(newList);
    return false;
  }
}
