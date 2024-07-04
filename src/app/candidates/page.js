"use client";

import { useEffect, useState } from 'react';
import candidatesData from '../resources/candidates.js';
import CandidateCard from '../components/CandidateCard/CandidateCard';
import styles from '../styles/CandidateList.module.css';
import Spinner from '../components/Spinner/Spinner';

const CandidateList = () => {
    const [candidates, setCandidates] = useState([]);

    useEffect(() => {
        //Aca  llamariamos a la api para traer los candidatos
        setCandidates(candidatesData);
    }, []);

    if(!candidates) {
        return <Spinner />
    }

    return (

        <div className={styles.container}>
            <h1>Lista de candidatos</h1>
            <ul className={styles.list}>
                {candidates.map(candidate => (
                    <CandidateCard key={candidate.id} candidate={candidate} />
                ))}
            </ul>
        </div>

    );
}

export default CandidateList;
