import styles from './page.module.css'
import HomeScreen from './components/HomeScreen'

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <HomeScreen />
      </main>
      <footer></footer>
    </div>
  )
}
