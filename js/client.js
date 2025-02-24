"use strict";

// A Elements
const dashboard = document.querySelector(".dashboard-a");
const transactions = document.querySelector(".transactions-a");
const profile = document.querySelector(".profile-a");

// Containers
const dashboardContainer = document.querySelector(".dashboard-container");

// Functions
dashboard.addEventListener("click", function (e) {
  dashboardContainer.classList.toggle("hidden");
});
