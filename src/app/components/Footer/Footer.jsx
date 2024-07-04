// components/Footer.jsx

import styles from "../../styles/Footer.module.css";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footerLeft}>
                    <h3>Enlaces útiles</h3>
                    <ul>
                        <li><a href="/">Inicio</a></li>
                        <li><a href="/profile/7">Sobre nosotros</a></li>
                        <li><a href="#">Servicios</a></li>
                        <li><a href="#">Contacto</a></li>
                    </ul>
                </div>
                <div className={styles.footerCenter}>
                    <h3>Contacto</h3>
                    <p>Dirección: Figueroa Alcorta 1554, Mar del plata</p>
                    <p>Teléfono: +2235251836 </p>
                    <p>Email: ivan.palachuk@outlook.com</p>
                </div>
                <div className={styles.footerRight}>
                    <h3>Síguenos</h3>
                    <div className={styles.socialIcons}>
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="https://www.linkedin.com/in/ivan-palachuk-frontend"><Image src={"/linkedin-color-svgrepo-com.svg"} alt="logo" width={30} height={30} /></a>
                    </div>
                </div>
            </div>
            <div className={styles.footerBottom}>
                <p>&copy; 2024 Challenge Security and Sistem.</p>
            </div>
        </footer>
    );
}

export default Footer;
