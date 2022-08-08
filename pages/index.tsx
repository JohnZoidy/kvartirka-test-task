import type { NextPage } from 'next'
import { GetStaticProps } from 'next';
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Asteroid from '../components/Asteroid';

/*
export const getStaticProps:GetStaticProps = async () => {
  const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY');
  const data = await response.json();
  console.log(data);

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { pictureUrl: data.url },
  }
};
*/

const Home: NextPage = () => {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Earth security from fangerous asteroids" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h2>Ближайшие подлёты</h2>
        <div className={styles.sort}>
          <p>Отображать расстояние: <span className={styles.active}>в километрах</span> | <span>в лунных орбитах</span></p>
          <div className={styles.danger}>
          <input type="checkbox" name="dangerOnly" />
          <label htmlFor="dangerOnly">Показать только опасные</label>
          </div>
        </div>
      </div>
      <div className={styles.asteroids}>
      {[1, 2, 3, 4, 5, 6].map((item) => <Asteroid key={item} />)}
      </div>
    </div>
  )
}

export default Home;
