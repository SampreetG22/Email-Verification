import Button from "@mui/material/Button";
import EastIcon from "@mui/icons-material/East";
import { Link } from "react-router-dom";
import styles from "./page.module.css";
export default function LandingPage() {
  return (
    <div className={styles.landingContainer}>
      <p className={styles.indianUserOnlyText}>
        <img src="./Rocket.png" alt="rocket" />
        For Indian Users Only
      </p>
      <h1 className={styles.mainContent}>
        Start posting anonymously
        <br /> where no one will judge.{" "}
      </h1>
      <p className={styles.substituteText1}>
        Welcome to Stranger discussion forum
      </p>
      <Link to="/signup">
        <Button
          variant="contained"
          className={styles.createButton}
          endIcon={<EastIcon />}
        >
          Create an Account
        </Button>
      </Link>
      <p className={styles.substituteText2}>
        Already have account?&nbsp;
        <Link href="/signup" className={styles.linkElement}>
          Login
        </Link>
      </p>
    </div>
  );
}
