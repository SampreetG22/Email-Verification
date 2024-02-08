import styles from "./page.module.css";
import Button from "@mui/material/Button";
import EastIcon from "@mui/icons-material/East";
import { Snackbar } from "@mui/material";
import { useState } from "react";
import axios from "axios";

export default function SignUpPage(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [otp, setOTP] = useState("");
  const [emailTriggered, setEmailTriggered] = useState(false);
  const { otpVerified, setOTPVerified } = props;

  const sendOTP = () => {
    if (![name, email].includes("")) {
      axios({
        method: "POST",
        url: "http://localhost:5000/sendOTP",
        data: {
          email: email,
        },
      })
        .then((res) => {
          console.log(res.message);
          setEmailTriggered(true);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };
  const verifyOTP = () => {
    axios({
      method: "POST",
      url: "http://localhost:5000/verifyOTP",
      data: {
        email: email,
        OTP: otp,
      },
    })
      .then((res) => {
        console.log(res.message);
        setOTPVerified(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <>
      {!emailTriggered ? (
        <div className={styles.signUpCard}>
          <img src="./Rocket.png" alt="Rocket" />
          <h3 className={styles.createAccount}>Create your Account</h3>
          <input
            className={styles.inputBox}
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <input
            className={styles.inputBox}
            type="email"
            placeholder="Enter your email ID"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <Button
            variant="contained"
            className={styles.createButton}
            endIcon={<EastIcon />}
            onClick={sendOTP}
          >
            Continue
          </Button>
        </div>
      ) : (
        <>
          {!otpVerified ? (
            <div className={styles.signUpCard}>
              <img src="./Rocket.png" alt="Rocket" />
              <h3 className={styles.createAccount}>Create your Account</h3>
              <p className={styles.confirmationText}>
                Please verify your email ID to continue. We have sent an OTP to{" "}
                {email} Enter OTP Continue
              </p>
              <input
                className={styles.inputBox}
                type="tel"
                placeholder="Enter OTP"
                value={otp}
                onChange={(event) => setOTP(event.target.value)}
              />
              <Button
                variant="contained"
                className={styles.createButton}
                endIcon={<EastIcon />}
                onClick={verifyOTP}
              >
                Continue
              </Button>
            </div>
          ) : (
            <div className={styles.signUpCard}>
              <img src="./doneIcon.png" alt="Verified" />
              <h3 className={styles.createAccount}>
                Account Created Successfully
              </h3>
              <Button
                variant="contained"
                className={styles.createButton}
                endIcon={<EastIcon />}
              >
                Create your first post
              </Button>
            </div>
          )}
        </>
      )}
      <Snackbar></Snackbar>
    </>
  );
}
