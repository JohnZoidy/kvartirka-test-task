import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Earth security from fangerous asteroids" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>There is will be content</h1>
    </div>
  )
}

export default Home;
