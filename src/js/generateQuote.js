const quotes = [
  {
    quote: "\"Después de tragos y fiesta, mira bien con quien te acuestas\"",
    author: "Anónimo"
  },
  {
    quote: "\"Bebo para olvidar que soy un borracho\"",
    author: "Antonine de Saint-Exupery"
  },
  {
    quote: "\"Yo no tengo problemas con la bebida, excepto cuando no puedo servirme una\"",
    author: "Tom Waits"
  }
];

export const randomQuote = () => {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  return `${quote.quote} <br> ${quote.author}`;
};
