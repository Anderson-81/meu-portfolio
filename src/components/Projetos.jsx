
import { useState, useEffect } from 'react'

import imagemFacilita from '../assets/facilita-mais-60.png'
import imagem1 from '../assets/imagem1.png'
import imagem2 from '../assets/imagem2.png'
import imagem3 from '../assets/imagem3.png'

import clinica1 from '../assets/clinica-byakugou-1.png'
import clinica2 from '../assets/clinica-byakugou-2.png'
import clinica3 from '../assets/clinica-byakugou-3.png'

const projetos = [
  {
    id: 'facilita',
    nome: 'Facilita Mais 60',
   
descricao:
  'Aplicativo voltado à inclusão digital de pessoas idosas, com tutoriais simples para ensinar a utilizar funções do smartphone e aplicativos como WhatsApp e Instagram. Também oferece orientações para identificar e evitar golpes na internet.',

    tecnologia: 'JavaScript e React Native',
    imagens: [
      imagemFacilita,
      imagem1,
      imagem2,
      imagem3
    ]
  },
  {
    id: 'clinica',
    nome: 'Clínica Byakugou',
    
descricao:
  'A Clínica Byakugou é um site de uma clínica odontológica que reúne diversas funcionalidades para facilitar e melhorar a experiência dos pacientes. Possui painel de chamadas para organizar os atendimentos, sistema de triagem, atendimento virtual, área de farmácia com informações relacionadas aos medicamentos e uma área kids voltada ao público infantil. O objetivo é oferecer um atendimento mais organizado, acessível, moderno e acolhedor.',

    imagens: [
      clinica1,
      clinica2,
      clinica3
    ]
  }
]

function CartaoProjeto({ projeto }) {
  const [imagemAtual, setImagemAtual] = useState(0)

  useEffect(() => {
    const intervalo = setInterval(() => {
      setImagemAtual((atual) =>
        (atual + 1) % projeto.imagens.length
      )
    }, 4000)

    return () => clearInterval(intervalo)
  }, [projeto.imagens.length])

  function anterior() {
    setImagemAtual((atual) =>
      (atual - 1 + projeto.imagens.length) %
      projeto.imagens.length
    )
  }

  function proxima() {
    setImagemAtual((atual) =>
      (atual + 1) % projeto.imagens.length
    )
  }

  return (
    <article className="projeto" id={projeto.id}>
      <h3>{projeto.nome}</h3>

      <div className="carrossel">
        <button
          className="seta"
          onClick={anterior}
          aria-label={`Imagem anterior de ${projeto.nome}`}
        >
          &#10094;
        </button>

        <img
          key={imagemAtual}
          src={projeto.imagens[imagemAtual]}
          alt={`${projeto.nome} - imagem ${imagemAtual + 1}`}
          className="imagem-projeto animacao-imagem"
        />

        <button
          className="seta"
          onClick={proxima}
          aria-label={`Próxima imagem de ${projeto.nome}`}
        >
          &#10095;
        </button>
      </div>

      <p className="contador-imagens">
        {imagemAtual + 1} / {projeto.imagens.length}
      </p>

      <div className="indicadores">
        {projeto.imagens.map((imagem, index) => (
          <button
            key={imagem}
            className={
              imagemAtual === index
                ? 'indicador ativo'
                : 'indicador'
            }
            onClick={() => setImagemAtual(index)}
            aria-label={`Ver imagem ${index + 1} de ${projeto.nome}`}
            aria-current={
              imagemAtual === index ? 'true' : undefined
            }
          />
        ))}
      </div>

      <p>{projeto.descricao}</p>

      <p className="tecnologias">
        <strong>Tecnologias:</strong> {projeto.tecnologia}
      </p>
    </article>
  )
}

function Projetos() {
  return (
    <section id="projetos">
      <h2>Meus projetos</h2>

      <div className="lista-projetos">
        {projetos.map((projeto) => (
          <CartaoProjeto
            key={projeto.id}
            projeto={projeto}
          />
        ))}
      </div>
    </section>
  )
}

export default Projetos
