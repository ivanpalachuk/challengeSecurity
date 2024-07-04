import style from '../../styles/Header.module.css'
import Image from 'next/image'

const Header = ({ name, lastName, photo }) => {
    return (
        <div className={style.headerDiv}>
            <div className={style.headerContainer}>
                <Image
                    src={photo ? photo : `/avatar-boy-svgrepo-com.svg`}
                    alt={`${name} ${lastName}`}
                    width={250}
                    height={250}
                    className={style.profileImg} />
                <h1>{name} {lastName}</h1>
            </div>
        </div>
    )
}

export default Header
