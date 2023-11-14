const $ = document.querySelector.bind(document);
const conteudoDasQuestoes = $('#conteudoDasQuestoes')
const pergunta = $("#pergunta")
const botoes = $('#botoes')
const botaoReiniciar = $('#reiniciar')
const conteudoDasRespostas = $('#conteudoDasRespostas')
const textoDoResultado = $('#textoDoResultado')
const textoPontuação = $('#pontuação')

//Criar uma lista de perguntas com suas respectivas respostas corretas.
const perguntas = [
    {
      pergunta: "Voce conhecer todas da turma?",
      alternativas: [
        { alternativa: "Sim", correta: true },
        { alternativa: "Nao", correta: false },
      ]
    },
    {
      pergunta: "Quem e o cabeludo da turma?",
      alternativas: [
        { alternativa: "Joel", correta: false},
        { alternativa: "Mauro", correta: true },
        { alternativa: "Cleyson", correta: false},
        { alternativa: "Lordy", correta: false }
      ]
    },
    {
      pergunta: "Quem tem a cura mais potente?",
      alternativas: [
        { alternativa: "Floryn", correta: false },
        { alternativa: "Nana", correta: false },
        { alternativa: "Angela", correta: false },
        { alternativa: "Estes", correta: true }
      ]
    },
    {
      pergunta: "Quem fica imune enquanto ativa a ultmate?",
      alternativas: [
        { alternativa: "Wanwan", correta: true },
        { alternativa: "Yu Zhong", correta: false },
        { alternativa: "Nana", correta: false },
        { alternativa: "Natália", correta: false }
      ]
    },  
    {
      pergunta: "Quem é a pessoa mais difícil de jogar?",
      alternativas: [
        { alternativa: "Lunox", correta: false },
        { alternativa: "Harley", correta: false },
        { alternativa: "Fanny", correta: true },
        { alternativa: "Kagura", correta: false }
      ]
    },
    {
      pergunta: "Qual a idade de Jinx?",
      alternativas: [
        { alternativa: "19-21", correta: false },
        { alternativa: "7-12", correta: false },
        { alternativa: "15-20", correta: false },
        { alternativa: "17-19", correta: true }
      ]
    },
    {
      pergunta: "Quem criou a Jinx?",
      alternativas: [
        { alternativa: "Caitlyn", correta: false },
        { alternativa: "Mylo", correta: false },
        { alternativa: "vi", correta: true },
        { alternativa: "Ela mesma", correta: false }
      ]
    },
    {
      pergunta: "A Lux pertence aos?",
      alternativas: [
        { alternativa: "Suporte", correta: false },
        { alternativa: "Magos", correta: true },
        { alternativa: "Tank", correta: false },
        { alternativa: "Lutador", correta: false }
      ]
    },
    {
      pergunta: "Bathrum, o Spirit Breaker usa um anel em seu focinho por uma razão. Qual seria essa razão?",
      alternativas: [
        { alternativa: "Ele o usa puramente por estilo", correta: false },
        { alternativa: "Ele só consegue se manter no plano físico por conta desse anel", correta: false },
        { alternativa: "Para se lembrar que serve a um mestre oculto, o plano espiritual", correta: true},
        { alternativa: "É um grilhão para conter seu verdadeiro poder", correta: false }
      ]
    },
    {
      pergunta: "Pudge:De que é composta a sua armadura de corpos? ",
      alternativas: [
        { alternativa: "Corpos apenas de unidades inimigas", correta: false },
        { alternativa: "Corpos apenas de heróis inimigos", correta: true },
        { alternativa: "Corpos de Heróis Inimigos e Aliados", correta: false },
        { alternativa: "Corpos de Heróis e unidades inimigas", correta: false }
      ]
    },









    
  ];

let pontuacao = 0
let indiceDaPerguntaAtual = 0

//Exibir o resultado final com a pontuação alcançada.
function apresentarResultado() {

  conteudoDasQuestoes.classList.add("desativado");
  conteudoDasRespostas.classList.remove("desativado");

  textoDoResultado.innerText = "Você acertou: " + pontuacao + " de " + perguntas.length + " questões"
  textoPontuação.innerText = "Pontuação: " + pontuacao


}

// Implementar a lógica para verificar se a resposta selecionada está correta.
function selecionarAlternativaCorreta(e) {
  let alternativaCorreta = e.target.dataset.correta
  let ultimoIndiceDoArray = perguntas.length - 1//quantidade de elementos no arry -1
 
  // console.log(laternativaCerta) // pré definida
  
  if (alternativaCorreta){
    pontuacao++

  }

  if (ultimoIndiceDoArray == indiceDaPerguntaAtual){
    apresentarResultado()
    indiceDaPerguntaAtual = 0
    pontuacao = 0
  }
  
  else {
    indiceDaPerguntaAtual++
    carregarPergunta()
  }
}

//Adicionar uma função para exibir as opções de resposta.
  function exibirPergunta(perguntaAtual){
    
    pergunta.innerText = perguntaAtual.pergunta
    
    perguntaAtual.alternativas.forEach(questao => { // pré definido
        const botao = document.createElement("button");// pré definido
          botao.classList.add("btn"); // pré definido

        if (questao.correta) {// pré definido
            botao.dataset.correta = questao.correta
        }
       botao.addEventListener('click', selecionarAlternativaCorreta)// pré definido
       
       botoes.appendChild(botao) 
      
       botao.innerText = questao.alternativa

        // botao.innerText = 'texto no botão'; // pré  definido
        
      
    });
}
  // Implementar uma função para carregar a pergunta atual.
  function carregarPergunta() {
    
    let perguntaAtual = perguntas[indiceDaPerguntaAtual]
    
    resetarEstado();
    exibirPergunta(perguntaAtual)
    
}

// Reiniciar Game
 function startGame() {

  conteudoDasQuestoes.classList.remove("desativado");
  conteudoDasRespostas.classList.add("desativado");
  
  carregarPergunta()
  
  }
   
botaoReiniciar.addEventListener("click", startGame);

    
carregarPergunta()


// bloco pré definido
function resetarEstado() {
    limparClasses(document.body);
    while (botoes.firstChild) {
      botoes.removeChild(botoes.firstChild);
    }
}
    
  function statusDasClasses(elemento, correta) {
    limparClasses(elemento);
    if (correta) {
      elemento.classList.add("correta");
    } else {
      elemento.classList.add("errada");
    }
}
  
  function limparClasses(elemento) {
    elemento.classList.remove("correto");
    elemento.classList.remove("errada");
}
// fechando bloco pré definido