import React from 'react';
import styles from './Home.module.css';
import picture from '../assets/picture.jpg';

const Home = () => {
  return (
    <div className={styles['home-page']}>
      <div className={styles.texts}>
        <div className={styles.text}>
          <h1>NEW SEASON ARRIVAL</h1>
          <p>Check Out All New Trends</p>
          <button className={styles.btn}>Continue Shopping...</button>
        </div>
      </div>
      <div className={styles['div-img']}>
        <img src={picture} alt="Girl wearing new costumes" />
      </div>
    </div>
  )
}

export default Home;