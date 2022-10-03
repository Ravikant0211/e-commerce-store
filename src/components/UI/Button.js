import React from 'react'

import styles from './Button.module.css';

const Button = (props) => {
  
  const clickHandler = (event) => {
    props.onClick(event.target.id);
  }

  return <button
    id={props.id}
    className={`${styles.btn} ${props.className}`}
    onClick={clickHandler}
  >
    {props.children}
  </button>
}

export default Button;