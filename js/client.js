"use strict";

// A Elements
const dashboard = document.querySelector(".dashboard-a");
const transactions = document.querySelector(".transactions-a");
const profile = document.querySelector(".profile-a");

// Containers
const dashboardContainer = document.querySelector(".dashboard-container");
const profileContainer = document.querySelector(".profile-container");

// Functions
dashboard.addEventListener("click", function (e) {
  profileContainer.classList.add("hidden");
  dashboardContainer.classList.remove("hidden");
  profile.closest("div").classList.remove("nav-client__active");
  dashboard.closest("div").classList.add("nav-client__active");
  dashboard.closest("div").classList.add("nav-client__active");
});

profile.addEventListener("click", function (e) {
  dashboardContainer.classList.add("hidden");
  profileContainer.classList.remove("hidden");
  dashboard.closest("div").classList.remove("nav-client__active");
  dashboard.classList.remove("nav-client__active");
  profile.closest("div").classList.add("nav-client__active");
});

// HIDDING TEMPORARILY
/* 
dashboardContainer.classList.add("hidden");
profileContainer.classList.remove("hidden");
 */
