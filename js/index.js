let contactUsButton = document.querySelector(".contact-section .red-button");
let contactUsPopup = document.querySelector(".popup-contact-us");
let contactUsCloseButton = document.querySelector(".popup-contact-us .cross-button");
let contactUsForm = document.querySelector(".popup-contact-us form");
let usernameField = document.querySelector(".popup-contact-us [type='text']");
let emailField = document.querySelector(".popup-contact-us [type='email']");
let letterField = document.querySelector(".popup-contact-us textarea");
let mapButton = document.querySelector(".contact-section img");
let mapPopup = document.querySelector(".popup-map");
let mapCloseButton = document.querySelector(".popup-map button");
let buyButtons = document.querySelectorAll(".buy-button");
let cartPopup = document.querySelector(".popup-to-cart");
let cartCloseButton = document.querySelector(".popup-to-cart .cross-button");
let continueShoppingButton = document.querySelector(".popup-to-cart-footer button");

// Promo Slider elements
let promoSlides = document.querySelectorAll(".promo-slider .promo-slide");
let nextButton = document.querySelector(".promo-slider .next-button");
let previousButton = document.querySelector(".promo-slider .previous-button");
let firstDot = document.querySelector(".slider-dots .first-button");
let secondDot = document.querySelector(".slider-dots .second-button");
let sliderDots = document.querySelectorAll(".slider-dots button");

// Service Slider elements
let shipmentButton = document.querySelector(".slider-tabs .shipment-button");
let guaranteeButton = document.querySelector(".slider-tabs .guarantee-button");
let creditButton = document.querySelector(".slider-tabs .credit-button");
let serviceTabs = document.querySelectorAll(".slider-tabs button");
let shipmentSlide = document.querySelector(".shipment-slide");
let guaranteeSlide = document.querySelector(".guarantee-slide");
let creditSlide = document.querySelector(".credit-slide");
let serviceSlides = document.querySelectorAll(".service-slide");

// Promo Slider

let currentIndex = 0;
let slidesListLength = promoSlides.length;

nextButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  promoSlides[currentIndex].classList.remove("slide-current");
  sliderDots[currentIndex].classList.remove("current");
  if (currentIndex + 1 == slidesListLength) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  promoSlides[currentIndex].classList.add("slide-current");
  sliderDots[currentIndex].classList.add("current");
});

previousButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  promoSlides[currentIndex].classList.remove("slide-current");
  sliderDots[currentIndex].classList.remove("current");
  if (currentIndex - 1 < 0) {
    currentIndex = slidesListLength - 1;
  } else {
    currentIndex--;
  }
  promoSlides[currentIndex].classList.add("slide-current");
  sliderDots[currentIndex].classList.add("current");
});

// let dotIndex = 0;

// sliderDots.forEach(item => {
//   item.addEventListener("click", function (evt) {
//     evt.preventDefault();
//     if (!item.classList.contains("current")) {
//       sliderDots.forEach(item => {
//         if (item.classList.contains("current")) {
//           item.classList.remove("current");
//         }
//       });
//       promoSlides.forEach(item => {
//         if (item.classList.contains("slide-current")) {
//           item.classList.remove("slide-current");
//         }
//       });
//       item.classList.add("current");
//       promoSlides[dotIndex].classList.add("slide-current");
//     }
//   });
// })

firstDot.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (!firstDot.classList.contains("current")) {
    sliderDots.forEach(item => {
      if (item.classList.contains("current")) {
        item.classList.remove("current");
      }
    });
    promoSlides.forEach(item => {
      if (item.classList.contains("slide-current")) {
        item.classList.remove("slide-current");
      }
    });
    firstDot.classList.add("current");
    currentIndex = 0;
    promoSlides[currentIndex].classList.add("slide-current");
  }
});

