import './App.css'
import minhaFoto from './assets/foto-anderson.png'
import Header from './components/Header'
import Sobre from './components/Sobre'
import Habilidades from './components/Habilidades'
import Projetos from './components/Projetos'

function App() {
  return (
    <div>
      <Header />

      <main>
       
      <section className="inicio">
        <img src={minhaFoto} alt="Foto de Anderson" />

        <div className="texto-inicio">
          <h2>Olá, eu sou Anderson!</h2>

          <p>
            Estou estudando programação e desenvolvendo minhas habilidades
            em desenvolvimento web.
          </p>

          <a href="#projetos" className="botao">Ver meus projetos</a>
          <a
            href="mailto:andersondasilvasar@gmail.com"
            className="botao-contato"
          >
            Entrar em contato
          </a>
          

<a
  href="https://github.com/Anderson-81"
  target="_blank"
  rel="noopener noreferrer"
  className="botao"
>
  Meu GitHub
</a>
        </div>
      </section>
    

        <Sobre />

        <Habilidades />

        <Projetos />
      </main>
    </div>
  )
}

export default App