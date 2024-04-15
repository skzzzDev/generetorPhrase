import { useState } from "react";
import "./App.css";
import logo from "./assets/logo-skz.png";

function App() {
  const [textFrase, setTextFrase] = useState("");
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(0);

  const allFrases = [
    {
      id: 1,
      nome: "Motivação",
      frases: [
        "O otimismo é a fé em ação. Nada pode ser feito sem esperança e confiança.",
        "Acredite em você mesmo e tudo será possível.",
        "O que você faz hoje pode melhorar todos os amanhãs.",
        "O maior prazer na vida é fazer o que as pessoas dizem que você não pode fazer.",
        "O sucesso é a soma de pequenos esforços repetidos dia após dia."
      ],
    },
    {
      id: 2,
      nome: "Vencer",
      frases: [
        "Vencer não é tudo, mas querer vencer é.",
        "O verdadeiro vencedor é aquele que continua mesmo quando parece que tudo está perdido.",
        "Não é o tamanho do cão na luta, é o tamanho da luta no cão.",
        "O campeão é alguém que continua lutando quando tudo parece perdido.",
        "Você nunca é um perdedor até desistir de tentar.",
      ],
    },
    {
      id: 3,
      nome: "Dinheiro",
      frases: [
        "O dinheiro não é tudo, mas é certamente uma peça importante no quebra-cabeça da vida.",
        "O dinheiro não traz felicidade, mas pode comprar conforto e oportunidades para buscá-la.",
        "O dinheiro é como um ímã; você atrai o que você é, não o que você quer.",
        "O dinheiro é uma ferramenta: pode ser usado para construir ou destruir, dependendo de quem o controla.",
        "O segredo para ganhar dinheiro é ganhar dinheiro enquanto você dorme."
      ],
    },
  ];

  function handleShitchCategory(index: number) {
    setCategoriaSelecionada(index);
  }

  function gerarFrase() {
    let numeroRandom = Math.floor(Math.random() * allFrases[categoriaSelecionada].frases.length)

    setTextFrase(` "${allFrases[categoriaSelecionada].frases[numeroRandom]}"`)
  }

  return (
    <div className="container">
      <img alt="logo frase" src={logo} className="logo" />

      <h2 className="title">Categorias</h2>

      <section className="category-area">
        {allFrases.map((item, index) => (
          <button
            key={item.id}
            className="category-button"
            style={{
              borderWidth: item.nome === allFrases[categoriaSelecionada].nome ? 1 : 0,
              borderColor: "#fff"
            }}

            onClick={ () => handleShitchCategory(index) }
            >
              {item.nome}
          </button>
        ))}
      </section>

      <button className="button-frase" onClick={gerarFrase}>Gerar frase</button>

      {textFrase !== "" && <p className="text-frase">{textFrase}</p>}
    </div>
  );
}

export default App;
