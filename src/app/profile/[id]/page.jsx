"use client";

import candidatesData from '../../resources/candidates.js';
import { Header, About, ContactForm, Interests } from '../../components/CandidateDetail/index.jsx';
import { useEffect, useState } from 'react';
import styles from '../../styles/CandidateDetail.module.css';
import Spinner from '../../components/Spinner/Spinner.jsx';


const CandidateDetail = ({ params }) => {

  const [candidate, setCandidate] = useState(null);

  useEffect(() => {
    //Aca  llamariamos a la api para traer los candidatos , voy a poner un timeout para mostrar un spinner si estuvieramos esperando a laDB
    setTimeout(() => {
      setCandidate(candidatesData.find(candidate => candidate.id === params.id));
    }, 500);
  }, []);



  if (!candidate) {
    return (
      <div>
        <Spinner />
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <Header name={candidate.firstName} lastName={candidate.lastName} photo={candidate.image}/>
      <About text={candidate.aboutMe}/>
      <Interests interests={candidate.interests}/>
      <ContactForm mail={candidate.email} />
    </div>
  );
};

export default CandidateDetail;
