const array_of_products = document.getElementsByClassName("card_ones");
const container_for_product = document.getElementById("container_for_product");
const container_for_product_cards = document.getElementById(
  "container_for_product_cards"
);
var id_for_cards = 0;
const don = document.getElementById("don");
const firstT = document.getElementById("firstT");
const secondT = document.getElementById("secondT");
secondT.style.fill = "#ff9100";
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
function changeOffset(type, elem) {
  if (type == "square") {
    for (let s = 0; s < array_of_products.length; s++) {
      array_of_products[s].className = "card_ones square";
      array_of_products[s].style.justifyContent = "left";
    }
    container_for_product.style.justifyContent = "unset";
    container_for_product_cards.style.flexDirection = "row";
    firstT.style.fill = "#ff9100";
    secondT.style.fill = "#707070";
  }
  if (type == "line") {
    for (let s = 0; s < array_of_products.length; s++) {
      array_of_products[s].className = "card_ones";

      array_of_products[s].style.justifyContent = "space-between";
    }
    container_for_product.style.justifyContent = "space-between";
    container_for_product_cards.style.flexDirection = "column";
    firstT.style.fill = "#707070";
    secondT.style.fill = "#ff9100";
  }
}

const summary_inner_text = document.getElementById("summary_inner_text");

function changeInnerText(e) {
  summary_inner_text.innerText = e.innerText;
}

const summary_inner_text2 = document.getElementById("summary_inner_text2");

function changeInnerText2(e) {
  summary_inner_text2.innerText = e.innerText;
}
