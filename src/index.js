import { randomQuote } from "./js/generateQuote";
import { fillSwiper } from "./js/fillSwiper";

// import Swiper and modules styles
import Swiper, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

//  Controll modal events
const modalButtons = document.querySelectorAll(".modal .button");

for (const modalButton of modalButtons) {
  modalButton.addEventListener("click", (event) => {
    const choose = event.target.classList[1];
    const modal = document.querySelector(".modal");

    if (choose === "overage") {
      modal.style.display = "none";
    } else {
      location.replace("https://www.google.com/");
    }
  });
}

// Put random quote in hero section
document.querySelector(".random-quotes").innerHTML = randomQuote();

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
