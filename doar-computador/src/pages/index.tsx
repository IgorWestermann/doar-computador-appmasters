import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import ApiStatus from '../components/ApiStatus/index'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Doar Computadores App Masters</title>
        <meta name="description" content="Doar computadores App Masters" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={styles.main}>
        <ApiStatus />
      </main>
          
    </div>
  )
}
