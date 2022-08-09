import { FC, useState, useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Asteroid.module.scss'
import { AsteroidType } from '../types';
import { StateContext } from '../contexts/stateContext';

const AsteroidMin:FC<AsteroidType> = ({id, date, name, size, distance, isDanger, distanceSort, inCart }) => {
    const dateParser = (date: string) => {
         const result = new Date(date);
        return result.toLocaleString('ru', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };
    const { cartHandler } = useContext(StateContext);
    return (
        <div className={styles.asteroid}>
            <p>{dateParser(date)}</p>
            <div className={styles.card}>
                <div>
                    <Image src={isDanger ? '/danger.png' : '/safe.png'} width="93px" height="95px" alt="safe" />
                </div>
                <div className={styles.signature}>
                    <Link href={`/asteroid/${id}`}>{`Астеройд ${name}`}</Link>
                    <p>Ø {Math.round(size.estimated_diameter_min)} - {Math.round(size.estimated_diameter_max)} м</p>
                    <p>↔ {parseInt(distance[distanceSort])} {distanceSort === 'lunar' ? 'расст. до Луны' : 'км'}</p>
                    <p>{isDanger ? 'Опасен' : 'Не опасен'}</p>
                </div>
            </div>
            <button className={inCart ? styles.active : ''} onClick={() => cartHandler(id)}>{inCart ? 'не уничтожать' : 'уничтожить'}</button>
        </div>
    )
};

export default AsteroidMin;