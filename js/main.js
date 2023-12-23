const input_round = document.getElementById("round");
const slider = document.getElementById("slider");
const cards = document.getElementById("cards_in_slider");
var x, moving;
var y = document.getElementById("don");

let elPress = false;

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

slider.addEventListener("click", getPos, false);
function move(event) {
  x = event.pageX - 755;
  input_round.style.marginLeft = x + "px";
  cards.style.left = -x / 20 + "%";
  if (x <= 0) {
    input_round.style.marginLeft = 0 + "px";
  }
  if (x >= 815) {
    input_round.style.marginLeft = 815 + "px";
  }
}
function getPos(e) {
  x = e.pageX - 755;
  e.pageY = 831 + "px";
  changePosRound(x);
}

function changePosRound(posX) {
  input_round.style.marginLeft = posX + "px";
  cards.style.left = -x / 20 + "%";
}
