const input_round = document.getElementById("round");
const slider = document.getElementById("slider");
const cards = document.getElementById("cards_in_slider");
var x, moving;
var y = document.getElementById("don");
var pos = 0;

let elPress = false;
function AutoMove() {
  if (elPress == false) {
    pos = pos + 2;
    input_round.style.marginLeft = pos + "px";
    cards.style.left = -pos / 20 + "%";
    if (pos <= 0) {
      pos = 815;
    }
    if (pos >= 800) {
      pos = 0;
    }
  }
}
input_round.addEventListener("mousedown", function (event) {
  if (event.button === 0) {
    elPress = event.target;
    input_round.addEventListener("mousemove", move, false);
  }
});
document.addEventListener("mouseup", function (event) {
  if (event.target === elPress || (elPress !== false && event.button === 0)) {
    elPress = false;
  }
  input_round.removeEventListener("mousemove", move, false);
});
function move(event) {
  x = event.pageX - 755;
  pos = x;
  input_round.style.marginLeft = x + "px";
  cards.style.left = -x / 20 + "%";
  if (x <= 0) {
    input_round.style.marginLeft = 0 + "px";
  }
  if (x >= 815) {
    input_round.style.marginLeft = 815 + "px";
  }
}

slider.addEventListener("click", getPos, false);

function getPos(e) {
  x = e.pageX - 755;
  e.pageY = 831 + "px";
  changePosRound(x);
}

function changePosRound(posX) {
  input_round.style.marginLeft = posX + "px";
  cards.style.left = -x / 20 + "%";
}

function grow() {
  return (pos = pos + 2);
}

/* Для поворота треугольника при выборе категории */
/* var triangle = document.getElementById("first"); // поиск элемента
var cross = ["cross", "cross2"];
var hidden_list_ones;
var cross_ones;
function checkIndex(index) {
  hidden_list_ones = document.getElementById(hidden_list[index]);
  cross_ones = document.getElementById(cross[index]);
  openMenu();
  console.log(hidden_list_ones);
}
function openMenu() {
  if (hidden_list_ones.className == "hidden_list") {
    hidden_list_ones.className = "hidden_list_dn";
    cross_ones.className = "cross_-90";
  } else {
    hidden_list_ones.className = "hidden_list";
    cross_ones.className = "cross_90";
  }
} */

/* конец для поворота */
