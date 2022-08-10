import type { NextPage, GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { useContext } from "react";
import { StateContext } from "../../contexts/stateContext";
import Asteroid from '../../components/Asteroid';
import ErrorPage from '../404';
import { AsteroidType } from "../../misc/types";
import styles from "../../styles/Asteroid.module.scss";

type contactTypeProps = {
    asteroidId: string,
  }

export const getServerSideProps:GetServerSideProps = async (context) => {
    return {
        props: {asteroidId: context.params?.id},
    }
};

const AsteroidInfo: NextPage<contactTypeProps> = ({ asteroidId }) => {
  const { state } = useContext(StateContext);
  const item = state.find((item: AsteroidType) => item.id === asteroidId);
  if (!item) {
    return <ErrorPage />;
  }
  return (
    <>
      <Head>
        <title>Asteroid Info</title>
      </Head>
      <h2>Информмация об астеройде {item.name}</h2>
      <Asteroid {...item}/>
    </>
  );
};

export default AsteroidInfo;