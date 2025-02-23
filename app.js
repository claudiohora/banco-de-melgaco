"use strict";

// Containers
const loginContainer = document.querySelector(".login-container");
const createAccountContainer = document.querySelector(".create-account-container");

// A elements
const createAccountLinks = document.querySelectorAll(".create-account");

// Functions
createAccountLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    loginContainer.classList.toggle("hidden");
    createAccountContainer.classList.toggle("hidden");
  });
});
