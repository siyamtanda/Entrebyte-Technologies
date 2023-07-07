import Head from 'next/head';
import homeStyles from '../styles/Home.module.css';
import React from 'react';
import Link from 'next/link';
import Navbar from './NavBar';
import backgroundStyles from '../styles/backgroundAnimations.module.css';
import Footer from './Footer';

// index.js

/**const { connect } = require('./db');

connect()
  .then(() => {
    // Start your application
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  }); **/


export default function Home() {
  return (
    <div>
      <Head>
        <title>My App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      
      <div className={backgroundStyles.backgroundAnimation}>
           {/* Your animated background content */}
      </div>
      <main className={homeStyles.container}>
        <h6 className={homeStyles.title}>Gateway to Opportunities!</h6>
        <p className={homeStyles.description}>Welcome to Gateway to Opportunities, the ultimate recruitment hub that connects talented individuals with their dream careers. Our platform is designed to streamline the job search process, providing you with a user-friendly interface and access to a vast array of job listings from diverse industries.</p>

        <div className={backgroundStyles.backgroundAnimation}>
          {/* Your animated background content */}
        </div>

        <Link href="/jobs"  passHref={true} legacyBehavior>
          <a className={homeStyles.link}>Go to Jobs</a>
        </Link>
      </main>

      <footer className={homeStyles.footer}>
        {/* Footer content */}
      </footer>
    </div>
  );
}

