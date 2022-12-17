import React, { useState } from "react";
import styles from "./Home.module.css";
import picture from "../assets/picture.jpg";
import Register from "./Register";
import Login from "./Login";

const Home = () => {
  const [signUp, setSignUp] = useState(false);
  const [signIn, setSignIn] = useState(false);

  const singUpHandler = () => {
    setSignIn(false);
    setSignUp(true);
  };

  const signInHandler = () => {
    setSignUp(false);
    setSignIn(true);
  };

  return (
    <div className={styles["home-page"]}>
      <div className={styles.texts}>
        <div className={styles.text}>
          <h1>NEW SEASON ARRIVAL</h1>
          <p>Check Out All New Trends</p>
          <button onClick={singUpHandler} className={styles.btn}>
            Continue Shopping...
          </button>
        </div>
      </div>
      <div className={styles["div-img"]}>
        <img src={picture} alt="Girl wearing new costumes" />
      </div>
      {signUp && <Register signIn={signInHandler} />}
      {signIn && <Login signUp={singUpHandler} />}
    </div>
  );
};

export default Home;
