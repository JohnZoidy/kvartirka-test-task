import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useContext, useState } from "react";
import { StateContext } from "../../contexts/stateContext";
import styles from "../../styles/Cart.module.scss";

const Cart: NextPage = () => {
  const { state, removeFromState } = useContext(StateContext);
  const [launch, setLaunch] = useState(false);
  const launchHandler = () => {
    setLaunch(true);
    setTimeout(removeFromState, 2200);
  };

  const list = state.filter((item: any) => item.inCart);
  return (
    <>
      <Head>
        <title>Cart</title>
      </Head>
      {list.length !== 0 ? (
        <>
        <h2>Список на уничтожение</h2>
        <div className={styles.dashboard}>
        <div className={launch ? styles.list_disabled : styles.list}>
          <ul>
            {list.map((item: any) => (
              <Link key={item.id} href={`/asteroid/${item.id}`}><li className={item.is_potentially_hazardous_asteroid ? styles.danger : styles.safe}><a>{item.name}</a></li></Link>
            ))}
          </ul>
          <button className={styles.btn} onClick={launchHandler}>Отправить заказ</button>
        </div>
        <div className={styles.description}>Бригада им. Брюса Уиллиса готова отправиться на выбранные астероиды.<br/>Бригада будет доставлена на астероид в нужный момент и выполнит свою нелёгкую работу.</div>
        <div className={launch ? styles.rocketship_active : styles.rocketship}/>
        </div>
        </>
      ) : (
        <div className={styles.empty}>
          <p>Список пуст. Похоже, вы ничего не выбрали для уничтожения. <Link href='/'>Сделайте это</Link>, и бригада им. Брюса Уиллиса покажет вам мастер класс!</p>
          <div className={styles.emptybg}/>
        </div>
      )}
    </>
  );
};

export default Cart;
