import styles from './index.module.sass'
import back from '../../assets/login.png'

const Login = () => {
    return (
        <div className={styles.login}>
            <div className={styles.login__back}>
                <img src={back} alt="sportsman" />
            </div>
        </div>
    )
}

export default Login