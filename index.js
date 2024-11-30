// Variáveis para controle do menu
const menu = document.getElementById('floating-menu');
const icon = document.querySelector('.icone-perfil');
let menuTimeout;

// Alterna o menu ao clicar no ícone
function toggleMenu() {
    menu.classList.toggle('show');
}

// Garante que o menu fique visível enquanto o mouse estiver sobre o ícone
icon.addEventListener('mouseenter', () => {
    clearTimeout(menuTimeout);
    menu.classList.add('show');
});

// Oculta o menu quando o mouse sair do ícone após um breve intervalo
icon.addEventListener('mouseleave', () => {
    menuTimeout = setTimeout(() => {
        menu.classList.remove('show');
    }, 300);
});

// Mantém o menu visível enquanto o mouse estiver sobre ele
menu.addEventListener('mouseenter', () => {
    clearTimeout(menuTimeout);
});

// Oculta o menu quando o mouse sair dele
menu.addEventListener('mouseleave', () => {
    menu.classList.remove('show');
});
let h1nome = 'Projetos do Club </Dev>';
let h2descricao = 'O Club &lt;/Dev&gt; é uma plataforma criada especialmente para ajudar desenvolvedores juniores a darem os primeiros passos no mundo da programação. Aqui, conectamos talentos iniciantes a projetos de desenvolvimento desafiadores e práticos, que impulsionam o aprendizado, fortalecem portfólios e abrem portas para oportunidades no mercado de trabalho. Nosso compromisso é oferecer um ambiente colaborativo, onde juniores podem aprender, crescer e se destacar, enquanto constroem conexões valiosas e acumulam experiências que fazem a diferença em suas carreiras.'
document.getElementById('h1title').textContent = h1nome;
document.getElementById('h2descripion').textContent = h2descricao;