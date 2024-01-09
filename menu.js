// BURGERMENU FRA TEMA 3
const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const menu = document.querySelector(".menu");
const menu_index = document.querySelector("#menu_index");
const links = document.querySelectorAll(".menu li a");
const links_index = document.querySelectorAll("#menu_index li a");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    burger.classList.remove("active");
    nav.classList.remove("active");
  });
});
