let buyButtons = document.querySelectorAll(".buy-button");
let cartPopup = document.querySelector(".popup-to-cart");
let cartCloseButton = document.querySelector(".popup-to-cart .cross-button");
let continueShoppingButton = document.querySelector(".popup-to-cart-footer button");

buyButtons.forEach(item => {
  item.addEventListener("click", function (evt) {
    evt.preventDefault();
    cartPopup.classList.add("popup-show");
  })
})

cartCloseButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartPopup.classList.remove("popup-show");
})

continueShoppingButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartPopup.classList.remove("popup-show");
})

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (cartPopup.classList.contains("popup-show")) {
      cartPopup.classList.remove("popup-show");
    }
  }
});
