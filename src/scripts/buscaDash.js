var filtro = document.querySelector("#search-navbar");
var filtroDesk = document.querySelector("#search-navbar-desk");
var cards = document.querySelectorAll(".card h5");

console.log(filtroDesk);
console.log(filtro);

filtro.addEventListener("keyup", filtroDosCards);
filtroDesk.addEventListener("keyup", filtroDosCardsDesk);

function filtroDosCards() {
  let textoInput = filtro.value.toLowerCase();

  if (textoInput == "") {
    cards.forEach((card) => {
      let cardContainer = card.parentElement.parentElement;
      cardContainer.style.display = "block";
    });
  } else {
    cards.forEach((card) => {
      let textoCard = card.textContent.toLowerCase();
      console.log(textoInput);

      if (!textoCard.includes(textoInput)) {
        let cardContainer = card.parentElement.parentElement;
        cardContainer.style.display = "none";
      } else {
        let cardContainer = card.parentElement.parentElement;
        cardContainer.style.display = "block";
      }
    });
  }
}

function filtroDosCardsDesk() {
  let textoInput = filtroDesk.value.toLowerCase();

  if (textoInput == "") {
    cards.forEach((card) => {
      let cardContainer = card.parentElement.parentElement;
      cardContainer.style.display = "block";
    });
  } else {
    cards.forEach((card) => {
      let textoCard = card.textContent.toLowerCase();
      console.log(textoInput);

      if (!textoCard.includes(textoInput)) {
        let cardContainer = card.parentElement.parentElement;
        cardContainer.style.display = "none";
      } else {
        let cardContainer = card.parentElement.parentElement;
        cardContainer.style.display = "block";
      }
    });
  }
}