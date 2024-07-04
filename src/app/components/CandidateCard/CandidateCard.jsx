import Link from "next/link"
import styles from "../../styles/CandidateCard.module.css"

const CandidateCard = (props) => {

    const { candidate } = props
    return (
        <Link href={`/profile/${candidate.id}`} style={{ textDecoration: 'none' }}>
            <li key={candidate.id} className={styles.item}>
                <img src={candidate.image ? candidate.image : 'avatar-boy-svgrepo-com.svg'} alt={`${candidate.firstName} ${candidate.lastName}`} className={styles.image} />
                <h2 className={styles.name}>{candidate.firstName} {candidate.lastName}</h2>
                <p className={styles.about}>{candidate.aboutMe}</p>
                <p className={styles.interests}>Intereses: {candidate.interests.join(', ')}</p>
                <p className={styles.email}>Email: {candidate.email}</p>
                <p className={styles.chances}><b>Probabilidad de conseguir el puesto:</b> <span className={styles.chance}>{candidate.jobChances}%</span></p>
            </li>
        </Link>
    )
}

export default CandidateCard