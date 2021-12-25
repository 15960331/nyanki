import React from 'react';
import type { NextPage } from 'next/types';
import Head from 'next/head';
import Image from 'next/image';

import WordForm from '../components/WordForm';
import styles from '../styles/Home.module.css';

const Index: NextPage = () => (
  <div className={styles.container}>
    <Head>
      <title>Nyanki</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className={styles.main}>
      <h1 className={styles.title}>
        Welcome to Nyanki!
      </h1>
      <WordForm />
    </main>

    <footer className={styles.footer}>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by
        {' '}
        <span className={styles.logo}>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </a>
    </footer>
  </div>
);

export default Index;
