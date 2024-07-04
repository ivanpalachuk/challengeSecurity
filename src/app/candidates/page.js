"use client";

import { useEffect, useState } from 'react';
import candidatesData from '../resources/candidates.js';
import CandidateCard from '../components/CandidateCard/CandidateCard';
import styles from '../styles/CandidateList.module.css';
import Spinner from '../components/Spinner/Spinner';

const CandidateList = () => {
    const [candidates, setCandidates] = useState(null);

    useEffect(() => {

        //El timeout es para simular el llamado a la db para la lista de candidatos
        setTimeout(() => {
            setCandidates(candidatesData);
        }, 500);
    }, []);


    if (!candidates) {
        return (
            <div>
                <Spinner />
            </div>
        )
    }

    return (

        <div className={styles.container}>
            <h1 className={styles.title}>Lista de candidatos</h1>
            <ul className={styles.list}>
                {candidates.map(candidate => (
                    <CandidateCard key={candidate.id} candidate={candidate} />
                ))}
            </ul>
        </div>

    );
}

export default CandidateList;
