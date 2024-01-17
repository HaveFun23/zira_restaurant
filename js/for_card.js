const array_of_products = document.getElementsByClassName("card_ones");
const container_for_product = document.getElementById("container_for_product");
const container_for_product_cards = document.getElementById(
  "container_for_product_cards"
);
var id_for_cards = 0;
const don = document.getElementById("don");
/* function openInclude(e) {
  if (e.className !== "open") {
    e.className = "card open";
  } else {
    e.className = "card closed";
  }
  console.log(e.className);
  hideAnotherCards();
}
function hideAnotherCards() {
  for (let s = 0; s < array_of_products.length; s++) {
    if (array_of_products[s].className == "card closed") {
      array_of_products[s].style.display = "none";
    }
  }
} */
function changeOffset(type) {
  if (type == "square") {
    for (let s = 0; s < array_of_products.length; s++) {
      array_of_products[s].className = "card_ones square";
      array_of_products[s].style.justifyContent = "left";
    }
    container_for_product.style.justifyContent = "unset";
    container_for_product_cards.style.flexDirection = "row";
  }
  if (type == "line") {
    for (let s = 0; s < array_of_products.length; s++) {
      array_of_products[s].className = "card_ones";

      array_of_products[s].style.justifyContent = "space-between";
    }
    container_for_product.style.justifyContent = "space-between";
    container_for_product_cards.style.flexDirection = "column";
  }
  console.log(type);
}
/* for (let index = 0; index < array_of_products.length; index++) {
    for (var s in array_of_products[index]) {
      if (s == "id") {
        array_of_products_id[index] =array_of_products[index].id;
      }
    }
} */
