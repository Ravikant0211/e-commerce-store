import React from 'react'

import styles from './Options.module.css';

import Button from './Button';

const Options = props => {

  const optionHandler = (id) => {
    props.filterData(id);
  }

  return (
    <div className={`${styles.option}`}>
      <Button id="all" className={styles.opt} onClick={optionHandler}> All </Button>
      <Button id="men's clothing" className={styles.opt} onClick={optionHandler}> Men's Clothing </Button>
      <Button id="women's clothing" className={styles.opt} onClick={optionHandler}> Women's Clothing </Button>
      <Button id="jewelery" className={styles.opt} onClick={optionHandler}> Jewelery </Button>
      <Button id="electronics" className={styles.opt} onClick={optionHandler}> Electronics </Button>
    </div>
  )
}

export default Options;