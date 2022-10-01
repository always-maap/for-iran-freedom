import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Twitter from "../components/Twitter";
import IconButton from "../components/IconButton";
import { readFile } from "fs/promises";
import path from "path";
import cn from "classnames";

type Props = {
  randomQuote: string;
};

const Home: NextPage<Props> = (props) => {
  const { randomQuote } = props;

  return (
    <>
      <Head>
        <title>برای... ایران</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="برای... ایران" />
        <meta name="twitter:description" content="برای... ایران" />
        <meta
          name="twitter:image"
          content="https://www.for-iran-freedom.com/twitter-card.png"
        />
      </Head>
      <div className={styles.wrapper}>
        <div className={styles.border}>
          <div className="container">
            <h1 className={styles.title}>برای این همه برای غیر تکراری</h1>
            <IconButton className={styles.twitterIconButton}>
              <Twitter />
            </IconButton>
          </div>
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
