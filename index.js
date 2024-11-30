function toggleMenu() {
  const menu = document.getElementById('floating-menu');
  menu.classList.toggle('show'); 
}
let h1nome = 'Melhores projetos do Club </Dev>';
let h2descricao = 'O Club &lt;/Dev&gt; é uma plataforma criada especialmente para ajudar desenvolvedores juniores a darem os primeiros passos no mundo da programação. Aqui, conectamos talentos iniciantes a projetos de desenvolvimento desafiadores e práticos, que impulsionam o aprendizado, fortalecem portfólios e abrem portas para oportunidades no mercado de trabalho. Nosso compromisso é oferecer um ambiente colaborativo, onde juniores podem aprender, crescer e se destacar, enquanto constroem conexões valiosas e acumulam experiências que fazem a diferença em suas carreiras.'
document.getElementById('h1title').textContent = h1nome;
document.getElementById('h2descripion').textContent = h2descricao;