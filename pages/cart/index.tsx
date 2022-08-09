import type { NextPage } from "next";
import Head from "next/head";
import { useContext } from "react";
import { StateContext } from "../../contexts/stateContext";
import styles from "../../styles/Cart.module.scss";

const Cart: NextPage = () => {
  /*
              {state
            .filter((item: any) => item.inCart)
            .map((item: any) => (
              <p key={item.id}>{item.name}</p>
            ))}
    */
  const { state, removeFromState } = useContext(StateContext);
  const list = state.filter((item: any) => item.inCart);
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Cart</title>
      </Head>
      <h2>Список на уничтожение</h2>
      {list.length !== 0 ? (
        <div className={styles.dashboard}>
          <ul>
            {list.map((item: any) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
          <div></div>
          <button onClick={() => removeFromState()}>Отправить заказ</button>
        </div>
      ) : (
        <div className={styles.dashboard}>Список пуст</div>
      )}
    </div>
  );
};

export default Cart;
