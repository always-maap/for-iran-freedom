import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const quotes = [
  "برای آزادانه رقصیدن تو کوچه پس کوچه های کشورم",
  "برای تمام روزهایی با ترس معشوقمان را در خیابان بوسیدیم",
  `برای خواهرم
خواهرت
خواهرمون`,
  "برای تغییر مغز های پوسیده",
  "برای اون پدری که شرمنده خانوادش شده و کمرش زیر بار مشکلات خم شد...🖤",
  "برای یه زندگی معمولی",
];

const Home: NextPage = () => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  return (
    <>
      <Head>
        <title>برای...</title>
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>{randomQuote}</h1>
      </div>
    </>
  );
};

export default Home;
