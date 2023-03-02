import "../components/CocktailInfo";
import getAllCocktails from "./cocktails";

export const fillSwiper = () => {
  const cocktails = getAllCocktails();
  const swiperWrapper = document.querySelector(".swiper-wrapper");

  for (const cocktail of cocktails) {
    const swiperSlide = document.createElement("div");
    swiperSlide.classList.add("swiper-slide");

    const cocktailInfo = document.createElement("cocktail-info");
    cocktailInfo.cocktail = cocktail;

    swiperSlide.appendChild(cocktailInfo);
    swiperWrapper.appendChild(swiperSlide);
  }
};
