export function tweetListItem() {
    return JSON.parse(localStorage.getItem("tweet")) || [];
  }
  export function saveList(list) {
    localStorage.setItem("tweet", JSON.stringify(list));
  }
  
  function checkItem(item) {
    return tweetListItem().filter((element) => element.id === item.id);
  }
  
  export function productAddToTweet(product) {
    if (checkItem(product).length === 0) {
      const list = tweetListItem();
      list.push(product);
      saveList(list);
      return true;
    } else {
      const list = tweetListItem();
      let newList = list.filter(
        (listedProduct) => listedProduct.id !== product.id
      );
      saveList(newList);
      return false;
    }
  }
  