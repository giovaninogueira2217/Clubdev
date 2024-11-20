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
