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
const bannerImage = document.querySelector(".banner-img");
// déclare la variable pour récupérer la classe banner-img;
const tagline = document.querySelector(".tagline");
// déclare la variable pour récupérer la classe tagline;
const dots = document.querySelectorAll(".dot");
// déclare la variable pour récupérer la classe dot;

let currentSlideIndex = 0;
// je viens définir une variable sur la position 0 de notre tableau;

prevButton.addEventListener("click", () => {
  // console.log("Fleche de gauche");
  // afin de vérifer le fonctionnement de mon évènement au clic
  // je définis un événement au clic sur le bouton avec l'id "prev";

  currentSlideIndex--;
  // on enlève de 1 la position de currentSlideIndex;

  if (currentSlideIndex < 0) {
    currentSlideIndex = slides.length - 1;

    // Si l'indice de la diapositive actuelle est inférieur à zéro, alors définir l'indice de la diapositive actuelle sur la position précédente dans le tableau "slides";
  }
  updateSlide();
  // appelle de la fonction pour qu'elle fonctionne au clic;
});

nextButton.addEventListener("click", () => {
  // console.log("Fleche de droite");
  // afin de vérifer le fonctionnement de mon évènement au clic

  currentSlideIndex++;
  // on ajoute +1 à la position de currentSlideIndex

  if (currentSlideIndex >= slides.length) {
    currentSlideIndex = 0; // permet de revenir à la position 0 de notre tableau "slides";

    // si l'indice de la position actuelle est supérieur ou égal à la longueur du tableau alors on définit l'indice de la diapositive à zéro.
  }
  updateSlide();
  // appelle de la fonction pour qu'elle fonctionne au clic;
});

dots.forEach((dot, index) => {
  // forEach car on vient dans un tableau chercher dots pour lui donner une fonction pour chaque élément et effectuer une fonction;

  dot.addEventListener("click", () => {
    // on ajoute un événement au clic pour dot

    currentSlideIndex = index;
    // on indique que index représente currentSlideIndex

    updateSlide();
    // appelle de la fonction
  });
});

function updateSlide() {
  // création de la fonction au moment du clic;

  const slide = slides[currentSlideIndex];
  // déclare une variable à partir du tableau "slides" en fonction de son positionnement;

  bannerImage.src = "./assets/images/slideshow/" + slide.image;
  // on indique le chemin vers les images de notre dossier + leur positionnement à chaque clic;

  tagline.innerHTML = slide.tagLine;
  // permet de mettre à jour le texte sous l'image dès le changement de celle-ci;

  dots.forEach((dot, index) => {
    if (index === currentSlideIndex) {
      // la position de notre index est = à la position dans notre tableau;

      dot.classList.add("dot_selected");
      // pour chaque point si leur position correspond à la position actuelle de notre tableau alors on leur ajoute la classe "dot_selected"
    } else {
      dot.classList.remove("dot_selected");
      // sinon on leur enlève la classe;
    }
  });
}
