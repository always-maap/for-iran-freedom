import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Twitter from "../components/Twitter";
import IconButton from "../components/IconButton";

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

type Props = {
  randomQuote: string;
};

const Home: NextPage<Props> = (props) => {
  const { randomQuote } = props;

  return (
    <>
      <Head>
        <title>برای...</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.border}>
          <h1 className={styles.title}>{randomQuote}</h1>

          <IconButton className={styles.iconButton}>
            <Twitter />
          </IconButton>
        </div>
      </div>
    </>
  );
};

export function getServerSideProps() {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return {
    props: { randomQuote },
  };
}

export default Home;
