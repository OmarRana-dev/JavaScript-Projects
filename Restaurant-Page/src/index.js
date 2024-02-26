import { home, hungryBtn } from "./home.js";
import menu from "./menu.js";
import contect from "./about.js";
import "./style.css";

console.log("I'm, from the Index Page.");

const homeBtn = document.querySelector(".btnHome");
const menuBtn = document.querySelector(".btnMenu");
const contectBtn = document.querySelector(".btnAbout");
const container = document.querySelector("#content");

// this for add highlight style in navbar elements
const navItems = document.querySelectorAll(".navBtn");
navItems.forEach((item) => {
  item.addEventListener("click", function () {
    // Remove 'active' class from any previously active item
    const currentActive = document.querySelector(".navBtn.active");
    if (currentActive) {
      currentActive.classList.remove("active");
    }

    // Add 'active' class to the clicked item
    this.classList.add("active");
  });
});

home();
hungryBtn().addEventListener("click", () => {
  homeBtn.classList.remove("active");
  menuBtn.classList.add("active");
  menu();
});

homeBtn.addEventListener("click", () => {
  container.innerHTML = "";
  home();

  hungryBtn().addEventListener("click", () => {
    homeBtn.classList.remove("active");
    menuBtn.classList.add("active");
    menu();
  });
});

menuBtn.addEventListener("click", () => {
  container.innerHTML = "";
  menu();
});

contectBtn.addEventListener("click", () => {
  container.innerHTML = "";
  contect();
});
