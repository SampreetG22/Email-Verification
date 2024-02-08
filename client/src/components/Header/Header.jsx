import styles from "./Header.module.css";
import { useState } from "react";
export default function Header({ otpVerified }) {
  const [username, setUsername] = useState("Sampreet");
  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.logoAndTitleContainer}>
          <img src="/Logo.png" className={styles.headerLogo} alt="logo" />
          <h3 className={styles.headerTitle}>ANONYMOUS</h3>
        </div>
        {otpVerified && (
          <p className={styles.welcomeText}>Welcome, {username}</p>
        )}
      </div>
    </>
  );
}
