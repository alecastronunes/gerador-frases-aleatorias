// Components
import { useState } from "react";

// Styles
import "./App.css";
import LogoImg from "./assets/logo.png";

function App() {
  const [textPhrase, setTextPhrase] = useState("");
  const [categorySelected, setCategorySelected] = useState(0);

  const allPhrase = [
    {
      id: 1,
      nome: "Motivação",
      frases: [
        "Acredite no seu potencial, mesmo quando ninguém mais acreditar.",
        "Cada passo, por menor que pareça, te aproxima do seu objetivo.",
        "O sucesso nasce do esforço diário, não da sorte.",
        "Você é mais forte do que imagina e mais capaz do que acredita.",
        "Erros são apenas degraus no caminho do aprendizado.",
        "Não espere o momento perfeito, faça do agora o seu momento.",
        "Transforme dificuldades em combustível para seguir em frente.",
        "A persistência é o que diferencia os vencedores dos desistentes.",
        "Grandes conquistas começam com pequenas atitudes.",
        "Desistir não é uma opção para quem tem um propósito claro.",
        "Acredite: você nasceu para realizar coisas incríveis.",
        "Todo dia é uma nova oportunidade para recomeçar.",
        "O medo é natural, mas a coragem é uma escolha.",
        "Seja mais forte do que sua melhor desculpa.",
        "Trabalhe em silêncio, e deixe o sucesso fazer o barulho.",
        "Não é sobre velocidade, é sobre constância.",
        "A jornada pode ser longa, mas o destino vale a pena.",
        "Sonhar grande dá o mesmo trabalho que sonhar pequeno.",
        "A vitória é o resultado de 1% de inspiração e 99% de transpiração.",
        "Você não precisa ser perfeito, apenas melhor do que ontem.",
        "Acredite na sua caminhada, mesmo quando o caminho parecer incerto.",
        "Desafios são oportunidades disfarçadas de dificuldades.",
        "Seja o tipo de pessoa que não desiste fácil.",
        "A motivação te faz começar, o hábito te faz continuar.",
        "A vida recompensa quem se esforça, não quem apenas deseja.",
        "Pare de duvidar e comece a agir.",
        "A determinação é o primeiro passo para qualquer conquista.",
        "Os limites existem apenas na sua mente.",
        "Nunca é tarde para se tornar quem você quer ser.",
        "Quem acredita, alcança.",
        "Acredite mais, reclame menos.",
        "Faça hoje o que muitos deixam para amanhã.",
        "Você não precisa ver toda a escada, apenas o primeiro degrau.",
        "Nada muda se você não mudar.",
        "A força de vontade supera qualquer obstáculo.",
        "Um dia você vai agradecer por não ter desistido.",
        "A disciplina é o caminho mais curto até o sucesso.",
        "Seja grato pelo progresso, por menor que ele pareça.",
        "Sonhe, acredite e realize.",
        "A cada queda, levante-se com mais sabedoria.",
        "Se você pode imaginar, pode conquistar.",
        "O esforço de hoje é o sucesso de amanhã.",
        "Não pare até se orgulhar do que conquistou.",
        "Você é o único responsável pelo seu próprio sucesso.",
        "As grandes vitórias começam com pequenas decisões.",
        "Coragem não é ausência de medo, é seguir apesar dele.",
        "Transforme o ‘não consigo’ em ‘vou tentar’.",
        "Acredite no processo, confie na jornada.",
        "O futuro pertence a quem nunca para de tentar.",
        "Nada é impossível para quem tem determinação.",
      ],
    },
    {
      id: 2,
      nome: "Bem estar",
      frases: [
        "Cuide da sua mente com o mesmo carinho que cuida do seu corpo.",
        "Respire fundo, desacelere e viva o presente.",
        "A paz interior começa quando você decide não permitir que os outros controlem suas emoções.",
        "Pequenos momentos de calma fazem grandes diferenças no seu dia.",
        "Sorrir é o primeiro passo para transformar um dia comum em um dia especial.",
        "O bem-estar começa quando você se escolhe todos os dias.",
        "O silêncio também é uma forma de autocuidado.",
        "Permita-se descansar sem culpa.",
        "Seja gentil consigo mesmo, você está fazendo o seu melhor.",
        "Cuidar de si é um ato de amor próprio.",
        "A felicidade está nas coisas simples e nos momentos tranquilos.",
        "Você não precisa ter tudo sob controle para estar em paz.",
        "Escute o seu corpo, ele fala quando precisa de atenção.",
        "Faça mais do que te faz sorrir e menos do que te pesa.",
        "A calma é uma superpotência que todos podemos desenvolver.",
        "Desconectar-se do mundo às vezes é a melhor forma de se reconectar consigo mesmo.",
        "Um coração leve faz a vida fluir com mais harmonia.",
        "Paz não é ausência de problemas, mas serenidade diante deles.",
        "O equilíbrio é a chave para o verdadeiro bem-estar.",
        "Alimente sua mente com bons pensamentos todos os dias.",
        "A gratidão transforma dias comuns em bênçãos extraordinárias.",
        "Ser gentil com os outros começa sendo gentil consigo mesmo.",
        "Durma bem, respire fundo e recomece com leveza.",
        "Cuide das suas emoções com o mesmo carinho que cuida das suas metas.",
        "Nada floresce sem descanso, inclusive você.",
        "Respire. Tudo o que é seu encontrará um caminho até você.",
        "A tranquilidade é o melhor presente que você pode se dar.",
        "Ser leve é uma escolha que começa dentro da mente.",
        "Aprenda a pausar, não a desistir.",
        "A saúde emocional é o alicerce do verdadeiro sucesso.",
        "Valorize o agora, porque ele nunca mais se repetirá.",
        "Às vezes, o melhor remédio é um pouco de silêncio e um bom café.",
        "Cuidar do seu bem-estar é cuidar de quem você ama também.",
        "Não se cobre tanto, o que é seu está a caminho.",
        "Dê a si mesmo a mesma atenção que dá às suas responsabilidades.",
        "Seu corpo é sua casa: cuide dele com amor.",
        "A serenidade é a arte de permanecer calmo mesmo nas tempestades.",
        "Você não precisa correr o tempo todo, a vida também é feita de pausas.",
        "Cultive bons pensamentos e verá florescer boas atitudes.",
        "Uma mente tranquila é o melhor lugar para se estar.",
        "O segredo do bem-estar é aprender a apreciar o simples.",
        "O descanso também faz parte do progresso.",
        "Desacelerar não é perder tempo, é ganhá-lo de volta.",
        "Sinta o sol, ouça o vento e agradeça pela vida.",
        "Permita-se ser imperfeito e humano.",
        "A gentileza é contagiosa — espalhe-a todos os dias.",
        "A leveza não está no mundo, está dentro de você.",
        "Cuidar de si é uma forma de dizer ao mundo: ‘eu mereço estar bem’.",
        "Nada é mais valioso do que um coração em paz.",
        "O bem-estar começa quando você escolhe se ouvir.",
      ],
    },
  ];

  function handleSwitchCategory(index: number) {
    setCategorySelected(index);
  }

  function handlePhrase() {
    const indexNumber = Math.floor(
      Math.random() * allPhrase[categorySelected].frases.length
    );
    setTextPhrase(`"${allPhrase[categorySelected].frases[indexNumber]}"`);
  }

  return (
    <div className="container">
      <img className="logo" src={LogoImg} alt="Logo frases" />

      <h2 className="title">Categorias</h2>

      <section className="category-area">
        {allPhrase.map((item, index) => (
          <button
            key={item.id}
            className="category-button"
            style={{
              borderWidth:
                item.nome === allPhrase[categorySelected].nome ? 2 : 0,
              borderColor: "#333",
            }}
            onClick={() => handleSwitchCategory(index)}
          >
            {item.nome.toLocaleUpperCase()}
          </button>
        ))}
      </section>

      <button className="button-frase" onClick={handlePhrase}>
        Gerar Frase
      </button>

      {textPhrase !== "" && <h3 className="textoFrase">{textPhrase}</h3>}
    </div>
  );
}

export default App;
