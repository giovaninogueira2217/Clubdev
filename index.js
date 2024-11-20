document.getElementById('Icone-perfil').addEventListener('click', function() {
  var menu = document.querySelector('.Perfil-opcoes');
  
  if (menu.style.display === 'none' || menu.style.display === '') {
      menu.style.display = 'block'; // Exibe o menu
  } else {
      menu.style.display = 'none'; // Esconde o menu
  }
});