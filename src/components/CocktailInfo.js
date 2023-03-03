// Lógica Javascript del componente
export class CocktailInfo extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  set cocktail(data) {
    this._cocktail = data;
  }

  get cocktail() {
    return this._cocktail;
  }

  static get styles() {
    return /* css */ `
        @media screen and (max-width: 768px){
          img {
            max-width: 300px;
            max-height: 400px;
          }
        }

        @media screen and (max-width: 425px) {
          .details {
            flex-direction: column;
          }
        }

        @media screen and (max-width: 375px) {
          img {
            max-width: 200px;
            max-height: 300px;
          }
        }

        @media screen and (max-width: 320px) {
          .details div {
            font-size: 0.9em;
          }
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .details {
          width: 100%;
          display: flex;
          flex-direction: row-reverse;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          text-align: center;
          font-size: 1.4rem;
          gap: 40px;
        }

        img{
          width: 400px;
          height: 500px;
          box-shadow: rgb(0 0 0 / 50.8%) 0 8px 15px;
        }

        .details div {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        h1 {
          color: #ffc300;
          letter-spacing: 1.5px;
        }

        h3 {
          color: #f9db7a;
        }

        ul {
          list-style: none;
        }
    `;
  }

  connectedCallback() {
    this.render();
    this.insertIngredients();
  }

  insertIngredients() {
    const list = this.shadowRoot.querySelector(".cocktail-ingredients");
    const cocktail = this.cocktail;

    for (const props in cocktail.strIngredients) {
      const ingredient = document.createElement("li");

      if (cocktail.strMeasures[props]) {
        ingredient.textContent = `${cocktail.strIngredients[props]} - ${cocktail.strMeasures[props]}`;
      } else {
        ingredient.textContent = cocktail.strIngredients[props];
      }

      list.appendChild(ingredient);
    }
  }

  render() {
    const cocktail = this.cocktail;

    this.shadowRoot.innerHTML = /* html */ `
        <style>${CocktailInfo.styles}</style>
        <div class="details">
            <img src=${cocktail.strDrinkThumb} alt=${cocktail.strDrink}>
            <div>
              <h1>${cocktail.strDrink}</h1>
              <h3>${cocktail.strAlcoholic}</h3>
              <ul class="cocktail-ingredients"></ul>
            </div>
        </div>
    `;
  }
}

customElements.define("cocktail-info", CocktailInfo);
