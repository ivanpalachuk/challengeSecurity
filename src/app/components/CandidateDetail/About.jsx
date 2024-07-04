import styles from '../../styles/CandidateDetail.module.css'
const About = ({text}) => {
  return (
    <section className={styles.aboutMe}>
      <h2 className={styles.About}>Sobre mí</h2>
      <p>{text}</p>
    </section>
  )
}

export default About