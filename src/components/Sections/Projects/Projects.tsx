import styles from './Projects.module.css'; // Importação correta

const Projects = () => {
  return (
    <section className={styles['projects-container']}> {/* Acesse a classe via styles */}
      <div className={styles['project-card']}> 
        <div className={styles['card-image']}>
          <img 
            src="https://placehold.co/600x400/1e293b/white?text=Meu+Projeto" 
            alt="Preview do projeto"
          />
        </div>
        <div className={styles['card-content']}>
          <h3>Calculadora Interativa</h3>
          <p>Calculadora com temas dark/light e histórico de operações, feita em React.</p>
          <div className={styles['tech-tags']}>
            <span>React</span>
            <span>TypeScript</span>
            <span>CSS Modules</span>
          </div>
          <a href="#" className={styles['demo-button']}>Ver Demo</a>
        </div>
      </div>
      <div className={styles['project-card']}> 
        <div className={styles['card-image']}>
          <img 
            src="https://placehold.co/600x400/1e293b/white?text=Meu+Projeto" 
            alt="Preview do projeto"
          />
        </div>
        <div className={styles['card-content']}>
          <h3>Calculadora Interativa</h3>
          <p>Calculadora com temas dark/light e histórico de operações, feita em React.</p>
          <div className={styles['tech-tags']}>
            <span>React</span>
            <span>TypeScript</span>
            <span>CSS Modules</span>
          </div>
          <a href="#" className={styles['demo-button']}>Ver Demo</a>
        </div>
      </div>
      <div className={styles['project-card']}> 
        <div className={styles['card-image']}>
          <img 
            src="https://placehold.co/600x400/1e293b/white?text=Meu+Projeto" 
            alt="Preview do projeto"
          />
        </div>
        <div className={styles['card-content']}>
          <h3>Calculadora Interativa</h3>
          <p>Calculadora com temas dark/light e histórico de operações, feita em React.</p>
          <div className={styles['tech-tags']}>
            <span>React</span>
            <span>TypeScript</span>
            <span>CSS Modules</span>
          </div>
          <a href="#" className={styles['demo-button']}>Ver Demo</a>
        </div>
      </div>
      <div className={styles['project-card']}> 
        <div className={styles['card-image']}>
          <img 
            src="https://placehold.co/600x400/1e293b/white?text=Meu+Projeto" 
            alt="Preview do projeto"
          />
        </div>
        <div className={styles['card-content']}>
          <h3>Calculadora Interativa</h3>
          <p>Calculadora com temas dark/light e histórico de operações, feita em React.</p>
          <div className={styles['tech-tags']}>
            <span>React</span>
            <span>TypeScript</span>
            <span>CSS Modules</span>
          </div>
          <a href="#" className={styles['demo-button']}>Ver Demo</a>
        </div>
      </div>
      <div className={styles['project-card']}> 
        <div className={styles['card-image']}>
          <img 
            src="https://placehold.co/600x400/1e293b/white?text=Meu+Projeto" 
            alt="Preview do projeto"
          />
        </div>
        <div className={styles['card-content']}>
          <h3>Calculadora Interativa</h3>
          <p>Calculadora com temas dark/light e histórico de operações, feita em React.</p>
          <div className={styles['tech-tags']}>
            <span>React</span>
            <span>TypeScript</span>
            <span>CSS Modules</span>
          </div>
          <a href="#" className={styles['demo-button']}>Ver Demo</a>
        </div>
      </div>
      <div className={styles['project-card']}> 
        <div className={styles['card-image']}>
          <img 
            src="https://placehold.co/600x400/1e293b/white?text=Meu+Projeto" 
            alt="Preview do projeto"
          />
        </div>
        <div className={styles['card-content']}>
          <h3>Calculadora Interativa</h3>
          <p>Calculadora com temas dark/light e histórico de operações, feita em React.</p>
          <div className={styles['tech-tags']}>
            <span>React</span>
            <span>TypeScript</span>
            <span>CSS Modules</span>
          </div>
          <a href="#" className={styles['demo-button']}>Ver Demo</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;