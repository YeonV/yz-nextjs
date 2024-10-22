import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image className={styles.logo} src='/next.svg' alt='Next.js logo' width={180} height={38} priority />
        <ol>
          <li>EXAMPLE_A: {process.env.EXAMPLE_A}</li>
          <li>EXAMPLE_B: {process.env.EXAMPLE_B}</li>
          <li>NEXT_PUBLIC_EXAMPLE_1: {process.env.NEXT_PUBLIC_EXAMPLE_1}</li>
          <li>NEXT_PUBLIC_EXAMPLE_2: {process.env.NEXT_PUBLIC_EXAMPLE_2}</li>
        </ol>
      </main>
      <footer></footer>
    </div>
  )
}
