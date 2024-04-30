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
const nextButton = document.getElementById("next");
const bannerImage = document.querySelector(".banner-img");
const tagline = document.querySelector(".tagline");
const dots = document.querySelectorAll(".dot");
let currentSlideIndex = 0;

function updateSlide() {
  const slide = slides[currentSlideIndex];
  bannerImage.src = "./assets/images/slideshow/" + slide.image;
  tagline.innerHTML = slide.tagLine;
  dots.forEach((dot, index) => {
    if (index === currentSlideIndex) {
      dot.classList.add("dot_selected");
    } else {
      dot.classList.remove("dot_selected");
    }
  });
}

function decrementSlindeIndex() {
  currentSlideIndex--;
  if (currentSlideIndex < 0) {
    currentSlideIndex = slides.length - 1;
  }
}

function incrementSlideIndex() {
  currentSlideIndex++; //
  if (currentSlideIndex >= slides.length) {
    currentSlideIndex = 0;
  }
}

prevButton.addEventListener("click", () => {
  decrementSlindeIndex();
  updateSlide();
});

nextButton.addEventListener("click", () => {
  incrementSlideIndex();
  updateSlide();
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentSlideIndex = index;
    updateSlide();
  });
});
