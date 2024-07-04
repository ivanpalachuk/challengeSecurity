import Link from "next/link"
import styles from "../../styles/CandidateCard.module.css"

const CandidateCard = (props) => {

    const { candidate } = props
    return (
        <Link href={`/profile/${candidate.id}`}>
            <li key={candidate.id} className={styles.item}>
                <img src={candidate.image} alt={`${candidate.firstName} ${candidate.lastName}`} className={styles.image} />
                <h2>{candidate.firstName} {candidate.lastName}</h2>
                <p>{candidate.aboutMe}</p>
                <p>Intereses: {candidate.interests.join(', ')}</p>
                <p>Email: {candidate.email}</p>
                <p>Probabilidad de conseguir trabajo: {candidate.jobChances}%</p>
            </li>
        </Link>
    )
}

export default CandidateCard