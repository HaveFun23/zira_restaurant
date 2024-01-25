var html_count = document.getElementsByClassName("counter");
var array_of_products2 = document.getElementsByClassName("card_ones");
var array_of_buttons = document.getElementsByClassName("to_backet_button");
var key = 0;
var count_of_products_in_cart = localStorage.getItem("cart");
var main_cart = document.querySelector(".main_cart");
main_cart.innerText = count_of_products_in_cart;

const cart_container = document.querySelector("#container_for_product_cards");
var card;
var simple_price;
const total_price_of_order = document.querySelector(".total_price_of_order");
const all_of_card_price = document.getElementsByClassName("all_price");

const count_in_basket = document.querySelector(".main_cart");
const counter_in_end = document.getElementsByClassName("counter");
var sum_of_count_product = parseInt(count_in_basket.innerText);

var all_products_cards = document.getElementsByClassName("basketPage_product");

function total_price_of_order_sum() {
  var sum = 0;
  for (var s = 0; s < all_of_card_price.length; s++) {
    var onlyPrice = all_of_card_price[s].innerText;
    sum = sum + parseInt(onlyPrice);
  }

  total_price_of_order.innerText = "Итого: " + sum + " руб";
}
for (let s = 0; s < array_of_products2.length; s++) {
  array_of_buttons[s].id = s;
}
function delete_prod() {
  const prod = card;
  const parent = prod.parentNode;
  var id_prod = prod.dataset.keys;
  localStorage.removeItem(id_prod);
  parent.removeChild(prod);
  count_in_basket.innerText = parseInt(count_in_basket.innerText) - 1;
  console.log(card);
}
window.addEventListener("click", function (e) {
  card = e.target.closest(".basketPage_product");
  simple_price = card.querySelector(".one_price");

  if (e.target.hasAttribute("data-plus")) {
    changeCount("plus");
  }
  if (e.target.hasAttribute("data-minus")) {
    changeCount("minus");
  }
  if (e.target.hasAttribute("data-delete")) {
    delete_prod();
  }
  sum = 0;
  for (var s = 0; s < all_of_card_price.length; s++) {
    var onlyPrice = all_of_card_price[s].innerText;
    sum = sum + parseInt(onlyPrice);
  }

  total_price_of_order.innerText = "Итого: " + sum + " руб";

  sum_of_count_product = 0;
  for (let s = 0; s < counter_in_end.length; s++) {
    sum_of_count_product =
      sum_of_count_product + parseInt(counter_in_end[s].innerText);
  }
  count_in_basket.innerText = sum_of_count_product;
});
function changeCount(act) {
  const counter = card.querySelector(".counter");
  const total_price = card.querySelector(".all_price");

  if (act == "plus") {
    if (parseInt(counter.innerText) < 100) {
      counter.innerText = parseInt(counter.innerText) + 1;
    }
    if (parseInt(counter.innerText) == 100) {
      counter.innerText = 1;
    }
  }
  if (act == "minus") {
    if (parseInt(counter.innerText) > 0) {
      counter.innerText = parseInt(counter.innerText) - 1;
    }
    if (parseInt(counter.innerText) <= 0) {
      counter.innerText = 99;
    }
  }

  total_price.innerText =
    parseInt(simple_price.innerText) * parseInt(counter.innerText) + " руб";
}

// достаем данные о корзине из local str
function createElems() {
  for (let s = 0; s < parseInt(main_cart.innerText); s++) {
    getData();
  }
}
function getData() {
  var getElem = localStorage.getItem(key).split("+"); //получаем данные об элементе по ключу
  var descr = getElem[0];
  var image = getElem[1];
  var price = getElem[2];
  var Product_sample_in_basket = `
  <div class="basketPage_product" data-keys=${key}>
      <div class="image_and_descr_of_card">
        <div class="main_image">
          <img
            class="don"
            style="
              border-top-left-radius: 10px;
              border-bottom-left-radius: 10px;
            "
            src="${image}"
            alt=""
          />
        </div>

        <div>
          <h2>${descr}</h2>
        </div>
      </div>

      <div class="one_price">${price} руб</div>
      <div class="count">
        <button  data-minus>
          <svg data-minus
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle data-minus cx="12" cy="12" r="8" />
            <rect data-minus x="8" y="11" width="8" height="2" fill="#16181B" />
          </svg>
        </button>
        <div class="counter">1</div>
        <p>шт</p>
        <button  data-plus>
          <svg data-plus
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle data-plus cx="12" cy="12" r="8" fill="#73777D" />
            <rect data-plus x="8" y="11" width="8" height="2" />
            <rect data-plus
              x="13"
              y="8"
              width="8"
              height="2"
              transform="rotate(90 13 8)"
              fill="#16181B"
            />
          </svg>
        </button>
      </div>
      <div class="all_price">
        ${price} руб
      </div>
      <button class="delete_button" data-delete >
        <p data-delete>удалить</p>
        <div data-delete>
          <img src="./img/icons/UI/ico_basket.png" alt="" />
        </div>
      </button>
</div>`;
  key++;
  cart_container.insertAdjacentHTML("beforeend", Product_sample_in_basket);
}
// достаем данные о корзине из local str
