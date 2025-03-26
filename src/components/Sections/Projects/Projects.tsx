const Projects = () => {
  return (
    <section className="projects-container">
      <div className="project-card">
        <div className="card-image">
          <img 
            src="https://placehold.co/600x400/1e293b/white?text=Meu+Projeto" 
            alt="Preview do projeto"
          />
        </div>
        <div className="card-content">
          <h3>Calculadora Interativa</h3>
          <p>Calculadora com temas dark/light e histórico de operações, feita em React.</p>
          <div className="tech-tags">
            <span>React</span>
            <span>TypeScript</span>
            <span>CSS Modules</span>
          </div>
          <a href="#" className="demo-button">Ver Demo</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;