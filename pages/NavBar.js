import React from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';
import Image from 'next/image';


const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className="logo">
        <Image src="/images/logo1.png" alt="Logo" width={200} height={80} />
      </div>
      <ul className={styles.navbarItems}>
        <li>
          <Link href="/userprofile" passHref={true} legacyBehavior>
            <a className={styles.navLink}>User Profile</a>
          </Link>
        </li>
        <li>
          <Link href="/jobs" passHref={true} legacyBehavior>
            <a className={styles.navLink}>Jobs</a>
          </Link>
        </li>
        <li>
          <Link href="/saved-jobs" passHref={true} legacyBehavior>
            <a className={styles.navLink}>Saved Jobs</a>
          </Link>
        </li>
        <li className={styles.signupButton}>
          <Link href="/signup" passHref={true} legacyBehavior>
            <a>Sign out</a>
          </Link>
        </li>
        <li className={styles.signinButton}>
          <Link href="/signin" passHref={true} legacyBehavior>
            <a>Sign In</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;


