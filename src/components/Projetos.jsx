import imagemFacilita from '../assets/facilita-mais-60.png'
function Projetos() {
  const projetos = [
    {
      nome: 'Facilita Mais 60',
      descricao:
        'Aplicativo voltado à inclusão digital de pessoas idosas, com tutoriais simples para ensinar a utilizar funções do smartphone e aplicativos como WhatsApp e Instagram. Também oferece orientações para identificar e evitar golpes na internet.',
      tecnologia: 'JavaScript e React Native'
    }
  ]

  return (
    <section id="projetos">
      <h2>Meus projetos</h2>

      <div className="lista-projetos">
        {projetos.map((projeto) => (
          <div className="projeto" key={projeto.nome}>
            <img
  src={imagemFacilita}
  alt="Tela do aplicativo Facilita Mais 60"
  className="imagem-projeto"
/>
            <h3>{projeto.nome}</h3>

            <p>{projeto.descricao}</p>

            <p className="tecnologias">
              <strong>Tecnologias:</strong> {projeto.tecnologia}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projetos