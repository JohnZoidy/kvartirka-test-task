import { FC } from 'react';
import Image from 'next/image';
import styles from '../styles/Asteroid.module.scss'

const Asteroid:FC = () => {
    return (
        <div className={styles.asteroid}>
            <p>12 сентября 2021</p>
            <div className={styles.card}>
                <div>
                    <Image src="/safe.png" width="93px" height="95px" alt="safe" />
                </div>
                <div className={styles.signature}>
                    <p>Астероид 2021 FQ</p>
                    <p>Ø 85 м</p>
                    <p>↔ 7 400 135 км</p>
                    <p>Не опасен</p>
                </div>
            </div>
            <button>уничтожить</button>
        </div>
    )
};

export default Asteroid;