import styles from '../../styles/CandidateDetail.module.css'

const Interests = ({interests}) => {
  return (
      <section className={styles.interests}>
          <h2 className={styles.interestsTitle}>Intereses</h2>
          <ul className={styles.interestsList}>
            {interests.map((interest, index) => (
              <li key={index} className={styles.interestsItem}>{interest}</li>
            ))}
          </ul>
      </section>
  )
}

export default Interests