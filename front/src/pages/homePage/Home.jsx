import styles from './index.module.sass'
import logo from '../../assets/logo.svg'

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.home__name}>
        <div className={styles.home__logo}>
        <img src={logo} alt="logo"/>
        </div>
        <h1>Dev muscles</h1>
      </div>
    </div>
  )
}

export default Home