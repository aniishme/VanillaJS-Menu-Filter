//Selectors
const allButtons = document.querySelectorAll(".buttons button");
const Buttons = document.querySelector(".buttons");
const allCards = document.querySelectorAll(".menu .card");
const burger = document.querySelector("#burger");
//Event Listener
allButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectClass = button.classList[0];
    allCards.forEach((card) => {
      if (selectClass === "all") {
        card.classList.remove("cardanimation");
        Buttons.classList.remove("buttons-toggle");
        burger.classList.remove("toggle");
        setTimeout(() => {
          card.classList.remove("cardhide");
        }, 50);
      } else if (!card.classList.contains(selectClass)) {
        card.classList.add("cardanimation");
        Buttons.classList.remove("buttons-toggle");
        burger.classList.remove("toggle");
        setTimeout(() => {
          card.classList.add("cardhide");
        }, 500);
      } else if (card.classList.contains(selectClass)) {
        card.classList.remove("cardanimation");
        Buttons.classList.remove("buttons-toggle");
        burger.classList.remove("toggle");
        setTimeout(() => {
          card.classList.remove("cardhide");
        }, 500);
      }
    });
  });
});

burger.addEventListener("click", dropdown);
//function

function dropdown() {
  Buttons.classList.toggle("buttons-toggle");
  burger.classList.toggle("toggle");
}
