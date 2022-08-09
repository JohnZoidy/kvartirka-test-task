import type { NextPage, GetServerSideProps,  } from "next";
import { useRouter } from 'next/router';
import Head from "next/head";
import { useContext } from "react";
import { StateContext } from "../../contexts/stateContext";
import Asteroid from '../../components/Asteroid';
import ErrorPage from '../404';
// import styles from "../../styles/Asteroid.module.scss";

type contactTypeProps = {
    asteroidId: string,
  }

export const getServerSideProps:GetServerSideProps = async (context) => {
    const { id } = context.params;

    return {
        props: {asteroidId: id},
    }
};

const AsteroidInfo: NextPage<contactTypeProps> = ({ asteroidId }) => {
  const router = useRouter();
  const { state } = useContext(StateContext);
  const item = state.find((item: any) => item.id === asteroidId);
  if (!item) {
    return <ErrorPage />;
  }
  return (
    <div>
      <Head>
        <title>Asteroid Info</title>
      </Head>
      <h2>Информмация об астеройде {item.name}</h2>
      <Asteroid
        id={item.id}
        name={item.name}
        date={item.close_approach_data[0].close_approach_date}
        size={item.estimated_diameter.meters}
        distance={item.close_approach_data[0].miss_distance}
        isDanger={item.is_potentially_hazardous_asteroid}
        distanceSort={'kilometers'}
        inCart={item.inCart}
      />
    </div>
  );
};

export default AsteroidInfo;