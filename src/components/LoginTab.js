import React from 'react'
import styles from './LoginTab.module.css';

const LoginTab = () => {
    return (
        <div className={styles['login-tab']}>
            <i className='fas fa-right-to-bracket'></i>
            <span>Login</span>
        </div>
    )
}

export default LoginTab