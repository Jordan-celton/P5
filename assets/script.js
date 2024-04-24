const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>", // position 0;
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>", // position 1;
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>", // position 2;
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>", // position 3;
  },
];

const prevButton = document.getElementById("prev");
// déclare la variable pour récupérer l'id "prev";
const nextButton = document.getElementById("next");
// déclare la variable pour récupérer l'id "next";

let currentSlideIndex = 0;
// je viens définir une variable sur la position 0;

prevButton.addEventListener("click", () => {
  // je définis un événement au clic sur le bouton avec l'id "prev";
  currentSlideIndex--;
  // on enlève de 1 la position de currentSlideIndex;
  if (currentSlideIndex < 0) {
    currentSlideIndex = slides.length - 1;
    // Si l'indice de la diapositive actuelle est inférieur à zéro, alors définir l'indice de la diapositive actuelle sur la position précédente dans le tableau "slides";
  }
});

nextButton.addEventListener("click", () => {
  currentSlideIndex++;
  // on ajoute +1 à la position de currentSlideIndex
  if (currentSlideIndex >= slides.length) {
    currentSlideIndex = 0;
    // si l'indice de la position actuelle est supérieur ou égal à la longueur du tableau alors on définit l'indice de la diapositive à zéro.
    // on revient donc à la 1ere image;
  }
});
