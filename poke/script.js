const pokemons = {
    Bulbasauro: {
        evolucoes: [
            {
                nome: "Bulbasauro",
                altura: "0,7 m",
                peso: "6,9 kg",
                categoria: "Semente",
                habilidades: "Crescer demais",
                imagem: "./img/Bulbasauro.png"
            },
            {
                nome: "Ivysaur",
                altura: "1,0 m",
                peso: "13,0 kg",
                categoria: "Semente",
                habilidades: "Crescer ainda mais",
                imagem: "./img/Ivysaur.png"
            },
            {
                nome: "Venusaur",
                altura: "2,0 m",
                peso: "100,0 kg",
                categoria: "Planta",
                habilidades: "Poderosas folhas",
                imagem: "./img/Venusaur.png"
            }
        ]
    },
    Charmander: {
        evolucoes: [
            {
                nome: "Charmander",
                altura: "0,6 m",
                peso: "8,5 kg",
                categoria: "Lagarto",
                habilidades: "Chama",
                imagem: "./img/Charmander.png"
            },
            {
                nome: "Charmeleon",
                altura: "1,1 m",
                peso: "19,0 kg",
                categoria: "Fogo",
                habilidades: "Fúria",
                imagem: "./img/Charmeleon.png"
            },
            {
                nome: "Charizard",
                altura: "1,7 m",
                peso: "90,5 kg",
                categoria: "Fogo/Voador",
                habilidades: "Labaredas",
                imagem: "./img/Charizard.png"
            }
        ]
    },Squirtle: {
        evolucoes: [
            {
                nome: "Squirtle",
                altura: "0,5 m",
                peso: "9,0 kg",
                categoria: "Água",
                habilidades: "Jato d'água",
                imagem: "./img/Squirtle.png"
            },
            {
                nome: "Wartortle",
                altura: "1,0 m",
                peso: "22,5 kg",
                categoria: "Água",
                habilidades: "Armadura aquática",
                imagem: "./img/Wartortle.png"
            },
            {
                nome: "Blastoise",
                altura: "1,6 m",
                peso: "85,5 kg",
                categoria: "Água",
                habilidades: "Canhões de água",
                imagem: "./img/Blastoise.png"
            }
        ]
    },
        Caterpie: {
            evolucoes: [
                {
                    nome: "Caterpie",
                    altura: "0,3 m",
                    peso: "2,9 kg",
                    categoria: "Minhoca",
                    habilidades: "Escapada",
                    imagem: "./img/Caterpie.png"
                },
                {
                    nome: "Metapod",
                    altura: "0,7 m",
                    peso: "9,9 kg",
                    categoria: "Casulo",
                    habilidades: "Mudar de pele",
                    imagem: "./img/Metapod.png"
                },
                {
                    nome: "Butterfree",
                    altura: "1,1 m",
                    peso: "32,0 kg",
                    categoria: "Borboleta",
                    habilidades: "Pó mágico",
                    imagem: "./img/Butterfree.png"
                }
            ]
        },
        Weedle: {
            evolucoes: [
                {
                    nome: "Weedle",
                    altura: "0,3 m",
                    peso: "3,2 kg",
                    categoria: "Inseto",
                    habilidades: "Picada venenosa",
                    imagem: "./img/Weedle.png"
                },
                {
                    nome: "Kakuna",
                    altura: "0,6 m",
                    peso: "10,0 kg",
                    categoria: "Casulo",
                    habilidades: "Casca dura",
                    imagem: "./img/Kakuna.png"
                },
                {
                    nome: "Beedrill",
                    altura: "1,0 m",
                    peso: "29,5 kg",
                    categoria: "Abelha venenosa",
                    habilidades: "Ferrão triplo",
                    imagem: "./img/Beedrill.png"
                }
            ]
        },
        Pidgey: {
            evolucoes: [
                {
                    nome: "Pidgey",
                    altura: "0,3 m",
                    peso: "1,8 kg",
                    categoria: "Pássaro",
                    habilidades: "Vento forte",
                    imagem: "./img/Pidgey.png"
                },
                {
                    nome: "Pidgeotto",
                    altura: "1,1 m",
                    peso: "30,0 kg",
                    categoria: "Pássaro",
                    habilidades: "Ataque rápido",
                    imagem: "./img/Pidgeotto.png"
                },
                {
                    nome: "Pidgeot",
                    altura: "1,5 m",
                    peso: "39,5 kg",
                    categoria: "Pássaro",
                    habilidades: "Rajada de vento",
                    imagem: "./img/Pidgeot.png"
                }
            ]
        }, Dratini: {
            evolucoes: [
                {
                    nome: "Dratini",
                    altura: "1.8 m",
                    peso: "3,3 kg",
                    categoria: "Dragão",
                    habilidades: "Pele Descamada",
                    fraquezas:"Gelo , Fada, Dragão",
                    imagem: "./img/Dratini.png"
                },
                {
                    nome: "Dragonair",
                    altura: "4,0 m",
                    peso: "16,5 kg",
                    categoria: "Dragão",
                    habilidades: "Pele Descamada",
                    fraquezas:"Gelo , Fada, Dragão",
                    imagem: "./img/dragonair.png"
                },
                {
                    nome: "Dragonite",
                    altura: "2,2 m",
                    peso: "210,0 kg",
                    categoria: "Dragão",
                    habilidades: "Foco Interno",
                    fraquezas:"Gelo , Pedra, Fada, Dragão",
                    imagem: "./img/dragonite.png"
                }
            ]
        }, Chikorita: {
            evolucoes: [
                {
                    nome: "Chikorita",
                    altura: "0,6 m",
                    peso: "6,4 kg",
                    categoria: "Erva",
                    habilidades: "Sobrecrescimento",
                    fraquezas: "Fogo, Gelo, Voador, Inseto",
                    imagem: "./img/Chikorita.png"
                },
                {
                    nome: "Bayleef",
                    altura: "1,2 m",
                    peso: "15,8 kg",
                    categoria: "Erva",
                    habilidades: "Sobrecrescimento",
                    fraquezas: "Fogo, Gelo, Voador, Inseto",
                    imagem: "./img/Bayleef.png"
                },
                {
                    nome: "Meganium",
                    altura: "1,8 m",
                    peso: "100,5 kg",
                    categoria: "Erva",
                    habilidades: "Sobrecrescimento",
                    fraquezas: "Fogo, Gelo, Voador, Inseto",
                    imagem: "./img/Meganium.png"
                }
            ]
        },
};


  function abrirModal(id) {
    const modal = document.getElementById(id);
    if (!modal) return; // Verifica se o modal existe

    modal.style.display = "block";

    // Alterar as informações do modal para a primeira imagem
    atualizarInformacoes(id, 0);
}

  function atualizarInformacoes(id, indiceImagem) {
    const evolucoes = pokemons[id].evolucoes;
    const pokemonAtual = evolucoes[indiceImagem];
  
    // Atualiza os textos do modal
    document.querySelector(`#${id} .nome`).textContent = pokemonAtual.nome;
    document.querySelector(`#${id} .altura`).textContent = "Altura: " + pokemonAtual.altura;
    document.querySelector(`#${id} .peso`).textContent = "Peso: " + pokemonAtual.peso;
    document.querySelector(`#${id} .categoria`).textContent = "Tipo: " + pokemonAtual.categoria;
    document.querySelector(`#${id} .habilidades`).textContent = "Habilidades: " + pokemonAtual.habilidades;
    document.querySelector(`#${id} .fraquezas`).textContent = "Fraquezas: " + pokemonAtual.fraquezas;
    // Atualiza a imagem (não necessário aqui se feito em mudarImagem)
  }
  function mudarImagem(id, direcao) {
    const evolucoes = pokemons[id].evolucoes;
    const imagens = document.querySelectorAll(`#${id} .img-card`);
  
    let imagemVisivel = Array.from(imagens).find(img => img.style.display !== "none");
    let indiceImagem = Array.from(imagens).indexOf(imagemVisivel);
  
    indiceImagem += direcao;
  
    if (indiceImagem < 0) indiceImagem = evolucoes.length - 1;
    if (indiceImagem >= evolucoes.length) indiceImagem = 0;
  
    imagens.forEach((img, index) => {
      img.style.display = index === indiceImagem ? "block" : "none";
    });
  
    // Atualiza as descrições
    atualizarInformacoes(id, indiceImagem);
  }
  function fecharModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.style.display = "none";
    }
}

const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const cards = document.querySelectorAll('.conteudo');

function pesquisarCards() {
    const searchValue = searchInput.value.toLowerCase();
    let resultadoEncontrado = false;

    cards.forEach(card => {
        const nome = card.querySelector('h2').textContent.toLowerCase();
        if (nome.includes(searchValue)) {
            card.style.display = 'block';
            resultadoEncontrado = true;
        } else {
            card.style.display = 'none';
        }
    });

    const mensagemErro = document.getElementById('mensagem-erro');
    if (resultadoEncontrado) {
        mensagemErro.style.display = 'none';
    } else {
        mensagemErro.style.display = 'block';
    }
}


// Evento ao clicar na lupinha
searchButton.addEventListener('click', pesquisarCards);

function mostrarTodosCards() {
    cards.forEach(card => {
        card.style.display = 'block';
    });
    searchInput.value = ''; // Limpa o campo de pesquisa

    // Esconde a mensagem de erro
    const mensagemErro = document.getElementById('mensagem-erro');
    mensagemErro.style.display = 'none';
}

  const botaoVoltar = document.getElementById('botao-voltar');

// Evento ao clicar no botão "Voltar"
botaoVoltar.addEventListener('click', mostrarTodosCards);