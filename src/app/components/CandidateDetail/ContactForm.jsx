import React, { useState } from 'react';
import styles from '../../styles/CandidateDetail.module.css';

const ContactForm = ({ mail }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Se le va a enviar un mail a ${mail} con los siguientes datos:\n\nNombre: ${formData.name}\nEmail: ${formData.email}\nMensaje: ${formData.message}`);
    };

    return (
        <section className={`${styles.contactForm} ${styles.commonSection}`}>
            <h2>Contacto</h2>
            <form className={styles.form} onSubmit={handleSubmit}>
                <label htmlFor="name">Nombre:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className={styles.contactInput}
                    value={formData.name}
                    onChange={handleChange}
                />

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className={styles.contactInput}
                    value={formData.email}
                    onChange={handleChange}
                />

                <label htmlFor="message">Mensaje:</label>
                <textarea
                    id="message"
                    name="message"
                    required
                    className={styles.contactInput}
                    value={formData.message}
                    onChange={handleChange}
                ></textarea>

                <button type="submit" className={styles.contactFormButton}>Enviar</button>
            </form>
        </section>
    );
};

export default ContactForm;
