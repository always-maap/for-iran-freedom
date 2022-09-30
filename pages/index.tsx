import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Twitter from "../components/Twitter";
import IconButton from "../components/IconButton";
import { readFile } from "fs/promises";
import path from "path";

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

          <IconButton className={styles.twitterIconButton}>
            <Twitter />
          </IconButton>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const barayePath = path.join(process.cwd(), "data", "baraye.csv");
  const quotesCsv = await readFile(barayePath, "utf-8");
  const barayeJson = quotesCsv.split("\n").map((quote) => quote.split(","));

  const randomQuote = barayeJson[Math.floor(Math.random() * barayeJson.length)];

  return {
    props: { randomQuote },
  };
}

export default Home;
