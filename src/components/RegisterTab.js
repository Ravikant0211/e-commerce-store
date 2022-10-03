import React from 'react'

import styles from './RegisterTab.module.css';

const RegisterTab = () => {
    return (
        <div className={styles['register-tab']}>
            <i className='fas fa-user-plus'></i>
            <span>Register</span>
        </div>
    )
}

export default RegisterTab