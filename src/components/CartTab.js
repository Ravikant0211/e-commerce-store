import React from 'react'

import styles from './CartTab.module.css';

const CartTab = () => {
  return (
    <div className={styles['cart-tab']}>
        <i className='fas fa-cart-shopping'></i>
        <span>Cart (0)</span>
    </div>
  )
}

export default CartTab;