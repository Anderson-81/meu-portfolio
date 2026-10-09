function Habilidades() {
  const habilidades = [
    'JavaScript',
    'React',
    'HTML',
    'CSS',
    'Python',
    'Git'
  ]

  
return (
  <section id="habilidades">
    <h2>Minhas habilidades em desenvolvimento</h2>

    <div className="lista-habilidades">
      {habilidades.map((habilidade) => (
        <div className="cartao-habilidade" key={habilidade}>
          {habilidade}
        </div>
      ))}
    </div>
  </section>
)
}

export default Habilidades