// components/Footer.jsx

import styles from "../../styles/Footer.module.css";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footerLeft}>
                    <h3>Enlaces útiles</h3>
                    <ul className={styles.footerList}>
                        <li className={styles.footerItem}><a href="/">Inicio</a></li>
                        <li className={styles.footerItem}><a href="/profile/7">Sobre el desarrollador</a></li>
                        <li className={styles.footerItem}><a href="/candidates">Candidatos</a></li>
                        <li className={styles.footerItem}><a href="#">Contacto</a></li>
                    </ul>
                </div>
                <div className={styles.footerCenter}>
                    <h3>Contacto</h3>
                    <p>Dirección: Figueroa Alcorta 1554, Mar del plata</p>
                    <p>
                        Teléfono:
                        <a
                            href="https://wa.me/2235251836"
                            style={{ color: "#fff", textDecoration: "none" }}
                        >
                             +2235251836
                        </a>
                    </p>
                    <p>Email: <a href="mailto:ivan.palachuk@outlook.com" style={{ color: "#fff", textDecoration: "none" }}>ivan.palachuk@outlook.com</a></p>
                </div>
                <div className={styles.footerRight}>
                    <h3>Seguime</h3>
                    <div className={styles.socialIcons}>
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
