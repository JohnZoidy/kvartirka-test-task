import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
// import styles from "../styles/404.module.scss";

const ErrorPage = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, [router]);

  return (
    <div>
      <Head>
        <title>404 page not found</title>
      </Head>
      <div>
        <h1>404</h1>
        <h2>Something is going wrong...</h2> 
      </div>
    </div>
  )
};

export default ErrorPage;