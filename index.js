document.getElementById("Icone-perfil").addEventListener("click", function() {
  var menu = document.querySelector(".Perfil-opcoes");

  // Verifica o valor do display atual usando getComputedStyle
  var currentDisplay = window.getComputedStyle(menu).display;

  // Alterna o menu entre visível e escondido
  if (currentDisplay === "none") {
      menu.style.display = "block"; // Exibe o menu
  } else {
      menu.style.display = "none"; // Esconde o menu
  }
});
const swiper = new Swiper('.swiper', {
  loop: true,
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const slides = document.querySelector('.slides');
let index = 0;

function showNextSlide() {
  index++;
  const totalSlides = slides.children.length;
  if (index >= totalSlides) index = 0;
  slides.style.transform = `translateX(-${index * 100}%)`;
}

function showPrevSlide() {
  index--;
  const totalSlides = slides.children.length;
  if (index < 0) index = totalSlides - 1;
  slides.style.transform = `translateX(-${index * 100}%)`;
}

document.querySelector('.slider::after').addEventListener('click', showNextSlide);
document.querySelector('.slider::before').addEventListener('click', showPrevSlide);

// Slide automático
setInterval(showNextSlide, 3000);
