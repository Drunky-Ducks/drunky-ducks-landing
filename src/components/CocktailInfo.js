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
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        div {
            margin-top: 4%;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            font-size: 1.4rem;
        }

        img{
            width: 400px;
            height: 500px;
            background-size: contain;
            background-position: center;
            border-radius: 5px;
            box-shadow: 2px 4px 8px #585858;
            margin-bottom: 1em;
        }

        h1 {
            color: #ffc300;
            letter-spacing: 1.5px;
        }

        h3 {
        color: #f9db7a;
        }

        ul {list-style: none;}
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
        <div>
            <img src=${cocktail.strDrinkThumb} alt=${cocktail.strDrink}>
            <h1>${cocktail.strDrink}</h1>
            <h3>${cocktail.strAlcoholic}</h3>
            <ul class="cocktail-ingredients"></ul>
        </div>
    `;
  }
}

customElements.define("cocktail-info", CocktailInfo);
