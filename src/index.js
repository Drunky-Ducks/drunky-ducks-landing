import { randomQuote } from "./modules/generateQuote";
import { fillSwiper } from "./modules/fillSwiper";
import { fillFooterIcons } from "./modules/fillFooterIcons";

// import Swiper and modules styles
import Swiper, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Put random quote in hero section
const random = randomQuote();

const quote = document.createElement("p");
quote.textContent = random.quote;

const author = document.createElement("p");
author.textContent = random.author;

const quotesContainer = document.querySelector(".quotes-container");
quotesContainer.appendChild(quote);
quotesContainer.appendChild(author);

// Hero button hover animation
const heroButton = document.querySelector("#btn");
heroButton.addEventListener("mouseover", (event) => {
  const x = event.pageX - heroButton.offsetLeft;
  const y = event.pageY - heroButton.offsetTop;
  heroButton.style.setProperty("--x-pos", x + "px");
  heroButton.style.setProperty("--y-pos", y + "px");
});

// Initialize swiper element
const swiper = new Swiper(".swiper", {
  // Optional parameters
  modules: [Navigation, Pagination, Autoplay],
  direction: "horizontal",
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

swiper.on();

// Introduce JSON data cocktails in Swiper
fillSwiper();

fillFooterIcons();

// const btnE1 = document.querySelector(".title #btn");

// btnE1.addEventListener("mouseover", (event) => {
//   const x = event.pageX - btnE1.offsetLeft;
//   const y = event.pageY - btnE1.offsetTop;
//   btnE1.style.setProperty("--x-pos", x + "px");
//   btnE1.style.setProperty("--y-pos", y + "px");
// });

// LocalStorage del Modal
const overage = document.querySelector(".overage");
const underage = document.querySelector(".underage");
const modal = document.querySelector(".modal");

overage.addEventListener("click", () => {
  localStorage.setItem("isOverage", true);
  modal.style.display = "none";
});

underage.addEventListener("click", () => {
  location.replace("https://www.google.com/");
});

window.addEventListener("load", () => {
  const overageState = localStorage.getItem("isOverage");

  if (!overageState) {
    modal.style.display = "grid";
  }
});

// const navbar = document.querySelector(".navbar");
// const listIcon = document.createElement("list-icon");

// navbar.appendChild(listIcon);