secondDot.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (!secondDot.classList.contains("current")) {
    sliderDots.forEach(item => {
      if (item.classList.contains("current")) {
        item.classList.remove("current");
      }
    });
    promoSlides.forEach(item => {
      if (item.classList.contains("slide-current")) {
        item.classList.remove("slide-current");
      }
    });
    secondDot.classList.add("current");
    currentIndex = 1;
    promoSlides[currentIndex].classList.add("slide-current");
  }
});

// Service Slider

shipmentButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (!shipmentButton.classList.contains("selected-tab")) {
    serviceTabs.forEach(item => {
      if (item.classList.contains("selected-tab")) {
        item.classList.remove("selected-tab");
      }
    });
    shipmentButton.classList.add("selected-tab");

    // Removing current class from current slide
    serviceSlides.forEach(item => {
      if (item.classList.contains("current")) {
        item.classList.remove("current");
      }
    });
    shipmentSlide.classList.add("current");
  }
});

guaranteeButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (!guaranteeButton.classList.contains("selected-tab")) {
    serviceTabs.forEach(item => {
      if (item.classList.contains("selected-tab")) {
        item.classList.remove("selected-tab");
      }
    });
    guaranteeButton.classList.add("selected-tab");

    // Removing current class from current slide
    serviceSlides.forEach(item => {
      if (item.classList.contains("current")) {
        item.classList.remove("current");
      }
    });
    guaranteeSlide.classList.add("current");
  }
});

creditButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (!creditButton.classList.contains("selected-tab")) {
    serviceTabs.forEach(item => {
      if (item.classList.contains("selected-tab")) {
        item.classList.remove("selected-tab");
      }
    });
    creditButton.classList.add("selected-tab");

    // Removing current class from current slide
    serviceSlides.forEach(item => {
      if (item.classList.contains("current")) {
        item.classList.remove("current");
      }
    });
    creditSlide.classList.add("current");
  }
});

// Checking if localStorage is supported

let isStorageSupport = true;
let storageUsername = "";
let storageEmail = "";

try {
  storageUsername = localStorage.getItem("username");
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

contactUsButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactUsPopup.classList.add("popup-show");

  if (storageUsername && storageEmail) {
    usernameField.value = storageUsername;
    emailField.value = storageEmail;
    letterField.focus();
  } else if (storageUsername && !storageEmail) {
    usernameField.value = storageUsername;
    emailField.focus();
  } else if (!storageUsername && storageEmail) {
    emailField.value = storageEmail;
    usernameField.focus();
  } else {
    usernameField.focus();
  }
});

contactUsForm.addEventListener("submit", function (evt) {
  if (!usernameField.value || !emailField.value || !letterField.value) {
    contactUsPopup.classList.remove("popup-error");
    contactUsPopup.offsetWidth = contactUsPopup.offsetWidth;
    contactUsPopup.classList.add("popup-error");
    evt.preventDefault();
  } else {
    if (isStorageSupport) {
      localStorage.setItem("username", usernameField.value);
      localStorage.setItem("email", emailField.value);
    }
  }
});

contactUsCloseButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactUsPopup.classList.remove("popup-show");
  contactUsPopup.classList.remove("popup-error");
});

// Map Popup

mapButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("popup-show");
});

mapCloseButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("popup-show");
});

// Cart Popup

buyButtons.forEach(item => {
  item.addEventListener("click", function (evt) {
    evt.preventDefault();
    cartPopup.classList.add("popup-show");
  });
});

cartCloseButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartPopup.classList.remove("popup-show");
});

continueShoppingButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartPopup.classList.remove("popup-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (contactUsPopup.classList.contains("popup-show")) {
      evt.preventDefault();
      contactUsPopup.classList.remove("popup-show");
      contactUsPopup.classList.remove("popup-error");
    } else if (mapPopup.classList.contains("popup-show")) {
      evt.preventDefault();
      mapPopup.classList.remove("popup-show");
    } else if (cartPopup.classList.contains("popup-show")) {
      evt.preventDefault();
      cartPopup.classList.remove("popup-show");
    }
  }
});


