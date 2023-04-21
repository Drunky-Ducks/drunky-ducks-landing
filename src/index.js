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

// LocalStorage del Modal
const overage = document.querySelector(".overage");
const underage = document.querySelector(".underage");
const modal = document.querySelector(".modal");

overage.addEventListener("click", () => {
  localStorage.setItem("overage", true);
  modal.style.display = "none";
});

underage.addEventListener("click", () => {
  location.replace("https://www.google.com/");
});

window.addEventListener("load", () => {
  const overageState = localStorage.getItem("overage");

  if (!overageState) {
    modal.style.display = "grid";
  }
});
