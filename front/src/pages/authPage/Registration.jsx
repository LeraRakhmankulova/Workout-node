import styles from './index.module.sass'
import back from '../../assets/reg.png'

const Registration = () => {
    return (
        <div className={styles.reg}>
            <div className={styles.reg__info}>
                <div className={styles.reg__back}>
                    <img src={back} alt="sportsman" />
                </div>
                <ul className={styles.reg__head}>
                    <li>Login</li>
                    <li>Sign up</li>
                </ul>
            </div>
            <div>
                <div>
                    <input />
                </div>
            </div>
        </div>
    )
}

export default Registration