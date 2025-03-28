import styles from './Home.module.css'
import userImage from './user.svg'; // Importação correta da imagem

export default function Home() {
  return (
    <section className={styles.home}>
      <div className={styles.container}>
        {/* Container da imagem */}
        <div className={styles.imageWrapper}>
          <img 
            src={userImage} // Caminho para sua imagem
            alt="User"
            className={styles.profileImage}
          />
        </div>
        <div className={styles.presentation}>
          <h1>Olá, eu sou [Seu Nome]</h1>
          <p>Desenvolvedor Full Stack</p>
          <div className={styles.description}>
            <p>Sou apaixonado por criar soluções tecnológicas inovadoras</p>
            <p>Especialista em React, Node.js e desenvolvimento de sistemas escaláveis</p>
            <p>+5 anos de experiência em projetos complexos</p>
          </div>
            <a href="./about" className={styles['demo-button']}>Sobre</a>
        </div>
      </div>
    </section>
  )
}