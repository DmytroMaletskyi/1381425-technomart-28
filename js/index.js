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
})

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
})

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (contactUsPopup.classList.contains("popup-show")) {
      evt.preventDefault();
      contactUsPopup.classList.remove("popup-show");
      contactUsPopup.classList.remove("popup-error");
    } else if (mapPopup.classList.contains("popup-show")) {
      evt.preventDefault();
      mapPopup.classList.remove("popup-show");
    }
  }
});


