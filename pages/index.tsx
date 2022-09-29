import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const quotes = ["برای آزادانه رقصیدن تو کوچه پس کوچه های کشورم"];

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        {quotes[Math.floor(Math.random() * quotes.length)]}
      </h1>
    </div>
  );
};

export default Home;
