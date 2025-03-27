import React from 'react';
import styles from './About.module.css';

const About: React.FC = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.presentation}>
          <h1>Olá, eu sou [Seu Nome]</h1>
          <p>Desenvolvedor Full Stack</p>
          <div className={styles.description}>
            <p>Sou apaixonado por criar soluções tecnológicas inovadoras</p>
            <p>Especialista em React, Node.js e desenvolvimento de sistemas escaláveis</p>
            <p>Especialista em React, Node.js e desenvolvimento de sistemas escaláveis</p>
            <p>Especialista em React, Node.js e desenvolvimento de sistemas escaláveis</p>
            <p>Especialista em React, Node.js e desenvolvimento de sistemas escaláveis</p>
            <p>Especialista em React, Node.js e desenvolvimento de sistemas escaláveis</p>
            <p>Especialista em React, Node.js e desenvolvimento de sistemas escaláveis</p>
            <p>Especialista em React, Node.js e desenvolvimento de sistemas escaláveis</p>
            <p>+5 anos de experiência em projetos complexos</p>
          </div>
        </div>
    </section>
  );
};

export default About;