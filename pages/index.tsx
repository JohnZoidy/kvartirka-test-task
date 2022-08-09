import type { NextPage, GetStaticProps } from 'next'
import { useContext, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import AsteroidMin from '../components/AsteroidMin';
import { DistanceType } from '../types';
import { StateContext } from '../contexts/stateContext';
import * as dataJson from '../components/feed.json';

let today = new Date();
let todayString = new Date().toJSON().slice(0,10);

export const getStaticProps:GetStaticProps = async () => {
  /*
  const response = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${todayString}&end_date=${todayString}&api_key=DEMO_KEY`);
  const data = await response.json();
  console.log('in getStaticProps', data);

  if (data.error) {
    return {
      props: { asteroids: [] },
    }
  }
  if (!data) {
    return {
      notFound: true,
    }
  }
*/
  const data = JSON.stringify(dataJson); //tmp
  const eee = JSON.parse(data); //tmp
  return {
    props: { asteroids: eee.near_earth_objects[todayString] },
  }
};

const Home: NextPage<any> = ({ asteroids }) => {
  const { state, addToState } = useContext(StateContext);
  const [distanceSort, setDistanceSort] = useState<DistanceType>('kilometers');
  const [dangerSort, setDangerSort] = useState<boolean>(false);
  const getMoreData = async () => {
    /*
    const nextDay = today.setDate(today.getDate() + 1);
    today = new Date(nextDay);
    todayString = new Date(nextDay).toJSON().slice(0,10);
    const res = await fetch(
      `https://api.nasa.gov/neo/rest/v1/feed?start_date=${todayString}&end_date=${todayString}&api_key=DEMO_KEY`
    );
    const newData = await res.json();
    */
    const data = JSON.stringify(dataJson); //tmp
    const newData = JSON.parse(data); //tmp

    const result = newData.near_earth_objects[todayString];
    result.forEach((item: any) => item.inCart = false);
    addToState(result);
  };
  useEffect(() => {
      asteroids.forEach((item: any) => item.inCart = false);
      addToState(asteroids);
  }, []);

  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Earth security from fangerous asteroids" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <h2>Ближайшие подлёты</h2>
        <div className={styles.sort}>
          <p>Отображать расстояние: <span className={distanceSort === 'kilometers' ? styles.active : ''} onClick={() => setDistanceSort('kilometers')}>в километрах</span> | <span className={distanceSort === 'lunar' ? styles.active : ''} onClick={() => setDistanceSort('lunar')}>в лунных орбитах</span></p>
          <div className={styles.danger}>
          <input type="checkbox" name="dangerOnly" id="dangerOnly" onChange={() => setDangerSort(!dangerSort)}/>
          <label htmlFor="dangerOnly">Показать только опасные</label>
          </div>
        </div>
      <InfiniteScroll
        dataLength={state.length}
        next={getMoreData}
        hasMore={true}
        loader={<div className={styles.loader}> Загрузка...</div>}
        endMessage={<h4>Nothing more to show</h4>}
        style={{marginTop: '40px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, 288px)',
        gridTemplateRows: 'repeat(1, 1fr)',
        gridColumnGap: '32px',
        gridRowGap: '32px',
        }}
      >
      {(dangerSort ?
        state.filter((item: any) => item.is_potentially_hazardous_asteroid === true) : state)
        .map((item: any) => <AsteroidMin
        key={item.id}
        id={item.id}
        name={item.name}
        date={item.close_approach_data[0].close_approach_date}
        size={item.estimated_diameter.meters}
        distance={item.close_approach_data[0].miss_distance}
        isDanger={item.is_potentially_hazardous_asteroid}
        distanceSort={distanceSort}
        inCart={item.inCart}
        />)}
        </InfiniteScroll>
    </div>
  )
}

export default Home;
