const count_in_basket = document.querySelector("#count_in_basket");
var products_in_basket = [];
var id_for_product_in_basket = 0;
count_in_basket.innerText = 0;
var strung = "price: 20";
var arr = strung.split(": ");
window.addEventListener("click", function (event) {
  if (event.target.hasAttribute("data-cart")) {
    const card = event.target.closest(".card_ones");
    count_in_basket.innerText = ++count_in_basket.innerHTML;
    var image_in_card = card.querySelector(".main_image_include").src;
    var price = card.querySelector(".num_of_price").innerText;
    var descr = card.querySelector(".prescr_for_card").innerText;
    console.log(descr, image_in_card, price);
    createObj(descr, image_in_card, price);
    console.log(products_in_basket[id_for_product_in_basket]);
    id_for_product_in_basket++;
    console.log(arr[0]);
    localStorage.setItem("cart", count_in_basket.innerText);
  }
});
/* шаблон объекта, содержащего данные карточки товара */

function createObj(descr, src, price) {
  /* function newObj(descr, src, price) {
    this.descr = descr;
    this.src = src;
    this.price = price;
  } */
  var objSample = [descr, src, price];

  localStorage.setItem(
    id_for_product_in_basket,
    descr + "+" + src + "+" + price
  );

  console.log(objSample);
  products_in_basket[id_for_product_in_basket] = objSample;
}

/*//шаблон объекта, содержащего данные карточки товара */

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

//для добавления в корзину
