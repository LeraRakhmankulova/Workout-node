import styles from './index.module.sass'
import back from '../../assets/reg.png'

const Registration = () => {
    return (
        <div className={styles.reg}>
            <div className={styles.reg__back}>
                <img src={back} alt="sportsman" />
            </div>
        </div>
    )
}

export default Registration